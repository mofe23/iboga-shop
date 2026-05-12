// Strips trailing slash from BASE_URL so concatenation is always /base/path
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a public asset path with the Astro base URL */
export function asset(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Prefix an internal navigation path with base + optional lang prefix */
export function navPath(path: string, lang: string): string {
  const langPrefix = lang === 'de' ? '' : `/${lang}`;
  return `${base}${langPrefix}${path}`;
}
