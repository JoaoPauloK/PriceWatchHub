import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 rounded-md border border-border p-1" data-testid="language-toggle">
      <Button
        variant={language === "en" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        data-testid="button-language-en"
        className="px-3 min-h-8"
      >
        EN
      </Button>
      <Button
        variant={language === "pt" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("pt")}
        data-testid="button-language-pt"
        className="px-3 min-h-8"
      >
        PT
      </Button>
    </div>
  );
}
