import type { Area } from '../../types';

export const castleIronfist: Area = {
  id: 'castle-ironfist',
  slug: 'castle-ironfist',
  name: 'Castle Ironfist',
  headline:
    'Seat of the Ironfist dynasty and the royal court. The castle has stood for generations as a symbol of law and order in Enroth.',
  mapImageUrl: '/areas/Castle_Ironfist_Markers.png',
  mapImageDescription: 'Map of Castle Ironfist',
  dungeonIds: ['abandoned-temple'],
  locations: [
    { id: 'ci-castle', name: 'Castle Ironfist' },
    { id: 'ci-abandoned-temple', name: 'Abandoned Temple' },
    { id: 'ci-dragon-rider', name: 'Dragon Rider' },
    { id: 'ci-well', name: 'Well' },
  ],
  travel: {
    byFoot: [
      { destination: 'New Sorpigal', direction: 'East' },
      { destination: 'Free Haven', direction: 'West' },
    ],
    coach: [
      { destination: 'New Sorpigal', days: 'Mon, Wed, Fri', cost: 10 },
      { destination: 'Free Haven', days: 'Tue, Thu, Sat', cost: 10 },
    ],
    boat: [],
  },
  coordinates: { left: 60, top: 60, width: 10, height: 10 },
};
