import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProductCard } from "@/components/dashboard/ProductCard";
import { AddProductDialog } from "@/components/dashboard/AddProductDialog";
import { PriceChart } from "@/components/dashboard/PriceChart";
import { NotificationPanel } from "@/components/dashboard/NotificationPanel";
import { TrendingDown, ArrowLeft } from "lucide-react";

// todo: remove mock functionality
const mockProducts = [
  {
    id: "1",
    title: "iPhone 15 Pro Max 256GB - Titânio Natural",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
    currentPrice: 7499,
    targetPrice: 7200,
    url: "https://www.mercadolivre.com.br",
    priceHistory: [7899, 7799, 7699, 7599, 7499],
  },
  {
    id: "2",
    title: "Samsung Galaxy S24 Ultra 512GB - Preto",
    imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
    currentPrice: 5499,
    targetPrice: 5800,
    url: "https://www.mercadolivre.com.br",
    priceHistory: [5899, 5799, 5699, 5599, 5499],
  },
  {
    id: "3",
    title: "MacBook Air M2 13 polegadas 256GB - Cinza Espacial",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    currentPrice: 8999,
    targetPrice: 8500,
    url: "https://www.mercadolivre.com.br",
    priceHistory: [9499, 9399, 9299, 9099, 8999],
  },
];

const mockChartData = [
  { date: "2024-01-01", price: 7899 },
  { date: "2024-01-05", price: 7799 },
  { date: "2024-01-10", price: 7699 },
  { date: "2024-01-15", price: 7599 },
  { date: "2024-01-20", price: 7499 },
  { date: "2024-01-25", price: 7399 },
  { date: "2024-01-30", price: 7299 },
];

export default function Dashboard() {
  const { t } = useLanguage();
  const [products, setProducts] = useState(mockProducts);

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    console.log("Product deleted:", id);
  };

  const handleAddProduct = (url: string, targetPrice: number) => {
    console.log("Adding product:", { url, targetPrice });
    // todo: remove mock functionality - Replace with actual API call
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <a className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2" data-testid="link-home">
                <ArrowLeft className="h-5 w-5" />
                <TrendingDown className="h-6 w-6 text-primary" />
                <span className="font-display font-bold text-xl hidden sm:inline">PriceWatch</span>
              </a>
            </Link>
            <h1 className="font-display font-semibold text-xl hidden md:block">
              {t("dashboard.title")}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <AddProductDialog onAdd={handleAddProduct} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Products Grid */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-semibold text-lg mb-4">{t("dashboard.title")}</h2>
              {products.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground border border-dashed border-border rounded-lg">
                  <TrendingDown className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>{t("dashboard.noProducts")}</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ProductCard
                        {...product}
                        onDelete={handleDeleteProduct}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Chart */}
            {products.length > 0 && (
              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <PriceChart data={mockChartData} targetPrice={7200} />
              </div>
            )}
          </div>

          {/* Notifications Sidebar */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <NotificationPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
