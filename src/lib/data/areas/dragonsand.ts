import type { Area } from '../../types';

export const dragonsand: Area = {
  id: 'dragonsand',
  slug: 'dragonsand',
  name: 'Dragonsand',
  headline:
    'A vast, scorching desert where ancient dragons roam and the sands themselves seem to hold a burning thirst.',
  details: `<ol><li>Najat Ramadi [Trade Pyramid/Keg for Armor]</li>
<li>Kerman Murian [Trade Pyramid/Keg for Weapon]</li>
<li>Irbil Baktarian [Trade Pyramid/Keg for Accessory]</li>
<li>Bendar Jahrom [Trade Lamp for Gems]</li>
<li>Eagle Statuette Pedestal [Quest]</li>
<li>Fountain (+50 HP)</li>
<li>Fountain (+10 all stats permanent, Eradicated)</li>
<li>Fountain (+10 elemental resists permanent, Eradicated)</li>
<li><a href="/dungeons/tomb-of-varn">Tomb of VARN</a></li>
<li>New World Computing logo
<ul><li>Shrine of the Gods (+20 all stats permanent)</li>
<li><a href="/dungeons/new-world-computing">New World Computing</a> (Inside)</li>
<li><a href="/areas/new-sorpigal">New Sorpigal</a> (Blade near hilt)</li></ul></li>
<li>Obelisk #6</li>
<li>Rock (Requires touching all obelisks first)</li></ol>`,
  mapImageUrl: '/areas/Dragonsand_Markers.png',
  mapImageDescription: 'Map of Dragonsand',
  dungeonIds: ['tomb-of-varn', 'new-world-computing'],
  locations: [
    { id: 'ds-varn', name: 'Tomb of VARN' },
    { id: 'ds-nwc', name: 'New World Computing' },
  ],
  travel: {
    byFoot: [
      { destination: 'Blackshire', direction: 'North' },
      { destination: "Hermit's Isle", direction: 'West' },
      { destination: 'Mire of the Damned', direction: 'East' },
      { destination: 'Paradise Valley', direction: 'North-West' },
      { destination: 'Free Haven', direction: 'North-East' },
    ],
    coach: [],
    boat: [],
  },
  coordinates: { left: 25, top: 55, width: 10, height: 10 },
};
