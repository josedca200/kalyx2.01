import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'wouter';

interface PricingCardProps {
  name: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
}

export function PricingCard({ name, price, duration, features, featured = false }: PricingCardProps) {
  return (
    <Card className={`flex flex-col h-full ${featured ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{duration}</CardDescription>
        <div className="mt-4">
          <span className="font-bold text-[27px]">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/contact">
          <Button variant={featured ? 'default' : 'outline'} className="w-full">
            Comenzar
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
