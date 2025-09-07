// User and Profile Type Definitions

import { SkinTone, MakeupCategory, UsedProduct, SkillLevel } from './makeup';

export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatar: string;
  bio?: string;
  createdAt: Date;
  lastActive: Date;
  isVerified: boolean;
  preferences: UserPreferences;
  profile: UserProfile;
  stats: UserStats;
}

export interface UserPreferences {
  skinTone: SkinTone;
  undertone: 'cool' | 'neutral' | 'warm';
  skinType: 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';
  concerns: SkinConcern[];
  favoriteCategories: MakeupCategory[];
  priceRange: PriceRange;
  brands: string[];
  allergies: string[];
  crueltyFree: boolean;
  vegan: boolean;
  notifications: NotificationSettings;
}

export type SkinConcern = 
  | 'acne'
  | 'dark-circles'
  | 'fine-lines'
  | 'uneven-tone'
  | 'large-pores'
  | 'dryness'
  | 'oiliness'
  | 'sensitivity'
  | 'redness'
  | 'hyperpigmentation';

export interface PriceRange {
  min: number;
  max: number;
}

export interface NotificationSettings {
  newProducts: boolean;
  tutorials: boolean;
  challenges: boolean;
  socialActivity: boolean;
  recommendations: boolean;
  promotions: boolean;
}

export interface UserProfile {
  skinAnalysis: SkinAnalysis;
  measurements: FaceMeasurements;
  colorPalette: PersonalColorPalette;
  achievements: Achievement[];
  level: number;
  experience: number;
}

export interface SkinAnalysis {
  id: string;
  userId: string;
  skinTone: SkinTone;
  undertone: 'cool' | 'neutral' | 'warm';
  skinType: 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';
  concerns: SkinConcern[];
  recommendations: string[];
  confidence: number; // 0-100
  analyzedAt: Date;
  images: string[];
}

export interface FaceMeasurements {
  faceShape: 'round' | 'oval' | 'square' | 'heart' | 'diamond' | 'oblong';
  eyeShape: 'almond' | 'round' | 'hooded' | 'monolid' | 'upturned' | 'downturned';
  lipShape: 'full' | 'thin' | 'wide' | 'narrow' | 'cupid-bow' | 'straight';
  eyebrowShape: 'arched' | 'straight' | 'rounded' | 'angular';
  features: FacialFeature[];
}

export interface FacialFeature {
  type: string;
  description: string;
  recommendations: string[];
}

export interface PersonalColorPalette {
  foundation: ProductColor[];
  concealer: ProductColor[];
  lipstick: ProductColor[];
  eyeshadow: ProductColor[];
  blush: ProductColor[];
  seasonal: SeasonalColors;
}

export interface SeasonalColors {
  spring: ProductColor[];
  summer: ProductColor[];
  autumn: ProductColor[];
  winter: ProductColor[];
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  match: number; // 0-100 compatibility
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'try-on' | 'tutorial' | 'social' | 'product' | 'skill';
  unlockedAt: Date;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  points: number;
}

export interface UserStats {
  looksCreated: number;
  tutorialsCompleted: number;
  productsTriedOn: number;
  socialShares: number;
  followersCount: number;
  followingCount: number;
  totalPoints: number;
  streak: number; // consecutive days used
  favoriteCategory: MakeupCategory;
  averageRating: number; // for user-generated content
}

export interface SavedLook {
  id: string;
  userId: string;
  lookId?: string; // if based on existing look
  name: string;
  image: string;
  products: UsedProduct[];
  isCustom: boolean;
  savedAt: Date;
  lastUsed?: Date;
  notes?: string;
  occasion?: string[];
}

export interface UserActivity {
  id: string;
  userId: string;
  type: ActivityType;
  data: any;
  timestamp: Date;
}

export type ActivityType = 
  | 'look-created'
  | 'tutorial-completed'
  | 'product-reviewed'
  | 'look-shared'
  | 'challenge-joined'
  | 'achievement-unlocked'
  | 'tutorial-bookmarked'
  | 'product-wishlisted';

export interface SocialConnection {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
  isClose: boolean; // close friends
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: Date;
  endDate: Date;
  theme: string;
  difficulty: SkillLevel;
  prize?: string;
  participants: ChallengeParticipant[];
  rules: string[];
  hashtags: string[];
}

export interface ChallengeParticipant {
  userId: string;
  lookId: string;
  submittedAt: Date;
  votes: number;
  rank?: number;
}

