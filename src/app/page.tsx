import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import GiftCards from "@/components/GiftCards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Booking />
      <GiftCards />
      <Contact />
      <Footer />
    </main>
  );
}
