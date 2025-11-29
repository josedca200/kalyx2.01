import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { Search, Palette, Code, Smartphone, Brain, Cloud, CheckCircle2, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { icon: <Search className="h-6 w-6" />, slug: 'discovery' },
    { icon: <Palette className="h-6 w-6" />, slug: 'design' },
    { icon: <Code className="h-6 w-6" />, slug: 'web' },
    { icon: <Smartphone className="h-6 w-6" />, slug: 'mobile' },
    { icon: <Brain className="h-6 w-6" />, slug: 'data' },
    { icon: <Cloud className="h-6 w-6" />, slug: 'cloud' },
    { icon: <CheckCircle2 className="h-6 w-6" />, slug: 'qa' },
    { icon: <Headphones className="h-6 w-6" />, slug: 'support' },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title={t('nav.services')}
        subtitle={t('home.services.subtitle')}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ icon, slug }, index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={icon}
                  title={t(`services.${slug}.title`)}
                  description={t(`services.${slug}.description`)}
                  href={`/services/${slug}`}
                  linkText={t('common.learnMore')}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
