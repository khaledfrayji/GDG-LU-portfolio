import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";

import { BentoGridDemo } from "@/components/BentoGridDemo";
import Chatbot from "@/components/Chatbot";
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
      <div id="about">
        <BentoGridDemo />
      </div>
      <div id="projects">
        <GoogleGeminiEffectDemo />
      </div>
      <ThreeDCardDemo />
      <Chatbot/>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
