import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { LeadForm, type LeadFormField } from "@/components/lead-form";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, ChatIcon } from "@/components/icons";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Motion Fleet Group in the Clearwater & Largo, FL area. Call, text, or send a message — we're serving Tampa Bay shoppers by appointment.",
  alternates: { canonical: "/contact" },
};

const contactFields: LeadFormField[] = [
  { name: "name", label: "Full name", required: true, placeholder: "Jordan Smith" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(727) 555-0123" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  {
    name: "preferredContact",
    label: "Best way to reach you",
    type: "select",
    placeholder: "Choose one",
    options: [
      { value: "Call", label: "Phone call" },
      { value: "Text", label: "Text message" },
      { value: "Email", label: "Email" },
    ],
  },
  {
    name: "message",
    label: "How can we help?",
    type: "textarea",
    required: true,
    placeholder: "Tell us what you're looking for, a vehicle you have in mind, or any question at all.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk. No pressure, ever."
        lede="Call, text, or send a message and a real person from our team will get back to you fast. We're serving the Clearwater & Largo area by appointment while our location is being finished."
      />

      <Section surface="dark">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Details */}
          <div>
            <div className="space-y-5">
              <ContactRow icon={PhoneIcon} label="Call us" value={brand.phone} href={brand.phoneHref} />
              <ContactRow icon={ChatIcon} label="Text us" value={brand.phone} href="sms:+17275196068" />
              <ContactRow icon={MailIcon} label="Email" value={brand.email} href={brand.emailHref} />
              <ContactRow
                icon={MapPinIcon}
                label="Service area"
                value="Clearwater · Largo · Greater Tampa Bay, FL"
              />
              <ContactRow
                icon={ClockIcon}
                label="Hours"
                value="Opening soon — currently by appointment"
              />
            </div>

            {/* Map placeholder */}
            <div className="relative mt-8 flex min-h-[15rem] items-center justify-center overflow-hidden rounded-lg border border-ink-700 bg-ink-800">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-silver) 1px, transparent 1px), linear-gradient(90deg, var(--color-silver) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative px-6 text-center">
                <MapPinIcon className="mx-auto h-8 w-8 text-red" />
                <p className="mt-3 font-display font-bold text-white">
                  Tampa Bay, Florida
                </p>
                <p className="mt-1 text-sm text-silver">
                  Interactive map &amp; directions appear here once our address is set.
                  {/* TODO(client): embed Google Map iframe when address confirmed (Open Q #3) */}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-ink-700 bg-ink-800/60 p-6 sm:p-8">
            <h2 className="text-h3 font-bold text-white">Send us a message</h2>
            <p className="mt-2 text-silver">
              We typically respond the same day. Fields with * are required.
            </p>
            <div className="mt-6">
              <LeadForm
                type="contact"
                fields={contactFields}
                submitLabel="Send Message"
                successTitle="Message sent"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-ink-700 bg-ink-800">
        <Icon className="h-5 w-5 text-red" />
      </span>
      <div>
        <p className="eyebrow text-silver-dim">{label}</p>
        <p className="mt-1 font-display font-bold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}
