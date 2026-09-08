import { NextRequest, NextResponse } from 'next/server';
import { validateKeyword } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';
import { ai } from '@/lib/ai';

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  const rate = checkRateLimit(ip);

  if (!rate.success) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(rate.reset) } }
    );
  }

  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');

  const validation = validateKeyword(keyword);
  if (!validation.isValid || !validation.sanitized) {
    return NextResponse.json(
      { error: validation.error || 'Invalid keyword parameter' },
      { status: 400 }
    );
  }

  try {
    const result = await ai.getKeywords(validation.sanitized);
    return NextResponse.json(
      { success: true, data: result },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate keywords. Please try again.' },
      { status: 500 }
    );
  }
}
