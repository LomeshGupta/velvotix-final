import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { ThemeProvider } from "./lib/ThemeContext";
import { AppRoutes } from "./App";

/** Static rendering shell used by scripts/prerender.mjs. */
export default function StaticApp({ location }) {
  return (
    <ThemeProvider>
      <StaticRouter location={location}>
        <AppRoutes />
      </StaticRouter>
    </ThemeProvider>
  );
}
