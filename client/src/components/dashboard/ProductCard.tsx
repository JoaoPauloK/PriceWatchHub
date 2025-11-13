import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, Trash2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
  currentPrice: number;
  targetPrice: number;
  url: string;
  priceHistory?: number[];
  onDelete?: (id: string) => void;
}

export function ProductCard({
  id,
  title,
  imageUrl,
  currentPrice,
  targetPrice,
  url,
  priceHistory = [],
  onDelete,
}: ProductCardProps) {
  const { t } = useLanguage();
  
  const priceDifference = currentPrice - targetPrice;
  const percentageChange = priceHistory.length > 0 
    ? ((currentPrice - priceHistory[0]) / priceHistory[0]) * 100 
    : 0;
  const reachedTarget = currentPrice <= targetPrice;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 border-card-border group" data-testid={`card-product-${id}`}>
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {reachedTarget && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-green-500 text-white border-0 animate-pulse-glow">
              {t("product.reachedTarget")}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="font-semibold line-clamp-2 min-h-[3rem]" data-testid={`text-product-title-${id}`}>
          {title}
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-muted-foreground mb-1">
              {t("product.currentPrice")}
            </div>
            <div className="font-display font-bold text-2xl" data-testid={`text-current-price-${id}`}>
              {formatPrice(currentPrice)}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">
              {t("product.targetPrice")}
            </div>
            <div className="font-display font-bold text-2xl text-primary" data-testid={`text-target-price-${id}`}>
              {formatPrice(targetPrice)}
            </div>
          </div>
        </div>

        {percentageChange !== 0 && (
          <div className="flex items-center gap-2 text-sm">
            {percentageChange < 0 ? (
              <>
                <TrendingDown className="h-4 w-4 text-green-500" />
                <span className="text-green-500 font-medium">
                  {Math.abs(percentageChange).toFixed(1)}% {t("product.priceDropped")}
                </span>
              </>
            ) : (
              <>
                <TrendingUp className="h-4 w-4 text-destructive" />
                <span className="text-destructive font-medium">
                  {percentageChange.toFixed(1)}% {t("product.priceIncreased")}
                </span>
              </>
            )}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1" asChild data-testid={`button-view-product-${id}`}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              {t("product.viewHistory")}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(id)}
            data-testid={`button-delete-product-${id}`}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
