interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up expired entries every 10 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      if (now > record.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 10 * 60 * 1000);
}

export function checkRateLimit(
  ip: string,
  limit: number = 20, // generous default for smooth UX
  windowMs: number = 60 * 60 * 1000 // 1 hour
): { success: boolean; limit: number; remaining: number; reset: number } {
  const now = Date.now();
  const clientKey = ip || 'anonymous-client';

  const record = rateLimitStore.get(clientKey);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(clientKey, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: Math.ceil((now + windowMs) / 1000),
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: Math.ceil(record.resetTime / 1000),
    };
  }

  record.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: Math.ceil(record.resetTime / 1000),
  };
}
