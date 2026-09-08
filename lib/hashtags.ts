export interface HashtagGroup {
  broad: string[];
  niche: string[];
  trending: string[];
  recommendedSet: string[];
  copyAllString: string;
}

export function generateHashtags(topic: string): HashtagGroup {
  const clean = topic.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '');
  const words = clean.split(/\s+/).filter(Boolean);
  const camelSeed = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  const seedOne = words[0] ? words[0].charAt(0).toUpperCase() + words[0].slice(1) : 'Pinterest';

  const broad = [
    `#${camelSeed}`,
    `#${seedOne}Ideas`,
    `#${seedOne}Inspiration`,
    `#${camelSeed}Aesthetic`,
    `#${seedOne}Vibes`,
    `#Pinterest${seedOne}`,
  ];

  const niche = [
    `#${camelSeed}Tips`,
    `#${camelSeed}Tutorial`,
    `#DIY${camelSeed}`,
    `#Budget${camelSeed}`,
    `#SmallSpace${camelSeed}`,
    `#Modern${camelSeed}`,
    `#Beginner${camelSeed}`,
  ];

  const trending = [
    `#${camelSeed}Trends`,
    `#Trending${seedOne}`,
    `#${camelSeed}2026`,
    `#Aesthetic${camelSeed}`,
    `#Viral${seedOne}`,
  ];

  // A recommended balanced set of 5-7 algorithm-safe hashtags
  const recommendedSet = [
    broad[0],
    broad[1],
    niche[0],
    niche[1],
    niche[2],
    trending[0],
    trending[2],
  ].filter(Boolean);

  const allTags = Array.from(new Set([...broad, ...niche, ...trending]));
  const copyAllString = allTags.join(' ');

  return {
    broad,
    niche,
    trending,
    recommendedSet,
    copyAllString,
  };
}
