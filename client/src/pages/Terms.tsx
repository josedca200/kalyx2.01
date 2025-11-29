import { Hero } from '@/components/Hero';
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero
        title={i18n.language === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
        gradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl prose dark:prose-invert">
          <p className="text-sm text-muted-foreground mb-8">
            {i18n.language === 'es' ? 'Última actualización: 10 de febrero de 2024' : 'Last updated: February 10, 2024'}
          </p>

          <h2>{i18n.language === 'es' ? 'Aceptación de Términos' : 'Acceptance of Terms'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos de servicio.'
              : 'By accessing and using this website, you agree to be bound by these terms of service.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Servicios' : 'Services'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Kalyx Service Technology proporciona servicios de desarrollo de software y consultoría tecnológica. Los términos específicos de cada proyecto se establecen en contratos individuales.'
              : 'Kalyx Service Technology provides software development and technology consulting services. Specific terms for each project are established in individual contracts.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Propiedad Intelectual' : 'Intellectual Property'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Todo el contenido de este sitio web, incluyendo texto, gráficos, logos y código, es propiedad de Kalyx Service Technology y está protegido por leyes de derechos de autor.'
              : 'All content on this website, including text, graphics, logos and code, is property of Kalyx Service Technology and protected by copyright laws.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Limitación de Responsabilidad' : 'Limitation of Liability'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Kalyx Service Technology no será responsable de daños indirectos, incidentales o consecuentes que surjan del uso de nuestros servicios.'
              : 'Kalyx Service Technology shall not be liable for indirect, incidental or consequential damages arising from the use of our services.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Modificaciones' : 'Modifications'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.'
              : 'We reserve the right to modify these terms at any time. Changes will take effect immediately upon posting.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Ley Aplicable' : 'Governing Law'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Estos términos se rigen por las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes.'
              : 'These terms are governed by the laws of Spain, without regard to its conflict of law provisions.'
            }
          </p>
        </div>
      </section>
    </div>
  );
}
