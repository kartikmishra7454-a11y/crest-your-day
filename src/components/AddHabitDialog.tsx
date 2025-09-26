import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Habit } from "./HabitCard";

interface AddHabitDialogProps {
  onAddHabit: (habit: Omit<Habit, 'id' | 'streak' | 'completed'>) => void;
}

const categories = [
  { value: "health", label: "Health", color: "bg-success" },
  { value: "productivity", label: "Productivity", color: "bg-primary" },
  { value: "learning", label: "Learning", color: "bg-secondary" },
  { value: "mindfulness", label: "Mindfulness", color: "bg-accent" },
  { value: "fitness", label: "Fitness", color: "bg-warning" },
];

export function AddHabitDialog({ onAddHabit }: AddHabitDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && category) {
      const selectedCategory = categories.find(c => c.value === category);
      onAddHabit({
        name: name.trim(),
        category,
        color: selectedCategory?.color || "bg-muted",
      });
      setName("");
      setCategory("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Add Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-card border-0 shadow-medium">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">Create New Habit</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="habit-name">Habit Name</Label>
            <Input
              id="habit-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Drink 8 glasses of water"
              className="border-border focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="habit-category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="border-border">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded ${cat.color}`} />
                      {cat.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
              disabled={!name.trim() || !category}
            >
              Create Habit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}