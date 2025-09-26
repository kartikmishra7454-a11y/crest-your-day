import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  Award, 
  Calendar,
  Check,
  Star,
  ArrowRight,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

export function LandingPage() {
  const features = [
    {
      icon: Target,
      title: "Smart Goal Tracking",
      description: "Set personalized habits and track your progress with intelligent insights and recommendations."
    },
    {
      icon: TrendingUp,
      title: "Visual Progress",
      description: "Beautiful charts and heatmaps show your consistency patterns and motivate continued growth."
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Unlock badges and celebrate milestones as you build lasting habits that stick."
    },
    {
      icon: Calendar,
      title: "Monthly Insights",
      description: "Comprehensive monthly views help you understand your patterns and optimize your routine."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      content: "HabitFlow transformed my morning routine. The streak tracking keeps me motivated every single day!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Fitness Coach",
      content: "I recommend HabitFlow to all my clients. The visual progress tracking is incredibly powerful.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Student",
      content: "Finally, a habit tracker that's both beautiful and functional. The achievements make it fun!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">HabitFlow</span>
          </div>
          <Link to="/app">
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-glow">
              Launch App
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm">
            🚀 Transform Your Life, One Habit at a Time
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Build Habits That
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Actually Stick
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Track your daily routines with beautiful visualizations, celebrate your streaks, 
            and unlock achievements that keep you motivated.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/app">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-glow text-lg px-8 py-4">
                Start Building Habits
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/5">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-16 h-16 bg-gradient-primary rounded-full animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-12 h-12 bg-gradient-success rounded-full animate-pulse" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make habit building effortless and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-soft border-0 hover:shadow-medium transition-smooth">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              See HabitFlow in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the beautiful interface that makes habit tracking a joy
            </p>
          </div>

          <Card className="p-8 bg-gradient-card shadow-medium border-0 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-xl font-semibold">Interactive Demo</p>
                <p className="opacity-80">Click to explore the app</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Loved by Thousands
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the community of people transforming their lives with HabitFlow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-soft border-0">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-primary text-primary-foreground shadow-glow border-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your habit journey today and see the difference consistency makes
            </p>
            <Link to="/app">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth text-lg px-8 py-4">
                Get Started for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">HabitFlow</span>
          </div>
          <p className="text-muted-foreground">
            Transform your daily routines into lasting success
          </p>
        </div>
      </footer>
    </div>
  );
}