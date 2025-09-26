import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Habit {
  id: string;
  name: string;
  category: string;
  streak: number;
  completed: boolean;
  color: string;
}

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: string) => void;
}

const categoryColors = {
  health: "bg-success",
  productivity: "bg-primary", 
  learning: "bg-secondary",
  mindfulness: "bg-accent",
  fitness: "bg-warning",
};

export function HabitCard({ habit, onToggle }: HabitCardProps) {
  const [isChecking, setIsChecking] = useState(false);

  const handleToggle = async () => {
    setIsChecking(true);
    await new Promise(resolve => setTimeout(resolve, 300)); // Animation delay
    onToggle(habit.id);
    setIsChecking(false);
  };

  return (
    <Card className="p-4 bg-gradient-card shadow-soft hover:shadow-medium transition-smooth border-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            onClick={handleToggle}
            disabled={isChecking}
            className={cn(
              "w-8 h-8 rounded-full p-0 habit-check transition-smooth",
              habit.completed
                ? "bg-gradient-success text-success-foreground habit-completed"
                : "bg-muted hover:bg-primary hover:text-primary-foreground"
            )}
          >
            {habit.completed && <Check className="w-4 h-4" />}
          </Button>
          
          <div>
            <h3 className="font-semibold text-foreground">{habit.name}</h3>
            <Badge 
              className={cn(
                "text-xs",
                categoryColors[habit.category as keyof typeof categoryColors] || "bg-muted"
              )}
            >
              {habit.category}
            </Badge>
          </div>
        </div>

        {habit.streak > 0 && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-primary text-primary-foreground">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-bold streak-bounce">{habit.streak}</span>
          </div>
        )}
      </div>
    </Card>
  );
}