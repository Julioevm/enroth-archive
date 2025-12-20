import type { Area } from '../../types';

export const mireOfTheDamned: Area = {
  id: 'mire-of-the-damned',
  slug: 'mire-of-the-damned',
  name: 'Mire of the Damned',
  headline:
    'A foul-smelling swamp where the dead do not always rest easily. It is a place of decay and dark magic.',
  details: `<ol><li>Stables</li>
<li>
<ul><li>David Feather [Master Chain Armor] (Rank 10, Crusaders)</li>
<li>Weapon store (Blunt Trauma Weapons)</li></ul></li>
<li>Macro Caligula [Master Perception] (Rank 7, 30 Luck, 2500 gold)</li>
<li>Terry Ros [quest]</li>
<li>
<ul><li>Jack Crow [Expert Mace] (Rank 4, 2000 gold)</li>
<li>Caseu Ludwig [Expert Merchant] (Rank 4, 2000 gold)</li>
<li>Alchemist store (Smoke and Mirrors)</li></ul></li>
<li>Burton Rutherford [Master Spear] (Rank 8, Cavaliers, 5000 gold)</li>
<li>Armor store (Mailed fist Armory)</li>
<li>Connie Lettering [Expert Axe] (Rank 4, 2000 gold)</li>
<li>
<ul><li>Inn</li>
<li>Avinril Smythers [quest] [Master Axe] (after completing quest)</li></ul></li>
<li>Invisible bridge (click on the tree to make it visible)</li>
<li><a href="/dungeons/castle-darkmoor">Castle Darkmoor</a></li>
<li><a href="/dungeons/dragons-lair">Dragon's Lair</a></li>
<li>Shrine of Speed (June)</li>
<li>Obelisk #9</li>
<li>Inn</li>
<li><a href="/dungeons/snergles-iron-mines">Snergle's Iron Mines</a></li>
<li>Circus (28 July - 27 August)</li>
<li>Pedestal (Wolf Statuette) for quest</li>
<li>Fountain (+2 Endurance if &lt;15, max 8 times)</li>
<li>Temple Baa</li></ol>`,
  mapImageUrl: '/areas/Mire_of_the_Damned_Markers.png',
  mapImageDescription: 'Map of Mire of the Damned',
  dungeonIds: ['castle-darkmoor', 'dragons-lair', 'snergles-iron-mines'],
  locations: [
    { id: 'motd-castle', name: 'Castle Darkmoor' },
    { id: 'motd-lair', name: "Dragon's Lair" },
    { id: 'motd-mines', name: "Snergle's Iron Mines" },
  ],
  travel: {
    byFoot: [],
    coach: [],
    boat: [],
  },
  coordinates: { left: 45, top: 65, width: 10, height: 10 },
};
