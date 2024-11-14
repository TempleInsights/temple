import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Zap, Users, BookOpen, Crown } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Spiritual Path with
            <span className="text-primary"> Temple Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with ancient wisdom, modern insights, and a global community of spiritual seekers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Temple Insights?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-muted-foreground">
                Get personalized spiritual guidance enhanced by advanced AI technology.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-muted-foreground">
                Connect with like-minded individuals on their spiritual journey.
              </p>
            </Card>
            <Card className="p-6">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ancient Wisdom</h3>
              <p className="text-muted-foreground">
                Access curated content from various spiritual traditions and teachings.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full">
              <Crown className="h-5 w-5" />
              <span className="font-semibold">Premium Features</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-12">
            Unlock Your Full Potential
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-4">Free Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Basic meditation guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Community forum access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Daily inspirational quotes</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 text-left border-primary">
              <h3 className="text-xl font-semibold mb-4">Premium Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-primary" />
                  <span>Advanced AI spiritual guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-primary" />
                  <span>Exclusive workshops and events</span>
                </li>
                <li className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-primary" />
                  <span>Personal meditation tracking</span>
                </li>
              </ul>
              <Button className="w-full mt-6">
                Upgrade for $8
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}