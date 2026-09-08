import { NextRequest, NextResponse } from 'next/server';
import { validatePinterestUrl } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';
import { fetchPinterestMedia } from '@/lib/downloader';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  const rate = checkRateLimit(ip);

  if (!rate.success) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(rate.reset) } }
    );
  }

  try {
    const body = await request.json();
    const url = body?.url;

    const validation = validatePinterestUrl(url);
    if (!validation.isValid || !validation.sanitized) {
      return NextResponse.json(
        { error: validation.error || 'Please provide a valid public Pinterest URL.' },
        { status: 400 }
      );
    }

    const result = await fetchPinterestMedia(validation.sanitized);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to detect downloadable media from the provided Pin URL.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process download request. Please ensure the link is a valid public Pin.' },
      { status: 500 }
    );
  }
}
