module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Blog collection
  eleventyConfig.addCollection("blogs", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blogs/*.md");
  });

  eleventyConfig.addCollection("destinations", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/destinations/*.md");
  });

  // Date filter for Nunjucks
  eleventyConfig.addFilter("readableDate", function (dateObj) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(dateObj);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
