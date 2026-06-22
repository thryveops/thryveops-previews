/**
 * Lead delivery layer.
 *
 * Every form on the site funnels through `deliverLead()`. Right now it
 * validates + logs the lead and returns success (no email/SMS provider is
 * wired yet — see CLAUDE.md §7). When the client provides credentials, the
 * ONLY place that changes is the marked TODO blocks below: drop in Resend
 * (email) and Twilio (SMS). Forms, validation, and UX stay untouched.
 *
 * Notification targets are read from env so recipients are easy to change:
 *   LEAD_NOTIFY_EMAIL   (default: andrewr@motionfleetgroup.com)
 *   LEAD_NOTIFY_SMS     (E.164, e.g. +17275196068)
 */
import { brand } from "./brand";

export type LeadType =
  | "pre-approval"
  | "trade-in"
  | "vehicle-inquiry"
  | "test-drive"
  | "contact"
  | "inventory-notify";

export const LEAD_LABELS: Record<LeadType, string> = {
  "pre-approval": "Pre-Approval Request",
  "trade-in": "Trade-In Appraisal",
  "vehicle-inquiry": "Vehicle Inquiry",
  "test-drive": "Test Drive Request",
  contact: "Contact Message",
  "inventory-notify": "Inventory Notify Signup",
};

export interface Lead {
  type: LeadType;
  name: string;
  email: string;
  phone: string;
  message?: string;
  /** Arbitrary extra fields per form (vehicle of interest, trade details, etc.) */
  details?: Record<string, string>;
  /** Honeypot value — should always be empty for real humans. */
  company?: string;
}

export interface DeliveryResult {
  ok: boolean;
  error?: string;
}

const notifyEmail = () => process.env.LEAD_NOTIFY_EMAIL || brand.email;
const notifySms = () => process.env.LEAD_NOTIFY_SMS || ""; // E.164

/** Human-readable lead summary used in both email body and SMS text. */
export function formatLead(lead: Lead): string {
  const lines = [
    `New ${LEAD_LABELS[lead.type]} — ${brand.displayName}`,
    `Name:  ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
  ];
  if (lead.details) {
    for (const [k, v] of Object.entries(lead.details)) {
      if (v) lines.push(`${k}: ${v}`);
    }
  }
  if (lead.message) lines.push(`Message: ${lead.message}`);
  return lines.join("\n");
}

/**
 * Deliver a lead to the dealership. Currently a stub that logs server-side.
 * Replace the two TODO blocks with real providers when credentials exist.
 */
export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const summary = formatLead(lead);

  // ── EMAIL ──────────────────────────────────────────────────────────────
  // TODO(backend): send via Resend / SendGrid to notifyEmail().
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "leads@motionfleetgroup.com",
  //     to: notifyEmail(),
  //     replyTo: lead.email,
  //     subject: `${LEAD_LABELS[lead.type]} — ${lead.name}`,
  //     text: summary,
  //   });

  // ── SMS ────────────────────────────────────────────────────────────────
  // TODO(backend): send via Twilio to notifySms().
  //   const twilio = require("twilio")(SID, TOKEN);
  //   await twilio.messages.create({
  //     from: process.env.TWILIO_FROM,
  //     to: notifySms(),
  //     body: summary.slice(0, 320),
  //   });

  // Stub behaviour until providers are wired:
  console.info(
    `[lead:${lead.type}] → ${notifyEmail()}${notifySms() ? ` + ${notifySms()}` : ""}\n${summary}`,
  );

  return { ok: true };
}
