import { Navbar } from "../landing/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    </ThemeProvider>
  );
}
