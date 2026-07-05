import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Required for `output: "export"` — generate this image to a static PNG at build.
export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#08090c",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(124,131,255,0.22), transparent 70%)",
          color: "#f4f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 26,
            color: "#9096a1",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#7c83ff",
            }}
          />
          aminebenahmed.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 44,
              fontWeight: 600,
              color: "#7c83ff",
              letterSpacing: "-0.02em",
            }}
          >
            {site.role}
          </div>
        </div>

        <div style={{ fontSize: 30, color: "#9096a1", maxWidth: 900 }}>
          {site.subtitle}
        </div>
      </div>
    ),
    size
  );
}
