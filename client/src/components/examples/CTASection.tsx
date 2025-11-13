import { CTASection } from "../landing/CTASection";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function CTASectionExample() {
  return (
    <LanguageProvider>
      <CTASection />
    </LanguageProvider>
  );
}
