import { ImageResponse } from "next/og";

// Required for `output: "export"` — generate this icon to a static PNG at build.
export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c83ff",
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 800,
          letterSpacing: "-4px",
          fontFamily: "sans-serif",
        }}
      >
        AB
      </div>
    ),
    size
  );
}
