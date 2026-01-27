const { GoogleGenerativeAI } = require("@google/generative-ai");
// const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

// const store = getStore("ai-cache");

function normalizeQuestion(q) {
  return q.toLowerCase().replace(/\s+/g, " ").trim();
}

function hashKey(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

exports.handler = async function (event) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { question } = JSON.parse(event.body || "{}");
    if (!question || question.length < 6) {
      return { statusCode: 400, body: "Invalid question" };
    }

    const normalized = normalizeQuestion(question);
    const cacheKey = hashKey(normalized);

    /* ===== CACHE CHECK ===== */
    // const cached = await store.get(cacheKey, { type: "json" });
    if (cached) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...cached, cached: true }),
      };
    }

    /* ===== ENV GUARD ===== */
    const { GEMINI_API_KEY, YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
    if (!GEMINI_API_KEY || !YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
      throw new Error("Missing environment variables");
    }

    /* ===== GEMINI ===== */
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
"${normalized}"
`;

    const aiResult = await model.generateContent(prompt);
    const aiData = JSON.parse(aiResult.response.text());

    /* ===== YOUTUBE (CHANNEL ONLY) ===== */
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

    const responsePayload = {
      video,
      answer_html: aiData.answer_html,
      related_guides: aiData.related_guides || [],
    };

    /* ===== SAVE TO CACHE ===== */
    // await store.set(cacheKey, responsePayload, {
    //   metadata: { question: normalized },
    // });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(responsePayload),
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
