"use server";

import { deliverLead, type Lead, type LeadType, LEAD_LABELS } from "@/lib/leads";
import type { LeadFormState } from "@/lib/lead-form-state";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /[\d][\d\s().+-]{6,}/; // forgiving; we only need a reachable number

/** Fields that, if present on the form, are forwarded as labelled details. */
const DETAIL_FIELDS: Record<string, string> = {
  vehicle: "Vehicle of interest",
  year: "Year",
  make: "Make",
  model: "Model",
  trim: "Trim",
  mileage: "Mileage",
  vin: "VIN",
  condition: "Condition",
  payoff: "Loan payoff",
  budget: "Monthly budget",
  downPayment: "Down payment",
  employment: "Employment",
  creditBand: "Credit range",
  preferredDate: "Preferred date",
  preferredContact: "Preferred contact",
};

const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v.trim() : "");

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const type = (str(formData.get("type")) || "contact") as LeadType;
  if (!(type in LEAD_LABELS)) {
    return { status: "error", message: "Something went wrong. Please call us instead." };
  }

  // Honeypot — bots fill hidden fields; humans never see them.
  const company = str(formData.get("company"));
  if (company) {
    // Pretend success so bots don't learn they were caught.
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const name = str(formData.get("name"));
  const email = str(formData.get("email"));
  const phone = str(formData.get("phone"));
  const message = str(formData.get("message"));

  // Echo back everything the user typed so the form repopulates on error.
  const values: Record<string, string> = {};
  for (const [k, v] of formData.entries()) {
    if (k !== "type" && k !== "company" && typeof v === "string") values[k] = v;
  }

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!email && !phone) {
    fieldErrors.email = "Add an email or phone so we can reach you.";
  } else {
    if (email && !EMAIL_RE.test(email)) fieldErrors.email = "That email looks off.";
    if (phone && !PHONE_RE.test(phone)) fieldErrors.phone = "That phone number looks off.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors, values };
  }

  const details: Record<string, string> = {};
  for (const [field, label] of Object.entries(DETAIL_FIELDS)) {
    const value = str(formData.get(field));
    if (value) details[label] = value;
  }

  const lead: Lead = {
    type,
    name,
    email,
    phone,
    message: message || undefined,
    details: Object.keys(details).length ? details : undefined,
  };

  try {
    const result = await deliverLead(lead);
    if (!result.ok) throw new Error(result.error);
    return {
      status: "success",
      message: "Thanks — your request is in. We'll reach out shortly.",
    };
  } catch {
    return {
      status: "error",
      message: "We couldn't submit that. Please call 727-519-6068 and we'll help right away.",
      values,
    };
  }
}
