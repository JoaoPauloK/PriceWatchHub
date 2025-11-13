import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_laptop_phone_mockup_8b5e4b5e.png";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            {t("features.unlimited.desc")}
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
              {t("hero.mercadoLivre")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/register">
              <Button size="lg" className="group" data-testid="button-hero-cta">
                <span className="flex items-center gap-2">
                  {t("hero.cta1")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild data-testid="button-hero-demo">
              <a href="#how-it-works" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                {t("hero.cta2")}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative lg:block hidden animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <img
              src={heroImage}
              alt="Price monitoring dashboard"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
