import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { createServer } from "vite";

const root = process.cwd();
const outDir = path.join(root, "dist");
const siteUrl = "https://velvotix.com";
const vite = await createServer({
  configFile: path.join(root, "vite.config.js"),
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

function htmlEscape(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

async function writeRoute(route, appHtml, headHtml) {
  const template = await fs.readFile(path.join(outDir, "index.html"), "utf8");
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, "");
  html = html.replace("<div id=\"root\"></div>", `<div id="root">${appHtml}</div>`);
  html = html.replace("</head>", `${headHtml}\n  </head>`);
  const relative = route === "/" ? "index.html" : route.endsWith(".html")
    ? route.replace(/^\/+/, "")
    : `${route.replace(/^\/+|\/+$/g, "")}/index.html`;
  const destination = path.join(outDir, relative);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, html, "utf8");
}

try {
  const { default: StaticApp } = await vite.ssrLoadModule("/src/StaticApp.jsx");
  const { SEO_PAGES } = await vite.ssrLoadModule("/src/data/seoPages.js");
  const { INSIGHTS } = await vite.ssrLoadModule("/src/data/insights.js");

  const coreRoutes = [
    "/", "/services", "/solutions", "/products", "/case-studies", "/about", "/contact",
    "/privacy-policy", "/terms-of-service", "/insights",
  ];
  const routes = [...new Set([...coreRoutes, ...Object.keys(SEO_PAGES), ...INSIGHTS.map((article) => article.slug)])];
  let successCount = 0;

  for (const route of routes) {
    const context = {};
    const appHtml = renderToString(
      React.createElement(HelmetProvider, { context }, React.createElement(StaticApp, { location: route })),
    );
    const helmet = context.helmet;
    if (!helmet) throw new Error(`Helmet metadata was not produced for ${route}`);
    const headHtml = [
      helmet.title?.toString?.() || "",
      helmet.meta?.toString?.() || "",
      helmet.link?.toString?.() || "",
      helmet.script?.toString?.() || "",
    ].filter(Boolean).join("\n  ");
    if (!headHtml.includes("rel=\"canonical\"")) {
      console.warn(`Warning: no canonical found in rendered head for ${route}`);
    }
    await writeRoute(route, appHtml, headHtml);
    successCount += 1;
  }

  // A noindex informational payment-return page; do not include it in the sitemap.
  const opayoContext = {};
  const opayoHtml = renderToString(
    React.createElement(HelmetProvider, { context: opayoContext }, React.createElement(StaticApp, { location: "/opayo-success.html" })),
  );
  const opayoHelmet = opayoContext.helmet;
  const opayoHead = [opayoHelmet?.title?.toString?.() || "", opayoHelmet?.meta?.toString?.() || "", opayoHelmet?.link?.toString?.() || "", opayoHelmet?.script?.toString?.() || ""].filter(Boolean).join("\n  ");
  await writeRoute("/opayo-success.html", opayoHtml, opayoHead);

  console.log(`Prerendered ${successCount} routes plus /opayo-success.html for crawlable HTML.`);
} catch (error) {
  console.error("Prerender failed:", error);
  process.exitCode = 1;
} finally {
  await vite.close();
}
