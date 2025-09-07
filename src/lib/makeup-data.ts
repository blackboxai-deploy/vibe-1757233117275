// Sample Makeup Product Data and Mock Data

import { Product, Look, Tutorial, MakeupCategory, SkinTone, SkillLevel, Occasion } from '@/types/makeup';

// Sample Products Database
export const sampleProducts: Product[] = [
  // Lipsticks
  {
    id: 'lip-001',
    name: 'Velvet Matte Lipstick',
    brand: 'Luxe Beauty',
    category: 'lips',
    subcategory: 'lipstick',
    price: 32.00,
    rating: 4.8,
    reviewCount: 2847,
    image: 'https://placehold.co/300x300?text=Luxurious+matte+red+lipstick+tube+professional+beauty+photography',
    colors: [
      {
        id: 'red-classic',
        name: 'Classic Red',
        hex: '#DC143C',
        rgb: { r: 220, g: 20, b: 60 },
        hsl: { h: 348, s: 83, l: 47 }
      },
      {
        id: 'berry-wine',
        name: 'Berry Wine',
        hex: '#722F37',
        rgb: { r: 114, g: 47, b: 55 },
        hsl: { h: 353, s: 42, l: 32 }
      },
      {
        id: 'nude-rose',
        name: 'Nude Rose',
        hex: '#D4A5A5',
        rgb: { r: 212, g: 165, b: 165 },
        hsl: { h: 0, s: 35, l: 74 }
      }
    ],
    description: 'Long-lasting matte formula that delivers intense color payoff with a comfortable, non-drying finish.',
    ingredients: ['Dimethicone', 'Titanium Dioxide', 'Iron Oxides', 'Vitamin E'],
    skinTones: ['fair-neutral', 'light-warm', 'medium-neutral', 'deep-warm'],
    features: ['Long-lasting', 'Matte finish', 'Full coverage', 'Comfortable wear'],
    inStock: true
  },
  
  // Foundation
  {
    id: 'face-001',
    name: 'Flawless Foundation',
    brand: 'Perfect Base',
    category: 'face',
    subcategory: 'foundation',
    price: 45.00,
    rating: 4.6,
    reviewCount: 1923,
    image: 'https://placehold.co/300x300?text=Premium+liquid+foundation+bottle+with+elegant+minimalist+design',
    colors: [
      {
        id: 'fair-01',
        name: 'Fair Porcelain',
        hex: '#F7E7CE',
        rgb: { r: 247, g: 231, b: 206 },
        hsl: { h: 37, s: 68, l: 89 }
      },
      {
        id: 'light-02',
        name: 'Light Beige',
        hex: '#E8C5A0',
        rgb: { r: 232, g: 197, b: 160 },
        hsl: { h: 31, s: 60, l: 77 }
      },
      {
        id: 'medium-03',
        name: 'Medium Honey',
        hex: '#D4A574',
        rgb: { r: 212, g: 165, b: 116 },
        hsl: { h: 31, s: 52, l: 64 }
      }
    ],
    description: 'Buildable coverage foundation with 24-hour wear and natural finish.',
    ingredients: ['Water', 'Cyclopentasiloxane', 'Titanium Dioxide', 'Niacinamide'],
    skinTones: ['fair-cool', 'fair-neutral', 'light-cool', 'light-neutral', 'medium-neutral'],
    features: ['24-hour wear', 'Buildable coverage', 'Natural finish', 'Oil-free'],
    inStock: true
  },

  // Eyeshadow Palette
  {
    id: 'eye-001',
    name: 'Sunset Eyeshadow Palette',
    brand: 'Color Dreams',
    category: 'eyes',
    subcategory: 'eyeshadow',
    price: 58.00,
    rating: 4.9,
    reviewCount: 3456,
    image: 'https://placehold.co/300x300?text=Warm+sunset+eyeshadow+palette+with+orange+gold+burgundy+shades',
    colors: [
      {
        id: 'golden-hour',
        name: 'Golden Hour',
        hex: '#FFD700',
        rgb: { r: 255, g: 215, b: 0 },
        hsl: { h: 51, s: 100, l: 50 }
      },
      {
        id: 'sunset-orange',
        name: 'Sunset Orange',
        hex: '#FF6347',
        rgb: { r: 255, g: 99, b: 71 },
        hsl: { h: 9, s: 100, l: 64 }
      },
      {
        id: 'deep-burgundy',
        name: 'Deep Burgundy',
        hex: '#800020',
        rgb: { r: 128, g: 0, b: 32 },
        hsl: { h: 345, s: 100, l: 25 }
      }
    ],
    description: 'Highly pigmented eyeshadow palette with warm sunset tones for creating stunning eye looks.',
    ingredients: ['Mica', 'Talc', 'Iron Oxides', 'Dimethicone'],
    skinTones: ['light-warm', 'medium-warm', 'deep-warm', 'medium-neutral'],
    features: ['Highly pigmented', 'Blendable', 'Long-lasting', 'Shimmer & matte'],
    inStock: true
  },

  // Blush
  {
    id: 'cheek-001',
    name: 'Natural Glow Blush',
    brand: 'Rosy Cheeks',
    category: 'cheeks',
    subcategory: 'blush',
    price: 28.00,
    rating: 4.7,
    reviewCount: 1654,
    image: 'https://placehold.co/300x300?text=Soft+peachy+pink+blush+compact+with+natural+finish',
    colors: [
      {
        id: 'peachy-pink',
        name: 'Peachy Pink',
        hex: '#FFB6C1',
        rgb: { r: 255, g: 182, b: 193 },
        hsl: { h: 351, s: 100, l: 86 }
      },
      {
        id: 'coral-burst',
        name: 'Coral Burst',
        hex: '#FF7F50',
        rgb: { r: 255, g: 127, b: 80 },
        hsl: { h: 16, s: 100, l: 66 }
      }
    ],
    description: 'Natural-looking blush that gives a healthy, youthful glow to your cheeks.',
    ingredients: ['Mica', 'Zinc Stearate', 'Iron Oxides', 'Jojoba Oil'],
    skinTones: ['fair-neutral', 'fair-warm', 'light-neutral', 'light-warm', 'medium-neutral'],
    features: ['Natural finish', 'Buildable', 'Long-lasting', 'Skin-friendly'],
    inStock: true
  }
];

// Sample Featured Looks
export const featuredLooks: Look[] = [
  {
    id: 'look-001',
    name: 'Golden Hour Glam',
    description: 'Warm, glowing makeup perfect for sunset dinner dates',
    image: 'https://placehold.co/400x500?text=Beautiful+woman+wearing+golden+hour+makeup+with+warm+bronze+eyeshadow',
    products: [
      {
        productId: 'eye-001',
        colorId: 'golden-hour',
        placement: 'upper-eyelid',
        intensity: 80
      },
      {
        productId: 'lip-001',
        colorId: 'nude-rose',
        placement: 'lips',
        intensity: 75
      }
    ],
    occasion: 'date-night',
    skillLevel: 'intermediate',
    timeRequired: 25,
    steps: [
      {
        id: 'step-1',
        title: 'Prep the Eyes',
        description: 'Apply eyeshadow primer and set with translucent powder',
        products: [],
        tips: ['Use patting motions', 'Build color gradually'],
        duration: 120
      }
    ],
    tags: ['warm-tones', 'glowing', 'romantic'],
    createdBy: 'makeup-artist-001',
    createdAt: new Date('2024-01-15'),
    likes: 2847,
    saves: 1456
  },

  {
    id: 'look-002',
    name: 'Classic Red Lips',
    description: 'Timeless elegance with bold red lips and winged eyeliner',
    image: 'https://placehold.co/400x500?text=Elegant+woman+with+classic+red+lipstick+and+winged+eyeliner+vintage+glam',
    products: [
      {
        productId: 'lip-001',
        colorId: 'red-classic',
        placement: 'lips',
        intensity: 95
      }
    ],
    occasion: 'special-event',
    skillLevel: 'beginner',
    timeRequired: 15,
    steps: [
      {
        id: 'step-1',
        title: 'Perfect the Base',
        description: 'Create flawless base with foundation and concealer',
        products: [],
        tips: ['Use a damp beauty sponge', 'Build coverage in thin layers'],
        duration: 300
      }
    ],
    tags: ['classic', 'bold', 'timeless'],
    createdBy: 'makeup-artist-002',
    createdAt: new Date('2024-01-20'),
    likes: 3921,
    saves: 2103
  }
];

// Sample Tutorials
export const sampleTutorials: Tutorial[] = [
  {
    id: 'tutorial-001',
    title: 'Everyday Natural Makeup',
    description: 'Learn to create a fresh, natural look perfect for daily wear',
    thumbnail: 'https://placehold.co/300x200?text=Natural+everyday+makeup+tutorial+fresh+glowing+skin',
    videoUrl: '#',
    duration: 12,
    skillLevel: 'beginner',
    category: 'face',
    looks: [featuredLooks[1]],
    instructor: {
      id: 'instructor-001',
      name: 'Sarah Chen',
      avatar: 'https://placehold.co/100x100?text=Professional+makeup+artist+Sarah+Chen+headshot',
      bio: 'Professional makeup artist with 10 years of experience',
      specialties: ['face', 'eyes'],
      verified: true,
      followers: 45820
    },
    tags: ['natural', 'everyday', 'beginner-friendly'],
    rating: 4.8,
    viewCount: 89432,
    createdAt: new Date('2024-01-10'),
    steps: []
  }
];

// Utility Functions
export const getProductsByCategory = (category: MakeupCategory): Product[] => {
  return sampleProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return sampleProducts.find(product => product.id === id);
};

export const getCompatibleProducts = (skinTone: SkinTone): Product[] => {
  return sampleProducts.filter(product => 
    product.skinTones.includes(skinTone)
  );
};

export const getLooksByOccasion = (occasion: Occasion): Look[] => {
  return featuredLooks.filter(look => look.occasion === occasion);
};

export const getTutorialsBySkillLevel = (skillLevel: SkillLevel): Tutorial[] => {
  return sampleTutorials.filter(tutorial => tutorial.skillLevel === skillLevel);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return sampleProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getProductColors = (productId: string) => {
  const product = getProductById(productId);
  return product?.colors || [];
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const calculateAverageRating = (products: Product[]): number => {
  if (products.length === 0) return 0;
  const total = products.reduce((sum, product) => sum + product.rating, 0);
  return Math.round((total / products.length) * 10) / 10;
};