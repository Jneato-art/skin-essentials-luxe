"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Editorial visuals are Higgsfield-generated placeholders. Drop Tania's real
// studio/treatment photos into /public/gallery and swap the src values.
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3EbjGm4qJSiV1t96YH9yJhkVhMv";
const TILES = [
  { label: "Radiant Skin", span: "md:row-span-2", src: `${CDN}/hf_20260723_031645_680d9790-10e6-4d73-a186-4089a372b0ce.png` },
  { label: "The Studio", span: "", src: "/gallery/2.jpg" },
  { label: "The Glow", span: "", src: `${CDN}/hf_20260723_031643_6c1c8b3c-93d6-46c7-91e8-557ee90ce8c2.png` },
  { label: "Luminous Detail", span: "md:col-span-2", src: `${CDN}/hf_20260723_031643_aaccdac6-995a-4c33-9aae-1884d1794a84.png` },
  { label: "Details", span: "", src: "/gallery/5.jpg" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="text-center text-[11px] uppercase tracking-[0.4em] text-gold-2">
          The Experience
        </p>
        <h2 className="mt-4 text-center font-display text-5xl font-light sm:text-6xl">
          <span className="gold-text">A quiet luxury</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3">
        {TILES.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-2xl border border-gold-3/20 ${t.span}`}
          >
            <div
              className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(160deg, rgba(15,74,57,0.55), rgba(6,32,26,0.85)), url('${t.src}')`,
                backgroundColor: "#0a3229",
              }}
            />
            <div className="absolute inset-0 flex items-end p-5">
              <span className="text-[11px] uppercase tracking-[0.24em] text-cream/80">
                {t.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-cream-dim/70">
        Photos drop into <span className="text-gold-2">/public/gallery</span> — the tiles fill automatically.
      </p>
    </section>
  );
}
