import { Features } from "../landing/Features";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function FeaturesExample() {
  return (
    <LanguageProvider>
      <Features />
    </LanguageProvider>
  );
}
