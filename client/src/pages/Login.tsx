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

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const { toast } = useToast();
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast({
        title: language === "en" ? "Success" : "Sucesso",
        description: language === "en" ? "Logged in successfully" : "Login realizado com sucesso",
      });
      setLocation("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: language === "en" ? "Error" : "Erro",
        description: error instanceof Error ? error.message : (language === "en" ? "Login failed" : "Falha no login"),
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
            <a className="inline-flex items-center gap-2 mb-4" data-testid="link-home">
              <TrendingDown className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-2xl">PriceWatch</span>
            </a>
          </Link>
          <h1 className="font-display font-bold text-3xl">
            {language === "en" ? "Welcome Back" : "Bem-vindo de Volta"}
          </h1>
          <p className="text-muted-foreground">
            {language === "en" ? "Sign in to your account" : "Entre na sua conta"}
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
              placeholder={language === "en" ? "Enter your password" : "Digite sua senha"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="input-password"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
            data-testid="button-login"
          >
            {loading ? (language === "en" ? "Signing in..." : "Entrando...") : (language === "en" ? "Sign In" : "Entrar")}
          </Button>
        </form>

        <div className="text-center space-y-2 text-sm">
          <Link href="/forgot-password">
            <a className="text-primary hover:underline" data-testid="link-forgot-password">
              {language === "en" ? "Forgot password?" : "Esqueceu a senha?"}
            </a>
          </Link>
          
          <p className="text-muted-foreground">
            {language === "en" ? "Don't have an account?" : "Não tem uma conta?"}{" "}
            <Link href="/register">
              <a className="text-primary hover:underline font-semibold" data-testid="link-register">
                {language === "en" ? "Sign up" : "Cadastre-se"}
              </a>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
