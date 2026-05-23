const SAFE_SCHEMES = ['http:', 'https:', 'mailto:'];

export function safeHref(value, fallback = '/') {
  if (typeof value !== 'string' || value.trim() === '') {
    return fallback;
  }

  if (value.startsWith('/')) {
    return value;
  }

  try {
    const url = new URL(value);
    return SAFE_SCHEMES.includes(url.protocol) ? value : fallback;
  } catch {
    return fallback;
  }
}

export function isExternalHref(value) {
  return typeof value === 'string' && /^(https?:)?\/\//.test(value);
}
