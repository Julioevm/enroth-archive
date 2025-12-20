import type { Area } from '../../types';

export const mist: Area = {
  id: 'mist',
  slug: 'mist',
  name: 'Misty Islands',
  headline:
    'A cluster of islands known for their magical significance and the great city of Mist, where the study of the arcane is a way of life.',
  details: `<ol><li>Kathleen Mester [Unlock Teleporter]</li>
<li>Initiate Guild of Fire</li>
<li>Initiate Guild of Water</li>
<li>Initiate Guild of Air</li>
<li>Norio Ariganaka [Master Meditation (Rank 7, Personality 30, 2500 gold)</li>
<li>Harper Collins [Master Water Magic (Rank 12, 4000 gold)] [Water Guild Membership (50 gold)]</li>
<li>Caao Salem [Master Air Magic (Arch Mage, 4000 gold)] [Air Guild Membership (50 gold)]</li>
<li>Jezebel [Master Fire Magic (Rank 12, 4000 gold)] [Fire Guild Membership (50 gold)]</li>
<li>Bank</li>
<li>General Store (Lock, Stock, and Barrel)</li>
<li>Alchemist Store (Witch's Brew)</li>
<li>Town Hall [quest] [Bounty Hunt]</li>
<li>Temple</li>
<li>Training Hall</li>
<li>Weapon Store (Arm's Length Spear Shop)</li>
<li>Armor Store (Armor Emporium)</li>
<li>Fountain (+10 SP)</li>
<li>Inn</li>
<li>Well (+20 Luck temporary)</li>
<li>Calvin Black [Expert Staff] (Rank 4, 2000 gold)</li>
<li>Gonzalo Ramirez [Expert Spear (Rank 4, 2000 gold)] [Duelist's Edge Membership (50 gold)]</li>
<li>Bernard Jacobs [Expert Repair (Rank 4, 500 gold)]</li>
<li>
<ul><li>Arthur O'Leery [Expert Leather (Rank 4, 1000 gold)] [Buccaneers' Lair Membership (25 gold)]</li>
<li>Buccaneers' Lair</li></ul></li>
<li>Duelists' Edge</li>
<li>Docks</li>
<li>Fountain (+10 Intellect and Personality temporary)</li>
<li>Fountain (+5 Elemental resistance temporary)</li>
<li>Lord Albert Newton [quest] [quest] [quest]</li>
<li>Shrine of Intellect (February)</li>
<li>Silver Helm Outpost</li>
<li>Dragon Tower</li>
<li>Teleporter to '33'</li>
<li>Teleporter destination</li>
<li>Obelisk #14</li>
<li>Teleporter to '36'</li>
<li>Teleporter destination</li></ol>`,
  mapImageUrl: '/areas/Misty_Islands_Markers.png',
  mapImageDescription: 'Map of Mist',
  dungeonIds: ['temple-of-baa-mist'],
  locations: [
    { id: 'mist-town', name: 'Town of Mist' },
    { id: 'mist-temple-of-baa', name: 'Temple of Baa' },
    { id: 'mist-circus', name: 'Circus' },
    { id: 'mist-obelisk', name: 'Obelisk' },
  ],
  travel: {
    byFoot: [],
    coach: [],
    boat: [
      { destination: 'New Sorpigal', days: 'Mon, Thu', cost: 15 },
      { destination: 'Bootleg Bay', days: 'Tue, Fri', cost: 20 },
    ],
  },
  coordinates: { left: 88, top: 46, width: 8, height: 8 },
};
