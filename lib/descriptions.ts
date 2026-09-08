export interface DescriptionItem {
  description: string;
  angle: 'Inspirational' | 'Educational / How-To' | 'Direct Action / Traffic' | 'Story / Personal';
  characterCount: number;
}

export function generateDescriptions(topic: string, keyword?: string): DescriptionItem[] {
  const t = topic.trim();
  const kw = keyword && keyword.trim() ? keyword.trim() : t;

  const descRaw: { description: string; angle: DescriptionItem['angle'] }[] = [
    {
      description: `Looking for fresh ${kw} inspiration? Discover the top aesthetic ideas, styling formulas, and simple tips to transform your space effortlessly. Save this pin to your favorite board and click the link to read the full comprehensive breakdown!`,
      angle: 'Inspirational',
    },
    {
      description: `Here is everything you need to know about ${t} for beginners! Follow these easy step-by-step hacks to achieve stunning results without spending a fortune. Tap the pin to get the complete checklist and printable template!`,
      angle: 'Educational / How-To',
    },
    {
      description: `Want to upgrade your ${kw}? We broke down the 7 biggest mistakes creators make and how to avoid them with this simple guide. Click through to read our full blog tutorial and start seeing real results today!`,
      angle: 'Direct Action / Traffic',
    },
    {
      description: `I tested 10 different ways to style ${t} so you do not have to! Here is the exact aesthetic blueprint that completely elevated my setup on a budget. Don't forget to pin this for later when you are ready to start!`,
      angle: 'Story / Personal',
    },
  ];

  return descRaw.map(item => ({
    description: item.description,
    angle: item.angle,
    characterCount: item.description.length,
  }));
}
