import type { Area } from '../../types';

export const silverCove: Area = {
  id: 'silver-cove',
  slug: 'silver-cove',
  name: 'Silver Cove',
  headline:
    'Known for its beautiful silver-sand beaches and as the home of Lord Flead, Silver Cove is a jewel of the northern coast.',
  mapImageUrl: '/areas/Silver_Cove_Markers.png',
  mapImageDescription: 'Map of Silver Cove',
  dungeonIds: [],
  locations: [
    { id: 'sc-town', name: 'Town of Silver Cove' },
    { id: 'sc-monolith', name: 'Monolith' },
    { id: 'sc-witches-lair', name: 'Witches Lair' },
  ],
  travel: {
    byFoot: [{ destination: 'Free Haven', direction: 'East' }],
    coach: [{ destination: 'Free Haven', days: 'Mon, Thu', cost: 15 }],
    boat: [],
  },
  coordinates: { left: 75, top: 22, width: 10, height: 10 },
};
