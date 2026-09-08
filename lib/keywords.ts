export interface KeywordItem {
  keyword: string;
  type: 'primary' | 'secondary' | 'long-tail' | 'related' | 'question';
  intent: 'Informational' | 'Commercial' | 'Inspirational' | 'Transactional';
  volumeIndicator: 'High' | 'Very High' | 'Medium' | 'Emerging';
  competition: 'Low' | 'Medium' | 'High';
}

export interface KeywordResultGroup {
  seed: string;
  primaryKeywords: KeywordItem[];
  longTailKeywords: KeywordItem[];
  relatedKeywords: KeywordItem[];
  questionKeywords: KeywordItem[];
  clusters: {
    name: string;
    keywords: string[];
  }[];
}

const MODIFIERS = {
  intentInspirational: ['aesthetic', 'ideas', 'inspiration', 'vibes', 'moodboard', 'style', 'palette'],
  intentInformational: ['how to', 'tips', 'guide', 'tutorial', 'for beginners', 'diy', 'steps'],
  intentCommercial: ['best', 'budget friendly', 'affordable', 'luxury', 'minimalist', 'modern', 'products'],
  subNiches: ['small space', 'rental friendly', 'easy', 'quick', 'vintage', 'cute', 'chic', 'boho', 'creative'],
};

export function generateKeywords(seed: string): KeywordResultGroup {
  const cleanSeed = seed.toLowerCase().trim();
  const words = cleanSeed.split(/\s+/);
  const core = words.slice(0, 3).join(' ');

  const primary: KeywordItem[] = [
    {
      keyword: cleanSeed,
      type: 'primary',
      intent: 'Inspirational',
      volumeIndicator: 'Very High',
      competition: 'High',
    },
    {
      keyword: `${cleanSeed} aesthetic`,
      type: 'primary',
      intent: 'Inspirational',
      volumeIndicator: 'Very High',
      competition: 'Medium',
    },
    {
      keyword: `${cleanSeed} ideas`,
      type: 'primary',
      intent: 'Inspirational',
      volumeIndicator: 'Very High',
      competition: 'High',
    },
    {
      keyword: `${cleanSeed} inspiration`,
      type: 'primary',
      intent: 'Inspirational',
      volumeIndicator: 'High',
      competition: 'Medium',
    },
  ];

  const longTail: KeywordItem[] = [
    {
      keyword: `easy ${cleanSeed} for beginners`,
      type: 'long-tail',
      intent: 'Informational',
      volumeIndicator: 'High',
      competition: 'Low',
    },
    {
      keyword: `budget friendly ${cleanSeed} ideas`,
      type: 'long-tail',
      intent: 'Commercial',
      volumeIndicator: 'High',
      competition: 'Low',
    },
    {
      keyword: `simple modern ${cleanSeed} aesthetic`,
      type: 'long-tail',
      intent: 'Inspirational',
      volumeIndicator: 'High',
      competition: 'Low',
    },
    {
      keyword: `diy ${cleanSeed} step by step`,
      type: 'long-tail',
      intent: 'Informational',
      volumeIndicator: 'Medium',
      competition: 'Low',
    },
    {
      keyword: `minimalist ${cleanSeed} styling tips`,
      type: 'long-tail',
      intent: 'Inspirational',
      volumeIndicator: 'Medium',
      competition: 'Low',
    },
    {
      keyword: `affordable ${cleanSeed} hacks that work`,
      type: 'long-tail',
      intent: 'Commercial',
      volumeIndicator: 'Medium',
      competition: 'Low',
    },
    {
      keyword: `trendy ${cleanSeed} to try this year`,
      type: 'long-tail',
      intent: 'Inspirational',
      volumeIndicator: 'High',
      competition: 'Medium',
    },
    {
      keyword: `creative ${cleanSeed} on a budget`,
      type: 'long-tail',
      intent: 'Commercial',
      volumeIndicator: 'Medium',
      competition: 'Low',
    },
  ];

  const related: KeywordItem[] = [
    {
      keyword: `${cleanSeed} checklist printable`,
      type: 'related',
      intent: 'Transactional',
      volumeIndicator: 'High',
      competition: 'Low',
    },
    {
      keyword: `${cleanSeed} color palette ideas`,
      type: 'related',
      intent: 'Inspirational',
      volumeIndicator: 'Medium',
      competition: 'Low',
    },
    {
      keyword: `${cleanSeed} before and after transformation`,
      type: 'related',
      intent: 'Inspirational',
      volumeIndicator: 'High',
      competition: 'Medium',
    },
    {
      keyword: `${cleanSeed} organisation layout tips`,
      type: 'related',
      intent: 'Informational',
      volumeIndicator: 'Medium',
      competition: 'Low',
    },
    {
      keyword: `${cleanSeed} trends 2026`,
      type: 'related',
      intent: 'Inspirational',
      volumeIndicator: 'Very High',
      competition: 'Medium',
    },
    {
      keyword: `${cleanSeed} outfit / decor styling guide`,
      type: 'related',
      intent: 'Informational',
      volumeIndicator: 'High',
      competition: 'Medium',
    },
  ];

  const questions: KeywordItem[] = [
    {
      keyword: `how to start ${cleanSeed} easily`,
      type: 'question',
      intent: 'Informational',
      volumeIndicator: 'High',
      competition: 'Low',
    },
    {
      keyword: `what is the best way to do ${cleanSeed}`,
      type: 'question',
      intent: 'Informational',
      volumeIndicator: 'Medium',
      competition: 'Low',
    },
    {
      keyword: `how to create ${cleanSeed} on a budget`,
      type: 'question',
      intent: 'Informational',
      volumeIndicator: 'High',
      competition: 'Low',
    },
    {
      keyword: `which ${cleanSeed} is right for you`,
      type: 'question',
      intent: 'Commercial',
      volumeIndicator: 'Medium',
      competition: 'Low',
    },
  ];

  const clusters = [
    {
      name: 'Aesthetic & Visual Style',
      keywords: [
        `${cleanSeed} aesthetic`,
        `minimalist ${cleanSeed}`,
        `vintage ${cleanSeed} vibes`,
        `chic ${cleanSeed} palette`,
        `cozy ${cleanSeed} moodboard`,
      ],
    },
    {
      name: 'Budget & DIY Execution',
      keywords: [
        `diy ${cleanSeed}`,
        `budget friendly ${cleanSeed}`,
        `cheap ${cleanSeed} hacks`,
        `dollar tree ${cleanSeed} crafts`,
        `repurposed ${cleanSeed} ideas`,
      ],
    },
    {
      name: 'Beginner & Quick Guides',
      keywords: [
        `${cleanSeed} for beginners`,
        `quick ${cleanSeed} tutorial`,
        `step by step ${cleanSeed}`,
        `easy 10 minute ${cleanSeed}`,
        `simple ${cleanSeed} formula`,
      ],
    },
  ];

  return {
    seed: cleanSeed,
    primaryKeywords: primary,
    longTailKeywords: longTail,
    relatedKeywords: related,
    questionKeywords: questions,
    clusters,
  };
}
