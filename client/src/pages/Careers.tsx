import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function Careers() {
  const { i18n } = useTranslation();

  const openings = [
    {
      title: i18n.language === 'es' ? 'Senior Full-Stack Engineer' : 'Senior Full-Stack Engineer',
      location: i18n.language === 'es' ? 'Remoto (LATAM)' : 'Remote (LATAM)',
      type: i18n.language === 'es' ? 'Tiempo completo' : 'Full-time',
      description: i18n.language === 'es'
        ? 'Buscamos un ingeniero con 5+ años de experiencia en React/Node para liderar proyectos técnicamente complejos.'
        : 'We\'re looking for an engineer with 5+ years React/Node experience to lead technically complex projects.',
    },
    {
      title: i18n.language === 'es' ? 'Product Designer' : 'Product Designer',
      location: i18n.language === 'es' ? 'Remoto (Global)' : 'Remote (Global)',
      type: i18n.language === 'es' ? 'Tiempo completo' : 'Full-time',
      description: i18n.language === 'es'
        ? 'Diseñador con experiencia en design systems y capacidad de trabajar end-to-end desde research hasta implementación.'
        : 'Designer with design systems experience and ability to work end-to-end from research to implementation.',
    },
    {
      title: i18n.language === 'es' ? 'DevOps Engineer' : 'DevOps Engineer',
      location: i18n.language === 'es' ? 'Remoto (Europa)' : 'Remote (Europe)',
      type: i18n.language === 'es' ? 'Tiempo completo' : 'Full-time',
      description: i18n.language === 'es'
        ? 'Experto en Kubernetes, Terraform y CI/CD para escalar nuestra infraestructura.'
        : 'Expert in Kubernetes, Terraform and CI/CD to scale our infrastructure.',
    },
  ];

  const benefits = [
    i18n.language === 'es' ? 'Trabajo 100% remoto' : '100% remote work',
    i18n.language === 'es' ? 'Horarios flexibles' : 'Flexible hours',
    i18n.language === 'es' ? 'Presupuesto para educación ($2k/año)' : 'Education budget ($2k/year)',
    i18n.language === 'es' ? 'Retiros anuales del equipo' : 'Annual team retreats',
    i18n.language === 'es' ? 'Equipo de última generación' : 'Latest generation equipment',
    i18n.language === 'es' ? 'Salarios competitivos' : 'Competitive salaries',
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title={i18n.language === 'es' ? 'Únete al Equipo' : 'Join the Team'}
        subtitle={i18n.language === 'es'
          ? 'Construye productos excepcionales con un equipo de clase mundial'
          : 'Build exceptional products with a world-class team'
        }
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeader
            title={i18n.language === 'es' ? 'Posiciones Abiertas' : 'Open Positions'}
            align="left"
          />
          <div className="space-y-6">
            {openings.map((opening, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <CardTitle>{opening.title}</CardTitle>
                      <CardDescription className="mt-2">{opening.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{opening.location}</Badge>
                      <Badge variant="outline">{opening.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Link href="/contact">
                    <Button>{i18n.language === 'es' ? 'Aplicar' : 'Apply'}</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader title={i18n.language === 'es' ? 'Beneficios' : 'Benefits'} />
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
