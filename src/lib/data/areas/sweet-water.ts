import type { Area } from '../../types';

export const sweetWater: Area = {
  id: 'sweet-water',
  slug: 'sweet-water',
  name: 'Sweet Water',
  headline:
    'The site of the first Kreegan landing, now a desolate wasteland where the struggle for the fate of Enroth began.',
  mapImageUrl: '/areas/Sweet_Water_Markers.png',
  mapImageDescription: 'Map of Sweet Water',
  dungeonIds: [],
  locations: [],
  travel: {
    byFoot: [],
    coach: [],
    boat: [],
  },
  coordinates: { left: 5, top: 5, width: 10, height: 10 },
};
