"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const REVIEWS = [
  { quote: "My skin has never looked better. Tania is an absolute artist — every visit feels like a reset.", name: "Sofia M." },
  { quote: "The microchanneling results blew me away. Booking was seamless and the space feels so luxe.", name: "Rachel D." },
  { quote: "I drive 40 minutes for her facials and it's worth every second. Glowing for weeks after.", name: "Amanda K." },
  { quote: "Finally someone who actually listens to my skin. The signature facial is pure heaven.", name: "Priya S." },
  { quote: "Professional, warm, and results-driven. My rosacea has calmed down so much.", name: "Chantal L." },
  { quote: "The gift card I got my mom turned into a monthly ritual for her. She's obsessed.", name: "Melissa T." },
];

function Card({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="glass mx-3 w-[320px] shrink-0 rounded-2xl px-7 py-6 sm:w-[380px]">
      <div className="mb-3 text-gold-2">★★★★★</div>
      <p className="text-cream/90 leading-relaxed">“{quote}”</p>
      <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold-2">
        {name}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const row = [...REVIEWS, ...REVIEWS];
  return (
    <section className="overflow-hidden py-28">
      <Reveal>
        <p className="text-center text-[11px] uppercase tracking-[0.4em] text-gold-2">
          Kind Words
        </p>
        <h2 className="mt-4 text-center font-display text-5xl font-light sm:text-6xl">
          <span className="gold-text">Loved by clients</span>
        </h2>
      </Reveal>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {row.map((r, i) => (
            <Card key={i} {...r} />
          ))}
        </motion.div>
      </div>
      <p className="mt-8 text-center text-xs text-cream-dim/60">
        Sample reviews — swap in real client testimonials any time.
      </p>
    </section>
  );
}
