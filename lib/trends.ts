export interface TrendItem {
  keyword: string;
  trajectory: 'Rising' | 'Breakout' | 'High Demand' | 'Seasonal Peak' | 'Stable';
  growthPercentage: number;
  opportunityScore: number; // 1-100
  searchInterest: number; // 1-100
  peakMonths: string;
  relatedSearches: string[];
}

export function analyzeTrend(keyword: string): TrendItem {
  const clean = keyword.toLowerCase().trim();
  
  // Deterministic pseudo-random based on string hash so repeated searches give consistent realistic insights
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash << 5) - hash + clean.charCodeAt(i);
    hash |= 0;
  }
  const absHash = Math.abs(hash);

  const trajectories: ('Rising' | 'Breakout' | 'High Demand' | 'Seasonal Peak' | 'Stable')[] = [
    'Rising', 'Breakout', 'High Demand', 'Rising', 'Seasonal Peak'
  ];
  const trajectory = trajectories[absHash % trajectories.length];

  const growth = 35 + (absHash % 145); // 35% to 180%
  const opportunity = 70 + (absHash % 28); // 70 to 98
  const interest = 65 + (absHash % 33); // 65 to 98

  const months = ['August - October', 'September - December', 'April - July', 'January - March', 'Year-Round Growth'];
  const peakMonths = months[absHash % months.length];

  const related = [
    `${clean} aesthetic ideas`,
    `${clean} trends 2026`,
    `easy diy ${clean}`,
    `modern ${clean} styling`,
    `cheap ${clean} hacks`,
    `${clean} moodboard`,
    `best ${clean} tutorial`,
  ];

  return {
    keyword: clean,
    trajectory,
    growthPercentage: growth,
    opportunityScore: opportunity,
    searchInterest: interest,
    peakMonths,
    relatedSearches: related,
  };
}

export function compareTrendKeywords(keywords: string[]): TrendItem[] {
  return keywords.map(kw => analyzeTrend(kw));
}
