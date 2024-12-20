import { ReactNode } from 'react';

export interface CardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}
interface Address {
  state: string;
  city: string;
  country: string;
}

interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface LayoutProps {
  children: ReactNode;
}
export interface PillProps {
  label: string;
  onClick: () => void;
  selected: boolean; 
}
