import { ReactNode } from 'react';

export interface INavLink {
  href: string; children: React.ReactNode; isActive?: boolean; isMobile?: boolean, onClick?: () => void
}

export interface IRatingReviewProps {
  rating?: number;
  setRating: (rating: number) => void;
  starSize?: string;
  editable: boolean;
}

export interface IFeatureItemProps {
  id: string;
  Icon: React.ElementType;
  title: string;
  description: string;
  commonFlexClasses: string;
}

export interface IRatings {
  id: string;
  rating: number;
  company: string;
}

export interface IAutoScrollOptions {
  scrollAmount?: number         // how much to scroll each step
  interval?: number             // delay between scrolls in ms
  scrollPercentage?: number     // optional: scroll by a percentage of container width
  enabled?: boolean             // enable/disable the scroll
}

export interface IPricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

export interface IFooterSectionProps {
  title: string;
  items: { label: string }[];
};

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}