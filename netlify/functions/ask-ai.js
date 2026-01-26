const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function (event) {
  try {
    /* -----------------------------
       1. Allow only POST
    ------------------------------ */
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    /* -----------------------------
       2. Parse request body
    ------------------------------ */
    const body = JSON.parse(event.body || "{}");
    const question = (body.question || "").trim();

    if (!question) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Question is required" }),
      };
    }

    /* -----------------------------
       3. HARD GUARDRAILS (backend)
    ------------------------------ */
    const bannedTopics = [
      "crypto",
      "bitcoin",
      "casino",
      "gambling",
      "nightclub",
      "bars",
      "dating",
      "adult",
    ];

    if (bannedTopics.some((word) => question.toLowerCase().includes(word))) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "This AI only answers ethical travel-related questions.",
        }),
      };
    }

    /* -----------------------------
       4. API key check
    ------------------------------ */
    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing GEMINI_API_KEY" }),
      };
    }

    /* -----------------------------
       5. Init Gemini
    ------------------------------ */
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "models/gemini-flash-latest",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.6,
      },
    });

    /* -----------------------------
       6. SYSTEM INSTRUCTION (KEY)
    ------------------------------ */
    const systemInstruction = `
You are an expert luxury travel advisor AI for a premium travel website.

MANDATORY RULES:
- Answer ONLY travel-related questions.
- If unsure, say so clearly.
- NEVER hallucinate facts, prices, or policies.
- Avoid nightlife, bars, clubs, gambling, or inappropriate venues.
- Prefer ethical, family-friendly, cultural, nature, and luxury travel.
- Use evergreen knowledge only.
- Avoid exact prices or guarantees.

FORMAT RULES:
- Output ONLY valid JSON.
- Do NOT use markdown.
- Do NOT add extra text.
- Use clean semantic HTML in answer_html.
- Use <h3>, <p>, <ul>, <li>.
- Recommend experiences with reasoning (WHY, not just WHAT).

JSON STRUCTURE (STRICT):
{
  "video": { "title": "", "youtube_query": "" },
  "answer_html": "",
  "related_guides": [
    { "title": "", "image": "", "url": "" }
  ]
}
`;

    /* -----------------------------
       7. USER PROMPT
    ------------------------------ */
    const userPrompt = `
User question:
"${question}"
`;

    /* -----------------------------
       8. Call Gemini CORRECTLY
    ------------------------------ */
    const result = await model.generateContent({
      contents: [
        { role: "system", parts: [{ text: systemInstruction }] },
        { role: "user", parts: [{ text: userPrompt }] },
      ],
    });

    const text = result.response.text();

    /* -----------------------------
       9. Validate JSON output
    ------------------------------ */
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      throw new Error("AI returned invalid JSON");
    }

    if (
      !parsed.answer_html ||
      !parsed.video ||
      !Array.isArray(parsed.related_guides)
    ) {
      throw new Error("AI response structure invalid");
    }

    /* -----------------------------
       10. Success response
    ------------------------------ */
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(parsed),
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
