import { NextRequest, NextResponse } from 'next/server';
import { validateTopic } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';
import { ai } from '@/lib/ai';

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
    const topic = body?.topic;
    const keyword = body?.keyword;

    const validation = validateTopic(topic);
    if (!validation.isValid || !validation.sanitized) {
      return NextResponse.json(
        { error: validation.error || 'Invalid topic field provided' },
        { status: 400 }
      );
    }

    const result = await ai.getTitles(validation.sanitized, keyword);
    return NextResponse.json({ success: true, data: result });
  } catch {
    return NextResponse.json(
      { error: 'Malformed JSON payload or server error' },
      { status: 400 }
    );
  }
}
