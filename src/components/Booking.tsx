"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { BOOKING_URL } from "@/lib/data";

export default function Booking() {
  return (
    <section id="book" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-2/20 blur-[90px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="relative text-[11px] uppercase tracking-[0.4em] text-gold-2">
            Reserve Your Time
          </p>
          <h2 className="relative mt-4 font-display text-5xl font-light sm:text-6xl">
            Book your <span className="gold-shine italic">ritual</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-cream-dim">
            Live availability and instant confirmation through Tania&apos;s
            secure Square booking.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="btn-gloss relative mt-9 inline-block rounded-full px-10 py-4 text-xs font-medium uppercase tracking-[0.2em]"
          >
            Open Booking &amp; Reserve
          </a>
        </div>
      </Reveal>
    </section>
  );
}
