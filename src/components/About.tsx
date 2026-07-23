"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { BOOKING_URL } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[40vh] w-[40vh] rounded-full bg-emerald-soft/30 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold-3/25"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, rgba(6,32,26,0.1), rgba(6,32,26,0.5)), url('/portrait/tania.jpg')",
                  backgroundColor: "#0f4a39",
                }}
              />
            </motion.div>
            <div className="absolute -bottom-5 -right-4 glass rounded-2xl px-6 py-4">
              <p className="font-script text-3xl gold-text">Tania</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-cream-dim">
                Your Esthetician
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold-2">
              Meet Your Esthetician
            </p>
            <h2 className="mt-4 font-display text-5xl font-light leading-tight sm:text-6xl">
              Hi, I&apos;m <span className="gold-text italic">Titiana</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-dim">
              Skin Essentials by Tania is a boutique skincare studio built on one
              belief: healthy, radiant skin comes from treatments designed around{" "}
              <em className="text-cream">you</em> — never one-size-fits-all.
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-cream-dim">
              From advanced microchanneling and anti-aging facials to restorative
              body treatments, every appointment is personalized, unhurried, and
              focused on real results.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="mt-9 inline-block rounded-full border border-gold-3/50 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-1 transition-colors hover:bg-gold-3/10"
            >
              Book Your Visit
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
