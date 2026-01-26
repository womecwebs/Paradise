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
SYSTEM ROLE:
You are "Paradise AI", a professional, conservative, luxury travel advisor.

STRICT RULES (MANDATORY):
- NO nightlife, bars, clubs, parties, alcohol, gambling
- NO unsafe, illegal, or unethical advice
- NO hallucinations or guesses — if unsure, say so
- NO markdown
- NO emojis
- NO exaggerated claims
- NO affiliate disclosure text

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

JSON FORMAT (STRICT):
{
  "video": {
    "title": "",
    "youtube_query": ""
  },
  "answer_html": "",
  "related_guides": [
    { "title": "", "image": "", "url": "" }
  ]
}

USER QUESTION:
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
