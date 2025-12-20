import type { Area } from '../../types';

export const sweetWater: Area = {
  id: 'sweet-water',
  slug: 'sweet-water',
  name: 'Sweet Water',
  headline:
    'The site of the first Kreegan landing, now a desolate wasteland where the struggle for the fate of Enroth began.',
  details: `<ol><li>Fountain (+50 to all 7 stats temporary)</li>
<li>Obelisk #1</li>
<li>Tiger Statuette Pedestal [Quest]</li>
<li><a href="/dungeons/the-hive">The Hive</a></li></ol>`,
  mapImageUrl: '/areas/Sweet_Water_Markers.png',
  mapImageDescription: 'Map of Sweet Water',
  dungeonIds: ['the-hive'],
  locations: [{ id: 'sw-hive', name: 'The Hive' }],
  travel: {
    byFoot: [],
    coach: [],
    boat: [],
  },
  coordinates: { left: 5, top: 5, width: 10, height: 10 },
};
