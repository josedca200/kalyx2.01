import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import rateLimit from "express-rate-limit";

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many contact requests from this IP, please try again later.",
});

const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // limit each IP to 3 requests per windowMs
  message: "Too many newsletter subscriptions from this IP, please try again later.",
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
      const validated = insertContactSchema.parse(req.body);

      // Honeypot check
      if (validated.honeypot) {
        // Silently reject spam
        return res.status(200).json({ success: true });
      }

      const contact = await storage.createContact(validated);
      
      // In production, you would send an email here
      console.log("New contact submission:", contact);

      res.status(201).json({ success: true, message: "Contact form submitted successfully" });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ error: validationError.message });
      }
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", newsletterLimiter, async (req, res) => {
    try {
      const validated = insertNewsletterSchema.parse(req.body);
      
      const newsletter = await storage.createNewsletter(validated);
      
      // In production, you would trigger an email confirmation here
      console.log("New newsletter subscription:", newsletter);

      res.status(201).json({ success: true, message: "Successfully subscribed to newsletter" });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ error: validationError.message });
      }
      if (error.message === "Email already subscribed") {
        return res.status(409).json({ error: "This email is already subscribed" });
      }
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  });

  // Blog posts - loads from MDX files with optional filtering and pagination
  app.get("/api/blog", async (req, res) => {
    try {
      const { getAllBlogPosts } = await import("./blog");
      let posts = await getAllBlogPosts();

      // Filter by category if provided
      const category = req.query.category as string | undefined;
      if (category) {
        posts = posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
      }

      // Pagination
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedPosts = posts.slice(startIndex, endIndex);

      res.json({
        posts: paginatedPosts,
        total: posts.length,
        page,
        totalPages: Math.ceil(posts.length / limit),
      });
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  // Single blog post by slug - loads MDX file and parses content
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { getBlogPostBySlug } = await import("./blog");
      const post = await getBlogPostBySlug(req.params.slug);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
