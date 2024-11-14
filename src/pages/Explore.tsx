import { Card } from '@/components/ui/card';
import { BookOpen, Users, Zap } from 'lucide-react';

export default function Explore() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Explore Temple Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-6">
          <Zap className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Meditation</h3>
          <p className="text-muted-foreground">
            Discover guided meditations and mindfulness practices.
          </p>
        </Card>
        <Card className="p-6">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-muted-foreground">
            Connect with fellow spiritual seekers worldwide.
          </p>
        </Card>
        <Card className="p-6">
          <BookOpen className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Wisdom</h3>
          <p className="text-muted-foreground">
            Access ancient teachings and modern insights.
          </p>
        </Card>
      </div>
    </div>
  );
}