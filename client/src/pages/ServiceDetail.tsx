import { useRoute } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { Link } from 'wouter';

export default function ServiceDetail() {
  const [, params] = useRoute('/services/:slug');
  const { t, i18n } = useTranslation();
  const slug = params?.slug || '';

  const serviceDetails: Record<string, {
    features: string[];
    deliverables: string[];
    priceFrom?: string;
  }> = {
    discovery: {
      features: [
        i18n.language === 'es' ? 'Research de usuarios (10-15 entrevistas)' : 'User research (10-15 interviews)',
        i18n.language === 'es' ? 'Análisis competitivo exhaustivo' : 'Comprehensive competitive analysis',
        i18n.language === 'es' ? 'Mapa de stakeholders y necesidades' : 'Stakeholder and needs mapping',
        i18n.language === 'es' ? 'Backlog priorizado con story mapping' : 'Prioritized backlog with story mapping',
        i18n.language === 'es' ? 'Roadmap trimestral ejecutable' : 'Executable quarterly roadmap',
      ],
      deliverables: [
        i18n.language === 'es' ? 'Presentación ejecutiva (30-40 slides)' : 'Executive presentation (30-40 slides)',
        i18n.language === 'es' ? 'Figma con wireframes clave' : 'Figma with key wireframes',
        i18n.language === 'es' ? 'Backlog en Notion/Linear' : 'Backlog in Notion/Linear',
      ],
      priceFrom: '€2.300',
    },
    design: {
      features: [
        i18n.language === 'es' ? 'Research UX (testing, surveys)' : 'UX research (testing, surveys)',
        i18n.language === 'es' ? 'Wireframes & prototipos interactivos' : 'Wireframes & interactive prototypes',
        i18n.language === 'es' ? 'Design system con tokens' : 'Design system with tokens',
        i18n.language === 'es' ? 'Componentes documentados en Storybook' : 'Components documented in Storybook',
        i18n.language === 'es' ? 'Handoff a desarrollo' : 'Developer handoff',
      ],
      deliverables: [
        i18n.language === 'es' ? 'Figma completo con design system' : 'Complete Figma with design system',
        i18n.language === 'es' ? 'Librería de componentes React/Vue' : 'React/Vue component library',
        i18n.language === 'es' ? 'Documentación en Storybook' : 'Storybook documentation',
      ],
      priceFrom: '€4.600',
    },
    web: {
      features: [
        i18n.language === 'es' ? 'Frontend React/Next.js/Vue' : 'Frontend React/Next.js/Vue',
        i18n.language === 'es' ? 'Backend Node.js/Nest' : 'Backend Node.js/Nest',
        i18n.language === 'es' ? 'APIs REST/GraphQL' : 'REST/GraphQL APIs',
        i18n.language === 'es' ? 'Base de datos PostgreSQL/MongoDB' : 'PostgreSQL/MongoDB database',
        i18n.language === 'es' ? 'Testing E2E con Playwright' : 'E2E testing with Playwright',
      ],
      deliverables: [
        i18n.language === 'es' ? 'Aplicación web completa' : 'Complete web application',
        i18n.language === 'es' ? 'Código en GitHub/GitLab' : 'Code in GitHub/GitLab',
        i18n.language === 'es' ? 'CI/CD configurado' : 'Configured CI/CD',
        i18n.language === 'es' ? 'Documentación técnica' : 'Technical documentation',
      ],
      priceFrom: '€7.400',
    },
    mobile: {
      features: [
        i18n.language === 'es' ? 'React Native/Expo' : 'React Native/Expo',
        i18n.language === 'es' ? 'iOS & Android con un solo codebase' : 'iOS & Android with single codebase',
        i18n.language === 'es' ? 'Integración con APIs' : 'API integration',
        i18n.language === 'es' ? 'Push notifications' : 'Push notifications',
        i18n.language === 'es' ? 'Publicación en stores' : 'Store publication',
      ],
      deliverables: [
        i18n.language === 'es' ? 'App iOS & Android' : 'iOS & Android app',
        i18n.language === 'es' ? 'Código fuente' : 'Source code',
        i18n.language === 'es' ? 'Apps publicadas en stores' : 'Apps published in stores',
      ],
      priceFrom: '€11.000',
    },
    data: {
      features: [
        i18n.language === 'es' ? 'Pipelines ETL' : 'ETL pipelines',
        i18n.language === 'es' ? 'Dashboards interactivos' : 'Interactive dashboards',
        i18n.language === 'es' ? 'Integración con LLMs (OpenAI, Anthropic)' : 'LLM integration (OpenAI, Anthropic)',
        i18n.language === 'es' ? 'RAG para búsqueda semántica' : 'RAG for semantic search',
        i18n.language === 'es' ? 'Fine-tuning de modelos' : 'Model fine-tuning',
      ],
      deliverables: [
        i18n.language === 'es' ? 'Pipeline de datos completo' : 'Complete data pipeline',
        i18n.language === 'es' ? 'Dashboard BI' : 'BI dashboard',
        i18n.language === 'es' ? 'Modelos entrenados' : 'Trained models',
      ],
      priceFrom: '€9.200',
    },
    cloud: {
      features: [
        i18n.language === 'es' ? 'Infraestructura como código (Terraform)' : 'Infrastructure as code (Terraform)',
        i18n.language === 'es' ? 'CI/CD con GitHub Actions/GitLab' : 'CI/CD with GitHub Actions/GitLab',
        i18n.language === 'es' ? 'Contenedores Docker & Kubernetes' : 'Docker & Kubernetes containers',
        i18n.language === 'es' ? 'Monitoreo (Datadog, Grafana)' : 'Monitoring (Datadog, Grafana)',
        i18n.language === 'es' ? 'Optimización de costos' : 'Cost optimization',
      ],
      deliverables: [
        i18n.language === 'es' ? 'Infraestructura automatizada' : 'Automated infrastructure',
        i18n.language === 'es' ? 'Pipeline CI/CD' : 'CI/CD pipeline',
        i18n.language === 'es' ? 'Dashboards de monitoreo' : 'Monitoring dashboards',
      ],
      priceFrom: '€5.500',
    },
    qa: {
      features: [
        i18n.language === 'es' ? 'Testing E2E con Playwright' : 'E2E testing with Playwright',
        i18n.language === 'es' ? 'Pruebas de carga (k6, Artillery)' : 'Load testing (k6, Artillery)',
        i18n.language === 'es' ? 'Auditorías Lighthouse' : 'Lighthouse audits',
        i18n.language === 'es' ? 'Testing de regresión visual' : 'Visual regression testing',
        i18n.language === 'es' ? 'Reportes detallados' : 'Detailed reports',
      ],
      deliverables: [
        i18n.language === 'es' ? 'Suite de tests automatizados' : 'Automated test suite',
        i18n.language === 'es' ? 'Reporte de performance' : 'Performance report',
        i18n.language === 'es' ? 'Plan de mejoras' : 'Improvement plan',
      ],
      priceFrom: '€2.800',
    },
    support: {
      features: [
        i18n.language === 'es' ? 'Monitoreo 24/7' : '24/7 monitoring',
        i18n.language === 'es' ? 'Parches de seguridad mensuales' : 'Monthly security patches',
        i18n.language === 'es' ? 'Actualización de dependencias' : 'Dependency updates',
        i18n.language === 'es' ? 'SLA de respuesta: <4h' : 'Response SLA: <4h',
        i18n.language === 'es' ? 'Reportes mensuales' : 'Monthly reports',
      ],
      deliverables: [
        i18n.language === 'es' ? 'Sistema monitoreado' : 'Monitored system',
        i18n.language === 'es' ? 'Parches aplicados' : 'Applied patches',
        i18n.language === 'es' ? 'Reportes de uptime' : 'Uptime reports',
      ],
      priceFrom: '€1.100/mes',
    },
  };

  const detail = serviceDetails[slug];

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <Link href="/services">
            <Button>Back to services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero
        title={t(`services.${slug}.title`)}
        subtitle={t(`services.${slug}.description`)}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{i18n.language === 'es' ? 'Lo que incluye' : "What's included"}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {detail.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{i18n.language === 'es' ? 'Entregables' : 'Deliverables'}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {detail.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
                {detail.priceFrom && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{detail.priceFrom}</span>
                      <Badge variant="secondary">
                        {i18n.language === 'es' ? 'desde' : 'from'}
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg">
                {i18n.language === 'es' ? 'Solicitar cotización' : 'Request quote'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
