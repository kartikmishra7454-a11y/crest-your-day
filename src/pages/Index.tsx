import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HabitCard, Habit } from "@/components/HabitCard";
import { StatsCard } from "@/components/StatsCard";
import { MonthlyView } from "@/components/MonthlyView";
import { AchievementBadge, Achievement } from "@/components/AchievementBadge";
import { AddHabitDialog } from "@/components/AddHabitDialog";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Drink 8 glasses of water", category: "health", streak: 5, completed: false, color: "bg-success" },
    { id: "2", name: "Read for 30 minutes", category: "learning", streak: 3, completed: true, color: "bg-secondary" },
    { id: "3", name: "Exercise for 20 minutes", category: "fitness", streak: 7, completed: false, color: "bg-warning" },
    { id: "4", name: "Meditate for 10 minutes", category: "mindfulness", streak: 2, completed: true, color: "bg-accent" },
  ]);

  const [achievements] = useState<Achievement[]>([
    { id: "1", name: "First Steps", description: "Complete your first habit", icon: "star", unlocked: true },
    { id: "2", name: "Week Warrior", description: "Maintain a 7-day streak", icon: "trophy", unlocked: true },
    { id: "3", name: "Habit Master", description: "Complete 50 habits", icon: "crown", unlocked: false },
    { id: "4", name: "Streak Legend", description: "Achieve a 30-day streak", icon: "zap", unlocked: false },
  ]);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [completionData, setCompletionData] = useState<{ [date: string]: number }>({
    "2024-01-15": 75,
    "2024-01-16": 100,
    "2024-01-17": 50,
    "2024-01-18": 100,
    "2024-01-19": 25,
  });

  const handleToggleHabit = (id: string) => {
    setHabits(prev => prev.map(habit => {
      if (habit.id === id) {
        const newCompleted = !habit.completed;
        return {
          ...habit,
          completed: newCompleted,
          streak: newCompleted ? habit.streak + 1 : Math.max(0, habit.streak - 1)
        };
      }
      return habit;
    }));
  };

  const handleAddHabit = (newHabit: Omit<Habit, 'id' | 'streak' | 'completed'>) => {
    const habit: Habit = {
      ...newHabit,
      id: Date.now().toString(),
      streak: 0,
      completed: false,
    };
    setHabits(prev => [...prev, habit]);
  };

  const completedToday = habits.filter(h => h.completed).length;
  const currentStreak = Math.max(...habits.map(h => h.streak), 0);
  const longestStreak = 12; // This would come from historical data
  const monthlyCompletion = 73; // This would be calculated from completion data

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">HabitFlow</h1>
          </div>
          <p className="text-lg text-muted-foreground">Transform your daily routines into lasting success</p>
        </div>

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="today" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Today
            </TabsTrigger>
            <TabsTrigger value="monthly" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Monthly
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <StatsCard 
                totalHabits={habits.length}
                completedToday={completedToday}
                currentStreak={currentStreak}
                longestStreak={longestStreak}
                monthlyCompletion={monthlyCompletion}
              />
              
              <Card className="p-6 bg-gradient-card shadow-soft border-0 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">Today's Habits</h2>
                  <AddHabitDialog onAddHabit={handleAddHabit} />
                </div>
                
                <div className="space-y-3">
                  {habits.map(habit => (
                    <HabitCard 
                      key={habit.id} 
                      habit={habit} 
                      onToggle={handleToggleHabit}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="monthly">
            <MonthlyView 
              currentMonth={currentMonth}
              onMonthChange={setCurrentMonth}
              completionData={completionData}
            />
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="p-6 bg-gradient-card shadow-soft border-0">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Achievement Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map(achievement => (
                  <AchievementBadge 
                    key={achievement.id}
                    achievement={achievement}
                    size="lg"
                  />
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
