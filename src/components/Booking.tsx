"use client";

import { useMemo, useState } from "react";
import {
  CalendarCheck,
  CheckCircle,
  WhatsappLogo,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import { SITE, WHATSAPP_LINK, EVENT_OPTIONS, PACKAGE_OPTIONS } from "@/lib/site";
import { supabase } from "@/lib/supabase";

type FormValues = {
  name: string;
  phone: string;
  event_date: string;
  event_type: string;
  package_interest: string;
  event_location: string;
  message: string;
  company: string;
};

const INITIAL: FormValues = {
  name: "",
  phone: "",
  event_date: "",
  event_type: EVENT_OPTIONS[0],
  package_interest: PACKAGE_OPTIONS[0],
  event_location: "",
  message: "",
  company: "",
};

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-base text-ink placeholder:text-faint transition-colors duration-300 focus:border-accent focus:bg-surface focus:outline-none";

const selectArrow =
  "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%3E%3Cpath%20d%3D%22M3%205l4%204%204-4%22%20stroke%3D%22%23646a72%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10";

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink-dim">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-[13px] text-accent-soft">
          {error}
        </span>
      ) : hint ? (
        <span className="mt-1.5 block text-xs text-muted">{hint}</span>
      ) : null}
    </label>
  );
}

function todayMin() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(
    n.getDate(),
  ).padStart(2, "0")}`;
}

function prettyDate(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildMessage(values: FormValues) {
  const lines = [
    `Assalam o Alaikum, I would like to enquire about photography with ${SITE.name}.`,
    `Event type: ${values.event_type}`,
    `Event date: ${values.event_date ? prettyDate(values.event_date) : "Flexible"}`,
    `Package interest: ${values.package_interest}`,
  ];
  if (values.event_location.trim())
    lines.push(`Venue / city: ${values.event_location.trim()}`);
  if (values.message.trim()) lines.push(`Notes: ${values.message.trim()}`);
  lines.push(`Name: ${values.name.trim()}`, `Phone: ${values.phone.trim()}`);
  return lines.join("\n");
}

export default function Booking() {
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const set = (k: keyof FormValues) => (v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  const whatsappLink = useMemo(
    () => `${WHATSAPP_LINK}?text=${encodeURIComponent(buildMessage(values))}`,
    [values],
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = "Please add your name.";
    const digits = values.phone.replace(/\D/g, "").replace(/^92/, "");
    if (digits.length < 10) errs.phone = "Enter a valid phone number.";
    if (!values.event_date) errs.event_date = "Pick your event date.";
    if (!values.event_type) errs.event_type = "Choose an event type.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);

    // Honeypot: a filled hidden field means a bot — pretend success, save nothing.
    if (!values.company.trim()) {
      const { error } = await supabase().from("photography_inquiries").insert({
        name: values.name.trim(),
        phone: values.phone.trim(),
        event_date: values.event_date,
        event_type: values.event_type,
        package_interest: values.package_interest,
        event_location: values.event_location.trim() || null,
        message: values.message.trim() || null,
      });
      if (error) {
        setSubmitting(false);
        setSubmitError(
          "We couldn't save your request right now. Please try again or reach us directly on WhatsApp.",
        );
        return;
      }
    }

    setSubmitting(false);
    setDone(true);
  }

  function reset() {
    setValues(INITIAL);
    setErrors({});
    setSubmitError(null);
    setDone(false);
  }

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-paper py-28 sm:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(70% 50% at 85% 0%, rgba(36,85,126,0.07), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Booking
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Tell us about <em className="italic">your</em> celebration.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              Share a few details and we&rsquo;ll come back to you on WhatsApp
              with availability and a quote. Nothing is confirmed until
              we&rsquo;ve talked — no deposits online.
            </p>

            <ol className="mt-10 space-y-5">
              {[
                "Tell us your date, venue and event type.",
                "We confirm availability on WhatsApp, usually within 24 hours.",
                "Meet, talk it through, and lock your date with a small advance.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-medium text-paper">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-base leading-relaxed text-ink-dim">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col gap-3 border-t border-line pt-7 text-sm text-muted sm:flex-row sm:items-center sm:gap-6">
              <span className="flex items-center gap-2.5">
                <Phone size={16} className="text-accent" />
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="font-medium text-ink hover:text-accent"
                >
                  {SITE.phoneDisplay}
                </a>
              </span>
              <span className="hidden text-faint sm:inline">&middot;</span>
              <span>Usually replies within a day</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {done ? (
              <div className="rounded-[2rem] bg-sand p-1.5 ring-1 ring-line">
                <div className="rounded-[calc(2rem-0.375rem)] bg-surface p-8 sm:p-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle size={28} weight="fill" />
                  </span>
                  <h3 className="mt-6 font-display text-4xl font-medium tracking-tight">
                    Thanks, {values.name.split(" ")[0]}.
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    Your inquiry for{" "}
                    <span className="font-medium text-ink-dim">
                      {values.event_type}
                    </span>{" "}
                    on{" "}
                    <span className="font-medium text-ink-dim">
                      {prettyDate(values.event_date)}
                    </span>{" "}
                    is in. We&rsquo;ll reach out on WhatsApp within 24 hours to
                    confirm availability.
                  </p>
                  <div className="mt-8 grid gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-base font-semibold text-paper transition-all duration-300 hover:bg-accent active:scale-[0.98]"
                    >
                      <WhatsappLogo size={20} weight="fill" />
                      Send these details on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex w-full items-center justify-center rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                noValidate
                className="rounded-[2rem] bg-sand p-1.5 ring-1 ring-line"
              >
                <div className="rounded-[calc(2rem-0.375rem)] bg-surface p-6 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Field label="Full name" error={errors.name}>
                        <input
                          type="text"
                          value={values.name}
                          onChange={(e) => set("name")(e.target.value)}
                          placeholder="e.g. Ayesha Khan"
                          autoComplete="name"
                          className={inputCls}
                        />
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <Field
                        label="Phone number"
                        error={errors.phone}
                        hint="We'll confirm on WhatsApp."
                      >
                        <div className="relative">
                          <input
                            type="tel"
                            inputMode="tel"
                            value={values.phone}
                            onChange={(e) => set("phone")(e.target.value)}
                            placeholder="300 1234567"
                            autoComplete="tel"
                            className={`${inputCls} pl-16`}
                          />
                          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-base text-muted">
                            +92
                          </span>
                        </div>
                      </Field>
                    </div>

                    <Field label="Event type" error={errors.event_type}>
                      <select
                        value={values.event_type}
                        onChange={(e) => set("event_type")(e.target.value)}
                        className={`${inputCls} ${selectArrow}`}
                      >
                        {EVENT_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Package interest"
                      hint="Not sure? Pick 'Not sure yet'."
                    >
                      <select
                        value={values.package_interest}
                        onChange={(e) =>
                          set("package_interest")(e.target.value)
                        }
                        className={`${inputCls} ${selectArrow}`}
                      >
                        {PACKAGE_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <div className="sm:col-span-2">
                      <Field label="Event date" error={errors.event_date}>
                        <input
                          type="date"
                          value={values.event_date}
                          min={todayMin()}
                          onChange={(e) => set("event_date")(e.target.value)}
                          className={inputCls}
                        />
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <Field
                        label="Venue / city"
                        hint="Optional — helps us check availability."
                      >
                        <input
                          type="text"
                          value={values.event_location}
                          onChange={(e) => set("event_location")(e.target.value)}
                          placeholder="e.g. Pearl Continental, Lahore"
                          autoComplete="street-address"
                          className={inputCls}
                        />
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <Field label="Anything we should know?" hint="Optional.">
                        <textarea
                          value={values.message}
                          onChange={(e) => set("message")(e.target.value)}
                          rows={3}
                          placeholder="A short note about the day, the vibe, or what matters most."
                          className={`${inputCls} resize-none`}
                        />
                      </Field>
                    </div>

                    {/* Honeypot — hidden from users, bots fill it in. */}
                    <input
                      type="text"
                      value={values.company}
                      onChange={(e) => set("company")(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    />
                  </div>

                  {submitError && (
                    <p className="mt-6 rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-accent">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-base font-semibold text-paper transition-all duration-300 hover:bg-accent active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <CalendarCheck size={20} weight="light" />
                    {submitting ? "Sending…" : "Send Booking Request"}
                  </button>

                  <p className="mt-4 text-center text-[13px] leading-relaxed text-muted">
                    We only use your details to respond to this inquiry.
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
