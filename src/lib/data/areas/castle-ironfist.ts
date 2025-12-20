import type { Area } from '../../types';

export const castleIronfist: Area = {
  id: 'castle-ironfist',
  slug: 'castle-ironfist',
  name: 'Castle Ironfist',
  headline:
    'Seat of the Ironfist dynasty and the royal court. The castle has stood for generations as a symbol of law and order in Enroth.',
  details: `<ol><li>Rick Hamburg [Expert Chain Armor] (Rank 4, 1000 gold)</li>
<li>Benito Tellman [Expert Plate Armor] (Rank 4, 1000 gold)</li>
<li>Edgar Carpenter [Expert Shield] (Rank 4, 2000 gold)</li>
<li>Newt Headrow [Expert Leather Armor] (Rank 4, 1000 gold)</li>
<li>Stables [Travel]</li>
<li>Armor store (Metalweave Armory)</li>
<li>Andrew Besper [Quest] [Berserker's Fury Membership]</li>
<li>Berserker's Fury</li>
<li>Weapon store (The Eagle's Eye)</li>
<li>
<ul><li>Helen Teal [Expert Bow] (Rank 4, 2000 gold)</li>
<li>Tracy Flauta [Mind Guild Membership]</li></ul></li>
<li>
<ul><li>Inn</li>
<li>Terrance Smith [Expert Dagger] (Rank 4, 2000 gold)</li></ul></li>
<li>Docks (Zephyr)</li>
<li>Docks (Queen Catherine)</li>
<li>Leon Lazaru [Expert Identify Item] (Rank 4, 500 gold)</li>
<li>Tyler Tailor [Expert Disarm Trap] (Rank 4, 500 gold)</li>
<li>
<ul><li>Training Hall</li>
<li>Stephen Biggs [Expert Axe] (Rank 4, 2000 gold)</li></ul></li>
<li>
<ul><li>Weapon store (Fine Blades)</li>
<li>Aaron Strongmun [Expert Sword] (Rank 4, 2000 gold)</li></ul></li>
<li>Armor store (Iron Defense)</li>
<li>
<ul><li>Spirit Guild</li>
<li>Mind Guild</li>
<li>Body Guild</li></ul></li>
<li>Alchemist store (Eye of Newt)</li>
<li>Temple</li>
<li>Olaf Berring [Expert Body Building] (Rank 4, 500 gold)</li>
<li>Bishop Iquisitorio [Spirit Guild Membership] [Master Spirit Magic] (High Priest)</li>
<li>Well</li>
<li>Bernice Weaver [Body Guild Membership]</li>
<li>Castle
<ul><li>Wilbur Humphrey
<ul><li>Quest: Deliver the Letter</li>
<li>Council Quest: Return Lord Kilburn's shield</li>
<li>Council Quest: Slicker Silvertongue's treason</li>
<li>Promotion Quest: Rescue Melody Silver</li>
<li>Promotion Quest: Slay Longfang Witherhide</li></ul></li>
<li>Nicolai Ironfist
<ul><li>Quest: The Circus</li>
<li>Quest: Free Archibald</li></ul></li>
<li>Elton Astrogate [Expert Learning] (Rank 4, 2000 gold)</li>
<li>Walter Hargreaves [Expert Diplomacy] (Rank 4, 500 gold)</li></ul></li>
<li>Fountain (+10 Speed temporary)</li>
<li>Fountain (+10 Accuracy temporary)</li>
<li>Teleporter to #30</li>
<li>Teleporter destination</li>
<li>Fountain (+10 HP)</li>
<li>Obelisk #12</li>
<li>Teleporter to #34</li>
<li>Teleporter destination</li>
<li><a href="/dungeons/dragoons-caverns">Dragoons' Caverns</a></li>
<li><a href="/dungeons/temple-of-baa">Temple of Baa</a></li>
<li>Temple Baa</li>
<li><a href="/dungeons/corlagons-estate">Corlagon's Estate</a></li>
<li><a href="/dungeons/shadow-guild-hideout">Shadow Guild Hideout</a></li>
<li>The Seer</li>
<li>Shrine of Electricity (September)</li>
<li>Inn</li>
<li><a href="/dungeons/snergles-caverns">Snergle's Caverns</a></li></ol>`,
  mapImageUrl: '/areas/Castle_Ironfist_Markers.png',
  mapImageDescription: 'Map of Castle Ironfist',
  dungeonIds: [
    'dragoons-caverns',
    'temple-of-baa',
    'corlagons-estate',
    'shadow-guild-hideout',
    'snergles-caverns',
  ],
  locations: [
    { id: 'ci-castle', name: 'Castle Ironfist' },
    { id: 'ci-dragoons', name: "Dragoons' Caverns" },
    { id: 'ci-corlagon', name: "Corlagon's Estate" },
    { id: 'ci-shadow-guild', name: 'Shadow Guild Hideout' },
  ],
  travel: {
    byFoot: [
      { destination: 'Bootleg Bay', direction: 'North' },
      { destination: 'Mire of the Damned', direction: 'West' },
      { destination: 'New Sorpigal', direction: 'East' },
      { destination: 'Free Haven', direction: 'North-West' },
    ],
    coach: [
      { destination: 'New Sorpigal', days: 'Mon, Wed, Fri', cost: 50 },
      { destination: 'Free Haven', days: 'Tue, Sat', cost: 50 },
      { destination: 'Arena', days: 'Sun', cost: 50 },
    ],
    boat: [
      { destination: 'Misty Islands', days: 'Mon, Wed, Fri', cost: 100 },
      { destination: 'New Sorpigal', days: 'Tue, Thu, Sat', cost: 100 },
      { destination: 'Bootleg Bay East', days: 'Tue, Fri', cost: 100 },
      { destination: 'New Sorpigal Volcano', days: 'Sun', cost: 100 },
      { destination: "Hermit's Isle", days: 'Any', cost: 100 },
    ],
  },
  coordinates: { left: 60, top: 60, width: 10, height: 10 },
};
