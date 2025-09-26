import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MonthlyViewProps {
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
  completionData: { [date: string]: number }; // percentage of habits completed
}

export function MonthlyView({ currentMonth, onMonthChange, completionData }: MonthlyViewProps) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getCompletionIntensity = (percentage: number) => {
    if (percentage === 0) return "bg-muted";
    if (percentage <= 25) return "bg-primary/20";
    if (percentage <= 50) return "bg-primary/40";
    if (percentage <= 75) return "bg-primary/60";
    return "bg-gradient-primary";
  };

  const formatDate = (day: number) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() + (direction === 'next' ? 1 : -1));
    onMonthChange(newDate);
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();
  const isCurrentMonth = currentMonth.getMonth() === today.getMonth() && 
                         currentMonth.getFullYear() === today.getFullYear();

  return (
    <Card className="p-6 bg-gradient-card shadow-soft border-0">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth('prev')}
          className="hover:bg-primary/10"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <h2 className="text-xl font-bold text-foreground">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth('next')}
          className="hover:bg-primary/10"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          if (!day) {
            return <div key={index} className="p-2" />;
          }

          const dateKey = formatDate(day);
          const completion = completionData[dateKey] || 0;
          const isToday = isCurrentMonth && day === today.getDate();

          return (
            <div
              key={day}
              className={cn(
                "relative p-2 rounded-lg text-center text-sm transition-smooth cursor-pointer",
                getCompletionIntensity(completion),
                isToday && "ring-2 ring-primary ring-offset-2",
                completion > 0 ? "text-primary-foreground font-medium" : "text-foreground"
              )}
            >
              <span>{day}</span>
              {completion > 0 && (
                <div className="absolute -top-1 -right-1">
                  <Badge className="w-5 h-5 p-0 flex items-center justify-center text-xs bg-success">
                    {Math.round(completion)}
                  </Badge>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-muted"></div>
          <span>No habits</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-primary/40"></div>
          <span>Some progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-gradient-primary"></div>
          <span>All completed</span>
        </div>
      </div>
    </Card>
  );
}