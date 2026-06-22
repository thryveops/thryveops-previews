import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${brand.displayName} — Used Cars in Tampa Bay`;

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
          background: "#0d0d0d",
          backgroundImage:
            "radial-gradient(60% 70% at 80% 10%, rgba(224,30,38,0.35), transparent 60%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 900, letterSpacing: -2 }}>
            <span style={{ color: "#e01e26" }}>MF</span>
            <span style={{ color: "#c7c7c7" }}>G</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ color: "#fff", fontSize: 24, fontWeight: 800, letterSpacing: 6 }}>
              MOTION
            </span>
            <span style={{ color: "#c7c7c7", fontSize: 19, fontWeight: 700, letterSpacing: 4 }}>
              FLEET GROUP
            </span>
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#e01e26", fontSize: 22, fontWeight: 700, letterSpacing: 4 }}>
            CLEARWATER · LARGO · TAMPA BAY
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#fff",
              fontSize: 68,
              fontWeight: 900,
              letterSpacing: -2,
              marginTop: 16,
              lineHeight: 1.04,
            }}
          >
            <span>Your next car,</span>
            <span style={{ display: "flex", gap: "0.28em" }}>
              <span>without the</span>
              <span style={{ color: "#e01e26" }}>runaround.</span>
            </span>
          </div>
        </div>

        {/* Bottom: tagline + phone */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#e01e26", fontSize: 28, fontWeight: 800, letterSpacing: 4 }}>
            BUY • SELL • TRADE
          </span>
          <span style={{ color: "#c7c7c7", fontSize: 28, fontWeight: 700 }}>{brand.phone}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
