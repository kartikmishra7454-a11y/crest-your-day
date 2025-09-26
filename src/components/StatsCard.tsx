import { Card } from "@/components/ui/card";
import { ProgressRing } from "./ProgressRing";
import { TrendingUp, Calendar, Award, Target } from "lucide-react";

interface StatsCardProps {
  totalHabits: number;
  completedToday: number;
  currentStreak: number;
  longestStreak: number;
  monthlyCompletion: number;
}

export function StatsCard({ 
  totalHabits, 
  completedToday, 
  currentStreak, 
  longestStreak,
  monthlyCompletion 
}: StatsCardProps) {
  const todayProgress = totalHabits > 0 ? (completedToday / totalHabits) * 100 : 0;

  return (
    <Card className="p-6 bg-gradient-card shadow-soft border-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Today's Progress</h2>
        <ProgressRing progress={todayProgress} size={80} strokeWidth={6} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 rounded-lg bg-gradient-primary text-primary-foreground">
          <TrendingUp className="w-6 h-6 mx-auto mb-2" />
          <p className="text-2xl font-bold">{currentStreak}</p>
          <p className="text-sm opacity-90">Current Streak</p>
        </div>

        <div className="text-center p-4 rounded-lg bg-gradient-success text-success-foreground">
          <Award className="w-6 h-6 mx-auto mb-2" />
          <p className="text-2xl font-bold">{longestStreak}</p>
          <p className="text-sm opacity-90">Best Streak</p>
        </div>

        <div className="text-center p-4 rounded-lg bg-muted">
          <Calendar className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-2xl font-bold text-foreground">{Math.round(monthlyCompletion)}%</p>
          <p className="text-sm text-muted-foreground">This Month</p>
        </div>

        <div className="text-center p-4 rounded-lg bg-muted">
          <Target className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-2xl font-bold text-foreground">{completedToday}/{totalHabits}</p>
          <p className="text-sm text-muted-foreground">Today</p>
        </div>
      </div>
    </Card>
  );
}