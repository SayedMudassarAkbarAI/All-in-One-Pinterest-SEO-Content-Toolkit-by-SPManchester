export interface SeasonInfo {
  id: string;
  name: string;
  season: string;
  peakPeriod: string;
  startPinningMonth: string;
  description: string;
  trendingKeywords: string[];
  boardIdeas: string[];
  contentAngles: string[];
}

export const SEASONAL_DATA: SeasonInfo[] = [
  {
    id: 'christmas',
    name: 'Christmas & Holiday Season',
    season: 'Winter / Q4',
    peakPeriod: 'November 15 – December 25',
    startPinningMonth: 'August – September',
    description: 'The highest search volume window on Pinterest. Pinners look for gift guides, DIY ornaments, festive recipes, tablescapes, and holiday outfits months before December.',
    trendingKeywords: [
      'christmas aesthetic wallpaper',
      'christmas gift ideas for her',
      'diy christmas ornaments aesthetic',
      'holiday party outfit winter',
      'gingerbread house decorating ideas',
      'christmas tree decor modern',
      'affordable stocking stuffers',
      'cozy holiday living room decor'
    ],
    boardIdeas: [
      'Festive Holiday Recipes & Cocktails',
      'Christmas Decor & Tablescapes',
      'Curated Gift Guides 2026',
      'Winter Holiday Outfits'
    ],
    contentAngles: [
      'Budget-friendly luxury Christmas decor hacks',
      '10-minute edible holiday gifts neighbours love',
      'Minimalist Scandinavian Christmas styling'
    ]
  },
  {
    id: 'halloween',
    name: 'Halloween & Fall Spooky',
    season: 'Autumn / October',
    peakPeriod: 'October 1 – October 31',
    startPinningMonth: 'July – August',
    description: 'Halloween searches spike dramatically in late summer. DIY costumes, front porch pumpkin decor, spooky baking, and gothic aesthetic boards drive massive traffic.',
    trendingKeywords: [
      'halloween costume ideas couple',
      'easy spooky treats for party',
      'fall aesthetic front porch decor',
      'cute halloween ghost painting',
      'indoor gothic halloween styling',
      'last minute diy halloween costume',
      'aesthetic pumpkin carving ideas',
      'dark autumn outfit inspo'
    ],
    boardIdeas: [
      'Spooky Season Decor & DIY',
      'Creative Halloween Costumes',
      'Fall Baking & Spooky Treats',
      'Autumn Porch Inspiration'
    ],
    contentAngles: [
      'Creative couple costumes you can make from your closet',
      'Non-tacky tasteful Halloween interior styling',
      'Kid-friendly healthy spooky party snacks'
    ]
  },
  {
    id: 'valentines',
    name: "Valentine's Day & Galentine's",
    season: 'Late Winter / February',
    peakPeriod: 'January 20 – February 14',
    startPinningMonth: 'December – January',
    description: 'Encompasses romantic date night ideas, Galentine party brunches, heartfelt DIY cards, romantic nail art, and dessert baking ideas.',
    trendingKeywords: [
      'valentines day nails aesthetic',
      'galentines brunch ideas decor',
      'romantic dinner at home recipes',
      'meaningful gifts for boyfriend',
      'cute valentines treats for school',
      'pink aesthetic romantic photoshoot',
      'diy valentines day card creative',
      'valentines outfit inspo date night'
    ],
    boardIdeas: [
      "Valentine's Nail Inspo & Makeup",
      "Galentine's Brunch Decor",
      'Romantic Dinners & Sweets',
      'Thoughtful Gift Ideas'
    ],
    contentAngles: [
      'How to host a chic Galentine cocktail & dessert evening',
      '3-course restaurant quality romantic dinner in 45 minutes',
      'Cute minimalist Valentine nails you can do at home'
    ]
  },
  {
    id: 'summer',
    name: 'Summer Vacation & Lifestyle',
    season: 'Summer / Q2-Q3',
    peakPeriod: 'May 1 – July 31',
    startPinningMonth: 'March – April',
    description: 'Pinners plan beach vacations, outdoor barbecue menus, summer capsule wardrobes, pool parties, and warm-weather DIY crafts early in the spring.',
    trendingKeywords: [
      'summer aesthetic outfits casual',
      'beach vacation packing list',
      'refreshing summer mocktails non alcoholic',
      'easy outdoor patio decor ideas',
      'summer nail art bright colors',
      'healthy picnic food recipes',
      'summer bucket list aesthetic',
      'linen pants outfit summer styling'
    ],
    boardIdeas: [
      'Summer Capsule Wardrobe',
      'Outdoor Dining & Cocktails',
      'Travel Inspo & Packing Guides',
      'Sun-Drenched Home & Garden'
    ],
    contentAngles: [
      '10-piece European summer packing capsule',
      'Refreshing batch mocktails for warm weekend gatherings',
      'Transform a small rental balcony into a summer sanctuary'
    ]
  },
  {
    id: 'back-to-school',
    name: 'Back to School & Organization',
    season: 'Late Summer / August-September',
    peakPeriod: 'July 20 – September 10',
    startPinningMonth: 'June – July',
    description: 'Parents, college students, and teachers flood Pinterest searching for classroom decor, dorm room organization, lunchbox meal prep, and stationery aesthetics.',
    trendingKeywords: [
      'dorm room aesthetic decor college',
      'cute back to school outfits high school',
      'bento box lunch ideas kids',
      'study notes aesthetic goodnotes',
      'college desk setup small room',
      'teacher classroom organization',
      'bullet journal back to school spread',
      'healthy meal prep for students'
    ],
    boardIdeas: [
      'Cozy College Dorm Styling',
      'Back to School Outfit Inspo',
      'Easy Kids Lunchbox Ideas',
      'Study Productivity & Notetaking'
    ],
    contentAngles: [
      'Small dorm storage hacks that double your usable space',
      '5-minute balanced school lunch preps kids actually eat',
      'Minimalist student aesthetic notebook systems'
    ]
  },
  {
    id: 'wedding',
    name: 'Wedding Planning & Bridal',
    season: 'Spring to Autumn',
    peakPeriod: 'April 1 – October 31',
    startPinningMonth: 'Year-Round (Peaks Jan-March)',
    description: 'Pinterest is the primary discovery engine for brides and grooms. Search topics include floral arrangements, wedding dresses, color palettes, and DIY budget decor.',
    trendingKeywords: [
      'wedding color palette earthy tones',
      'simple modern wedding dress aesthetic',
      'diy wedding centerpiece ideas low budget',
      'bridal shower themes aesthetic',
      'intimate backyard wedding setup',
      'wedding invitation templates modern',
      'bridesmaid dresses mismatched colors',
      'outdoor wedding arch greenery'
    ],
    boardIdeas: [
      'Bridal Inspo & Gowns',
      'Table Settings & Floral Design',
      'Intimate Micro-Wedding Ideas',
      'Wedding Signage & Stationery'
    ],
    contentAngles: [
      'How to pull off a $5,000 wedding that looks like $30,000',
      'Unique mismatched bridesmaid color combinations',
      'Timeless wedding photography shot list guide'
    ]
  },
  {
    id: 'new-year',
    name: 'New Year & Wellness Reset',
    season: 'Winter / January',
    peakPeriod: 'December 26 – January 31',
    startPinningMonth: 'November – December',
    description: 'High search velocity for habit trackers, healthy meal prep, vision boards, home decluttering, workout routines, and financial goals.',
    trendingKeywords: [
      'vision board aesthetic printable',
      'healthy meal prep ideas for week',
      'morning routine aesthetic checklist',
      'home organization hacks decluttering',
      'financial goals tracker budget sheet',
      'beginner gym workout routine female',
      'dry january mocktail recipes',
      'daily wellness habit tracker'
    ],
    boardIdeas: [
      'New Year Vision & Mindset',
      'Home Organization & Decluttering',
      'Clean Eating & Batch Prep',
      'Morning Habits & Wellness'
    ],
    contentAngles: [
      'Realistic reset habits that outlast the first month of January',
      'Whole-house decluttering guide: 15 minutes a day',
      'Aesthetic digital vision board tutorial in Canva'
    ]
  },
  {
    id: 'spring',
    name: 'Spring Cleaning & Refresh',
    season: 'Spring / Q1-Q2',
    peakPeriod: 'March 15 – May 15',
    startPinningMonth: 'January – February',
    description: 'Transitioning out of winter: light pastel color schemes, flower gardening, outdoor planter boxes, spring outfits, and deep cleaning routines.',
    trendingKeywords: [
      'spring outfit ideas pastel aesthetic',
      'deep clean checklist house room by room',
      'container gardening vegetables beginner',
      'spring nails aesthetic floral',
      'easter table decor simple elegant',
      'front porch flower planter ideas',
      'capsule wardrobe spring essentials',
      'fresh floral arrangement tips'
    ],
    boardIdeas: [
      'Spring Capsule Outfits',
      'Garden & Porch Planters',
      'Spring Cleaning & Fresh Home',
      'Easter Brunch & Floral Tables'
    ],
    contentAngles: [
      '7 non-toxic homemade cleaners that work wonders',
      'Early spring balcony garden setup for small spaces',
      'Effortless spring outfit formulas using wardrobe basics'
    ]
  }
];
