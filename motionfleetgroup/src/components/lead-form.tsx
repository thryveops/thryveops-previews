"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitLead } from "@/app/actions";
import { initialLeadState } from "@/lib/lead-form-state";
import type { LeadType } from "@/lib/leads";
import { Field, Input, Textarea, Select, type Tone } from "./ui/field";
import { Button } from "./ui/button";
import { CheckIcon, ArrowIcon } from "./icons";

export interface LeadFormField {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  hint?: string;
  options?: { value: string; label: string }[];
  /** Column span on the 2-col grid (default 1). */
  full?: boolean;
}

function SubmitButton({ label, tone }: { label: string; tone: Tone }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full sm:w-auto"
      variant={tone === "light" ? "primary" : "primary"}
    >
      {pending ? "Sending…" : label}
      {!pending && <ArrowIcon className="h-4 w-4" />}
    </Button>
  );
}

export function LeadForm({
  type,
  fields,
  submitLabel = "Send Request",
  tone = "dark",
  successTitle = "Request received",
  className = "",
  hidden,
}: {
  type: LeadType;
  fields: LeadFormField[];
  submitLabel?: string;
  tone?: Tone;
  successTitle?: string;
  className?: string;
  /** Extra hidden inputs forwarded as lead details (e.g. vehicle, vin). */
  hidden?: Record<string, string>;
}) {
  const [state, formAction] = useActionState(submitLead, initialLeadState);

  if (state.status === "success") {
    return (
      <div
        className={`rounded-lg border p-8 text-center ${
          tone === "dark" ? "border-ink-700 bg-ink-800" : "border-hairline bg-white"
        } ${className}`}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red/15">
          <CheckIcon className="h-6 w-6 text-red" />
        </div>
        <h3 className="mt-4 text-h3 font-bold">{successTitle}</h3>
        <p className={`mt-2 ${tone === "dark" ? "text-silver" : "text-gray-700"}`}>
          {state.message}
        </p>
      </div>
    );
  }

  const errs = state.fieldErrors ?? {};
  const vals = state.values ?? {};

  return (
    <form action={formAction} className={className} noValidate>
      <input type="hidden" name="type" value={type} />
      {hidden &&
        Object.entries(hidden).map(([k, v]) => (
          <input key={k} type="hidden" name={k} value={v} />
        ))}
      {/* Honeypot — visually hidden, off-screen, ignored by users. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`company-${type}`}>Company</label>
        <input id={`company-${type}`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => {
          const id = `${type}-${f.name}`;
          const invalid = Boolean(errs[f.name]);
          const fieldType = f.type ?? "text";
          return (
            <Field
              key={f.name}
              label={f.label}
              htmlFor={id}
              required={f.required}
              error={errs[f.name]}
              hint={f.hint}
              tone={tone}
              className={f.full || fieldType === "textarea" ? "sm:col-span-2" : ""}
            >
              {fieldType === "textarea" ? (
                <Textarea
                  id={id}
                  name={f.name}
                  tone={tone}
                  invalid={invalid}
                  required={f.required}
                  placeholder={f.placeholder}
                  defaultValue={vals[f.name] ?? ""}
                />
              ) : fieldType === "select" ? (
                <Select
                  id={id}
                  name={f.name}
                  tone={tone}
                  invalid={invalid}
                  required={f.required}
                  defaultValue={vals[f.name] ?? ""}
                >
                  <option value="" disabled>
                    {f.placeholder ?? "Select…"}
                  </option>
                  {f.options?.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input
                  id={id}
                  name={f.name}
                  type={fieldType}
                  tone={tone}
                  invalid={invalid}
                  required={f.required}
                  placeholder={f.placeholder}
                  defaultValue={vals[f.name] ?? ""}
                  autoComplete={
                    f.name === "name"
                      ? "name"
                      : f.name === "email"
                        ? "email"
                        : f.name === "phone"
                          ? "tel"
                          : "on"
                  }
                />
              )}
            </Field>
          );
        })}
      </div>

      {state.status === "error" && state.message && (
        <p className="mt-4 text-sm font-medium text-red" role="alert">
          {state.message}
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <SubmitButton label={submitLabel} tone={tone} />
        <p className={`text-xs ${tone === "dark" ? "text-silver-dim" : "text-gray-500"}`}>
          We&apos;ll reply by phone, text, or email — your info is never sold.
        </p>
      </div>
    </form>
  );
}
