import { Testimonials } from "../landing/Testimonials";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function TestimonialsExample() {
  return (
    <LanguageProvider>
      <Testimonials />
    </LanguageProvider>
  );
}
