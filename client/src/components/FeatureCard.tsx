import { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export function FeatureCard({ icon, title, description, href, linkText }: FeatureCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {href && linkText && (
        <CardFooter>
          <Link href={href}>
            <Button variant="ghost" className="group">
              {linkText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
