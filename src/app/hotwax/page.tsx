import { ComingSoon } from "@/components/ComingSoon";

export const metadata = { title: "HotWax Coffee — Concept Preview" };

export default function Page() {
  return (
    <ComingSoon
      business="HotWax Coffee Shop & Tap House"
      hookHeadline='Your homepage has a "Thanks for submitting!" message stuck on it.'
      hookBody="Looks like a contact-form success state got committed into production. Every visitor sees it. We'd fix that immediately (free), then rewrite the hero around the 5-concept space — coffee + kava + craft beer + open mic + live music — that nothing else in Tampa is doing."
    />
  );
}
