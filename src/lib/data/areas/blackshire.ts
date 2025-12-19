import type { Area } from '../../types';

export const blackshire: Area = {
  id: 'blackshire',
  slug: 'blackshire',
  name: 'Blackshire',
  headline:
    'A town shrouded in mystery and beset by curses. Few travelers dare to stay long in Blackshire these days.',
  mapImageUrl: '/areas/Blackshire_Markers.png',
  mapImageDescription: 'Map of Blackshire',
  dungeonIds: [],
  locations: [],
  travel: {
    byFoot: [],
    coach: [],
    boat: [],
  },
  coordinates: { left: 25, top: 28, width: 10, height: 10 },
};
