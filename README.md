# Skin Essentials by Tania — Luxe Website

A premium, animated website for **Skin Essentials by Tania** (esthetician, Aurora ON) — "Modern Glossy Beauty" aesthetic. Built as an art piece, not a template.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · Framer Motion · Lenis smooth scroll · Higgsfield-generated visuals.

Bookings, gift cards, and payments all run through Titiana "Tania" Jurj's existing **Square** account — nothing new to maintain on the money side.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Sections
Hero (parallax + staggered reveal) · marquee · searchable/filterable Services · Gallery · About Tania · Testimonials (auto-scroll) · Booking (Square) · Gift Cards (Square) · Contact. Home address kept private (Aurora / by appointment).

## To make it fully hers
1. **Logo** — add `public/logo.png` (transparent) and swap the "SE" text monogram in `Nav.tsx`, `GiftCards.tsx`, `Footer.tsx`.
2. **Tania's photo** — add `public/portrait/tania.jpg`; `About.tsx` picks it up.
3. **Gallery photos** — drop real studio/treatment shots into `public/gallery/` and set the `src` values in `Gallery.tsx`.
4. **Generated visuals** — the hero + gallery currently reference Higgsfield image URLs. For permanence, download them into `public/generated/` and update the URLs, or replace with real photos.
5. **Inline booking** — Square Dashboard → Appointments → Online Booking → Add to website; paste the snippet in `Booking.tsx` where marked.
6. **Testimonials** — swap the sample reviews in `Testimonials.tsx` for real ones.

## Deploy (free)
Push to GitHub (done) → import at vercel.com → Deploy. Add the domain `skinessentialsbytania.com` in Vercel → Settings → Domains.

Editing content (text, prices, links) is simple — most lives in `src/lib/data.ts` and the component files.
