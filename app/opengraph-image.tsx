import { ImageResponse } from "next/og";
import { profile } from "./lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (light theme) — kept in sync with globals.css by hand since
// CSS variables aren't available in the OG rendering context.
const paper = "#f2f0e9";
const ink = "#16150f";
const line = "#d8d5cb";
const mut = "#76736a";
const accent = "#2b27ff";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: paper,
          color: ink,
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            letterSpacing: "0.22em",
            color: mut,
          }}
        >
          <span>{profile.location.toUpperCase()} — PORTFOLIO</span>
          {/* Six-spoke asterisk drawn as SVG — the ✶ glyph isn't in the OG
              renderer's built-in font and dynamic font fetching is unreliable. */}
          <svg width="72" height="72" viewBox="0 0 100 100">
            <g stroke={accent} strokeWidth="13" strokeLinecap="round">
              <line x1="50" y1="8" x2="50" y2="92" />
              <line x1="14" y1="29" x2="86" y2="71" />
              <line x1="86" y1="29" x2="14" y2="71" />
            </g>
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 168,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.92,
          }}
        >
          <span>SADAT</span>
          <span>SAGAR</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `2px solid ${line}`,
            paddingTop: 28,
            fontSize: 30,
          }}
        >
          <span>{profile.role}</span>
          <span style={{ color: accent }}>sadatmd.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
