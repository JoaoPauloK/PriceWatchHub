import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { TrendingDown } from "lucide-react";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/">
          <a className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2" data-testid="link-home">
            <TrendingDown className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-xl">PriceWatch</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" asChild data-testid="link-features">
            <a href="#features">{t("nav.features")}</a>
          </Button>
          <Button variant="ghost" asChild data-testid="link-how-it-works">
            <a href="#how-it-works">{t("nav.howItWorks")}</a>
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild data-testid="button-get-started">
            <Link href="/dashboard">
              <a>{t("nav.getStarted")}</a>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
