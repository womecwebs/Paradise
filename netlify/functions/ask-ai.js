const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  try {
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

    // ✅ Correct constructor
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // ✅ Best model for Netlify + JSON
    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro",
      generationConfig: {
        temperature: 0.4,
      },
    });

    const prompt = `
Return ONLY valid JSON. No markdown. No explanations.

Format:
{
  "video": { "title": "", "youtube_query": "" },
  "answer_html": "",
  "related_guides": [
    { "title": "", "image": "", "url": "" }
  ]
}

Question:
"${question}"
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // 🔒 Final safety validation
    const json = JSON.parse(text);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
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
