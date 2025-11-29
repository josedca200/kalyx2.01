import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function About() {
  const { i18n } = useTranslation();

  const values = [
    {
      title: i18n.language === 'es' ? 'Excelencia Técnica' : 'Technical Excellence',
      description: i18n.language === 'es'
        ? 'No negociamos calidad. Cada línea de código pasa code review, testing automatizado, y auditoría de seguridad.'
        : "We don't compromise on quality. Every line of code goes through code review, automated testing, and security audit.",
    },
    {
      title: i18n.language === 'es' ? 'Transparencia Radical' : 'Radical Transparency',
      description: i18n.language === 'es'
        ? 'Reportes semanales de progreso, acceso directo al equipo, métricas en tiempo real. Sin sorpresas.'
        : 'Weekly progress reports, direct team access, real-time metrics. No surprises.',
    },
    {
      title: i18n.language === 'es' ? 'Orientación a Resultados' : 'Results-Oriented',
      description: i18n.language === 'es'
        ? 'Nuestro éxito se mide en tu éxito: conversiones, engagement, revenue. No en horas facturadas.'
        : 'Our success is measured by your success: conversions, engagement, revenue. Not billable hours.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title={i18n.language === 'es' ? 'Nosotros' : 'About Us'}
        subtitle={i18n.language === 'es'
          ? 'Un equipo de ingenieros, diseñadores y estrategas obsesionados con construir productos excepcionales'
          : 'A team of engineers, designers and strategists obsessed with building exceptional products'
        }
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader
            title={i18n.language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
            align="left"
          />
          <p className="text-lg text-muted-foreground mb-6">
            {i18n.language === 'es'
              ? 'Democratizar el acceso a ingeniería de software de clase mundial. Creemos que toda empresa, sin importar su tamaño, merece un equipo técnico que entienda tanto de negocio como de tecnología.'
              : 'Democratize access to world-class software engineering. We believe every company, regardless of size, deserves a technical team that understands both business and technology.'
            }
          </p>
          <p className="text-lg text-muted-foreground">
            {i18n.language === 'es'
              ? 'Fundada en 2019, hemos ayudado a más de 50 empresas a lanzar productos que generan valor real. Nuestro enfoque combina velocidad responsable con calidad auditable.'
              : 'Founded in 2019, we\'ve helped over 50 companies launch products that generate real value. Our approach combines responsible speed with auditable quality.'
            }
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader title={i18n.language === 'es' ? 'Nuestros Valores' : 'Our Values'} />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
