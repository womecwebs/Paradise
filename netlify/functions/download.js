const ebooks = require("../../_site/_data/ebooks.json");

exports.handler = async (event) => {
  const ebookSlug = event.queryStringParameters?.ebook;

  if (!ebookSlug) {
    return {
      statusCode: 400,
      body: "Missing ebook parameter",
    };
  }

  const match = ebooks.find((e) => e.slug === ebookSlug);

  if (!match || !match.download_url) {
    return {
      statusCode: 404,
      body: "Download not found",
    };
  }

  return {
    statusCode: 302,
    headers: {
      Location: match.download_url,
      "Cache-Control": "no-store",
    },
  };
};
