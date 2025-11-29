import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactForm() {
  const { t } = useTranslation();
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      companySize: '',
      budget: '',
      message: '',
      honeypot: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      if (data.honeypot) {
        throw new Error('Spam detected');
      }
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: t('contact.form.success'),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t('contact.form.error'),
        variant: 'destructive',
      });
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('contact.title')}</CardTitle>
        <CardDescription>{t('contact.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => contactMutation.mutate(data))} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.name')}</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan Pérez" {...field} data-testid="input-contact-name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.email')}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="juan@empresa.com" {...field} data-testid="input-contact-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.company')}</FormLabel>
                  <FormControl>
                    <Input placeholder="Mi Empresa S.A." {...field} data-testid="input-contact-company" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.companySize')}</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-company-size">
                          <SelectValue placeholder={t('contact.form.companySize')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">{t('contact.companySizes.1-10')}</SelectItem>
                        <SelectItem value="11-50">{t('contact.companySizes.11-50')}</SelectItem>
                        <SelectItem value="51-200">{t('contact.companySizes.51-200')}</SelectItem>
                        <SelectItem value="201+">{t('contact.companySizes.201+')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.budget')}</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-budget">
                          <SelectValue placeholder={t('contact.form.budget')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="<10k">{t('contact.budgets.<10k')}</SelectItem>
                        <SelectItem value="10k-25k">{t('contact.budgets.10k-25k')}</SelectItem>
                        <SelectItem value="25k-50k">{t('contact.budgets.25k-50k')}</SelectItem>
                        <SelectItem value="50k+">{t('contact.budgets.50k+')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.message')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('contact.form.message')}
                      className="min-h-[120px]"
                      {...field}
                      data-testid="textarea-contact-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="honeypot"
              render={({ field }) => (
                <FormItem className="hidden">
                  <FormControl>
                    <Input {...field} tabIndex={-1} autoComplete="off" />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={contactMutation.isPending}
              data-testid="button-contact-submit"
            >
              {contactMutation.isPending ? t('contact.form.sending') : t('contact.form.submit')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
