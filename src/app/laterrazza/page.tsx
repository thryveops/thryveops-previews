import { ComingSoon } from "@/components/ComingSoon";

export const metadata = { title: "La Terrazza — Concept Preview" };

export default function Page() {
  return (
    <ComingSoon
      business="La Terrazza Ristorante Italiano"
      hookHeadline="A 4.8-star Italian kitchen with no website of its own."
      hookBody="Aggregator sites (restaurants-us.com, wheree.com) currently out-rank La Terrazza on its own name. We'd build a single-page site with an embedded OpenTable widget so you own your own search results again."
    />
  );
}
