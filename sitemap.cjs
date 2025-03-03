const SitemapGenerator = require("sitemap-generator");

const generator = SitemapGenerator("https://booklidio.com", {
  filepath: "./sitemap.xml",
  maxDepth: 2,
  changeFreq: "monthly",
  priority: 0.5,
});

generator.start();
