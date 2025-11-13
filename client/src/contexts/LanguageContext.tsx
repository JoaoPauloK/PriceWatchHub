import { createContext, useContext, useState } from "react";

type Language = "en" | "pt";

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

const translations: Translations = {
  // Navbar
  "nav.features": { en: "Features", pt: "Recursos" },
  "nav.howItWorks": { en: "How it Works", pt: "Como Funciona" },
  "nav.pricing": { en: "Pricing", pt: "Preços" },
  "nav.getStarted": { en: "Get Started", pt: "Começar" },
  
  // Hero
  "hero.title": { en: "Never Miss a Deal on", pt: "Nunca Perca uma Oferta no" },
  "hero.mercadoLivre": { en: "Mercado Livre", pt: "Mercado Livre" },
  "hero.subtitle": { en: "Track prices in real-time, get instant alerts when products hit your target price, and save money effortlessly.", pt: "Monitore preços em tempo real, receba alertas instantâneos quando produtos atingirem seu preço alvo e economize sem esforço." },
  "hero.cta1": { en: "Start Monitoring Free", pt: "Começar Grátis" },
  "hero.cta2": { en: "See How It Works", pt: "Ver Como Funciona" },
  
  // Features
  "features.title": { en: "Everything You Need to Save Money", pt: "Tudo o Que Você Precisa para Economizar" },
  "features.realtime.title": { en: "Real-Time Monitoring", pt: "Monitoramento em Tempo Real" },
  "features.realtime.desc": { en: "Prices updated every hour. Never miss a price drop.", pt: "Preços atualizados a cada hora. Nunca perca uma queda de preço." },
  "features.alerts.title": { en: "Instant Notifications", pt: "Notificações Instantâneas" },
  "features.alerts.desc": { en: "Get notified immediately when your target price is reached.", pt: "Seja notificado imediatamente quando seu preço alvo for atingido." },
  "features.history.title": { en: "Price History", pt: "Histórico de Preços" },
  "features.history.desc": { en: "Visualize price trends with detailed charts and analytics.", pt: "Visualize tendências de preço com gráficos e análises detalhadas." },
  "features.unlimited.title": { en: "Unlimited Products", pt: "Produtos Ilimitados" },
  "features.unlimited.desc": { en: "Track as many products as you want, completely free.", pt: "Monitore quantos produtos quiser, completamente grátis." },
  
  // How it Works
  "howItWorks.title": { en: "Three Simple Steps", pt: "Três Passos Simples" },
  "howItWorks.step1.title": { en: "Add Product URL", pt: "Adicione a URL do Produto" },
  "howItWorks.step1.desc": { en: "Copy any Mercado Livre product link", pt: "Copie qualquer link de produto do Mercado Livre" },
  "howItWorks.step2.title": { en: "Set Target Price", pt: "Defina o Preço Alvo" },
  "howItWorks.step2.desc": { en: "Choose your ideal price point", pt: "Escolha seu preço ideal" },
  "howItWorks.step3.title": { en: "Get Notified", pt: "Receba Notificações" },
  "howItWorks.step3.desc": { en: "We'll alert you when it's time to buy", pt: "Alertaremos você quando for hora de comprar" },
  
  // Testimonials
  "testimonials.title": { en: "Real Savings from Real Users", pt: "Economias Reais de Usuários Reais" },
  
  // CTA
  "cta.title": { en: "Start Saving Today", pt: "Comece a Economizar Hoje" },
  "cta.subtitle": { en: "Join thousands of smart shoppers. It's free forever.", pt: "Junte-se a milhares de compradores inteligentes. É grátis para sempre." },
  "cta.button": { en: "Get Started Now", pt: "Começar Agora" },
  
  // Dashboard
  "dashboard.title": { en: "My Products", pt: "Meus Produtos" },
  "dashboard.addProduct": { en: "Add Product", pt: "Adicionar Produto" },
  "dashboard.notifications": { en: "Notifications", pt: "Notificações" },
  "dashboard.noProducts": { en: "No products yet. Add one to get started!", pt: "Nenhum produto ainda. Adicione um para começar!" },
  
  // Product Card
  "product.currentPrice": { en: "Current", pt: "Atual" },
  "product.targetPrice": { en: "Target", pt: "Alvo" },
  "product.priceDropped": { en: "Price dropped by", pt: "Preço caiu" },
  "product.priceIncreased": { en: "Price increased by", pt: "Preço subiu" },
  "product.reachedTarget": { en: "Target reached!", pt: "Alvo atingido!" },
  "product.viewHistory": { en: "View History", pt: "Ver Histórico" },
  "product.delete": { en: "Delete", pt: "Excluir" },
  
  // Add Product Form
  "addProduct.title": { en: "Add New Product", pt: "Adicionar Novo Produto" },
  "addProduct.url": { en: "Mercado Livre URL", pt: "URL do Mercado Livre" },
  "addProduct.urlPlaceholder": { en: "https://produto.mercadolivre.com.br/...", pt: "https://produto.mercadolivre.com.br/..." },
  "addProduct.targetPrice": { en: "Target Price", pt: "Preço Alvo" },
  "addProduct.targetPricePlaceholder": { en: "Enter desired price", pt: "Digite o preço desejado" },
  "addProduct.submit": { en: "Start Monitoring", pt: "Começar a Monitorar" },
  "addProduct.cancel": { en: "Cancel", pt: "Cancelar" },
  
  // Footer
  "footer.tagline": { en: "Smart price tracking for smart shoppers", pt: "Monitoramento inteligente de preços para compradores inteligentes" },
  "footer.product": { en: "Product", pt: "Produto" },
  "footer.features": { en: "Features", pt: "Recursos" },
  "footer.howItWorks": { en: "How it Works", pt: "Como Funciona" },
  "footer.pricing": { en: "Pricing", pt: "Preços" },
  "footer.company": { en: "Company", pt: "Empresa" },
  "footer.about": { en: "About", pt: "Sobre" },
  "footer.blog": { en: "Blog", pt: "Blog" },
  "footer.contact": { en: "Contact", pt: "Contato" },
  "footer.legal": { en: "Legal", pt: "Legal" },
  "footer.privacy": { en: "Privacy", pt: "Privacidade" },
  "footer.terms": { en: "Terms", pt: "Termos" },
  "footer.rights": { en: "All rights reserved.", pt: "Todos os direitos reservados." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return (stored as Language) || "en";
  });

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
