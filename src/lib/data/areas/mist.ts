import type { Area } from '../../types';

export const mist: Area = {
  id: 'mist',
  slug: 'mist',
  name: 'Misty Islands',
  headline:
    'A cluster of islands known for their magical significance and the great city of Mist, where the study of the arcane is a way of life.',
  mapImageUrl: '/areas/Misty_Islands_Markers.png',
  mapImageDescription: 'Map of Mist',
  dungeonIds: ['temple-of-baa-mist'],
  locations: [
    { id: 'mist-town', name: 'Town of Mist' },
    { id: 'mist-temple-of-baa', name: 'Temple of Baa' },
    { id: 'mist-circus', name: 'Circus' },
    { id: 'mist-obelisk', name: 'Obelisk' },
  ],
  travel: {
    byFoot: [],
    coach: [],
    boat: [
      { destination: 'New Sorpigal', days: 'Mon, Thu', cost: 15 },
      { destination: 'Bootleg Bay', days: 'Tue, Fri', cost: 20 },
    ],
  },
  coordinates: { left: 88, top: 46, width: 8, height: 8 },
};
