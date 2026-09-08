import { NextRequest, NextResponse } from 'next/server';
import { validateKeyword } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';
import { analyzeTrend, compareTrendKeywords } from '@/lib/trends';

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
  const compare = searchParams.get('compare');

  if (compare) {
    const rawList = compare.split(',').map(s => s.trim()).filter(Boolean).slice(0, 4);
    if (rawList.length === 0) {
      return NextResponse.json({ error: 'Provide at least one keyword to compare' }, { status: 400 });
    }
    const results = compareTrendKeywords(rawList);
    return NextResponse.json({ success: true, data: results });
  }

  const validation = validateKeyword(keyword);
  if (!validation.isValid || !validation.sanitized) {
    return NextResponse.json(
      { error: validation.error || 'Invalid keyword parameter' },
      { status: 400 }
    );
  }

  try {
    const trend = analyzeTrend(validation.sanitized);
    return NextResponse.json(
      { success: true, data: trend },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to analyze trends. Please try again.' },
      { status: 500 }
    );
  }
}
