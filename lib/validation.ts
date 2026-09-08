export interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitized?: string;
}

export function validateKeyword(input: unknown): ValidationResult {
  if (typeof input !== 'string') {
    return { isValid: false, error: 'Keyword must be a string' };
  }

  const sanitized = input.trim().replace(/[<>]/g, '');

  if (sanitized.length < 2) {
    return { isValid: false, error: 'Keyword must be at least 2 characters long' };
  }

  if (sanitized.length > 100) {
    return { isValid: false, error: 'Keyword cannot exceed 100 characters' };
  }

  return { isValid: true, sanitized };
}

export function validateTopic(input: unknown): ValidationResult {
  if (typeof input !== 'string') {
    return { isValid: false, error: 'Topic must be a string' };
  }

  const sanitized = input.trim().replace(/[<>]/g, '');

  if (sanitized.length < 2) {
    return { isValid: false, error: 'Topic must be at least 2 characters long' };
  }

  if (sanitized.length > 200) {
    return { isValid: false, error: 'Topic cannot exceed 200 characters' };
  }

  return { isValid: true, sanitized };
}

const ALLOWED_PINTEREST_DOMAINS = [
  'pinterest.com',
  'www.pinterest.com',
  'pin.it',
  'pinterest.co.uk',
  'pinterest.ca',
  'pinterest.de',
  'pinterest.fr',
  'pinterest.es',
  'pinterest.it',
  'pinterest.jp',
  'pinterest.com.au',
];

export function validatePinterestUrl(input: unknown): ValidationResult {
  if (typeof input !== 'string') {
    return { isValid: false, error: 'URL must be a string' };
  }

  const trimmed = input.trim();

  if (!trimmed.startsWith('https://')) {
    return { isValid: false, error: 'Only secure HTTPS Pinterest URLs are allowed' };
  }

  try {
    const parsed = new URL(trimmed);
    const hostname = parsed.hostname.toLowerCase();

    // Check against allowed domains
    const isAllowed = ALLOWED_PINTEREST_DOMAINS.some(
      domain => hostname === domain || hostname.endsWith(`.${domain}`)
    );

    if (!isAllowed) {
      return { isValid: false, error: 'URL must be from pinterest.com or pin.it' };
    }

    // SSRF Protections: Check for private IP / localhost
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '0.0.0.0' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.16.')
    ) {
      return { isValid: false, error: 'Private network addresses are forbidden' };
    }

    return { isValid: true, sanitized: parsed.toString() };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}
