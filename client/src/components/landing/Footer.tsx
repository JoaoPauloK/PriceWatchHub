import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingDown } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2" data-testid="link-footer-home">
                <TrendingDown className="h-6 w-6 text-primary" />
                <span className="font-display font-bold text-xl">PriceWatch</span>
              </a>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.product")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors" data-testid="link-footer-features">{t("footer.features")}</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors" data-testid="link-footer-how">{t("footer.howItWorks")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-about">{t("footer.about")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-blog">{t("footer.blog")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-contact">{t("footer.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-privacy">{t("footer.privacy")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-terms">{t("footer.terms")}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PriceWatch. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
