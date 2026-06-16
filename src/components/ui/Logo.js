import React from "react";
import { Link } from "react-router-dom";
import logo from "./image.png";

export default function Logo({ size = "md" }) {
  const s = { sm: [28, 16], md: [36, 20], lg: [44, 24] }[size];

  return (
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      <img
        src={logo}
        alt="VelvoTix Logo"
        style={{
          width: s[0],
          height: s[0],
          objectFit: "contain",
          flexShrink: 0,
        }}
      />

      <span
        className="f-display"
        style={{
          fontSize: s[1],
          fontWeight: 700,
          letterSpacing: "-.3px",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        <span style={{ color: "#0099FF" }}>VELVO</span>
        <span style={{ color: "#FF7A00" }}>TIX</span>
      </span>
    </Link>
  );
}
