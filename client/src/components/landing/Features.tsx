import { useLanguage } from "@/contexts/LanguageContext";
import { Bell, TrendingDown, BarChart3, Infinity } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: TrendingDown,
    titleKey: "features.realtime.title",
    descKey: "features.realtime.desc",
    color: "text-blue-500",
  },
  {
    icon: Bell,
    titleKey: "features.alerts.title",
    descKey: "features.alerts.desc",
    color: "text-purple-500",
  },
  {
    icon: BarChart3,
    titleKey: "features.history.title",
    descKey: "features.history.desc",
    color: "text-green-500",
  },
  {
    icon: Infinity,
    titleKey: "features.unlimited.title",
    descKey: "features.unlimited.desc",
    color: "text-orange-500",
  },
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.titleKey}
              className="p-6 hover-elevate transition-all duration-300 animate-slide-up border-card-border"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-feature-${index}`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color}/20 to-transparent flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground">
                {t(feature.descKey)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
