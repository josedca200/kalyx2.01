import { Hero } from '@/components/Hero';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero
        title={i18n.language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
        gradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl prose dark:prose-invert">
          <p className="text-sm text-muted-foreground mb-8">
            {i18n.language === 'es' ? 'Última actualización: 10 de febrero de 2024' : 'Last updated: February 10, 2024'}
          </p>

          <h2>{i18n.language === 'es' ? 'Información que Recopilamos' : 'Information We Collect'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Recopilamos información que usted nos proporciona directamente, incluyendo nombre, email, empresa y mensaje cuando completa nuestro formulario de contacto.'
              : 'We collect information you provide directly to us, including name, email, company and message when you complete our contact form.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Uso de la Información' : 'Use of Information'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Utilizamos la información recopilada para: (1) responder a sus consultas, (2) enviar comunicaciones sobre nuestros servicios, (3) mejorar nuestro sitio web.'
              : 'We use the collected information to: (1) respond to your inquiries, (2) send communications about our services, (3) improve our website.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Compartir Información' : 'Sharing Information'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'No vendemos ni compartimos su información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios o según lo requiera la ley.'
              : "We do not sell or share your personal information with third parties, except when necessary to provide our services or as required by law."
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Seguridad' : 'Security'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal.'
              : 'We implement technical and organizational security measures to protect your personal information.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Sus Derechos' : 'Your Rights'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Usted tiene derecho a acceder, corregir o eliminar su información personal. Para ejercer estos derechos, contáctenos en contact@kalyx.tech.'
              : 'You have the right to access, correct or delete your personal information. To exercise these rights, contact us at contact@kalyx.tech.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Contacto' : 'Contact'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Si tiene preguntas sobre esta política de privacidad, contáctenos en contact@kalyx.tech.'
              : 'If you have questions about this privacy policy, contact us at contact@kalyx.tech.'
            }
          </p>
        </div>
      </section>
    </div>
  );
}
