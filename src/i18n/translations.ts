export const LOCALES = ['de', 'en', 'fr', 'es'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'de';

export const ui = {
  de: {
    'nav.home': 'Start',
    'nav.blog': 'Blog',
    'nav.microdosing': 'Microdosing',
    'nav.infos': 'Wichtigste Infos',
    'nav.fullflood': 'Fullflood',
    'nav.treatment': 'Behandlung',
    'nav.videos': 'Videos',
    'nav.sources': 'Quellen',
    'nav.contact': 'Kontakt',
    'nav.shop': 'Shop',
    'footer.imprint': 'Impressum / Datenschutz',
    'footer.contact': 'Kontakt',
    'footer.disclaimer': 'Alle Inhalte dienen nur zu Informationszwecken.',
    'blog.readmore': 'Weiterlesen',
    'blog.back': '← Zurück zum Blog',
    'contact.email': 'E-Mail senden',
    'lang.label': 'Sprache',
    'hero.cta': 'Jetzt informieren',
    'hero.subtitle': 'Informationen, Begleitung & Termine für Iboga-Behandlungen in Deutschland',
    'shop.cta': 'Zum Iboga Store',
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.microdosing': 'Microdosing',
    'nav.infos': 'Key Info',
    'nav.fullflood': 'Full Flood',
    'nav.treatment': 'Treatment',
    'nav.videos': 'Videos',
    'nav.sources': 'Sources',
    'nav.contact': 'Contact',
    'nav.shop': 'Shop',
    'footer.imprint': 'Imprint / Privacy',
    'footer.contact': 'Contact',
    'footer.disclaimer': 'All content is for informational purposes only.',
    'blog.readmore': 'Read more',
    'blog.back': '← Back to Blog',
    'contact.email': 'Send Email',
    'lang.label': 'Language',
    'hero.cta': 'Learn More',
    'hero.subtitle': 'Information, guidance & appointments for iboga treatments in Germany',
    'shop.cta': 'Visit Iboga Store',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.blog': 'Blog',
    'nav.microdosing': 'Microdosage',
    'nav.infos': 'Infos clés',
    'nav.fullflood': 'Full Flood',
    'nav.treatment': 'Traitement',
    'nav.videos': 'Vidéos',
    'nav.sources': 'Sources',
    'nav.contact': 'Contact',
    'nav.shop': 'Boutique',
    'footer.imprint': 'Mentions légales / Confidentialité',
    'footer.contact': 'Contact',
    'footer.disclaimer': 'Tout le contenu est fourni à titre informatif uniquement.',
    'blog.readmore': 'Lire la suite',
    'blog.back': '← Retour au Blog',
    'contact.email': 'Envoyer un e-mail',
    'lang.label': 'Langue',
    'hero.cta': 'En savoir plus',
    'hero.subtitle': 'Informations, accompagnement & rendez-vous pour les traitements iboga en Allemagne',
    'shop.cta': 'Visiter Iboga Store',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.microdosing': 'Microdosis',
    'nav.infos': 'Información clave',
    'nav.fullflood': 'Full Flood',
    'nav.treatment': 'Tratamiento',
    'nav.videos': 'Vídeos',
    'nav.sources': 'Fuentes',
    'nav.contact': 'Contacto',
    'nav.shop': 'Tienda',
    'footer.imprint': 'Aviso legal / Privacidad',
    'footer.contact': 'Contacto',
    'footer.disclaimer': 'Todo el contenido es solo con fines informativos.',
    'blog.readmore': 'Leer más',
    'blog.back': '← Volver al Blog',
    'contact.email': 'Enviar correo',
    'lang.label': 'Idioma',
    'hero.cta': 'Más información',
    'hero.subtitle': 'Información, acompañamiento y citas para tratamientos con iboga en Alemania',
    'shop.cta': 'Visitar Iboga Store',
  },
} as const;

export function useTranslations(locale: Locale) {
  return function t(key: keyof typeof ui['de']): string {
    return (ui[locale] as typeof ui['de'])[key] ?? ui['de'][key];
  };
}

export function getLocalePath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (LOCALES.includes(lang as Locale)) return lang as Locale;
  return DEFAULT_LOCALE;
}
