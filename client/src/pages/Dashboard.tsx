import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProductCard } from "@/components/dashboard/ProductCard";
import { AddProductDialog } from "@/components/dashboard/AddProductDialog";
import { PriceChart } from "@/components/dashboard/PriceChart";
import { NotificationPanel } from "@/components/dashboard/NotificationPanel";
import { TrendingDown, ArrowLeft, LogOut } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

// todo: remove mock functionality - Replace with real price history from backend
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
  const { user, loading: authLoading, logout } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      setLocation("/login");
    }
  }, [user, authLoading, setLocation]);

  // Fetch products
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
    enabled: !!user,
  });

  // Delete product mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({
        title: t("product.delete"),
        description: "Product deleted successfully",
      });
    },
  });

  // Add product mutation
  const addMutation = useMutation({
    mutationFn: async ({ url, targetPrice }: { url: string; targetPrice: number }) => {
      // todo: remove mock functionality - In real app, parse URL to get product details
      // For now, create mock product data
      const mockProduct = {
        userId: user!.id,
        title: "Product from " + new URL(url).hostname,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
        url,
        currentPrice: targetPrice + 100,
        targetPrice,
        priceHistory: [],
      };
      
      const response = await apiRequest("POST", "/api/products", mockProduct);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({
        title: "Success",
        description: "Product added successfully",
      });
    },
  });

  const handleDeleteProduct = (id: string) => {
    deleteMutation.mutate(id);
  };

  const handleAddProduct = (url: string, targetPrice: number) => {
    addMutation.mutate({ url, targetPrice });
  };

  const handleLogout = async () => {
    await logout();
    setLocation("/");
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <div className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2 cursor-pointer" data-testid="link-home">
                <ArrowLeft className="h-5 w-5" />
                <TrendingDown className="h-6 w-6 text-primary" />
                <span className="font-display font-bold text-xl hidden sm:inline">PriceWatch</span>
              </div>
            </Link>
            <h1 className="font-display font-semibold text-xl hidden md:block">
              {t("dashboard.title")}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <AddProductDialog onAdd={handleAddProduct} />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
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
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading products...</p>
                </div>
              ) : products.length === 0 ? (
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
                        id={product.id}
                        title={product.title}
                        imageUrl={product.imageUrl}
                        currentPrice={product.currentPrice}
                        targetPrice={product.targetPrice}
                        url={product.url}
                        priceHistory={product.priceHistory.map(p => parseFloat(p))}
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
