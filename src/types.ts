export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  period?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SegmentItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  stats: string;
  statLabel: string;
  benefits: string[];
}

export interface TestimonialItem {
  company: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  tag: string;
}
