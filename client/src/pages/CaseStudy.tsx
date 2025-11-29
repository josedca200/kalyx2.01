import { useRoute } from 'wouter';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { caseStudies } from '@/data/cases';
import { useTranslation } from 'react-i18next';

export default function CaseStudy() {
  const [, params] = useRoute('/cases/:slug');
  const { i18n } = useTranslation();
  const caseStudy = caseStudies.find(c => c.slug === params?.slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case study not found</h1>
          <Link href="/cases">
            <Button>Back to cases</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/cases">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {i18n.language === 'es' ? 'Volver a casos' : 'Back to cases'}
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{caseStudy.industry}</Badge>
            <span className="text-muted-foreground">{caseStudy.client}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {i18n.language === 'es' ? caseStudy.title : caseStudy.titleEn}
          </h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{i18n.language === 'es' ? 'El Reto' : 'The Challenge'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                {i18n.language === 'es' ? caseStudy.challenge : caseStudy.challengeEn}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{i18n.language === 'es' ? 'La Solución' : 'The Solution'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">
                {i18n.language === 'es' ? caseStudy.solution : caseStudy.solutionEn}
              </p>
              <div>
                <h4 className="font-semibold mb-3">
                  {i18n.language === 'es' ? 'Stack Tecnológico' : 'Technology Stack'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{i18n.language === 'es' ? 'Resultados' : 'Results'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted">
                    <div className="text-sm text-muted-foreground mb-2">
                      {i18n.language === 'es' ? result.metric : result.metricEn}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg text-muted-foreground line-through">
                        {result.before}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {result.after}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg">
                {i18n.language === 'es' ? '¿Tienes un proyecto similar?' : 'Have a similar project?'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
