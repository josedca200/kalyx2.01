import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content?: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(BLOG_DIR)) {
      return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
    
    const posts = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(BLOG_DIR, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug: data.slug || filename.replace('.mdx', ''),
          title: data.title || '',
          excerpt: data.excerpt || '',
          author: data.author || '',
          date: data.date || '',
          category: data.category || '',
          readTime: data.readTime || '',
          image: data.image || '',
        };
      })
    );

    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (!fs.existsSync(BLOG_DIR)) {
      return null;
    }

    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
    
    for (const filename of files) {
      const filePath = path.join(BLOG_DIR, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      if (data.slug === slug) {
        // Convert markdown to HTML
        const processedContent = await remark()
          .use(html)
          .process(content);
        const htmlContent = processedContent.toString();

        return {
          slug: data.slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          author: data.author || '',
          date: data.date || '',
          category: data.category || '',
          readTime: data.readTime || '',
          image: data.image || '',
          content: htmlContent,
        };
      }
    }

    return null;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}
