import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { PricingCard } from '@/components/PricingCard';
import { motion } from 'framer-motion';

export default function Pricing() {
  const { t } = useTranslation();

  const packages = ['discovery', 'mvp', 'scale', 'support'];

  return (
    <div className="min-h-screen">
      <Hero
        title={t('pricing.title')}
        subtitle={t('pricing.subtitle')}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PricingCard
                  name={t(`pricing.${pkg}.name`)}
                  price={t(`pricing.${pkg}.price`)}
                  duration={t(`pricing.${pkg}.duration`)}
                  features={t(`pricing.${pkg}.features`, { returnObjects: true }) as string[]}
                  featured={pkg === 'mvp'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
