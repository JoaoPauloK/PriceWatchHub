import { AddProductDialog } from "../dashboard/AddProductDialog";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function AddProductDialogExample() {
  return (
    <LanguageProvider>
      <div className="p-8 flex items-center justify-center">
        <AddProductDialog onAdd={(url, price) => console.log("Add:", url, price)} />
      </div>
    </LanguageProvider>
  );
}
