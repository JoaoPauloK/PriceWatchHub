import { useLanguage } from "@/contexts/LanguageContext";
import { Link2, Target, Bell } from "lucide-react";

const steps = [
  {
    icon: Link2,
    titleKey: "howItWorks.step1.title",
    descKey: "howItWorks.step1.desc",
    number: "01",
  },
  {
    icon: Target,
    titleKey: "howItWorks.step2.title",
    descKey: "howItWorks.step2.desc",
    number: "02",
  },
  {
    icon: Bell,
    titleKey: "howItWorks.step3.title",
    descKey: "howItWorks.step3.desc",
    number: "03",
  },
];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            {t("howItWorks.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, index) => (
            <div
              key={step.titleKey}
              className="relative text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`step-${index + 1}`}
            >
              <div className="relative inline-block">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto relative z-10">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl">
                {t(step.titleKey)}
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
