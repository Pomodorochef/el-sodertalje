// Type definitions
export interface Service {
  name: string;
  description: string;
  price: string;
}

export type AreaType = 'central' | 'district' | 'neighborhood';

export interface Area {
  id: string;
  name: string;
  title: string;
  description: string;
  content: string;
  image: string;
  postalCodes: string[];
  services: Service[];
  type: AreaType;
}

// Helper function to create area objects with proper typing
export function createArea(data: Omit<Area, 'type'> & { type: AreaType }): Area {
  return {
    ...data,
    type: data.type
  };
}

// Schema.org type definitions
export interface SchemaOffer {
  "@type": "Offer";
  itemOffered: {
    "@type": "Service";
    name: string;
    description: string;
  };
  priceSpecification: {
    "@type": "PriceSpecification";
    price: string;
  };
}

export interface SchemaData {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": "GeoCoordinates";
    latitude: string;
    longitude: string;
  };
  areaServed: {
    "@type": "City";
    name: string;
  };
  hasOfferCatalog: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: SchemaOffer[];
  };
} 