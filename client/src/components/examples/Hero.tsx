import { Hero } from "../landing/Hero";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function HeroExample() {
  return (
    <LanguageProvider>
      <Hero />
    </LanguageProvider>
  );
}
