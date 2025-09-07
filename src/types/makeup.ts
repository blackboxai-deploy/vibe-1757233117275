// Makeup App Type Definitions

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: MakeupCategory;
  subcategory?: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  colors: ProductColor[];
  description: string;
  ingredients: string[];
  skinTones: SkinTone[];
  features: string[];
  inStock: boolean;
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  rgb: RGB;
  hsl: HSL;
  pantone?: string;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export type MakeupCategory = 
  | 'face'
  | 'eyes'
  | 'lips'
  | 'cheeks'
  | 'brows'
  | 'tools'
  | 'skincare';

export type SkinTone = 
  | 'fair-cool'
  | 'fair-neutral'
  | 'fair-warm'
  | 'light-cool'
  | 'light-neutral'
  | 'light-warm'
  | 'medium-cool'
  | 'medium-neutral'
  | 'medium-warm'
  | 'deep-cool'
  | 'deep-neutral'
  | 'deep-warm';

export interface Look {
  id: string;
  name: string;
  description: string;
  image: string;
  products: UsedProduct[];
  occasion: Occasion;
  skillLevel: SkillLevel;
  timeRequired: number; // minutes
  steps: MakeupStep[];
  tags: string[];
  createdBy: string;
  createdAt: Date;
  likes: number;
  saves: number;
}

export interface UsedProduct {
  productId: string;
  colorId: string;
  placement: FacePlacement;
  intensity: number; // 0-100
  blendMode?: BlendMode;
}

export type FacePlacement = 
  | 'lips'
  | 'upper-eyelid'
  | 'lower-eyelid'
  | 'eyeliner'
  | 'eyebrows'
  | 'cheeks'
  | 'forehead'
  | 'nose'
  | 'chin'
  | 'temples';

export type BlendMode = 
  | 'normal'
  | 'multiply'
  | 'overlay'
  | 'soft-light'
  | 'color-burn';

export type Occasion = 
  | 'everyday'
  | 'work'
  | 'date-night'
  | 'party'
  | 'wedding'
  | 'special-event'
  | 'editorial'
  | 'dramatic';

export type SkillLevel = 
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'professional';

export interface MakeupStep {
  id: string;
  title: string;
  description: string;
  image?: string;
  videoTimestamp?: number;
  products: UsedProduct[];
  tips: string[];
  duration: number; // seconds
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: number; // minutes
  skillLevel: SkillLevel;
  category: MakeupCategory;
  looks: Look[];
  instructor: Instructor;
  tags: string[];
  rating: number;
  viewCount: number;
  createdAt: Date;
  steps: MakeupStep[];
}

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  specialties: MakeupCategory[];
  verified: boolean;
  followers: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  images: string[];
  skinTone: SkinTone;
  ageRange: string;
  helpful: number;
  createdAt: Date;
}

export interface CartItem {
  productId: string;
  colorId: string;
  quantity: number;
  addedAt: Date;
}

export interface Wishlist {
  userId: string;
  items: WishlistItem[];
}

export interface WishlistItem {
  productId: string;
  colorId?: string;
  addedAt: Date;
  notes?: string;
}