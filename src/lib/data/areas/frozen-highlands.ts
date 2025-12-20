import type { Area } from '../../types';

export const frozenHighlands: Area = {
  id: 'frozen-highlands',
  slug: 'frozen-highlands',
  name: 'Frozen Highlands',
  headline:
    'A land of eternal winter and rugged mountains, home to the resilient people of the north and the formidable White Cap.',
  details: `<ol><li>Warren Holmes [Elemental Guild Membership] (100 gold)</li>
<li>Rachel Herzl [Dark Guild Membership] (1000 gold)</li>
<li>Riverside Academy (Training Hall)</li>
<li>Blades' End</li>
<li>Fountain (+5 Might permanent, Dead)</li>
<li>Adept Guild of the Elements</li>
<li>Initiate Guild of Dark</li>
<li>Fountain (+5 Endurance permanent, Dead)</li>
<li>White Cap Temple</li>
<li>Morton Holovin [Expert Dark Magic] (Rank 4, 2000 gold)</li>
<li>Fredrick Piles [Blades' End Membership] (25 gold)</li>
<li>Weapon store (Mark and Missile)</li>
<li>Alchemist store (Apples, Thorns, and Potions)</li>
<li>Stables (White Cap Transport Co.)</li>
<li>Well (Spawns monsters)</li>
<li>Dragon tower</li>
<li>Bank</li>
<li>Inn</li>
<li>General Store</li>
<li>Armor store (Silver Lining Armor & Shield)</li>
<li>Castle Stromgard [Quest]</li>
<li>House (Expert Bow, Expert Mace)</li>
<li>Fountain (+30 Might temporary)</li>
<li>Shrine of Endurance (April)</li>
<li>Obelisk #7</li>
<li>Castle Stone [Quest]</li>
<li>House (Expert Disarm, Protection Services)</li>
<li>Inn (Rime and Reason)</li>
<li>Well (Spawns monsters)</li>
<li>Marcellus Lutvig [Protection Services Membership] (50 gold)</li>
<li>Ryan Treacle [Master Repair]</li>
<li>Weapon store (Haft and Handle Pole arms)</li>
<li>Armor store (Quality Armor)</li>
<li>Fountain (+10 Level temporary)</li>
<li><a href="/dungeons/icewind-keep">Icewind Keep</a></li>
<li><a href="/dungeons/shadow-guild">Shadow Guild</a></li>
<li>Fountain (+20 Accuracy and Speed temporary)</li>
<li>Fountain (+20 AC temporary)</li></ol>`,
  mapImageUrl: '/areas/Frozen_Highlands_Markers.png',
  mapImageDescription: 'Map of Frozen Highlands',
  dungeonIds: ['icewind-keep', 'shadow-guild'],
  locations: [
    { id: 'fh-castle-stromgard', name: 'Castle Stromgard' },
    { id: 'fh-castle-stone', name: 'Castle Stone' },
    { id: 'fh-icewind-keep', name: 'Icewind Keep' },
    { id: 'fh-shadow-guild', name: 'Shadow Guild' },
  ],
  travel: {
    byFoot: [
      { destination: 'Kriegspire', direction: 'West' },
      { destination: 'Free Haven', direction: 'South' },
      { destination: 'Silver Cove', direction: 'East' },
      { destination: 'Blackshire', direction: 'Southwest' },
    ],
    coach: [{ destination: 'Free Haven', days: 'Mon, Thu', cost: 200 }],
    boat: [],
  },
  coordinates: { left: 45, top: 5, width: 10, height: 10 },
};
