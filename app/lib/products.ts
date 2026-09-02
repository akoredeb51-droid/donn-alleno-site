export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  stock?: number;
  sizes?: string[];
  colors?: string[];
};

export const money = (amount: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Tee',
    description: 'Soft cotton t-shirt for everyday wear.',
    price: 29.99,
    image: '/images/tee.jpg',
    category: 'Apparel',
  },
  {
    id: 2,
    name: 'Leather Backpack',
    description: 'Minimal design with roomy storage.',
    price: 89.0,
    image: '/images/backpack.jpg',
    category: 'Accessories',
  },
  {
    id: 3,
    name: 'Canvas Tote',
    description: 'Lightweight reusable tote for everyday essentials.',
    price: 42.5,
    image: '/images/tote.jpg',
    category: 'Accessories',
  },
];