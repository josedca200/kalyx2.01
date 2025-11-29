import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { OrganizationSchema, WebSiteSchema } from '@/components/SchemaOrg';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { FeatureCard } from '@/components/FeatureCard';
import { CaseCard } from '@/components/CaseCard';
import { Testimonial } from '@/components/Testimonial';
import { LogoWall } from '@/components/LogoWall';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Eye,
  Lock,
  TrendingUp,
  Search,
  Palette,
  Code,
  Smartphone,
  Brain,
  Cloud,
  CheckCircle2,
  Headphones,
} from 'lucide-react';
import { caseStudies } from '@/data/cases';

export default function Home() {
  const { t, i18n } = useTranslation();
  
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://kalyx.tech";
  
  const seoDescription = i18n.language === 'es'
    ? 'Desarrollo de software de clase mundial. Construimos productos excepcionales con React, Node.js, AI y Cloud. Especialistas en startups y empresas que escalan rápido.'
    : 'World-class software development. We build exceptional products with React, Node.js, AI and Cloud. Specialists in startups and fast-scaling companies.';

  const pillars = [
    { icon: <Zap />, key: 'speed' },
    { icon: <CheckCircle2 />, key: 'quality' },
    { icon: <Eye />, key: 'transparency' },
    { icon: <Lock />, key: 'security' },
    { icon: <TrendingUp />, key: 'roi' },
  ];

  const services = [
    { icon: <Search />, slug: 'discovery' },
    { icon: <Palette />, slug: 'design' },
    { icon: <Code />, slug: 'web' },
    { icon: <Smartphone />, slug: 'mobile' },
    { icon: <Brain />, slug: 'data' },
    { icon: <Cloud />, slug: 'cloud' },
    { icon: <CheckCircle2 />, slug: 'qa' },
    { icon: <Headphones />, slug: 'support' },
  ];

  const testimonials = [
    {
      quote: i18n.language === 'es'
        ? 'Reducimos el time-to-market de 6 meses a 10 semanas. Kalyx no solo entregó código, sino una estrategia completa de producto.'
        : 'We reduced time-to-market from 6 months to 10 weeks. Kalyx delivered not just code, but a complete product strategy.',
      author: 'Roberto Martínez',
      role: 'CTO',
      company: 'PayFlow',
    },
    {
      quote: i18n.language === 'es'
        ? 'Pasamos de 2.7s a 0.9s de LCP y subimos un 18% la conversión. El ROI fue inmediato.'
        : 'We went from 2.7s to 0.9s LCP and increased conversion by 18%. The ROI was immediate.',
      author: 'Laura Chen',
      role: 'VP Product',
      company: 'TiendaMax',
    },
    {
      quote: i18n.language === 'es'
        ? 'Lanzamos nuestra plataforma de telemedicina en plena pandemia sin un solo incidente de seguridad. Increíble.'
        : 'We launched our telemedicine platform during the pandemic without a single security incident. Incredible.',
      author: 'Dr. Carlos Ruiz',
      role: 'CEO',
      company: 'SaludDigital',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={i18n.language === 'es' ? 'Inicio' : 'Home'}
        description={seoDescription}
        path="/"
      />
      <OrganizationSchema
        name="Kalyx Service Technology"
        url={siteUrl}
        logo={`${siteUrl}/logo.png`}
        description={seoDescription}
      />
      <WebSiteSchema
        name="Kalyx Service Technology"
        url={siteUrl}
      />
      <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
      >
        <Link href="/contact">
          <Button size="lg" data-testid="hero-cta-primary">
            {t('home.hero.ctaPrimary')}
          </Button>
        </Link>
        <Link href="/cases">
          <Button size="lg" variant="outline" data-testid="hero-cta-secondary">
            {t('home.hero.ctaSecondary')}
          </Button>
        </Link>
      </Hero>

      <section className="py-16 border-t bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader title={t('home.pillars.title')} />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {pillars.map(({ icon, key }) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-lg hover-elevate"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {icon}
                </div>
                <span className="font-medium text-sm">{t(`home.pillars.${key}`)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t('home.services.title')}
            subtitle={t('home.services.subtitle')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, slug }) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t('home.cases.title')}
            subtitle={t('home.cases.subtitle')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(c => c.featured).map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <CaseCard
                  title={i18n.language === 'es' ? caseStudy.title : caseStudy.titleEn}
                  client={caseStudy.client}
                  industry={caseStudy.industry}
                  description={i18n.language === 'es' ? caseStudy.challenge : caseStudy.challengeEn}
                  results={caseStudy.results.map(r => ({
                    metric: i18n.language === 'es' ? r.metric : r.metricEn,
                    before: r.before,
                    after: r.after,
                  }))}
                  href={`/cases/${caseStudy.slug}`}
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/cases">
              <Button variant="outline" size="lg" data-testid="view-all-cases">
                {t('common.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title={t('home.testimonials.title')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-y">
        <div className="container mx-auto px-4">
          <LogoWall />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="final-cta">
                {t('home.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
