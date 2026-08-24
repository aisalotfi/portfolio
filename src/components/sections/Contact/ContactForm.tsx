"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  formTitle: string;
  fields: { name: string; email: string; message: string };
  placeholders: { name: string; email: string; message: string };
  submitLabel: string;
  sendingLabel: string;
  sentLabel: string;
  errorLabel: string;
  locale: string;
}

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xvgkkbql";

export function ContactForm({
  formTitle,
  fields,
  placeholders,
  submitLabel,
  sendingLabel,
  sentLabel,
  errorLabel,
  locale,
}: ContactFormProps) {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_language", locale);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <div className="glass flex h-full w-full flex-col rounded-3xl p-7 md:p-9">
      <h3 className="mb-7 font-display text-[22px] tracking-tight text-soft-white md:text-[26px]">
        {formTitle}
      </h3>

      <form onSubmit={handleSubmit} className="flex h-full flex-col gap-5">
        {(["name", "email", "message"] as const).map((field) => (
          <div key={field} className={field === "message" ? "grow" : ""}>
            <label
              htmlFor={`contact-${field}`}
              className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal-200"
            >
              {fields[field]}
            </label>
            {field === "message" ? (
              <textarea
                id={`contact-${field}`}
                name={field}
                required
                rows={4}
                placeholder={placeholders[field]}
                className="w-full resize-none rounded-xl border border-border-medium bg-white/[0.03] px-4 py-3 text-[14px] text-soft-white placeholder:text-charcoal-400 transition-colors duration-300 focus:border-accent/60 focus:outline-none"
              />
            ) : (
              <input
                id={`contact-${field}`}
                type={field === "email" ? "email" : "text"}
                name={field}
                required
                placeholder={placeholders[field]}
                autoComplete={field === "email" ? "email" : "name"}
                className="w-full rounded-xl border border-border-medium bg-white/[0.03] px-4 py-3 text-[14px] text-soft-white placeholder:text-charcoal-400 transition-colors duration-300 focus:border-accent/60 focus:outline-none"
              />
            )}
          </div>
        ))}

        <p aria-live="polite" role="status">
          {formState === "sent" && (
            <span className="block text-center text-[13px] text-emerald-bright">{sentLabel}</span>
          )}
          {formState === "error" && (
            <span className="block text-center text-[13px] text-red-400">{errorLabel}</span>
          )}
        </p>

        <Button variant="jewel" size="lg" className="w-full" disabled={formState === "sending"}>
          <span>{formState === "sending" ? sendingLabel : submitLabel}</span>
        </Button>
      </form>
    </div>
  );
}
