exports.handler = async function (event) {
  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return { statusCode: 500, body: "Missing GEMINI_API_KEY" };

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`,
      { method: "GET" },
    );
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (e) {
    return { statusCode: 500, body: e.toString() };
  }
};
