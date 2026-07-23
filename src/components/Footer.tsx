export default function Footer() {
  return (
    <footer className="border-t border-gold-3/15 py-10 text-center">
      <p className="font-display text-2xl gold-text">SE ✦</p>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cream-dim">
        © {new Date().getFullYear()} Skin Essentials by Tania · Aurora, Ontario
      </p>
      <p className="mt-1 text-xs text-cream-dim/60">@skinessentials_bytania</p>
    </footer>
  );
}
