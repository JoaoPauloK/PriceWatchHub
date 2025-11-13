import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Register() {
  const [, setLocation] = useLocation();
  const { register } = useAuth();
  const { toast } = useToast();
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: language === "en" ? "Error" : "Erro",
        description: language === "en" ? "Passwords do not match" : "As senhas não coincidem",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        variant: "destructive",
        title: language === "en" ? "Error" : "Erro",
        description: language === "en" ? "Password must be at least 6 characters" : "A senha deve ter pelo menos 6 caracteres",
      });
      return;
    }

    setLoading(true);

    try {
      await register(email, password);
      toast({
        title: language === "en" ? "Success" : "Sucesso",
        description: language === "en" ? "Account created successfully" : "Conta criada com sucesso",
      });
      setLocation("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: language === "en" ? "Error" : "Erro",
        description: error instanceof Error ? error.message : (language === "en" ? "Registration failed" : "Falha no cadastro"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
      <Card className="w-full max-w-md p-8 space-y-6 border-card-border">
        <div className="text-center space-y-2">
          <Link href="/">
            <div className="inline-flex items-center gap-2 mb-4 cursor-pointer" data-testid="link-home">
              <TrendingDown className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-2xl">PriceWatch</span>
            </div>
          </Link>
          <h1 className="font-display font-bold text-3xl">
            {language === "en" ? "Create Account" : "Criar Conta"}
          </h1>
          <p className="text-muted-foreground">
            {language === "en" ? "Start tracking prices for free" : "Comece a monitorar preços grátis"}
          </p>
        </div>

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

          <div className="space-y-2">
            <Label htmlFor="password">
              {language === "en" ? "Password" : "Senha"}
            </Label>
            <Input
              id="password"
              type="password"
              placeholder={language === "en" ? "At least 6 characters" : "Pelo menos 6 caracteres"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="input-password"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              {language === "en" ? "Confirm Password" : "Confirmar Senha"}
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder={language === "en" ? "Re-enter your password" : "Digite sua senha novamente"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              data-testid="input-confirm-password"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
            data-testid="button-register"
          >
            {loading ? (language === "en" ? "Creating account..." : "Criando conta...") : (language === "en" ? "Create Account" : "Criar Conta")}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          {language === "en" ? "Already have an account?" : "Já tem uma conta?"}{" "}
          <Link href="/login">
            <span className="text-primary hover:underline font-semibold cursor-pointer" data-testid="link-login">
              {language === "en" ? "Sign in" : "Entrar"}
            </span>
          </Link>
        </p>
      </Card>
    </div>
  );
}
