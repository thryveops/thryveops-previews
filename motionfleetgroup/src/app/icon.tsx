import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Branded favicon — "MFG" red/silver on near-black. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0d",
          borderRadius: 12,
          fontFamily: "sans-serif",
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: -1,
        }}
      >
        <span style={{ color: "#e01e26" }}>MF</span>
        <span style={{ color: "#c7c7c7" }}>G</span>
      </div>
    ),
    { ...size },
  );
}
