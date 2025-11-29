import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
}

export function BlogCard({ title, description, category, date, readTime, slug, image }: BlogCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 overflow-hidden group h-full flex flex-col">
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
        <Badge variant="secondary" className="w-fit">{category}</Badge>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${slug}`}>
          <Button variant="ghost" className="group/button">
            Leer artículo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
