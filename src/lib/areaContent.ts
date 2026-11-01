import type { Area } from './areas';
import { DISCLOSURE, EMERGENCY_NOTE, ELSAKERHETSVERKET_URL, FREE_NOTE, ROT_NOTE, SKATTEVERKET_URL, WHAT_WE_DO } from './site';

interface AreaContentParams {
  name: string;
  neighborhoods?: string[];
  landmarks?: string[];
}

export function generateAreaContent(params: AreaContentParams): Pick<Area, 'title' | 'description' | 'content'> {
  const { name, neighborhoods = [], landmarks = [] } = params;

  const title = `Elektriker ${name} | Skicka förfrågan | Förmedlingstjänst`;

  const description = `Behöver du elektriker i ${name}? ${WHAT_WE_DO} Gratis för dig och utan förpliktelse.`;

  // Build neighborhood and landmark sections if they exist
  const neighborhoodSection = neighborhoods.length > 0
    ? `\n\nDu kan skicka förfrågan från hela ${name}, till exempel:\n${neighborhoods.map(n => `• ${n}`).join('\n')}`
    : '';

  const landmarkSection = landmarks.length > 0
    ? `\n\nKända platser i området:\n${landmarks.map(l => `• ${l}`).join('\n')}`
    : '';

  // Each block is a heading line followed by body lines (see omraden/[slug].astro).
  const content = `Elektriker i ${name} – så fungerar det
${WHAT_WE_DO} ${FREE_NOTE}

Vi är inte en elfirma
${DISCLOSURE}

Elarbeten du kan skicka förfrågan om i ${name}
• Elinstallation, till exempel nyinstallation, belysning eller byte av elcentral
• Elbilsladdare och laddboxar
• Elrenovering och uppgradering av äldre system
• Felsökning och reparation
• Elarbeten för företag

Akuta elproblem
${EMERGENCY_NOTE}

Så kontrollerar du en elektriker
Elarbeten ska utföras av ett registrerat elinstallationsföretag. Du kan kontrollera ett företag i Elsäkerhetsverkets register på ${ELSAKERHETSVERKET_URL}.

ROT-avdrag
${ROT_NOTE} Mer information finns på ${SKATTEVERKET_URL}.${neighborhoodSection}${landmarkSection}`.trim();

  return {
    title,
    description,
    content
  };
}
