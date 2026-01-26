const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function (event) {
  try {
    // Allow POST only
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const body = JSON.parse(event.body || "{}");
    const question = body.question;

    if (!question) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Question is required" }),
      };
    }

    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing GEMINI_API_KEY" }),
      };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "models/gemini-flash-latest",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.6,
      },
    });

    const prompt = `
You are an expert luxury travel advisor AI for a premium travel website.

MANDATORY RULES:
- Answer ONLY travel-related questions.
- If unsure, say so clearly.
- NEVER hallucinate facts or prices.
- Avoid nightlife, bars, clubs, gambling.
- Prefer ethical, family-friendly, cultural, nature, and luxury travel.
- Use evergreen knowledge only.

FORMAT RULES:
- Output ONLY valid JSON.
- Do NOT use markdown.
- Do NOT add extra text.
- Use clean semantic HTML.

JSON STRUCTURE:
{
  "video": { "title": "", "youtube_query": "" },
  "answer_html": "",
  "related_guides": [
    { "title": "", "image": "", "url": "" }
  ]
}

User question:
"${question}"
`;

    const result = await model.generateContent(prompt);
    const jsonText = result.response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: jsonText,
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
