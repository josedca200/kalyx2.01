import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { CaseCard } from '@/components/CaseCard';
import { caseStudies } from '@/data/cases';
import { motion } from 'framer-motion';

export default function Cases() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero
        title={t('home.cases.title')}
        subtitle={t('home.cases.subtitle')}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
        </div>
      </section>
    </div>
  );
}
