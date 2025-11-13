import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, TrendingDown, Target, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface Notification {
  id: string;
  type: "price_drop" | "target_reached" | "new_low";
  productName: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// todo: remove mock functionality
const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "target_reached",
    productName: "iPhone 15 Pro Max",
    message: "Your target price of R$ 7,499 has been reached!",
    timestamp: "2024-01-15T10:30:00",
    read: false,
  },
  {
    id: "2",
    type: "price_drop",
    productName: "Samsung Galaxy S24",
    message: "Price dropped by 15% to R$ 4,249",
    timestamp: "2024-01-15T09:15:00",
    read: false,
  },
  {
    id: "3",
    type: "new_low",
    productName: "MacBook Air M2",
    message: "New lowest price detected: R$ 8,999",
    timestamp: "2024-01-14T16:45:00",
    read: true,
  },
];

export function NotificationPanel() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "target_reached":
        return <Target className="h-4 w-4 text-green-500" />;
      case "price_drop":
        return <TrendingDown className="h-4 w-4 text-blue-500" />;
      case "new_low":
        return <Bell className="h-4 w-4 text-purple-500" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Agora mesmo";
    if (diffInHours < 24) return `${diffInHours}h atrás`;
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  const handleDismiss = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    console.log("Notification dismissed:", id);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Card className="border-card-border" data-testid="card-notifications">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5" />
          <h2 className="font-semibold text-lg">Notificações</h2>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="rounded-full">
              {unreadCount}
            </Badge>
          )}
        </div>
      </div>

      <ScrollArea className="h-[400px]">
        <div className="p-2">
          {notifications.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Bell className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>Nenhuma notificação</p>
            </div>
          ) : (
            <div className="space-y-1">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-md hover-elevate transition-all group ${
                    !notification.read ? 'bg-primary/5' : ''
                  }`}
                  data-testid={`notification-${notification.id}`}
                >
                  <div className="flex gap-3">
                    <div className="mt-0.5">{getIcon(notification.type)}</div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-medium text-sm">{notification.productName}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleDismiss(notification.id)}
                          data-testid={`button-dismiss-${notification.id}`}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatTimestamp(notification.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </Card>
  );
}
