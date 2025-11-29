import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Search, Palette, Code, Smartphone, Brain, Cloud, CheckCircle2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { slug: 'discovery', Icon: Search },
    { slug: 'design', Icon: Palette },
    { slug: 'web', Icon: Code },
    { slug: 'mobile', Icon: Smartphone },
    { slug: 'data', Icon: Brain },
    { slug: 'cloud', Icon: Cloud },
    { slug: 'qa', Icon: CheckCircle2 },
    { slug: 'support', Icon: Headphones },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              K
            </div>
            <span className="hidden font-bold text-xl md:inline-block">Kalyx</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link href="/">
              <Button variant={isActive('/') ? 'secondary' : 'ghost'} data-testid="nav-link-home">
                {t('nav.home')}
              </Button>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="nav-menu-services">
                    {t('nav.services')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                      {services.map((service) => {
                        const IconComponent = service.Icon;
                        return (
                          <Link key={service.slug} href={`/services/${service.slug}`}>
                            <div
                              className="flex items-start gap-3 rounded-lg p-3 hover-elevate active-elevate-2"
                              data-testid={`service-link-${service.slug}`}
                            >
                              <IconComponent className="h-5 w-5 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-sm">
                                  {t(`services.${service.slug}.title`)}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {t(`services.${service.slug}.description`)}
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/cases">
              <Button variant={isActive('/cases') ? 'secondary' : 'ghost'} data-testid="nav-link-cases">
                {t('nav.caseStudies')}
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant={isActive('/pricing') ? 'secondary' : 'ghost'} data-testid="nav-link-pricing">
                {t('nav.pricing')}
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant={isActive('/blog') ? 'secondary' : 'ghost'} data-testid="nav-link-blog">
                {t('nav.blog')}
              </Button>
            </Link>
            <Link href="/about">
              <Button variant={isActive('/about') ? 'secondary' : 'ghost'} data-testid="nav-link-about">
                {t('nav.about')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="default" className="ml-2" data-testid="nav-link-contact">
                {t('nav.contact')}
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t md:hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-home">
                  {t('nav.home')}
                </Button>
              </Link>
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  {t('nav.services')}
                </div>
                {services.map((service) => {
                  const IconComponent = service.Icon;
                  return (
                    <Link key={service.slug} href={`/services/${service.slug}`}>
                      <Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)} data-testid={`mobile-service-link-${service.slug}`}>
                        <IconComponent className="h-4 w-4 mr-2" /> {t(`services.${service.slug}.title`)}
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <Link href="/cases">
                <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-cases">
                  {t('nav.caseStudies')}
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-pricing">
                  {t('nav.pricing')}
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-blog">
                  {t('nav.blog')}
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-about">
                  {t('nav.about')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-contact">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
