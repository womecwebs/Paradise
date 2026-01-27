const toc = require("eleventy-plugin-toc");

module.exports = function (eleventyConfig) {
  /* ---------------- PASSTHROUGH ---------------- */
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/ebook-pdfs");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  /* ---------------- TOC ---------------- */
  eleventyConfig.addPlugin(toc, {
    tags: ["h2", "h3"],
    ul: true,
    wrapper: "nav",
    wrapperClass: "toc",
  });

  /* ---------------- COLLECTIONS (CANONICAL) ---------------- */

  // Blogs collection
  eleventyConfig.addCollection("blogs", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/blogs/**/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // destinations collection
  eleventyConfig.addCollection("destinations", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/destinations/*.md")
      .filter((item) => !item.data.draft);
  });
  eleventyConfig.addCollection("featuredDestinations", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/destinations/*.md")
      .filter((item) => item.data.featured === true)
      .sort((a, b) => (b.data.popularScore || 0) - (a.data.popularScore || 0))
      .slice(0, 10);
  });

  // experiences collections
  eleventyConfig.addCollection("experiences", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/experiences/*.md");
  });

  /* ---------------- FEATURED EXPERIENCES ---------------- */

  eleventyConfig.addCollection("featuredExperiences", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/experiences/*.md")
      .filter((item) => item.data.featured === true)
      .sort((a, b) => (b.data.popularScore || 0) - (a.data.popularScore || 0))
      .slice(0, 10);
  });

  /* ---------------- FEATURED BLOGS ---------------- */

  eleventyConfig.addCollection("featuredBlogs", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/blogs/**/*.md")
      .filter((item) => item.data.featured === true)
      .sort((a, b) => (b.data.popularScore || 0) - (a.data.popularScore || 0))
      .slice(0, 10);
  });

  // continents collections
  eleventyConfig.addCollection("continents", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/continents/*.md");
  });

  /* ---------------- EBOOKS COLLECTION ---------------- */

  // ebooks collection
  eleventyConfig.addCollection("ebooks", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/ebooks/*.md")
      .filter((item) => item.data.published !== false)
      .sort((a, b) => b.date - a.date);
  });

  // featured ebooks
  eleventyConfig.addCollection("featuredEbooks", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/ebooks/*.md")
      .filter(
        (item) => item.data.featured === true && item.data.published !== false,
      )
      .sort((a, b) => (b.data.popularScore || 0) - (a.data.popularScore || 0))
      .slice(0, 6);
  });

  // ebooks for destination
  eleventyConfig.addFilter("ebooksForDestination", (ebooks, slug) => {
    if (!Array.isArray(ebooks) || !slug) return [];
    return ebooks.filter(
      (ebook) =>
        Array.isArray(ebook.data.destinations) &&
        ebook.data.destinations.includes(slug),
    );
  });

  // ebooks for country
  eleventyConfig.addFilter("ebooksForCountry", (ebooks, country) => {
    if (!Array.isArray(ebooks) || !country) return [];
    return ebooks.filter(
      (ebook) =>
        Array.isArray(ebook.data.countries) &&
        ebook.data.countries.includes(country),
    );
  });

  // ebooks for continent
  eleventyConfig.addFilter("ebooksForContinent", (ebooks, continent) => {
    if (!Array.isArray(ebooks) || !continent) return [];
    return ebooks.filter(
      (ebook) =>
        Array.isArray(ebook.data.continents) &&
        ebook.data.continents.includes(continent),
    );
  });

  // ebooks for experience
  eleventyConfig.addFilter("ebooksForExperience", (ebooks, slug) => {
    if (!Array.isArray(ebooks) || !slug) return [];
    return ebooks.filter(
      (ebook) =>
        Array.isArray(ebook.data.experiences) &&
        ebook.data.experiences.includes(slug),
    );
  });

  /* ---------------- LINKING COLLECTIONS ---------------- */

  // Countries collection
  eleventyConfig.addCollection("countries", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/countries/*.md");
  });

  // Map: countries grouped by continent
  eleventyConfig.addCollection("countriesByContinent", (collectionApi) => {
    const countries = collectionApi.getFilteredByGlob("src/countries/*.md");
    const map = {};
    countries.forEach((country) => {
      const continent = country.data.continent || "unknown";
      if (!map[continent]) map[continent] = [];
      map[continent].push(country);
    });
    return map;
  });

  // Map: destinations grouped by country
  eleventyConfig.addCollection("destinationsByCountry", (collectionApi) => {
    const destinations = collectionApi.getFilteredByGlob(
      "src/destinations/*.md",
    );
    const map = {};
    destinations.forEach((dest) => {
      const country = dest.data.country || "unknown";
      if (!map[country]) map[country] = [];
      map[country].push(dest);
    });
    return map;
  });

  // Map: destinations grouped by continent (optional)
  eleventyConfig.addCollection("destinationsByContinent", (collectionApi) => {
    const destinations = collectionApi.getFilteredByGlob(
      "src/destinations/*.md",
    );
    const map = {};
    destinations.forEach((dest) => {
      const continent = dest.data.continent || "unknown";
      if (!map[continent]) map[continent] = [];
      map[continent].push(dest);
    });
    return map;
  });

  /* ---------------- CATEGORY MAP ---------------- */

  eleventyConfig.addCollection("experienceCategories", (collectionApi) => {
    const experiences = collectionApi.getFilteredByGlob("src/experiences/*.md");
    const categories = {};

    experiences.forEach((item) => {
      const cat = item.data.category;
      if (!cat) return;
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(item);
    });

    return categories;
  });

  eleventyConfig.addCollection("experienceCategoryPages", (collectionApi) => {
    const experiences = collectionApi.getFilteredByGlob("src/experiences/*.md");

    const map = new Map();

    experiences.forEach((exp) => {
      if (!exp.data.category) return;

      if (!map.has(exp.data.category)) {
        map.set(exp.data.category, {
          category: exp.data.category,
          items: [],
        });
      }

      map.get(exp.data.category).items.push(exp);
    });

    return Array.from(map.values());
  });

  /* ---------------- FILTERS ---------------- */

  // Date filter for schema and meta
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("featured", (items) => {
    if (!Array.isArray(items)) return [];
    return items.filter((item) => item.data.featured === true);
  });

  eleventyConfig.addFilter("relatedByDestination", (posts, slug) => {
    if (!Array.isArray(posts) || !slug) return [];
    return posts.filter(
      (post) =>
        Array.isArray(post.data.destinations) &&
        post.data.destinations.includes(slug),
    );
  });

  eleventyConfig.addFilter("experiencesForDestination", (items, slug) => {
    if (!Array.isArray(items) || !slug) return [];
    return items.filter((item) => item.data.destination === slug);
  });

  eleventyConfig.addFilter("destinationsForCountry", (items, country) => {
    if (!Array.isArray(items) || !country) return [];
    return items.filter((item) => item.data.country === country);
  });

  eleventyConfig.addFilter("relatedPosts", (collection, page) => {
    if (!page?.data?.internal?.related) return [];

    return collection
      .filter(
        (item) =>
          item.url !== page.url &&
          Array.isArray(item.data.tags) &&
          item.data.tags.some((tag) =>
            page.data.internal.related.includes(tag),
          ),
      )
      .slice(0, 4);
  });

  eleventyConfig.addFilter("startsWith", (value, prefix) => {
    if (typeof value !== "string") return false;
    return value.startsWith(prefix);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(dateObj);
  });

  eleventyConfig.addFilter("date", (dateObj) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  /* ---------------- SITEMAP ---------------- */

  const sitemap = require("@quasibit/eleventy-plugin-sitemap");

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://paradize.life",
      changefreq: "weekly",
      priority: 0.8,
    },
  });

  eleventyConfig.addCollection("ebooksData", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/ebooks/**/*.{md,njk}")
      .map((e) => ({
        slug: e.data.slug,
        download_url: e.data.download_url,
      }));
  });

  /* ---------------- RELATED GUIDES IN PARADISE AI ---------------- */
  eleventyConfig.addCollection("guides", function (collectionApi) {
    return collectionApi.getFilteredByTag("blog").map((item) => ({
      title: item.data.title,
      url: item.url,
      image: item.data.image || "/images/placeholder.jpg",
      description: item.data.description || "",
    }));
  });

  eleventyConfig.addPassthroughCopy("src/favicons");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/llms.txt");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
