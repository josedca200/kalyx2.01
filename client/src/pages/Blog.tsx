import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Hero } from '@/components/Hero';
import { BlogCard } from '@/components/BlogCard';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export default function Blog() {
  const { t, i18n } = useTranslation();

  const { data, isLoading } = useQuery<{ posts: BlogPost[], total: number }>({
    queryKey: ['/api/blog'],
  });

  return (
    <div className="min-h-screen">
      <Hero
        title={t('nav.blog')}
        subtitle={i18n.language === 'es'
          ? 'Insights técnicos y estratégicos sobre desarrollo de software'
          : 'Technical and strategic insights on software development'
        }
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="h-96 animate-pulse">
                  <CardContent className="pt-6">
                    <div className="h-48 bg-muted rounded-md mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard
                    title={post.title}
                    description={post.excerpt}
                    category={post.category}
                    date={post.date}
                    readTime={post.readTime}
                    slug={post.slug}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
