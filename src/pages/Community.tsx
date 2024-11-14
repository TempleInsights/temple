import { Card } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function Community() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Community</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Network</h3>
          <p className="text-muted-foreground">
            Connect with spiritual seekers from around the world.
          </p>
        </Card>
      </div>
    </div>
  );
}