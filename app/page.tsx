import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import Contact from "@/components/Contact";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BentoGridDemo />
      <GoogleGeminiEffectDemo />
      <AnimatedPinDemo />
      <Contact/>
    </>
  );
}
