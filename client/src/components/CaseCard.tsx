import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface CaseCardProps {
  title: string;
  client: string;
  industry: string;
  description: string;
  results: { metric: string; before: string; after: string }[];
  href: string;
  image?: string;
}

export function CaseCard({ title, client, industry, description, results, href, image }: CaseCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 overflow-hidden group">
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{industry}</Badge>
          <span className="text-sm text-muted-foreground">{client}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {results.slice(0, 2).map((result, index) => (
            <div key={index} className="space-y-1">
              <div className="text-xs text-muted-foreground">{result.metric}</div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">{result.before}</span>
                <span className="text-lg font-bold text-primary">{result.after}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={href}>
          <Button variant="ghost" className="group/button">
            Leer caso completo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
