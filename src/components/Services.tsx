"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES, ADDONS, BOOKING_URL } from "@/lib/data";
import Reveal from "./Reveal";

type Filter = "All" | "Face" | "Body";

export default function Services() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const matchesFilter = filter === "All" || s.category === filter;
      const hay = `${s.name} ${s.keywords} ${s.category}`.toLowerCase();
      return matchesFilter && (q === "" || hay.includes(q));
    });
  }, [query, filter]);

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="text-center text-[11px] uppercase tracking-[0.4em] text-gold-2">
          The Menu
        </p>
        <h2 className="mt-4 text-center font-display text-5xl font-light sm:text-6xl">
          <span className="gold-text">Treatments</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-center text-cream-dim">
          Search the menu, filter by focus, then book your ritual. Prices in CAD.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 sm:flex-row">
          <div className="relative w-full">
            <svg
              viewBox="0 0 24 24"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 fill-gold-2/80"
            >
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search — facial, glow, lifting…"
              className="w-full rounded-full border border-gold-3/30 bg-white/5 py-4 pl-12 pr-5 text-cream outline-none transition focus:border-gold-2"
            />
          </div>
          <div className="flex gap-2">
            {(["All", "Face", "Body"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.16em] transition ${
                  filter === f
                    ? "btn-gloss font-medium"
                    : "border border-gold-3/30 text-cream-dim hover:text-gold-2"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <motion.div layout className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {results.map((s) => (
            <motion.a
              layout
              key={s.name}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group glass flex items-baseline justify-between gap-6 rounded-2xl px-7 py-6 transition-colors hover:border-gold-2/50"
            >
              <div>
                <h3 className="text-lg text-cream transition-colors group-hover:text-gold-1">
                  {s.name}
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-cream-dim">
                  {s.category} · {s.duration}
                </p>
              </div>
              <span className="font-display text-2xl gold-text">{s.price}</span>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {results.length === 0 && (
        <p className="mt-10 text-center italic text-cream-dim">
          No treatments match “{query}” — try “facial”, “body”, or “glow”.
        </p>
      )}

      <Reveal delay={0.05}>
        <p className="mt-12 text-center text-sm text-cream-dim">
          Add-ons:{" "}
          {ADDONS.map((a, i) => (
            <span key={a}>
              <span className="text-gold-2">{a}</span>
              {i < ADDONS.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
