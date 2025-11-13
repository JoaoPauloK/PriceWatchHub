import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TrendingDown, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ForgotPassword() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending reset email (not implemented in backend)
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      toast({
        title: language === "en" ? "Email Sent" : "E-mail Enviado",
        description: language === "en" 
          ? "If an account exists with this email, you will receive a password reset link." 
          : "Se existir uma conta com este e-mail, você receberá um link para redefinir a senha.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
      <Card className="w-full max-w-md p-8 space-y-6 border-card-border">
        <div className="text-center space-y-2">
          <Link href="/">
            <a className="inline-flex items-center gap-2 mb-4" data-testid="link-home">
              <TrendingDown className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-2xl">PriceWatch</span>
            </a>
          </Link>
          <h1 className="font-display font-bold text-3xl">
            {language === "en" ? "Reset Password" : "Redefinir Senha"}
          </h1>
          <p className="text-muted-foreground">
            {language === "en" 
              ? "Enter your email address and we'll send you a reset link" 
              : "Digite seu e-mail e enviaremos um link de redefinição"}
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                {language === "en" ? "Email" : "E-mail"}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={language === "en" ? "your@email.com" : "seu@email.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-email"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
              data-testid="button-reset"
            >
              {loading 
                ? (language === "en" ? "Sending..." : "Enviando...") 
                : (language === "en" ? "Send Reset Link" : "Enviar Link de Redefinição")}
            </Button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-muted-foreground">
              {language === "en" 
                ? "Check your email for the reset link" 
                : "Verifique seu e-mail para o link de redefinição"}
            </p>
          </div>
        )}

        <Link href="/login">
          <a className="flex items-center justify-center gap-2 text-sm text-primary hover:underline" data-testid="link-back">
            <ArrowLeft className="h-4 w-4" />
            {language === "en" ? "Back to login" : "Voltar ao login"}
          </a>
        </Link>
      </Card>
    </div>
  );
}
