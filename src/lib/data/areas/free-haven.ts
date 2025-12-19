import type { Area } from '../../types';

export const freeHaven: Area = {
  id: 'free-haven',
  slug: 'free-haven',
  name: 'Free Haven',
  headline:
    'The largest and most prosperous city in Enroth, a hub of commerce and the meeting place of the Council.',
  mapImageUrl: '/areas/Free_Haven_Markers.png',
  mapImageDescription: 'Map of Free Haven',
  dungeonIds: ['shadow-guild-hideout'],
  locations: [
    { id: 'fh-city-hall', name: 'City Hall' },
    { id: 'fh-shadow-guild', name: 'Shadow Guild Hideout' },
    { id: 'fh-sewers', name: 'Sewers' },
    { id: 'fh-temple', name: 'Temple' },
  ],
  travel: {
    byFoot: [
      { destination: 'Castle Ironfist', direction: 'East' },
      { destination: 'Silver Cove', direction: 'West' },
    ],
    coach: [
      { destination: 'New Sorpigal', days: 'Mon, Wed, Fri', cost: 20 },
      { destination: 'Castle Ironfist', days: 'Tue, Thu, Sat', cost: 10 },
      { destination: 'Silver Cove', days: 'Mon, Thu', cost: 15 },
    ],
    boat: [{ destination: 'Bootleg Bay', days: 'Wed, Sat', cost: 25 }],
  },
  coordinates: { left: 46, top: 40, width: 12, height: 12 },
};
