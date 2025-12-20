import type { Area } from '../../types';

export const bootlegBay: Area = {
  id: 'bootleg-bay',
  slug: 'bootleg-bay',
  name: 'Bootleg Bay',
  headline:
    'A treacherous coast frequented by pirates and smugglers. Its hidden coves hold many secrets, and even more dangers.',
  details: `<ol><li><a href="/dungeons/hall-of-the-fire-lord">Hall of the Fire Lord</a></li>
<li>Obelisk #11</li>
<li>Circus (28 November to 27 December)</li>
<li>Fountain of Magic [Quest] (+20 SP)</li>
<li>Soshi Pertoniki [Expert Perception] (500 gold)</li>
<li>Preston Harper [Expert Chain Armor] (1000 gold)</li>
<li>Weapon store (Hammer and Tongs)</li>
<li>Inn</li>
<li>Alchemist store (The Little Magic Shop)</li>
<li>Weapon store (Abraham's Metalworks)</li>
<li>Well (+20 Might temporary)</li>
<li><ol><li>Temple</li>
<li>Winston Schezar [Quest]</li></ol></li>
<li>Training Ground</li>
<li><a href="/dungeons/temple-of-the-fist">Temple of the Fist</a></li>
<li>Fountain (+2 Personality if < 15)</li>
<li>Fountain (+2 Intellect if < 15)</li>
<li>East docks</li>
<li><a href="/dungeons/temple-of-tsantsa">Temple of Tsantsa</a></li>
<li>Inn</li>
<li>West docks</li>
<li>Temple of Baa</li>
<li><a href="/dungeons/temple-of-the-sun">Temple of the Sun</a></li>
<li>Dragon Statuette Pedestal [Quest]</li>
<li>Shrine of Might</li></ol>`,
  mapImageUrl: '/areas/Bootleg_Bay_Markers.png',
  mapImageDescription: 'Map of Bootleg Bay',
  dungeonIds: [
    'hall-of-the-fire-lord',
    'temple-of-the-fist',
    'temple-of-tsantsa',
    'temple-of-the-sun',
  ],
  locations: [
    { id: 'bb-town', name: 'Town of Bootleg Bay' },
    { id: 'bb-fire-lord', name: 'Hall of the Fire Lord' },
    { id: 'bb-fist', name: 'Temple of the Fist' },
    { id: 'bb-tsantsa', name: 'Temple of Tsantsa' },
    { id: 'bb-sun', name: 'Temple of the Sun' },
  ],
  travel: {
    byFoot: [
      { destination: 'Castle Ironfist', direction: 'South' },
      { destination: 'Free Haven', direction: 'West' },
      { destination: 'Mire of the Damned', direction: 'South-West' },
    ],
    coach: [],
    boat: [
      { destination: 'Bootleg Bay West', days: 'Mon, Wed', cost: 150 },
      { destination: 'Castle Ironfist', days: 'Tue, Thu', cost: 150 },
    ],
  },
  coordinates: { left: 65, top: 48, width: 10, height: 10 },
};
