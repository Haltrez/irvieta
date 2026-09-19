import { ImageResponse } from "next/og";

// Placeholder OG card, rendered at build time. Replace with a designed PNG by
// dropping `opengraph-image.png` in this folder and deleting this file.
export const alt = "irvieta — Kāds jau brauc tavā virzienā";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F5F5F0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#2D6A4F" }}>
          irvieta
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 82,
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Kāds jau brauc tavā virzienā.
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 32, color: "#6B7280" }}>
          Sūtījumi visā Latvijā · Vienkārši, ātri, zaļi
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            height: 10,
            width: 200,
            background: "#95D5B2",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    size,
  );
}
