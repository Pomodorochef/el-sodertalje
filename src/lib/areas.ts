// Type definitions
export interface Service {
  name: string;
  description: string;
}

export type AreaType = 'central' | 'district' | 'neighborhood';

export interface Area {
  id: string;
  name: string;
  title: string;
  description: string;
  content: string;
  image: string;
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
