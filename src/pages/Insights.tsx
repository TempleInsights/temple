import { Card } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function Insights() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Spiritual Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <Lightbulb className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Daily Wisdom</h3>
          <p className="text-muted-foreground">
            Receive personalized spiritual insights and guidance.
          </p>
        </Card>
      </div>
    </div>
  );
}