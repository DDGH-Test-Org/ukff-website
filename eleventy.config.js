import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addGlobalData("layout", "default-layout.njk");
  eleventyConfig.setOutputDirectory("docs");
  eleventyConfig.addPlugin(HtmlBasePlugin);
}

export const config = {
  pathPrefix: "/ukff-website/",
};
