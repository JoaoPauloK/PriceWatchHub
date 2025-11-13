import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AddProductDialogProps {
  onAdd?: (url: string, targetPrice: number) => void;
}

export function AddProductDialog({ onAdd }: AddProductDialogProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [targetPrice, setTargetPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url && targetPrice) {
      onAdd?.(url, parseFloat(targetPrice));
      setUrl("");
      setTargetPrice("");
      setOpen(false);
      console.log("Product added:", { url, targetPrice });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button data-testid="button-add-product">
          <Plus className="h-4 w-4 mr-2" />
          {t("dashboard.addProduct")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]" data-testid="dialog-add-product">
        <DialogHeader>
          <DialogTitle>{t("addProduct.title")}</DialogTitle>
          <DialogDescription>
            {t("addProduct.urlPlaceholder")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="url">{t("addProduct.url")}</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://produto.mercadolivre.com.br/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              data-testid="input-product-url"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetPrice">{t("addProduct.targetPrice")}</Label>
            <Input
              id="targetPrice"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
              data-testid="input-target-price"
              required
            />
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              data-testid="button-cancel-add"
            >
              {t("addProduct.cancel")}
            </Button>
            <Button type="submit" data-testid="button-submit-add">
              {t("addProduct.submit")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
