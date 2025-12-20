import type { Area } from '../../types';

export const blackshire: Area = {
  id: 'blackshire',
  slug: 'blackshire',
  name: 'Blackshire',
  headline:
    'A town shrouded in mystery and beset by curses. Few travelers dare to stay long in Blackshire these days.',
  details: `<ol><li>Stables</li>
<li>General Store (Outland Trading Post)</li>
<li>Bank</li>
<li>Ambrose Brusse [Expert Dark Magic] (Rank 4, 2000 gold)</li>
<li>Martos Ferris [Light Guild Membership] (1000 gold)</li>
<li>Rebecca Calaway [Dark Guild Membership] (1000 gold)</li>
<li>Twillen [quest]</li>
<li>Tess Tucker [Smuggler's Guild Membership] (50 gold)</li>
<li>
<ul><li>Alchemist Store (Ty's Trinkets)</li>
<li>Smugglers' Guild</li></ul></li>
<li>Maria Trepan [Quest]</li>
<li>Light Magic Guild</li>
<li>Dark Magic Guild</li>
<li>Errol Ostermann [Master Mace] (Rank 8, Might 40, 5000 gold)</li>
<li>Guy Hampton [Master Sword] (Rank 8, Cavaliers)</li>
<li>Joanne Cravitz [Quest]</li>
<li>Temple</li>
<li>Bronwyn Meck [Master Shield] (Rank 10, 5000 gold)</li>
<li>Weapon Store (Stout Heart Staff and Spear)</li>
<li>Training Ground</li>
<li>Armor Store (Mail and Greaves)</li>
<li>Inn</li>
<li>Well (+50 Luck temporary)</li>
<li>Fountain (+50 SP)</li>
<li>Well (+5 Magic resist permanent, Diseased)</li>
<li>Fountain (+30 Magic resist temporary, Stoned)</li>
<li>Dragon Tower</li>
<li>Shrine of Magic (December)</li>
<li>Circus (28 March - 27 April)</li>
<li>Fountain (+5 intellect and Personality permanent, Diseased)</li>
<li><a href="/dungeons/temple-of-the-snake">Temple of the Snake</a></li>
<li>Temple Baa</li>
<li><a href="/dungeons/lair-of-the-wolf">Lair of the Wolf</a></li>
<li>Inn</li>
<li>Obelisk #5</li></ol>`,
  mapImageUrl: '/areas/Blackshire_Markers.png',
  mapImageDescription: 'Map of Blackshire',
  dungeonIds: ['temple-of-the-snake', 'lair-of-the-wolf'],
  locations: [
    { id: 'bs-temple-snake', name: 'Temple of the Snake' },
    { id: 'bs-lair-wolf', name: 'Lair of the Wolf' },
  ],
  travel: {
    byFoot: [
      { destination: 'Kriegspire', direction: 'North' },
      { destination: 'Paradise Valley', direction: 'West' },
      { destination: 'Dragonsand', direction: 'South' },
      { destination: 'Free Haven', direction: 'East' },
      { destination: 'Sweet Water', direction: 'North-West' },
      { destination: "Hermit's Isle", direction: 'South-West' },
      { destination: 'Mire of the Damned', direction: 'South-East' },
      { destination: 'Frozen Highlands', direction: 'North-East' },
    ],
    coach: [{ destination: 'Free Haven', days: 'Tue, Fri', cost: 250 }],
    boat: [],
  },
  coordinates: { left: 25, top: 28, width: 10, height: 10 },
};
