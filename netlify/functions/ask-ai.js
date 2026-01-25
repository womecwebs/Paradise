const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function (event) {
  try {
    // Parse request body
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

    // Init Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
    });

    // Prompt
    const prompt = `
You are a professional travel advisor AI.

Rules:
- Return ONLY valid JSON.
- Do NOT wrap JSON in markdown.
- Use clean HTML.
- Embed 3–5 affiliate links naturally.
- Be honest and accurate.

Output format:
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

    // Generate
    const result = await model.generateContent(prompt);
    let text = result.response.text();

    // Clean markdown if AI adds it anyway
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Validate JSON
    let json;
    try {
      json = JSON.parse(text);
    } catch (err) {
      console.error("Invalid JSON from AI:", text);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Invalid AI JSON format" }),
      };
    }

    // Success
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
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
