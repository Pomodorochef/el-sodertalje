// Facts about the operator, shared by pages and JSON-LD.
export const SITE_URL = 'https://elektriker-södertälje.se';
export const COMPANY_NAME = 'Kuruto AB';
export const COMPANY_ORG_NR = '559400-0928';
export const ELSAKERHETSVERKET_URL = 'https://www.elsakerhetsverket.se';
export const SKATTEVERKET_URL = 'https://www.skatteverket.se';

export const DISCLOSURE = 'Vi är en förmedlingstjänst, inte en elfirma. Vi utför inga elarbeten själva.';
export const WHAT_WE_DO = 'Beskriv ditt elarbete, så försöker vi koppla ihop dig med en lokal elektriker. Vi kan inte garantera att någon kan ta uppdraget.';
export const FREE_NOTE = 'Det är gratis för dig och du förbinder dig inte till något.';
export const EMERGENCY_NOTE = 'Det här formuläret är inte till för akuta ärenden. Vid brandrisk eller fara: ring 112. Vid strömavbrott: kontakta ditt elnätsbolag.';
export const ROT_NOTE = 'ROT-avdraget är 30 % av arbetskostnaden, max 50 000 kr per person och år (2026). Kontrollera vad som gäller för dig hos Skatteverket.';

export const ORGANIZATION = {
  '@type': 'Organization',
  name: COMPANY_NAME,
  url: SITE_URL,
  taxID: COMPANY_ORG_NR,
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
