export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addGlobalData("layout", "default-layout.njk");
  eleventyConfig.setOutputDirectory("docs");
}
