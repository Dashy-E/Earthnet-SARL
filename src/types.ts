/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'fr';

export interface LocalizedString {
  en: string;
  fr: string;
}

export interface ServiceDetail {
  title: LocalizedString;
  intro: LocalizedString;
  items: LocalizedString[];
}

export interface Service {
  id: string;
  iconName: string; // Lucide icon identifier
  title: LocalizedString;
  shortDesc: LocalizedString;
  detailed: ServiceDetail;
  bgImage: string;
}

export interface Project {
  id: string;
  category: 'residential' | 'apartments' | 'hotels' | 'industrial' | 'warehouses' | 'staff-camps' | 'steel-structures';
  title: LocalizedString;
  location: LocalizedString;
  scope: LocalizedString;
  status: 'ongoing' | 'completed';
  client: LocalizedString;
  images: string[];
}

export interface TeamMember {
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  image: string;
}

export interface CoreValue {
  title: LocalizedString;
  desc: LocalizedString;
  iconName: string;
}

export interface FAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface NewsArticle {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  date: string;
  category: LocalizedString;
  image: string;
}

export interface CareerOpportunity {
  id: string;
  title: LocalizedString;
  department: LocalizedString;
  type: LocalizedString; // Full-time, Internship, etc.
  location: LocalizedString;
  requirements: LocalizedString[];
  description: LocalizedString;
}

export interface Testimonial {
  name: string;
  company: string;
  quote: LocalizedString;
  rating: number;
}

export interface ClientInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  createdAt: string;
  status: 'Received' | 'In Review' | 'Estimating' | 'Quoted' | 'Scheduled';
}

export interface OnlineQuotation {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  estimatedArea: number; // in sq meters
  estimatedBudget: string;
  timeline: string;
  description: string;
  status: 'Pending Analysis' | 'Calculating Cost' | 'Design Proposed' | 'Quote Dispatched';
  createdAt: string;
}
