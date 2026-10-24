"use client";
import { useState } from "react";
const EMAIL = "kavyanaik0322@gmail.com";
export default function ContactForm() {
  const [st, setSt] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [err, setErr] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");
  async function sub(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = new FormData(f);
    const v: Record<string, string> = {};
    if (!String(d.get("name")).trim()) v.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(d.get("email")).trim()))
      v.email = "Enter a valid email address.";
    if (String(d.get("message")).trim().length < 10)
      v.message = "Message should be at least 10 characters.";
    setErr(v);
    setSt("idle");
    if (Object.keys(v).length) return;
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!id) {
      setSt("err");
      setMsg("The contact form isn’t configured yet.");
      return;
    }
    setSt("sending");
    try {
      const r = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        body: d,
        headers: { Accept: "application/json" },
      });
      if (r.ok) {
        setSt("ok");
        f.reset();
      } else throw new Error();
    } catch {
      setSt("err");
      setMsg("Your message couldn’t be sent.");
    }
  }
  const c =
    "mt-2 w-full bg-silver/10 text-silver placeholder:text-silver/50 border border-silver/60 px-4 py-3 text-base outline-none focus:border-amber focus:ring-2 focus:ring-amber";
  const F = ({
    id,
    label,
    children,
  }: {
    id: string;
    label: string;
    children: React.ReactNode;
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-silver">
        {label}{" "}
        <span className="text-amber" aria-hidden>
          *
        </span>
      </label>
      {children}
      {err[id] && (
        <p id={id + "-e"} className="text-amber text-sm mt-1">
          {err[id]}
        </p>
      )}
    </div>
  );
  const a = (id: string) => ({
    id,
    name: id,
    required: true,
    className: c,
    "aria-invalid": !!err[id],
    "aria-describedby": err[id] ? id + "-e" : undefined,
  });
  return (
    <form
      onSubmit={sub}
      noValidate
      className="space-y-5"
      aria-label="Contact form"
    >
      <F id="name" label="Name">
        <input {...a("name")} type="text" autoComplete="name" />
      </F>
      <F id="email" label="Email">
        <input {...a("email")} type="email" autoComplete="email" />
      </F>
      <F id="message" label="Message">
        <textarea {...a("message")} rows={5} />
      </F>
      <button
        className="btn text-silver disabled:opacity-60"
        disabled={st === "sending"}
      >
        {st === "sending" ? "Sending…" : "Send message"}
      </button>
      <div aria-live="polite">
        {st === "ok" && (
          <p className="text-amber">Thank you — your message was sent.</p>
        )}
        {st === "err" && (
          <p className="text-amber">
            {msg} Please email{" "}
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>{" "}
            directly.
          </p>
        )}
      </div>
    </form>
  );
}
