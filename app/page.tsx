import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";

import { BentoGridDemo } from "@/components/BentoGridDemo";
import Contact from "@/components/Contact";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BentoGridDemo />
      <GoogleGeminiEffectDemo />
      <ThreeDCardDemo/>
      <Contact/>
    </>
  );
}
