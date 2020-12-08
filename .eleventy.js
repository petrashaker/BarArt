module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("logos");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");

  return {
    // možné formáty šablon
    templateFormats: ["njk","html", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
