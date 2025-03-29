import { ReactNode } from 'react';

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  imageUrl: string;
  features: string[];
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Subscription';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
} 