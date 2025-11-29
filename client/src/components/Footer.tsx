import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest('POST', '/api/newsletter', { email });
    },
    onSuccess: () => {
      toast({
        title: t('newsletter.success'),
        description: t('newsletter.subtitle'),
      });
      setEmail('');
    },
    onError: () => {
      toast({
        title: t('newsletter.error'),
        variant: 'destructive',
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                K
              </div>
              <span className="font-bold text-xl">Kalyx</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-testid="footer-link-twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="footer-link-linkedin">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" data-testid="footer-link-github">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/discovery" className="hover:text-foreground transition-colors">
                  {t('services.discovery.title')}
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-foreground transition-colors">
                  {t('services.design.title')}
                </Link>
              </li>
              <li>
                <Link href="/services/web" className="hover:text-foreground transition-colors">
                  {t('services.web.title')}
                </Link>
              </li>
              <li>
                <Link href="/services/mobile" className="hover:text-foreground transition-colors">
                  {t('services.mobile.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-foreground transition-colors">
                  {t('nav.caseStudies')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  {t('nav.careers')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('newsletter.title')}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t('newsletter.subtitle')}</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder={t('newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button type="submit" disabled={newsletterMutation.isPending} data-testid="button-newsletter-submit">
                {newsletterMutation.isPending ? '...' : t('newsletter.button')}
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t('footer.rights')}</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors" data-testid="footer-link-privacy">
              {t('footer.privacy')}
            </Link>
            <Link href="/legal/terms" className="hover:text-foreground transition-colors" data-testid="footer-link-terms">
              {t('footer.terms')}
            </Link>
            <Link href="/legal/cookies" className="hover:text-foreground transition-colors" data-testid="footer-link-cookies">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
