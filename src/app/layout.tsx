import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skinessentialsbytania.com"),
  title: "Skin Essentials by Tania | Luxury Facials & Skincare in Aurora, ON",
  description:
    "Personalized, results-driven skincare in Aurora, Ontario. Advanced facials, microchanneling, and body treatments by Titiana 'Tania' Jurj. Book online or gift a treatment.",
  keywords: [
    "esthetician Aurora",
    "facials Aurora Ontario",
    "microchanneling",
    "skincare Aurora",
    "dermaplaning",
    "Skin Essentials by Tania",
  ],
  openGraph: {
    title: "Skin Essentials by Tania | Luxury Skincare in Aurora, ON",
    description:
      "Personalized, results-driven skincare in Aurora, Ontario. Book online or gift a treatment.",
    url: "https://www.skinessentialsbytania.com",
    type: "website",
  },
  alternates: { canonical: "https://www.skinessentialsbytania.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <SmoothScroll>{children}</SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Skin Essentials by Tania",
              description:
                "Personalized facials, microchanneling, anti-aging and body treatments in Aurora, Ontario.",
              url: "https://www.skinessentialsbytania.com/",
              telephone: "+1-647-761-9757",
              email: "taniaskinessentials@gmail.com",
              priceRange: "$$",
              areaServed: { "@type": "City", name: "Aurora" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Aurora",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              sameAs: ["https://instagram.com/skinessentials_bytania"],
            }),
          }}
        />
      </body>
    </html>
  );
}
