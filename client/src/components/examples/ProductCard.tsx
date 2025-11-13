import { ProductCard } from "../dashboard/ProductCard";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ProductCardExample() {
  return (
    <LanguageProvider>
      <div className="p-8 max-w-sm">
        <ProductCard
          id="1"
          title="iPhone 15 Pro Max 256GB - Titânio Natural"
          imageUrl="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80"
          currentPrice={7499}
          targetPrice={7200}
          url="https://www.mercadolivre.com.br"
          priceHistory={[7899, 7799, 7699, 7599, 7499]}
          onDelete={(id) => console.log("Delete:", id)}
        />
      </div>
    </LanguageProvider>
  );
}
