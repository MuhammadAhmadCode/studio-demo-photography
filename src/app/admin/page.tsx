"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import {
  SignOut,
  WhatsappLogo,
  ArrowLeft,
  Trash,
} from "@phosphor-icons/react/dist/ssr";

type Inquiry = {
  id: string;
  name: string;
  phone: string;
  event_date: string | null;
  event_type: string;
  package_interest: string | null;
  event_location: string | null;
  message: string | null;
  status: string;
  notes: string | null;
  created_at: string;
};

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-base text-ink placeholder:text-faint transition-colors duration-300 focus:border-accent focus:outline-none";

const STATUSES = [
  { value: "requested", label: "Requested" },
  { value: "contacted", label: "Contacted" },
  { value: "confirmed", label: "Confirmed" },
  { value: "closed", label: "Closed" },
];

function formatDate(key: string | null) {
  if (!key) return "—";
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authBusy, setAuthBusy] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase()
      .auth.getSession()
      .then(({ data }) => {
        setSession(data.session);
        setLoadingAuth(false);
      });
    const {
      data: { subscription },
    } = supabase().auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setLoadingAuth(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;
    load();
  }, [session]);

  async function load() {
    setBusy(true);
    const { data, error } = await supabase()
      .from("photography_inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    setBusy(false);
    if (error) return;
    setInquiries((data ?? []) as Inquiry[]);
  }

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setAuthBusy(true);
    setAuthError(null);
    const { error } = await supabase().auth.signInWithPassword({
      email,
      password,
    });
    setAuthBusy(false);
    if (error) setAuthError("Sign-in failed. Check your email or password.");
  }

  async function signOut() {
    await supabase().auth.signOut();
    setSession(null);
  }

  async function update(id: string, patch: Partial<Inquiry>) {
    await supabase().from("photography_inquiries").update(patch).eq("id", id);
    setInquiries((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...patch } : b)),
    );
  }

  async function remove(id: string) {
    await supabase().from("photography_inquiries").delete().eq("id", id);
    setInquiries((prev) => prev.filter((b) => b.id !== id));
  }

  if (loadingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper">
        Loading…
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper px-5 py-16">
        <div className="w-full max-w-sm">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
          >
            <ArrowLeft size={16} /> Back to site
          </Link>
          <div className="rounded-[1.75rem] border border-line bg-surface p-8 ring-1 ring-accent/15">
            <h1 className="font-display text-3xl font-medium">Admin</h1>
            <p className="mt-2 text-sm text-muted">
              Sign in to view and manage booking inquiries.
            </p>
            <form onSubmit={signIn} className="mt-7 space-y-4" noValidate>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink-dim">
                  Email
                </span>
                <input
                  type="email"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                  placeholder="admin@example.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink-dim">
                  Password
                </span>
                <input
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputCls}
                  placeholder="••••••••"
                />
              </label>
              {authError && <p className="text-sm text-accent-soft">{authError}</p>}
              <button
                type="submit"
                disabled={authBusy}
                className="w-full rounded-full bg-ink px-6 py-3.5 text-base font-semibold text-paper transition-all duration-300 hover:bg-accent disabled:opacity-70"
              >
                {authBusy ? "Signing in…" : "Sign in"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const active = inquiries.filter((i) => i.status !== "closed").length;

  return (
    <main className="min-h-screen bg-paper px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-medium sm:text-4xl">
              Inquiries
            </h1>
            <p className="mt-1 text-sm text-muted">
              {inquiries.length} total · {active} active
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={load}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
            >
              Refresh
            </button>
            <Link
              href="/"
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              View site
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <SignOut size={16} /> Sign out
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-line bg-surface">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-4 font-semibold">Date</th>
                  <th className="px-5 py-4 font-semibold">Event</th>
                  <th className="px-5 py-4 font-semibold">Package</th>
                  <th className="px-5 py-4 font-semibold">Customer</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold">Notes</th>
                  <th className="px-5 py-4 font-semibold" aria-label="Actions" />
                </tr>
              </thead>
              <tbody>
                {busy && inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-5 py-10 text-center text-muted">
                      Loading inquiries…
                    </td>
                  </tr>
                ) : inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-5 py-10 text-center text-muted">
                      No inquiries yet. Share the site link to start collecting
                      requests.
                    </td>
                  </tr>
                ) : (
                  inquiries.map((q) => (
                    <tr
                      key={q.id}
                      className="border-b border-line/60 align-top last:border-0"
                    >
                      <td className="whitespace-nowrap px-5 py-4 font-medium text-accent">
                        {formatDate(q.event_date)}
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-medium text-ink">{q.event_type}</p>
                        {q.event_location && (
                          <p className="mt-0.5 text-xs text-muted">
                            {q.event_location}
                          </p>
                        )}
                        {q.message && (
                          <p className="mt-1.5 max-w-[220px] text-xs italic leading-relaxed text-muted">
                            &ldquo;{q.message}&rdquo;
                          </p>
                        )}
                      </td>
                      <td className="px-5 py-4">{q.package_interest ?? "—"}</td>
                      <td className="px-5 py-4">
                        <p className="font-medium text-ink">{q.name}</p>
                        <div className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
                          {q.phone}
                          <a
                            href={`https://wa.me/92${q.phone.replace(/[^\d]/g, "").replace(/^92/, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent-soft"
                            aria-label={`WhatsApp ${q.name}`}
                          >
                            <WhatsappLogo size={13} weight="fill" />
                          </a>
                        </div>
                        <p className="text-xs text-faint">
                          {new Date(q.created_at).toLocaleString("en-GB")}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {STATUSES.map((s) => (
                            <button
                              key={s.value}
                              type="button"
                              onClick={() => update(q.id, { status: s.value })}
                              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                                q.status === s.value
                                  ? s.value === "closed"
                                    ? "bg-ink text-paper"
                                    : "bg-accent text-paper"
                                  : "bg-paper text-muted hover:text-ink"
                              }`}
                            >
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <input
                          type="text"
                          defaultValue={q.notes ?? ""}
                          onBlur={(e) =>
                            e.target.value !== (q.notes ?? "") &&
                            update(q.id, { notes: e.target.value || null })
                          }
                          placeholder="Add a note…"
                          className="w-40 rounded-lg border border-line bg-paper px-3 py-2 text-xs text-ink placeholder:text-faint focus:border-accent focus:outline-none"
                        />
                      </td>
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() => remove(q.id)}
                          aria-label={`Delete inquiry from ${q.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
                        >
                          <Trash size={15} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
