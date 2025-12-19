import type { Area } from '../../types';

export const hermitsIsle: Area = {
  id: 'hermits-isle',
  slug: 'hermits-isle',
  name: "Hermit's Isle",
  headline:
    'A remote and isolated island, said to be the refuge of those who wish to be forgotten by the world.',
  mapImageUrl: '/areas/Hermits_Isle_Markers.png',
  mapImageDescription: "Map of Hermit's Isle",
  dungeonIds: [],
  locations: [],
  travel: {
    byFoot: [],
    coach: [],
    boat: [],
  },
  coordinates: { left: 5, top: 65, width: 10, height: 10 },
};
