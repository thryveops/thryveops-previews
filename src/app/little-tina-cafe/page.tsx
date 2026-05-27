export const metadata = {
  title: "Little Tina Café — Downtown Tampa",
  description:
    "Specialty coffee, craft cocktails & Tulum-inspired bites. Happy hour daily 4–6 PM. 507 N Tampa Street, Tampa FL.",
};

export default function LittleTinaPreview() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://little-tina-cafe.vercel.app"
        title="Little Tina Café — Preview"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
}
