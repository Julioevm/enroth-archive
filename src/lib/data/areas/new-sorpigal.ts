import type { Area } from '../../types';

export const newSorpigal: Area = {
  id: 'new-sorpigal',
  slug: 'new-sorpigal',
  name: 'New Sorpigal',
  headline:
    'Our town was founded centuries ago as the last major town in Enroth. We have historically been a point from which colony ships left for the rest of the world.',
  details:
    'New Sorpigal is the gateway to Enroth for many new adventurers. Nestled on the coast, this vibrant town serves as a crucial hub for trade and travel. Despite its peaceful appearance, the town faces constant threats from the goblin-infested Goblinwatch to the east. Travelers can find essential services here, including the local Town Hall, a well-stocked tavern, and reliable transportation by coach or boat to other major regions like Castle Ironfist and the Misty Islands.',
  mapImageUrl: '/areas/New_Sorpigal_Markers.png',
  mapImageDescription: 'Map of New Sorpigal',
  dungeonIds: ['goblinwatch'],
  locations: [
    { id: 'ns-town-hall', name: 'Town Hall' },
    { id: 'ns-goblinwatch', name: 'Goblinwatch' },
    { id: 'ns-stable', name: 'Stable' },
    { id: 'ns-tavern', name: 'Inn' },
  ],
  travel: {
    byFoot: [{ destination: 'Castle Ironfist', direction: 'West' }],
    coach: [
      { destination: 'Castle Ironfist', days: 'Mon, Wed, Fri', cost: 10 },
      { destination: 'Free Haven', days: 'Tue, Thu, Sat', cost: 20 },
    ],
    boat: [{ destination: 'Misty Islands', days: 'Mon, Thu', cost: 15 }],
  },
  coordinates: { left: 75, top: 70, width: 9, height: 9 },
};
