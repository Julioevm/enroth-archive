import type { Area } from '../../types';

export const kriegspire: Area = {
  id: 'kriegspire',
  slug: 'kriegspire',
  name: 'Kriegspire',
  headline:
    'Dominating the landscape with its volcanic peaks, Kriegspire is a place of fire, brimstone, and ancient shadows.',
  details: `<ol><li>Alchemist Store (Unusual Enchantments)</li>
<li>Stables</li>
<li>Inn</li>
<li>Well (+30 level temporary)</li>
<li>Training Hall</li>
<li>Armor Store (Armorworks)</li>
<li>Weapon Store (Knight's Paradise)</li>
<li>Well (Teleport to <a href="/dungeons/castle-kriegspire">Castle Kriegspire</a>)</li>
<li>Emil Lime [Quest]</li>
<li>Fountain (+10 Magic resist permanent, Eradicated)</li>
<li>Well (+5000 exp, -5000 gold)</li>
<li>Nicholas Roth [Expert Light Magic] (Rank 4, 2000 gold)</li>
<li><a href="/dungeons/superior-temple-of-baa">Superior Temple of Baa</a></li>
<li>Fountain (+5 elemental resist permanent, Dead)</li>
<li>Fountain (+40 armor class temporary)</li>
<li>Shrine of Fire (August)</li>
<li><a href="/dungeons/castle-kriegspire">Castle Kriegspire</a></li>
<li><a href="/dungeons/devils-outpost">Devil's Outpost</a></li>
<li>The Hermit [Quest]</li>
<li>Shrine of Cold (October)</li>
<li><a href="/dungeons/agars-laboratory">Agar's Laboratory</a></li>
<li><a href="/dungeons/caves-of-the-dragon-riders">Caves of the Dragon Riders</a></li>
<li>Obelisk #4</li>
<li>Bear Statuette Pedestal [Quest]</li></ol>`,
  mapImageUrl: '/areas/Kriegspire_Markers.png',
  mapImageDescription: 'Map of Kriegspire',
  dungeonIds: [
    'castle-kriegspire',
    'superior-temple-of-baa',
    'devils-outpost',
    'agars-laboratory',
    'caves-of-the-dragon-riders',
  ],
  locations: [
    { id: 'ks-castle', name: 'Castle Kriegspire' },
    { id: 'ks-agar', name: "Agar's Laboratory" },
    { id: 'ks-devils', name: "Devil's Outpost" },
    { id: 'ks-temple-baa', name: 'Superior Temple of Baa' },
  ],
  travel: {
    byFoot: [
      { destination: 'Sweet Water', direction: 'West' },
      { destination: 'Blackshire', direction: 'South' },
      { destination: 'Frozen Highlands', direction: 'East' },
      { destination: 'Paradise Valley', direction: 'South-West' },
      { destination: 'Free Haven', direction: 'South-East' },
    ],
    coach: [{ destination: 'Free Haven', days: 'Wed, Sat', cost: 250 }],
    boat: [],
  },
  coordinates: { left: 25, top: 5, width: 10, height: 10 },
};
