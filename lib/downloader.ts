import { validatePinterestUrl } from './validation';

export interface MediaOption {
  type: 'image' | 'video' | 'gif';
  quality: string;
  url: string;
  thumbnail?: string;
  filename: string;
  extension: string;
}

export interface DownloaderResult {
  success: boolean;
  pinUrl: string;
  title?: string;
  description?: string;
  author?: string;
  media: MediaOption[];
  error?: string;
}

export async function fetchPinterestMedia(rawUrl: string): Promise<DownloaderResult> {
  const validation = validatePinterestUrl(rawUrl);
  if (!validation.isValid || !validation.sanitized) {
    return {
      success: false,
      pinUrl: rawUrl,
      media: [],
      error: validation.error || 'Invalid Pinterest URL provided.',
    };
  }

  const targetUrl = validation.sanitized;

  try {
    // Fetch Pinterest HTML with browser-like headers & timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      redirect: 'follow',
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        success: false,
        pinUrl: targetUrl,
        media: [],
        error: `Could not reach Pinterest resource (HTTP status ${response.status}). Please check if the Pin is public.`,
      };
    }

    const html = await response.text();

    // Extract OpenGraph and Twitter meta tags
    const titleMatch = html.match(/<meta property="og:title" content="([^"]*)"/i) ||
      html.match(/<title>([^<]*)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(' | Pinterest', '').trim() : 'Pinterest Media';

    const descMatch = html.match(/<meta property="og:description" content="([^"]*)"/i);
    const description = descMatch ? descMatch[1].trim() : '';

    const imageMatch = html.match(/<meta property="og:image" content="([^"]*)"/i) ||
      html.match(/<meta name="twitter:image:src" content="([^"]*)"/i);
    
    // Look for video streams (m3u8, mp4, or og:video)
    const videoMatch = html.match(/<meta property="og:video" content="([^"]*)"/i) ||
      html.match(/"url":\s*"(https:\/\/[^"]*?\.mp4[^"]*?)"/i) ||
      html.match(/(https:\/\/[a-zA-Z0-9\.\-_]+\.pinimg\.com\/videos\/[a-zA-Z0-9\.\-_]+\.mp4)/i);

    const mediaList: MediaOption[] = [];

    // Check if video found
    if (videoMatch && videoMatch[1]) {
      const cleanVideoUrl = videoMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
      mediaList.push({
        type: 'video',
        quality: 'Original HD (MP4)',
        url: cleanVideoUrl,
        thumbnail: imageMatch ? imageMatch[1] : undefined,
        filename: `pinterest-video-${Date.now()}.mp4`,
        extension: 'mp4',
      });
    }

    // Add High-Resolution Image option
    if (imageMatch && imageMatch[1]) {
      const standardImg = imageMatch[1];
      // Convert standard /originals/ or /736x/ or /564x/ to maximum resolution originals
      const originalHighRes = standardImg.replace(/\/(236x|474x|564x|736x)\//, '/originals/');
      
      const isGif = standardImg.endsWith('.gif') || html.includes('"is_gif":true');

      if (isGif) {
        mediaList.push({
          type: 'gif',
          quality: 'Original Animated GIF',
          url: originalHighRes,
          thumbnail: standardImg,
          filename: `pinterest-animated-${Date.now()}.gif`,
          extension: 'gif',
        });
      }

      mediaList.push({
        type: 'image',
        quality: 'Original Full HD (Max Resolution)',
        url: originalHighRes,
        thumbnail: standardImg,
        filename: `pinterest-image-${Date.now()}.jpg`,
        extension: 'jpg',
      });

      mediaList.push({
        type: 'image',
        quality: 'Standard Web Size (736x)',
        url: standardImg.replace(/\/(originals|236x|474x|564x)\//, '/736x/'),
        thumbnail: standardImg,
        filename: `pinterest-web-${Date.now()}.jpg`,
        extension: 'jpg',
      });
    }

    if (mediaList.length === 0) {
      return {
        success: false,
        pinUrl: targetUrl,
        media: [],
        error: 'No publicly downloadable media stream could be detected on this Pin URL. Please ensure it is a public Pin link.',
      };
    }

    return {
      success: true,
      pinUrl: targetUrl,
      title,
      description,
      media: mediaList,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown network error';
    return {
      success: false,
      pinUrl: targetUrl,
      media: [],
      error: `Failed to fetch Pin data: ${message}`,
    };
  }
}
