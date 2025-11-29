import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Stack() {
  const { i18n } = useTranslation();

  const stack = {
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Shadcn/ui'],
    backend: ['Node.js', 'Nest.js', 'Express', 'tRPC', 'GraphQL', 'REST APIs'],
    mobile: ['React Native', 'Expo', 'Swift', 'Kotlin'],
    data: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle ORM'],
    ai: ['OpenAI', 'Anthropic', 'LangChain', 'Vector DBs', 'RAG'],
    cloud: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'Kubernetes', 'Terraform'],
    monitoring: ['Datadog', 'Sentry', 'Grafana', 'Lighthouse', 'Playwright'],
    tools: ['GitHub', 'Linear', 'Figma', 'Notion', 'Slack'],
  };

  const practices = [
    {
      title: i18n.language === 'es' ? 'Calidad de Código' : 'Code Quality',
      items: [
        i18n.language === 'es' ? 'Code review obligatorio en todos los PRs' : 'Mandatory code review on all PRs',
        i18n.language === 'es' ? 'Testing automatizado (unit, integration, E2E)' : 'Automated testing (unit, integration, E2E)',
        i18n.language === 'es' ? 'Linting & formatting con ESLint/Prettier' : 'Linting & formatting with ESLint/Prettier',
        i18n.language === 'es' ? 'TypeScript estricto' : 'Strict TypeScript',
      ],
    },
    {
      title: i18n.language === 'es' ? 'Seguridad' : 'Security',
      items: [
        i18n.language === 'es' ? 'Dependabot para actualizaciones de seguridad' : 'Dependabot for security updates',
        i18n.language === 'es' ? 'Auditorías de seguridad mensuales' : 'Monthly security audits',
        i18n.language === 'es' ? 'HTTPS obligatorio, headers de seguridad' : 'Mandatory HTTPS, security headers',
        i18n.language === 'es' ? 'Secretos en vaults (nunca en código)' : 'Secrets in vaults (never in code)',
      ],
    },
    {
      title: i18n.language === 'es' ? 'Performance' : 'Performance',
      items: [
        i18n.language === 'es' ? 'Lighthouse score ≥ 90 obligatorio' : 'Lighthouse score ≥ 90 mandatory',
        i18n.language === 'es' ? 'Lazy loading & code splitting' : 'Lazy loading & code splitting',
        i18n.language === 'es' ? 'Imágenes optimizadas (WebP/AVIF)' : 'Optimized images (WebP/AVIF)',
        i18n.language === 'es' ? 'CDN global para assets estáticos' : 'Global CDN for static assets',
      ],
    },
    {
      title: i18n.language === 'es' ? 'Accesibilidad' : 'Accessibility',
      items: [
        i18n.language === 'es' ? 'WCAG 2.2 AA compliance' : 'WCAG 2.2 AA compliance',
        i18n.language === 'es' ? 'Navegación por teclado completa' : 'Full keyboard navigation',
        i18n.language === 'es' ? 'Contraste de color verificado' : 'Verified color contrast',
        i18n.language === 'es' ? 'Screen readers compatible' : 'Screen readers compatible',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title={i18n.language === 'es' ? 'Stack & Prácticas' : 'Stack & Practices'}
        subtitle={i18n.language === 'es'
          ? 'Las herramientas y metodologías que usamos para construir productos excepcionales'
          : 'The tools and methodologies we use to build exceptional products'
        }
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeader title={i18n.language === 'es' ? 'Tecnologías' : 'Technologies'} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(stack).map(([category, technologies]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="capitalize">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeader title={i18n.language === 'es' ? 'Mejores Prácticas' : 'Best Practices'} />
          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{practice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {practice.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
