const WORDS = [
  "Radiance",
  "Microchanneling",
  "Dewy Glow",
  "Dermaplaning",
  "Anti-Aging",
  "Hydra-Exfo",
  "Sculpted",
  "Luminous",
  "Signature Facial",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-gold-3/20 bg-emerald-deep/40 py-6">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-display text-2xl italic text-cream/80 sm:text-3xl">
              {w}
            </span>
            <span className="mx-8 text-gold-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
