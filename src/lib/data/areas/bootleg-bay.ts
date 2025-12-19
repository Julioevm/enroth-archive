import type { Area } from '../../types';

export const bootlegBay: Area = {
  id: 'bootleg-bay',
  slug: 'bootleg-bay',
  name: 'Bootleg Bay',
  headline:
    'A treacherous coast frequented by pirates and smugglers. Its hidden coves hold many secrets, and even more dangers.',
  mapImageUrl: '/areas/Bootleg_Bay_Markers.png',
  mapImageDescription: 'Map of Bootleg Bay',
  dungeonIds: [],
  locations: [
    { id: 'bb-town', name: 'Town of Bootleg Bay' },
    { id: 'bb-shipwreck', name: 'Shipwreck' },
    { id: 'bb-smugglers-cove', name: "Smuggler's Cove" },
  ],
  travel: {
    byFoot: [],
    coach: [],
    boat: [
      { destination: 'Misty Islands', days: 'Tue, Fri', cost: 20 },
      { destination: 'Free Haven', days: 'Wed, Sat', cost: 25 },
    ],
  },
  coordinates: { left: 65, top: 48, width: 10, height: 10 },
};
