import type { Area } from '../../types';

export const frozenHighlands: Area = {
  id: 'frozen-highlands',
  slug: 'frozen-highlands',
  name: 'Frozen Highlands',
  headline:
    'A land of eternal winter and rugged mountains, home to the resilient people of the north and the formidable White Cap.',
  mapImageUrl: '/areas/Frozen_Highlands_Markers.png',
  mapImageDescription: 'Map of Frozen Highlands',
  dungeonIds: [],
  locations: [],
  travel: {
    byFoot: [],
    coach: [],
    boat: [],
  },
  coordinates: { left: 45, top: 5, width: 10, height: 10 },
};
