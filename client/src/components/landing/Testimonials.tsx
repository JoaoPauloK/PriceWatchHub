import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// todo: remove mock functionality
const mockTestimonials = [
  {
    name: "Maria Silva",
    saved: "R$ 450",
    product: "Smartphone Samsung Galaxy",
    quote: { en: "Saved almost 500 reais on my new phone! This app is amazing!", pt: "Economizei quase 500 reais no meu celular novo! Este app é incrível!" },
    rating: 5,
  },
  {
    name: "João Santos",
    saved: "R$ 320",
    product: "PlayStation 5",
    quote: { en: "I waited 2 weeks and got the PS5 at my target price. Worth it!", pt: "Esperei 2 semanas e consegui o PS5 no meu preço alvo. Valeu a pena!" },
    rating: 5,
  },
  {
    name: "Ana Costa",
    saved: "R$ 180",
    product: "Notebook Dell",
    quote: { en: "The price alerts are instant. Never shopping without this again.", pt: "Os alertas de preço são instantâneos. Nunca mais compro sem isso." },
    rating: 5,
  },
];

export function Testimonials() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockTestimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-6 space-y-4 hover-elevate transition-all duration-300 animate-slide-up border-card-border"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground italic">
                "{testimonial.quote[language]}"
              </p>

              <div className="pt-2 border-t border-border">
                <div className="text-sm text-muted-foreground">{testimonial.product}</div>
                <div className="font-display font-bold text-2xl text-green-500">
                  {testimonial.saved}
                  <span className="text-sm text-muted-foreground ml-1">{language === "en" ? "saved" : "economizados"}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
