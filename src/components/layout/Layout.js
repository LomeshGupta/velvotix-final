import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="vtx-app-shell">
      <a className="vtx-skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <div id="main-content" className="vtx-app-content">{children}</div>
      <Footer />
    </div>
  );
}
