import type { Area } from '../../types';

export const paradiseValley: Area = {
  id: 'paradise-valley',
  slug: 'paradise-valley',
  name: 'Paradise Valley',
  headline:
    'Once a lush and beautiful region, it has become a dangerous frontier where only the strongest survive.',
  details: `<ol><li>Su Lang Manchu [Master Dark Magic]</li>
<li>Rexella [Master Blaster] (5000 gold)</li>
<li>Alchemist Store (Mighty Magicks)</li>
<li>Weapon Store (Singing Steel)</li>
<li>Armor Store (The Enchanted Hauberk)</li>
<li>Inn</li>
<li>Training Hall</li>
<li>Obelisk #2</li>
<li>Temple Baa</li>
<li>Fountain (+100 HP and SP)</li>
<li>Chest (requires Telekinesis)</li></ol>`,
  mapImageUrl: '/areas/Paradise_Valley_Markers.png',
  mapImageDescription: 'Map of Paradise Valley',
  dungeonIds: [],
  locations: [],
  travel: {
    byFoot: [
      { destination: 'Sweet Water', direction: 'North' },
      { destination: "Hermit's Isle", direction: 'South' },
      { destination: 'Blackshire', direction: 'East' },
      { destination: 'Kriegspire', direction: 'North-East' },
      { destination: 'Dragonsand', direction: 'South-East' },
    ],
    coach: [],
    boat: [],
  },
  coordinates: { left: 5, top: 25, width: 10, height: 10 },
};
