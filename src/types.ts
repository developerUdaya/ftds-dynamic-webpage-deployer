export type Theme = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  sales: number;
  category: 'business' | 'portfolio' | 'blog' | 'ecommerce';
  tags: string[];
  featured?: boolean;
};