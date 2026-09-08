export interface FAQItem {
  question: string;
  answer: string;
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'What is the All-in-One Pinterest SEO & Content Toolkit by SPManchester?',
    answer: 'It is a comprehensive, 100% free suite of search engine optimization, trend discovery, content generation, and media utility tools built specifically for Pinterest creators, bloggers, Etsy sellers, and brands by SPManchester Private Limited Company.'
  },
  {
    question: 'How do Pinterest SEO keywords help my pins rank?',
    answer: 'Pinterest acts as a visual search engine powered by smart algorithmic indexing. By including relevant primary, secondary, and long-tail keywords in your Pin titles, Pin descriptions, Board titles, and alt text, you help Pinterest index your pins for targeted user searches.'
  },
  {
    question: 'Is the Pinterest Downloader tool free and safe to use?',
    answer: 'Yes, our Pinterest Downloader is completely free. It only fetches publicly accessible content directly from public Pinterest CDN URLs and does not bypass passwords, private boards, copyright protections, or DRM restrictions.'
  },
  {
    question: 'How many hashtags should I use on Pinterest in 2026?',
    answer: 'While Pinterest previously encouraged large clusters of hashtags, the current algorithm prioritizes natural keyword relevance. Using 3 to 7 hyper-relevant, targeted hashtags per Pin is the optimal practice to categorize your content without triggering spam filters.'
  },
  {
    question: 'Why is seasonal trend timing critical for Pinterest traffic?',
    answer: 'Unlike fast-paced social media platforms where posts expire in hours, Pinterest users use the platform to plan upcoming events and holidays months in advance. To capture maximum search volume, creators should publish pins 45 to 60 days before the seasonal peak.'
  },
  {
    question: 'Who created and operates this Pinterest Toolkit?',
    answer: 'The toolkit is developed, operated, and maintained by SPManchester Private Limited Company, a premier digital technology, IT consultancy, SEO, and web development firm.'
  }
];

export const TOOL_SPECIFIC_FAQS: Record<string, FAQItem[]> = {
  'pinterest-trending-keywords-generator': [
    {
      question: 'How does the Pinterest Trending Keywords Generator work?',
      answer: 'Our tool analyzes current search patterns, seasonal spikes, and semantic search variations on Pinterest to deliver high-velocity, low-competition keywords ready to copy into your content.'
    },
    {
      question: 'How often are trending Pinterest keywords updated?',
      answer: 'Search momentum shifts weekly and seasonally. We analyze real-time interest trajectories so you can catch emerging trends before they reach saturation.'
    },
    {
      question: 'Where should I place trending keywords on my Pins?',
      answer: 'Place your primary trending keyword in the first 30 characters of your Pin title, weave 2-3 secondary variations into the Pin description naturally, and assign the Pin to a tightly themed board.'
    }
  ],
  'pinterest-seo-keywords': [
    {
      question: 'What is the difference between primary and long-tail keywords on Pinterest?',
      answer: 'Primary keywords are broad high-volume terms (e.g., "living room decor"), while long-tail keywords are specific, multi-word queries with higher purchase/save intent (e.g., "small apartment living room decor aesthetic boho").'
    },
    {
      question: 'How many keywords should I include in a Pin description?',
      answer: 'Aim for 2 to 4 naturally placed keywords within 2 to 3 sentences (100–250 characters). Avoid robotic keyword stuffing which harms user engagement and algorithmic trust.'
    }
  ],
  'pinterest-hashtag-generator': [
    {
      question: 'Do hashtags still work on Pinterest in 2026?',
      answer: 'Yes, when used strategically. Hashtags act as clickable discovery links and reinforce algorithmic categorization. We recommend combining 1 broad niche tag with 3-4 specific micro-niche tags.'
    },
    {
      question: 'Can I copy all generated hashtags at once?',
      answer: 'Yes! Our tool includes a one-click "Copy All Hashtags" feature formatted with proper spacing and hash symbols ready to paste directly into your Pin description.'
    }
  ],
  'pinterest-title-generator': [
    {
      question: 'What makes a great Pinterest pin title?',
      answer: 'The best Pinterest titles combine front-loaded primary keywords with an emotional hook, curiosity trigger, or clear benefit (e.g., "7 Budget Bathroom Remodel Ideas That Look Expensive"). Keep titles under 100 characters for optimal display.'
    },
    {
      question: 'How many title variations does this tool generate?',
      answer: 'Our generator provides multiple distinct copywriting angles, including How-To formulas, Listicle hooks, Aesthetic inspirations, and Question formats.'
    }
  ],
  'pinterest-description-generator': [
    {
      question: 'How long should a Pinterest Pin description be?',
      answer: 'Pinterest allows up to 500 characters, but only the first 50–60 characters are typically visible in the feed before someone clicks. Front-load your core message and keyword, then elaborate with details and a compelling CTA.'
    },
    {
      question: 'Does the tool include calls-to-action (CTAs)?',
      answer: 'Yes, every generated description includes tailored CTAs (such as "Click through to read the full recipe" or "Save this pin to your wedding board") proven to drive saves and outbound clicks.'
    }
  ],
  'pinterest-pin-ideas': [
    {
      question: 'What kinds of Pin ideas are generated?',
      answer: 'The tool provides visual layout concepts, infographic ideas, carousel story angles, step-by-step tutorial setups, and contrasting before-and-after concepts tailored to your niche.'
    }
  ],
  'pinterest-trends': [
    {
      question: 'How can I tell if a Pinterest trend is growing or dying?',
      answer: 'Our tool calculates trend trajectory (Rising, Breakout, Stable, or Declining) and highlights upcoming seasonal windows so you can prioritize high-momentum topics.'
    }
  ],
  'seasonal-pinterest-trends': [
    {
      question: 'Why should I pin seasonal content 60 days in advance?',
      answer: 'Pinterest indexes content over 30 to 60 days. Pinning early ensures your pins have accumulated initial saves, algorithmic authority, and keyword relevance before consumer search peaks.'
    }
  ],
  'compare-keywords': [
    {
      question: 'How does the keyword comparison score work?',
      answer: 'We evaluate comparative search intent, estimated competition, and long-tail depth to calculate an Opportunity Index so you know which keyword yields the best return on effort.'
    }
  ],
  'pinterest-downloader': [
    {
      question: 'Can I download private or secret Pinterest pins?',
      answer: 'No. SPManchester strictly adheres to public copyright standards. Only publicly visible, publicly hosted Pins on Pinterest CDN can be parsed and saved.'
    },
    {
      question: 'Will downloading reduce image or video quality?',
      answer: 'No! Our downloader links directly to the highest-resolution original file asset hosted on Pinterest servers (up to 1080p for video and full resolution for images).'
    }
  ]
};
