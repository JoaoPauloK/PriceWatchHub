import { HowItWorks } from "../landing/HowItWorks";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function HowItWorksExample() {
  return (
    <LanguageProvider>
      <HowItWorks />
    </LanguageProvider>
  );
}
