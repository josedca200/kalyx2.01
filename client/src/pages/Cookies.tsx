import { Hero } from '@/components/Hero';
import { useTranslation } from 'react-i18next';

export default function Cookies() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero
        title={i18n.language === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
        gradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl prose dark:prose-invert">
          <p className="text-sm text-muted-foreground mb-8">
            {i18n.language === 'es' ? 'Última actualización: 10 de febrero de 2024' : 'Last updated: February 10, 2024'}
          </p>

          <h2>{i18n.language === 'es' ? '¿Qué son las cookies?' : 'What are cookies?'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.'
              : 'Cookies are small text files that are stored on your device when you visit our website.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Cookies que utilizamos' : 'Cookies we use'}</h2>
          
          <h3>{i18n.language === 'es' ? 'Cookies esenciales' : 'Essential cookies'}</h3>
          <p>
            {i18n.language === 'es'
              ? 'Estas cookies son necesarias para que el sitio web funcione correctamente. Incluyen cookies de sesión y preferencias de idioma.'
              : 'These cookies are necessary for the website to function properly. They include session cookies and language preferences.'
            }
          </p>

          <h3>{i18n.language === 'es' ? 'Cookies de preferencias' : 'Preference cookies'}</h3>
          <p>
            {i18n.language === 'es'
              ? 'Almacenamos sus preferencias de tema (claro/oscuro) e idioma para mejorar su experiencia.'
              : 'We store your theme (light/dark) and language preferences to improve your experience.'
            }
          </p>

          <h3>{i18n.language === 'es' ? 'Cookies analíticas' : 'Analytics cookies'}</h3>
          <p>
            {i18n.language === 'es'
              ? 'Utilizamos cookies analíticas para entender cómo los visitantes interactúan con nuestro sitio web.'
              : 'We use analytics cookies to understand how visitors interact with our website.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Gestión de cookies' : 'Cookie management'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Puede controlar y/o eliminar cookies según desee. Puede eliminar todas las cookies que ya están en su computadora y configurar la mayoría de los navegadores para evitar que se coloquen.'
              : 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.'
            }
          </p>

          <h2>{i18n.language === 'es' ? 'Contacto' : 'Contact'}</h2>
          <p>
            {i18n.language === 'es'
              ? 'Si tiene preguntas sobre nuestra política de cookies, contáctenos en contact@kalyx.tech.'
              : 'If you have questions about our cookie policy, contact us at contact@kalyx.tech.'
            }
          </p>
        </div>
      </section>
    </div>
  );
}
