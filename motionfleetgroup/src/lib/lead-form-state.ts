/**
 * Form-state types/constants for the lead forms. Kept OUT of the "use server"
 * actions file because a "use server" module may only export async functions.
 */
export interface LeadFormState {
  status: "idle" | "success" | "error";
  message?: string;
  /** Per-field validation errors, keyed by input name. */
  fieldErrors?: Record<string, string>;
  /** Submitted values echoed back so fields repopulate after a validation
   *  error (React 19 otherwise resets the form on the action response). */
  values?: Record<string, string>;
}

export const initialLeadState: LeadFormState = { status: "idle" };
