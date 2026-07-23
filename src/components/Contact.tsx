"use client";

import Reveal from "./Reveal";
import { PHONE, EMAIL, INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28 text-center">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold-2">
          Get in Touch
        </p>
        <h2 className="mt-4 font-display text-5xl font-light sm:text-6xl">
          <span className="gold-text">Book &amp; Connect</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-cream-dim">
          Serving Aurora, Ontario and surrounding areas — by appointment only.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Phone / Text", value: PHONE, href: `tel:+1${PHONE.replace(/-/g, "")}` },
            { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
            { label: "Location", value: "Aurora, ON · By Appointment" },
          ].map((c) => (
            <div key={c.label} className="glass rounded-2xl px-6 py-8">
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold-2">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-3 block font-display text-xl text-cream transition-colors hover:text-gold-1"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-3 font-display text-xl text-cream">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 flex justify-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-3/50 text-gold-1 transition-colors hover:bg-gold-3 hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2m0 3.38a4.44 4.44 0 1 0 0 8.88 4.44 4.44 0 0 0 0-8.88m0 7.32a2.88 2.88 0 1 1 0-5.76 2.88 2.88 0 0 1 0 5.76m5.65-7.5a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0" />
            </svg>
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-3/50 text-gold-1 transition-colors hover:bg-gold-3 hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12" />
            </svg>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
