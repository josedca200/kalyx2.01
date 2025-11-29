import { type InsertContact, type Contact, type InsertNewsletter, type Newsletter } from "@shared/schema";
import { randomUUID } from "crypto";
import * as fs from "fs";
import * as path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACTS_FILE = path.join(DATA_DIR, "leads.json");
const NEWSLETTERS_FILE = path.join(DATA_DIR, "newsletters.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletters(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private loadData<T>(filePath: string): T[] {
    try {
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
      }
    } catch (error) {
      console.error(`Error loading data from ${filePath}:`, error);
    }
    return [];
  }

  private saveData<T>(filePath: string, data: T[]): void {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
      console.error(`Error saving data to ${filePath}:`, error);
    }
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contacts = this.loadData<Contact>(CONTACTS_FILE);
    const contact: Contact = {
      ...insertContact,
      id: randomUUID(),
      createdAt: new Date(),
    };
    contacts.push(contact);
    this.saveData(CONTACTS_FILE, contacts);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return this.loadData<Contact>(CONTACTS_FILE);
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const newsletters = this.loadData<Newsletter>(NEWSLETTERS_FILE);
    
    // Check if email already exists
    const existing = newsletters.find(n => n.email === insertNewsletter.email);
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const newsletter: Newsletter = {
      ...insertNewsletter,
      id: randomUUID(),
      createdAt: new Date(),
    };
    newsletters.push(newsletter);
    this.saveData(NEWSLETTERS_FILE, newsletters);
    return newsletter;
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return this.loadData<Newsletter>(NEWSLETTERS_FILE);
  }
}

export const storage = new MemStorage();
