"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/lib/data";

const links = [
  ["Services", "#services"],
  ["Gallery", "#gallery"],
  ["About", "#about"],
  ["Gift Cards", "#gift"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold tracking-[0.14em] gold-text">
            SE
          </span>
          <span className="hidden text-xs uppercase tracking-[0.34em] text-cream-dim sm:block">
            Skin Essentials
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[11px] uppercase tracking-[0.2em] text-cream-dim transition-colors hover:text-gold-2"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="btn-gloss rounded-full px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em]"
        >
          Book Now
        </a>
      </div>
    </motion.nav>
  );
}
