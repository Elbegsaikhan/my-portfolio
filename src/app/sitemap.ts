export default async function sitemap() {
  const routes = ["", "/about", "/blog", "/contact"].map((route) => ({
    url: `https://elbegsaikhan.software${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
