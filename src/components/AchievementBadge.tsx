import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Zap, Crown, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: "sm" | "md" | "lg";
  showAnimation?: boolean;
}

const iconMap = {
  trophy: Trophy,
  star: Star,
  target: Target,
  zap: Zap,
  crown: Crown,
  award: Award,
};

const sizeConfig = {
  sm: { container: "w-12 h-12", icon: "w-4 h-4", text: "text-xs" },
  md: { container: "w-16 h-16", icon: "w-6 h-6", text: "text-sm" },
  lg: { container: "w-20 h-20", icon: "w-8 h-8", text: "text-base" },
};

export function AchievementBadge({ 
  achievement, 
  size = "md", 
  showAnimation = false 
}: AchievementBadgeProps) {
  const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Trophy;
  const config = sizeConfig[size];

  return (
    <div 
      className={cn(
        "relative flex flex-col items-center gap-2",
        showAnimation && "badge-unlock"
      )}
    >
      <div
        className={cn(
          config.container,
          "rounded-full flex items-center justify-center transition-smooth",
          achievement.unlocked
            ? "bg-gradient-primary text-primary-foreground shadow-glow"
            : "bg-muted text-muted-foreground"
        )}
      >
        <IconComponent className={config.icon} />
      </div>
      
      <div className="text-center">
        <p className={cn("font-semibold", config.text)}>
          {achievement.name}
        </p>
        {achievement.unlocked && (
          <Badge variant="secondary" className="mt-1">
            Unlocked!
          </Badge>
        )}
      </div>
    </div>
  );
}