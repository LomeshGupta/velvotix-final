import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");
const read = async (relative) => fs.readFile(path.join(root, relative), "utf8");
const requiredAssets = ["robots.txt", "sitemap.xml", "llms.txt", "favicon.svg", "og-image.png", "logo.png"];
let failed = false;

for (const relative of requiredAssets) {
  try {
    await fs.access(path.join(root, relative));
    console.log(`OK ${relative}`);
  } catch (error) {
    failed = true;
    console.error(`FAIL ${relative}: ${error.message}`);
  }
}

try {
  const sitemap = await read("sitemap.xml");
  const urls = [...sitemap.matchAll(/<loc>(https:\/\/velvotix\.com[^<]*)<\/loc>/g)].map((match) => match[1]);
  if (!urls.length) throw new Error("no site URLs found");
  const unique = new Set(urls);
  if (unique.size !== urls.length) throw new Error("duplicate URLs found");
  console.log(`OK sitemap.xml (${urls.length} unique URLs)`);

  for (const url of urls) {
    const route = new URL(url).pathname;
    const relative = route === "/" ? "index.html" : `${route.replace(/^\/+|\/+$/g, "")}/index.html`;
    try {
      const html = await read(relative);
      if (!html.includes('<div id="root">')) throw new Error("root element missing");
      if (!/<title>[^<]+<\/title>/i.test(html)) throw new Error("page title missing");
      if (!/rel="canonical"/.test(html)) throw new Error("canonical link missing");
      console.log(`OK ${route}`);
    } catch (error) {
      failed = true;
      console.error(`FAIL ${route}: ${error.message}`);
    }
  }
} catch (error) {
  failed = true;
  console.error(`FAIL sitemap validation: ${error.message}`);
}

try {
  const paymentHtml = await read("opayo-success.html");
  if (!/noindex/i.test(paymentHtml)) throw new Error("payment status page should be noindex");
  console.log("OK /opayo-success.html (noindex)");
} catch (error) {
  failed = true;
  console.error(`FAIL /opayo-success.html: ${error.message}`);
}

if (failed) process.exit(1);
console.log("Route/content smoke check passed.");
