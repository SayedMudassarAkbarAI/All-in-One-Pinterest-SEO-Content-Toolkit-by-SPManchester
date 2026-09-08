export interface TitleItem {
  title: string;
  style: 'Listicle' | 'How-To' | 'Aesthetic / Inspo' | 'Curiosity Hook' | 'Ultimate Guide';
  characterCount: number;
}

export function generateTitles(topic: string, keyword?: string): TitleItem[] {
  const t = topic.trim();
  const kw = keyword && keyword.trim() ? keyword.trim() : t;
  
  // Capitalize properly
  const cap = (s: string) => s.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  const capTopic = cap(t);
  const capKw = cap(kw);

  const titlesRaw: { title: string; style: TitleItem['style'] }[] = [
    {
      title: `10 Aesthetic ${capKw} Ideas You Will Obsess Over`,
      style: 'Listicle',
    },
    {
      title: `How To Master ${capTopic}: Easy Step-By-Step Guide`,
      style: 'How-To',
    },
    {
      title: `The Ultimate Guide To ${capKw} (Tips & Inspiration)`,
      style: 'Ultimate Guide',
    },
    {
      title: `7 Genius ${capTopic} Hacks That Look Shockingly Expensive`,
      style: 'Curiosity Hook',
    },
    {
      title: `${capKw} Aesthetic: Minimalist Inspiration For 2026`,
      style: 'Aesthetic / Inspo',
    },
    {
      title: `How I Transformed My ${capTopic} On A Tiny Budget`,
      style: 'How-To',
    },
    {
      title: `5 Things Nobody Tells You About ${capKw}`,
      style: 'Curiosity Hook',
    },
    {
      title: `Easy ${capTopic} Formula: Quick Tips For Beginners`,
      style: 'Ultimate Guide',
    },
    {
      title: `Dreamy ${capKw} Moodboard & Styling Secrets`,
      style: 'Aesthetic / Inspo',
    },
    {
      title: `15 Must-Try ${capTopic} Trends Taking Over Pinterest`,
      style: 'Listicle',
    },
  ];

  return titlesRaw.map(item => ({
    title: item.title,
    style: item.style,
    characterCount: item.title.length,
  }));
}
