"use client";

import Reveal from "./Reveal";
import { GIFT_URL } from "@/lib/data";

export default function GiftCards() {
  return (
    <section id="gift" className="relative overflow-hidden border-y border-gold-3/20 bg-emerald-deep/40 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-display text-6xl font-semibold gold-shine">SE ✦</span>
          <p className="mt-6 text-[11px] uppercase tracking-[0.4em] text-gold-2">
            The Gift of Glow
          </p>
          <h2 className="mt-4 font-display text-5xl font-light sm:text-6xl">
            <span className="gold-text">Gift Cards</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-cream-dim">
            Treat someone to a facial, a body treatment, or let them choose.
            Digital gift cards delivered by email — for birthdays, holidays, and
            just because.
          </p>
          <a
            href={GIFT_URL}
            target="_blank"
            rel="noopener"
            className="btn-gloss mt-9 inline-block rounded-full px-10 py-4 text-xs font-medium uppercase tracking-[0.2em]"
          >
            Purchase a Gift Card
          </a>
        </Reveal>
      </div>
    </section>
  );
}
