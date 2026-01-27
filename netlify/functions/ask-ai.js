const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function (event) {
  try {
    /* ===== METHOD GUARD ===== */
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    /* ===== INPUT GUARD ===== */
    const body = JSON.parse(event.body || "{}");
    const question = body.question?.trim();

    if (!question || question.length < 6) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid question" }),
      };
    }

    /* ===== ENV GUARD ===== */
    const { GEMINI_API_KEY, YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;

    if (!GEMINI_API_KEY || !YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server configuration error" }),
      };
    }

    /* ===== GEMINI INIT ===== */
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "models/gemini-flash-latest",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.4,
      },
    });

    /* ===== AI PROMPT (STRICT) ===== */
    const prompt = `
You are Paradise AI, a professional luxury travel advisor.

STRICT RULES:
- NO nightlife, alcohol, clubs, gambling
- NO guessing or hallucination
- NO markdown
- NO emojis
- NO affiliate language
- Family-safe, luxury-only

CONTENT STYLE:
- Calm, expert, trustworthy tone
- Luxury-focused, family-safe
- High-end experiences only
- Clear, factual, helpful

OUTPUT REQUIREMENTS:
- Return ONLY valid JSON
- Do NOT add extra keys
- Use clean semantic HTML (<p>, <h3>, <ul>, <li>)
- All links must be realistic (example.com allowed)
- Recommend premium destinations only


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

If no relevant video exists, set "video_query" to empty string.

USER QUESTION:
"${question}"
`;

    const aiResult = await model.generateContent(prompt);
    const aiText = aiResult.response.text();

    let aiData;
    try {
      aiData = JSON.parse(aiText);
    } catch {
      throw new Error("AI returned invalid JSON");
    }

    /* ===== YOUTUBE LOOKUP (CHANNEL ONLY) ===== */
    let video = null;

    if (aiData.video_query) {
      const ytRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?` +
          new URLSearchParams({
            key: YOUTUBE_API_KEY,
            channelId: YOUTUBE_CHANNEL_ID,
            part: "snippet",
            q: aiData.video_query,
            maxResults: 1,
            type: "video",
            safeSearch: "strict",
          }),
      );

      const ytData = await ytRes.json();

      if (ytData.items && ytData.items.length > 0) {
        const v = ytData.items[0];
        video = {
          videoId: v.id.videoId,
          title: v.snippet.title,
        };
      }
    }

    /* ===== FINAL RESPONSE ===== */
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        video, // null OR { videoId, title }
        answer_html: aiData.answer_html,
        related_guides: Array.isArray(aiData.related_guides)
          ? aiData.related_guides
          : [],
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
