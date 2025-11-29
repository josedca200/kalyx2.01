import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Hero({ title, subtitle, children, className = '', gradient = true }: HeroProps) {
  return (
    <section className={`relative overflow-hidden py-20 md:py-32 ${className}`}>
      {gradient && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
      )}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground mb-8">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
