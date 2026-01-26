const { GoogleGenerativeAI } = require("@google/genai");

exports.handler = async function (event) {
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

    const genAI = new GoogleGenerativeAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const prompt = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are a professional travel advisor AI.

Return ONLY valid JSON in this exact format:
{
  "video": { "title": "", "youtube_query": "" },
  "answer_html": "",
  "related_guides": [
    { "title": "", "image": "", "url": "" }
  ]
}

User question:
"${question}"
              `,
            },
          ],
        },
      ],
    };

    const result = await model.generateContent(prompt);
    const json = JSON.parse(result.response.text());

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
