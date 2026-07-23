"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BOOKING_URL, GIFT_URL } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-emerald-soft/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-gold-3/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: yText, opacity }} variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 text-[11px] uppercase tracking-[0.42em] text-gold-2"
          >
            Aurora, Ontario · By Appointment
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-[15vw] leading-[0.9] font-light tracking-tight sm:text-7xl lg:text-8xl"
          >
            <span className="block gold-shine">Skin,</span>
            <span className="block italic text-cream">elevated.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-8 max-w-md text-lg leading-relaxed text-cream-dim"
          >
            Advanced facials, microchanneling, and body treatments — designed
            around your skin and delivered like a ritual.
            <span className="font-script text-2xl text-gold-2"> by Tania</span>
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="btn-gloss rounded-full px-9 py-4 text-xs font-medium uppercase tracking-[0.2em]"
            >
              Book an Appointment
            </a>
            <a
              href={GIFT_URL}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-gold-3/50 px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-1 transition-colors hover:bg-gold-3/10"
            >
              Gift a Treatment
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-gold-3/25 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, rgba(6,32,26,0.15), rgba(6,32,26,0.55)), url('https://d8j0ntlcm91z4.cloudfront.net/user_3EbjGm4qJSiV1t96YH9yJhkVhMv/hf_20260723_031645_334b0830-8c41-41e9-b6eb-9cc6130fe093.png')",
                backgroundColor: "#0a3229",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-5 left-5 glass rounded-2xl px-5 py-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold-2">
                Signature Facial
              </p>
              <p className="font-display text-lg text-cream">Glow, restored</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-cream-dim"
      >
        <span className="animate-pulse">Scroll</span>
      </motion.div>
    </section>
  );
}
