"use client";

import { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  "Editorial / Photoshoot",
  "Runway / Fashion Show",
  "Brand Campaign",
  "Lookbook",
  "Commercial / TV",
  "UGC Content",
  "Event Appearance",
  "Other",
];

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
      : null;

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!endpoint) {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#c4622d]/40 bg-[#c4622d]/5 p-10 text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-4xl italic text-[#f0ebe0] mb-3">
          Message Received
        </p>
        <p className="font-[family-name:var(--font-jost)] text-xs tracking-[0.2em] text-[#8a8478]">
          Thank you — Anneika will be in touch within 48 hours.
        </p>
        <button
          onClick={() => { setStatus("idle"); formRef.current?.reset(); }}
          className="mt-6 font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#c4622d] border-b border-[#c4622d] pb-0.5"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-[rgba(240,235,224,0.12)] px-4 py-3.5 " +
    "font-[family-name:var(--font-jost)] text-xs text-[#f0ebe0] placeholder:text-[#8a8478] " +
    "focus:outline-none focus:border-[#c4622d] transition-colors duration-200";

  const labelClass =
    "font-[family-name:var(--font-jost)] text-[9px] tracking-[0.35em] uppercase text-[#8a8478] mb-1.5 block";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (000) 000-0000"
          className={inputClass}
        />
      </div>

      {/* Project type */}
      <div>
        <label htmlFor="projectType" className={labelClass}>Project Type *</label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled className="bg-[#161616]">
            Select project type
          </option>
          {PROJECT_TYPES.map((p) => (
            <option key={p} value={p} className="bg-[#161616]">{p}</option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date" className={labelClass}>Preferred Date / Timeline (optional)</label>
        <input
          id="date"
          name="preferredDate"
          type="text"
          placeholder="e.g. August 2026 or flexible"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project, brand, or concept..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] text-red-400">
          Something went wrong — please email hello@anneikajc.com directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase bg-[#c4622d] text-white hover:bg-[#e07840] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </button>

      <p className="text-center font-[family-name:var(--font-jost)] text-[9px] tracking-[0.2em] text-[#8a8478]">
        Replies within 48 hours &bull; All enquiries kept confidential
      </p>
    </form>
  );
}
