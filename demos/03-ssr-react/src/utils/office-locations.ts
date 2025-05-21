
export const officeLocations = {
  aoe: {
    name: "AOE HQ",
    lat: 50.07868239676358,
    lon: 8.237258432138866
  },
  seibertMedia: {
    name: "Seibert-Media",
    lat: 50.079172480082974,
    lon: 8.23883811715287
  },
  weltenbauer: {
    name: "Weltenbauer",
    lat: 50.07987928358848,
    lon: 8.246214753304054
  }
} as const;

export type OfficeLocationId =  keyof typeof officeLocations;
export type OfficeLocation = typeof officeLocations[OfficeLocationId];