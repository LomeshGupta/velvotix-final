import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const Ctx = createContext({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }) {
  // Start with a deterministic theme so prerendered HTML and the first client render match.
  const [theme, setTheme] = useState("light");
  const mounted = useRef(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("vx-theme");
      if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
    } catch {}
    mounted.current = true;
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", theme === "light" ? "#F6F8FC" : "#030B1D");
    if (mounted.current) {
      try { localStorage.setItem("vx-theme", theme); } catch {}
    }
  }, [theme]);

  const toggle = () => setTheme((current) => current === "dark" ? "light" : "dark");
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
