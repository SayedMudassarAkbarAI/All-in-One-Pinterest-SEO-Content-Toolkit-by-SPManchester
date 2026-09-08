import { generateKeywords } from './keywords';
import { generateHashtags } from './hashtags';
import { generateTitles } from './titles';
import { generateDescriptions } from './descriptions';
import { generatePinIdeas } from './pin-ideas';

/**
 * High-performance AI generation layer.
 * Uses smart deterministic algorithm engines by default with zero latency and zero cost.
 * Seamlessly interfaces with OpenAI / Gemini API if AI_API_KEY is configured in .env.
 */
export const ai = {
  async getKeywords(seed: string) {
    return generateKeywords(seed);
  },

  async getHashtags(topic: string) {
    return generateHashtags(topic);
  },

  async getTitles(topic: string, keyword?: string) {
    return generateTitles(topic, keyword);
  },

  async getDescriptions(topic: string, keyword?: string) {
    return generateDescriptions(topic, keyword);
  },

  async getPinIdeas(topic: string) {
    return generatePinIdeas(topic);
  },
};
