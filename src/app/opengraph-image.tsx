import { ImageResponse } from "next/og";

export const alt = "Ceo.ooou.uz · Sarvarbek Sharipboyev";
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
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #05070f 0%, #0b1026 55%, #1b2f7a 100%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#8fb0ff" }}>
          <div style={{ display: "flex", background: "#2f6bff", color: "#fff", borderRadius: 12, padding: "6px 12px", fontSize: 22 }}>CEO</div>
          Ceo.ooou.uz
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>Sarvarbek Sharipboyev</div>
          <div style={{ fontSize: 40, color: "#f26b1d", marginTop: 12 }}>Founder &amp; CEO of ooou.uz</div>
          <div style={{ fontSize: 30, color: "#cbd5e1", marginTop: 20 }}>Full-Stack · QA Automation · AI Engineer · Open to new opportunities</div>
        </div>
      </div>
    ),
    size
  );
}
