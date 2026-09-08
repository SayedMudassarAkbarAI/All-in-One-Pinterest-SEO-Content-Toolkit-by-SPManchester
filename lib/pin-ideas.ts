export interface PinIdeaItem {
  concept: string;
  format: 'Standard Pin (2:3)' | 'Infographic / Checklist' | 'Before & After' | 'Step-by-Step Carousel' | 'Quote / Text Overlay';
  visualPrompt: string;
  headlineHook: string;
  suggestedCta: string;
}

export function generatePinIdeas(topic: string): PinIdeaItem[] {
  const t = topic.trim();
  const cap = t.charAt(0).toUpperCase() + t.slice(1);

  return [
    {
      concept: `The Beginner's Quick Reference Checklist for ${cap}`,
      format: 'Infographic / Checklist',
      visualPrompt: `Vertical 1000x1500px layout with a clean off-white background, minimalist typography, and 5 clear checkbox rows highlighting essential ${t} steps.`,
      headlineHook: `Stop Overcomplicating ${cap}: The 5-Step Starter Checklist`,
      suggestedCta: `Save this pin for your weekend prep session!`,
    },
    {
      concept: `Extreme Budget Transformation / Styling Angle`,
      format: 'Before & After',
      visualPrompt: `Split horizontal photo composition. Left: Dated, plain starting point. Right: Gorgeous aesthetic modern ${t} result with soft natural lighting.`,
      headlineHook: `How I Styled ${cap} On A $50 Budget (Nobody Can Believe It)`,
      suggestedCta: `Click the link to see where every single item is from!`,
    },
    {
      concept: `The Curated Aesthetic Moodboard & Color Palette`,
      format: 'Standard Pin (2:3)',
      visualPrompt: `4-photo collage aesthetic grid featuring warm muted tones, textured macro details, and 5 color swatch circles at the bottom.`,
      headlineHook: `The Only ${cap} Color Palette You Need This Season`,
      suggestedCta: `Pin to your dream aesthetic board!`,
    },
    {
      concept: `Common Mistakes Everyone Makes and How to Fix Them`,
      format: 'Quote / Text Overlay',
      visualPrompt: `High-contrast bold typography on a moody textured background with subtle drop shadow and warning indicator emoji.`,
      headlineHook: `3 Big ${cap} Mistakes That Are Costing You Time & Money`,
      suggestedCta: `Read the full guide before starting your next project!`,
    },
    {
      concept: `10-Minute Rapid Tutorial Workflow`,
      format: 'Step-by-Step Carousel',
      visualPrompt: `Numbered visual sequence (Step 1, Step 2, Step 3) with clean arrows and concise explanatory text underneath each crisp photo.`,
      headlineHook: `Mastering ${cap} In Less Than 10 Minutes A Day`,
      suggestedCta: `Tap through to watch the full step-by-step breakdown!`,
    },
  ];
}
