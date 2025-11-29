import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  companySize: text("company_size"),
  budget: text("budget"),
  message: text("message").notNull(),
  honeypot: text("honeypot"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletters = pgTable("newsletters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Email inválido"),
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Email inválido"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  content: string;
  contentEn: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  client: string;
  industry: string;
  challenge: string;
  challengeEn: string;
  solution: string;
  solutionEn: string;
  results: {
    metric: string;
    metricEn: string;
    before: string;
    after: string;
  }[];
  technologies: string[];
  image?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  icon: string;
  description: string;
  descriptionEn: string;
  longDescription: string;
  longDescriptionEn: string;
  features: string[];
  featuresEn: string[];
  priceFrom?: string;
}
