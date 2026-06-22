"use client";

import { useState } from "react";
import { LeadForm, type LeadFormField } from "@/components/lead-form";

const baseContact: LeadFormField[] = [
  { name: "name", label: "Full name", required: true, placeholder: "Jordan Smith" },
  { name: "phone", label: "Mobile phone", type: "tel", required: true, placeholder: "(727) 555-0123" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
];

const infoFields: LeadFormField[] = [
  ...baseContact,
  {
    name: "message",
    label: "Your question",
    type: "textarea",
    placeholder: "Is this still available? Can I see more photos? Any service history?",
  },
];

const testDriveFields: LeadFormField[] = [
  ...baseContact,
  { name: "preferredDate", label: "Preferred day/time", placeholder: "e.g. Saturday morning" },
  {
    name: "message",
    label: "Anything else?",
    type: "textarea",
    placeholder: "Trade-in, financing questions, etc.",
  },
];

export function VehicleInquiry({ vehicle, vin }: { vehicle: string; vin?: string }) {
  const [tab, setTab] = useState<"info" | "test">("info");
  const hidden = { vehicle, ...(vin ? { vin } : {}) };

  return (
    <div>
      <div role="tablist" className="mb-5 grid grid-cols-2 rounded-md border border-hairline bg-paper p-1">
        <TabButton active={tab === "info"} onClick={() => setTab("info")}>
          Request info
        </TabButton>
        <TabButton active={tab === "test"} onClick={() => setTab("test")}>
          Test drive
        </TabButton>
      </div>

      {tab === "info" ? (
        <LeadForm
          key="info"
          type="vehicle-inquiry"
          fields={infoFields}
          tone="light"
          hidden={hidden}
          submitLabel="Check Availability"
          successTitle="Request sent"
        />
      ) : (
        <LeadForm
          key="test"
          type="test-drive"
          fields={testDriveFields}
          tone="light"
          hidden={hidden}
          submitLabel="Schedule Test Drive"
          successTitle="Test drive requested"
        />
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-sm py-2 font-display text-sm font-bold transition-colors ${
        active ? "bg-white text-ink shadow-sm" : "text-gray-500 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
