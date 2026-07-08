"use client";

import { useState } from "react";
import { CalendarClock, Check, Loader2 } from "lucide-react";

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    e.email = "Please enter a valid email address.";
  if (f.phone.trim() && !/^[\d\s()+.-]{7,}$/.test(f.phone.trim()))
    e.phone = "Please enter a valid phone number.";
  if (f.message.trim().length < 10)
    e.message = "Please tell us a little more (10+ characters).";
  return e;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );
  const [honeypot, setHoneypot] = useState("");

  const update = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const next = { ...fields, [key]: e.target.value };
    setFields(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(fields));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(found).length > 0) {
      // move focus to first invalid field
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, honeypot }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
      setFields(empty);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-lg)] border hairline bg-card p-8 text-center"
      >
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-positive)_14%,transparent)]">
          <Check className="h-7 w-7 text-positive" aria-hidden />
        </span>
        <h3 className="mt-5 text-h3">Thank you — message received.</h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          We&rsquo;ll be in touch within one business day to find a time that
          works for you. Talk soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-6 text-sm font-semibold text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[var(--radius-lg)] border hairline bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          required
          error={errors.name}
        >
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            onBlur={blur("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
            className={inputCls(!!errors.name)}
            placeholder="Ananya Sharma"
          />
        </Field>

        <Field
          id="contact-email"
          label="Email"
          required
          error={errors.email}
        >
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={fields.email}
            onChange={update("email")}
            onBlur={blur("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className={inputCls(!!errors.email)}
            placeholder="ananya@example.com"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          id="contact-phone"
          label="Phone"
          optional
          error={errors.phone}
        >
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={update("phone")}
            onBlur={blur("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            className={inputCls(!!errors.phone)}
            placeholder="+91 98765 43210"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          id="contact-message"
          label="How can we help?"
          required
          error={errors.message}
        >
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={update("message")}
            onBlur={blur("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-message" : undefined}
            className={inputCls(!!errors.message) + " resize-y"}
            placeholder="Tell us a bit about your situation and what you're hoping to figure out."
          />
        </Field>
      </div>

      {/* Honeypot — hidden from users, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="contact-company">Company (leave blank)</label>
        <input
          id="contact-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-lg bg-[#fbeceb] px-4 py-3 text-sm text-[#b4453a]">
          Sorry — something went wrong sending your message. Please try again, or
          email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-lift mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-[#0c1712] hover:bg-[color-mix(in_srgb,var(--color-gold)_85%,white)] disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <CalendarClock className="h-5 w-5" aria-hidden />
            Request my consultation
          </>
        )}
      </button>

      <p className="mt-4 text-xs text-muted">
        By submitting, you agree to be contacted about your inquiry. We&rsquo;ll
        never share your information.{" "}
        {/* TODO(client): link real privacy policy + confirm consent language */}
      </p>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return [
    "min-h-[48px] w-full rounded-lg border bg-surface/60 px-4 py-3 text-ink placeholder:text-muted/60",
    "focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-gold)_55%,transparent)]",
    hasError
      ? "border-[#d98b83] focus:ring-[#e5b6b0]"
      : "border-[color-mix(in_srgb,var(--color-ink)_14%,transparent)] focus:border-[var(--color-gold)]",
  ].join(" ");
}

function Field({
  id,
  label,
  error,
  required,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-ink"
      >
        {label}
        {required && <span className="text-gold-ink"> *</span>}
        {optional && (
          <span className="ml-1 font-normal text-muted">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`err-${id.replace("contact-", "")}`} className="mt-1.5 text-sm text-[#b4453a]">
          {error}
        </p>
      )}
    </div>
  );
}
