const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function (event) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { question } = JSON.parse(event.body || "{}");
    if (!question || question.length < 6) {
      return { statusCode: 400, body: "Invalid question" };
    }

    const { GEMINI_API_KEY, YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
    if (!GEMINI_API_KEY || !YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
      throw new Error("Missing environment variables");
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "models/gemini-flash-latest",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.4,
      },
    });

    const prompt = `
You are Paradise AI, a professional luxury travel advisor.

STRICT RULES:
- NO nightlife, alcohol, clubs, gambling
- NO guessing or hallucination
- NO markdown
- NO emojis
- Family-safe, luxury-only

OUTPUT:
Return ONLY valid JSON.

JSON FORMAT:
{
  "video_query": "",
  "answer_html": "",
  "related_guides": [
    { "title": "", "image": "", "url": "" }
  ]
}

USER QUESTION:
"${question}"
`;

    const aiResult = await model.generateContent(prompt);
    const aiData = JSON.parse(aiResult.response.text());

    let video = null;

    if (aiData.video_query) {
      const ytRes = await fetch(
        "https://www.googleapis.com/youtube/v3/search?" +
          new URLSearchParams({
            key: YOUTUBE_API_KEY,
            channelId: YOUTUBE_CHANNEL_ID,
            q: aiData.video_query,
            part: "snippet",
            maxResults: 1,
            type: "video",
            safeSearch: "strict",
          }),
      );

      const yt = await ytRes.json();
      if (yt.items?.length) {
        video = {
          videoId: yt.items[0].id.videoId,
          title: yt.items[0].snippet.title,
        };
      }
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        video,
        answer_html: aiData.answer_html,
        related_guides: aiData.related_guides || [],
      }),
    };
  } catch (error) {
    console.error("AI ERROR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "AI failed",
        details: error.message,
      }),
    };
  }
};
