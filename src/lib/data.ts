export const BOOKING_URL =
  "https://book.squareup.com/appointments/ebzcxzurtyok31/location/L9H3SR8J37T49/services";
export const GIFT_URL = "https://app.squareup.com/gift/ML7D9BSEN6SQB/order";
export const INSTAGRAM_URL = "https://instagram.com/skinessentials_bytania";
export const FACEBOOK_URL = "https://facebook.com";
export const PHONE = "647-761-9757";
export const EMAIL = "taniaskinessentials@gmail.com";

export type Service = {
  name: string;
  duration: string;
  price: string;
  keywords: string;
  category: "Face" | "Body";
};

export const SERVICES: Service[] = [
  { name: "Procell Microchanneling", duration: "60 min", price: "$285", category: "Face", keywords: "microneedling collagen" },
  { name: "Procell Microchanneling MD", duration: "60 min", price: "$325", category: "Face", keywords: "microneedling collagen advanced" },
  { name: "Tania's Signature Facial", duration: "90 min", price: "$130", category: "Face", keywords: "signature custom facial" },
  { name: "Anti-Aging — Tightening & Lifting", duration: "90 min", price: "$120", category: "Face", keywords: "anti aging firming" },
  { name: "Lifting Code — Diffusion Filler", duration: "90 min", price: "$150", category: "Face", keywords: "filler lifting plump" },
  { name: "Primaluce Exfo-White", duration: "60 min", price: "$130", category: "Face", keywords: "brightening exfoliation glow" },
  { name: "Hydra-Exfo Beauty", duration: "75 min", price: "$140", category: "Face", keywords: "hydrafacial hydration exfoliation" },
  { name: "Hadado Japanese Face Lift Massage", duration: "60–90 min", price: "$120–160", category: "Face", keywords: "massage sculpting lymphatic" },
  { name: "Acne Facial", duration: "75 min", price: "Varies", category: "Face", keywords: "acne breakout clear" },
  { name: "Microdermabrasion", duration: "55 min", price: "$120", category: "Face", keywords: "exfoliation resurfacing" },
  { name: "Dermaplaning", duration: "55 min", price: "$95", category: "Face", keywords: "exfoliation smooth peach fuzz" },
  { name: "Deep Cleansing", duration: "60 min", price: "$110", category: "Face", keywords: "cleanse pores detox" },
  { name: "De-Sense — Instant Relief", duration: "60 min", price: "$110", category: "Face", keywords: "sensitive soothing calming" },
  { name: "Body Coffee-Shape", duration: "90 min", price: "$135", category: "Body", keywords: "contour caffeine slimming" },
  { name: "Glow Body Exfoliation", duration: "60 min", price: "$105", category: "Body", keywords: "scrub smooth glow" },
  { name: "Anticellulite Treatment", duration: "75 min", price: "Varies", category: "Body", keywords: "cellulite firming" },
  { name: "Brightening Treatment", duration: "30 min", price: "Varies", category: "Body", keywords: "brightening even tone" },
];

export const ADDONS = [
  "LED Light Therapy — $30",
  "Microdermabrasion — $30",
  "Lash & Brow Tint — $35",
  "Consultation — $30",
];
