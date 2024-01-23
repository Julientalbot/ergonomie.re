import categories, { categorySlugs } from "./categoriesAndAuthors/categories";
import authors, { authorSlugs } from "./categoriesAndAuthors/authors";

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
export const slugs = {
  categorySlugs,
  authorSlugs,
};

export {
  categories,
  authors
}
// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================
// export const categories = require("./categoriesAndAuthors/categories").default
// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================
// export const authors = require("./categoriesAndAuthors/authors").default;

// All the blog authors data display in the /blog/author/[authorId].js pages.

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  require("./articles/introducing-ergonomie.re"),
].map((article) => {
  const { articleSlugs } = article;

  return article.default({
    ...articleSlugs,

    categories: categories?.filter((c) => articleSlugs?.categories?.includes(c?.slug)),
    author: authors?.find((a) => articleSlugs?.author?.includes(a?.slug)),
    styles,

    // ...slugs,
  })
});
