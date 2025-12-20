import type { Area } from '../../types';

export const hermitsIsle: Area = {
  id: 'hermits-isle',
  slug: 'hermits-isle',
  name: "Hermit's Isle",
  headline:
    'A remote and isolated island, said to be the refuge of those who wish to be forgotten by the world.',
  details: `<ol><li><a href="/dungeons/supreme-temple-of-baa">Supreme Temple of Baa</a></li>
<li>Obelisk #3</li>
<li>Fountain (Restores natural age)</li></ol>`,
  mapImageUrl: '/areas/Hermits_Isle_Markers.png',
  mapImageDescription: "Map of Hermit's Isle",
  dungeonIds: ['supreme-temple-of-baa'],
  locations: [{ id: 'hi-temple', name: 'Supreme Temple of Baa' }],
  travel: {
    byFoot: [
      { destination: 'Paradise Valley', direction: 'North' },
      { destination: 'Dragonsand', direction: 'East' },
      { destination: 'Blackshire', direction: 'North-East' },
    ],
    coach: [],
    boat: [],
  },
  coordinates: { left: 5, top: 65, width: 10, height: 10 },
};
