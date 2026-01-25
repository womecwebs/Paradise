import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const question = body.question;

    if (!question) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Question is required" }),
      };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are a professional travel advisor AI.

Rules:
- Return ONLY valid JSON.
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

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return {
      statusCode: 200,
      body: text,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "AI failed" }),
    };
  }
}
