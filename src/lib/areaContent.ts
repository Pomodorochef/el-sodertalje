import type { Area, Service } from './areas';

interface AreaContentParams {
  name: string;
  postalCodes: string[];
  neighborhoods?: string[];
  landmarks?: string[];
}

export function generateAreaContent(params: AreaContentParams): Pick<Area, 'title' | 'description' | 'content'> {
  const { name, neighborhoods = [], landmarks = [] } = params;
  
  const title = `Elektriker ${name} ⚡ Snabb Service & Jour 24/7 | Södertälje El`;
  
  const description = `Behöver du elektriker i ${name}? Vi erbjuder professionell elservice med jour dygnet runt. ✓ Auktoriserade elektriker ✓ Fast pris ✓ Fri offert. Ring 08-123 456 78`;

  // Build neighborhood and landmark sections if they exist
  const neighborhoodSection = neighborhoods.length > 0
    ? `\nVi täcker hela ${name} inklusive:\n${neighborhoods.map(n => `• ${n}`).join('\n')}`
    : '';

  const landmarkSection = landmarks.length > 0
    ? `\n\nKända platser i området:\n${landmarks.map(l => `• ${l}`).join('\n')}`
    : '';

  const content = `${name} Elektriker - Din lokala elektriker i ${name}

Som din lokala elektriker i ${name} finns vi alltid nära till hands när du behöver hjälp. Med vår lokala förankring kan vi vara på plats inom 60 minuter vid akuta ärenden. Vi hjälper både privatpersoner och företag med alla typer av elarbeten.

Våra tjänster i ${name}

Akut Elservice
• Jour dygnet runt
• På plats inom 60 minuter
• Fast pris - inga överraskningar
• Certifierade elektriker

Elinstallation
• Nyinstallation & renovering
• Byte av elcentral
• Belysningsinstallation
• ROT-avdrag på arbetet

Elbilsladdare
• Installation från 12 995 kr
• Alla typer av laddboxar
• 5 års installationsgaranti
• Smart styrning & app

Därför väljer du oss i ${name}

Snabb Service
Vi finns lokalt i ${name} och kan snabbt vara på plats när du behöver hjälp. Vid akuta ärenden kommer vi inom 60 minuter - dygnet runt, alla dagar.

Certifierade Elektriker
Våra elektriker är certifierade och har lång erfarenhet av elarbeten i ${name}. Vi följer alla säkerhetskrav och elföreskrifter för din trygghet.

Fast Pris
Du får alltid ett fast pris innan vi börjar arbetet. Inga dolda avgifter eller överraskningar på fakturan. ROT-avdrag när det är möjligt.

Nöjd-Kund-Garanti
Vi står för kvalitet och ger alltid nöjd-kund-garanti på våra arbeten. Din trygghet är viktigast, och vi är inte nöjda förrän du är det.

Populära tjänster i ${name}

Elinstallation
Vi hjälper dig med alla typer av elinstallationer i ${name}. Från mindre elarbeten till kompletta installationer för både hem och företag. Alltid enligt gällande regler och krav.

Elbilsladdare
Som auktoriserad installatör hjälper vi dig med allt från val av laddbox till installation och driftsättning. Vi säkerställer en framtidssäkrad laddlösning för din elbil.

Akut Elservice
Elfel? Vi finns tillgängliga dygnet runt i ${name} för akuta ärenden. Ring oss så är vi snabbt på plats för att lösa problemet på ett säkert sätt.

Företagstjänster
Vi erbjuder skräddarsydda lösningar för företag i ${name}. Med serviceavtal och regelbunden tillsyn säkerställer vi en trygg och effektiv eldrift för din verksamhet.${neighborhoodSection}${landmarkSection}

Kontakta oss i ${name}

Behöver du en elektriker i ${name}? Vi ger dig en kostnadsfri offert och kan ofta hjälpa dig redan samma dag. Ring 08-123 456 78 eller kontakta oss för offert inom 2 timmar på vardagar.`.trim();

  return {
    title,
    description,
    content
  };
} 