import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles } from "lucide-react";

export function CTASection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-pulse-glow">
          <Sparkles className="h-4 w-4" />
          {language === "en" ? "Free Forever" : "Grátis Para Sempre"}
        </div>

        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
          {t("cta.title")}
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("cta.subtitle")}
        </p>

        <Link href="/register">
          <Button size="lg" className="group text-lg px-8 py-6" data-testid="button-cta-main">
            {t("cta.button")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
