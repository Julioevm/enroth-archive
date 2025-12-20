import type { Area } from '../../types';

export const freeHaven: Area = {
  id: 'free-haven',
  slug: 'free-haven',
  name: 'Free Haven',
  headline:
    'The largest and most prosperous city in Enroth, a hub of commerce and the meeting place of the Council.',
  details: `<ol><li>Inn (Viktor's Hall)</li>
<li>Weapon Store (Feathers and String)</li>
<li>Armor Store (The Footman's Friend)</li>
<li>Stables (Free Haven Travel East)</li>
<li>Peggy Woods [Body Guild Membership] (50 gold)</li>
<li>Wilma Rothwing [Spirit Guild Membership] (50 gold)</li>
<li><ol><li>Tim O'Hoolihan [Body Magic Expert] (Rank 4, 1000 gold)</li>
<li>Michele Blackshire [Spirit Magic Expert] (Rank 4, 1000 gold)</li></ol></li>
<li>Water Magic Guild</li>
<li>Mynasia [Mind Magic Expert] (Rank 4, 1000 gold)</li>
<li>Elsie Freedman [Mind Guild Membership] (50 gold)</li>
<li>Fire Magic Guild</li>
<li>Air Magic Guild</li>
<li>Geoff Southy [buys Four Leaf Clovers, 25 gold]</li>
<li>Dillan Robinson [buys Amber, 500 gold]</li>
<li>Body Magic Guild</li>
<li><a href="/dungeons/free-haven-sewer">Free Haven Sewer</a></li>
<li>Earth Magic Guild</li>
<li>Alchemy Store (Alchemy and Incantations)</li>
<li>Ral (Carpenter)</li>
<li><ol><li>Logan Dasher [Expert Dagger] (Rank 4, 2000 gold)</li>
<li>Michael Ogilvy [Expert Sword] (Rank 4, 2000 gold)</li></ol></li>
<li>Lawrence Aleman [Buys Gongs, 2000 gold]</li>
<li>Livia Farrel [Expert Merchant] (Rank 4, 2000 gold)</li>
<li>Training Ground</li>
<li>Sylvester Moor [Expert Diplomacy] (Rank 4, 500 gold)</li>
<li>Zoltan Phelps [Quest]</li>
<li>Corey Rozburg [Fire Guild Membership]</li>
<li>Jessica Carson [Air Guild Membership]</li>
<li><ol><li>Dominique Juarez [Water Guild Membership]</li>
<li><a href="/dungeons/free-haven-sewer">Free Haven Sewer</a></li></ol></li>
<li>Ike Pargrew [Earth Guild Membership]</li>
<li>Bonnie Rotterdam [Buys Harpy Feathers, 10 gold]</li>
<li><a href="/dungeons/free-haven-sewer">Free Haven Sewer</a></li>
<li>Hans Gifford [ID Item Master]</li>
<li>Inn (The Echoing Whisper)</li>
<li><ol><li>Sy Roth [Buys Teeth, 500 gold]</li>
<li><a href="/dungeons/free-haven-sewer">Free Haven Sewer</a></li></ol></li>
<li>Docks</li>
<li>Nick Fenster [Buys Kegs of Wine, 300 gold]</li>
<li>Bank (Foreign Exchange)</li>
<li>Winston Historian [Duelist's Edge Membership]</li>
<li>Carlo Tormini [Quest]</li>
<li>General Store (Abdul's Discount Goods)</li>
<li><ol><li>Ivan Magyar [Expert Disarm Trap]</li>
<li><ol><li>Sergio Carrington [Smugglers Guild Membership]</li>
<li><a href="/dungeons/free-haven-sewer">Free Haven Sewer</a></li></ol></li></ol></li>
<li>Well (+2 Might permanent if < 15)</li>
<li>Duelist's Edge</li>
<li>Weapon Store (The Sharpening Stone)</li>
<li>Armor Store (The Foundry)</li>
<li>Fountain (+25 Hit Points)</li>
<li><ol><li>Takao [Expert Shield]</li>
<li><a href="/dungeons/free-haven-sewer">Free Haven Sewer</a></li></ol></li>
<li>Adept Guild of Mind</li>
<li>Woodrow Albright [Expert Plate]</li>
<li>Stables (Free Haven Travel West)</li>
<li>Alchemist Store (The Sorcerer's Shoppe)</li>
<li>Dragon Tower</li>
<li>Adept Guild of Spirit</li>
<li><ol><li>Li Tizare [Expert Earth Magic]</li>
<li>Zodahn Delphi [Expert Air Magic]</li></ol></li>
<li>Jack Van Imp [Expert Fire Magic]</li>
<li>Hitomi Mirumoto [Expert Water Magic]</li>
<li>Gabriel Cartman [Quest - Ethric's skull]</li>
<li>Temple Stone</li>
<li>Shrine of Accuracy</li>
<li>High Council</li>
<li>Jason Traveler [Master Body Building]</li>
<li>Davis Carp [Buys Lodestones, 5 gold]</li>
<li>Lon Miller [Buys Bones, 1000 gold]</li>
<li>Well (Spawns Fire Archers)</li>
<li>Renee Blackburn [Buys Golden Pyramids, 1000 gold]</li>
<li>Inn (Chadwick Blackpoole [Quest])</li>
<li><a href="/dungeons/temple-of-the-moon">Temple of the Moon</a></li>
<li><a href="/dungeons/tomb-of-ethric-the-mad">Tomb of Ethric the Mad</a></li>
<li>Obelisk #8</li>
<li>Temple of Baa</li>
<li><a href="/dungeons/dragoons-keep">Dragoons' Keep</a></li>
<li><ol><li>Osric Temper [Council Quest]</li>
<li>Forrest Suthers [Master Plate]</li></ol></li>
<li>George Almond (Stone Cutter)</li></ol>`,
  mapImageUrl: '/areas/Free_Haven_Markers.png',
  mapImageDescription: 'Map of Free Haven',
  dungeonIds: [
    'shadow-guild-hideout',
    'free-haven-sewer',
    'temple-of-the-moon',
    'tomb-of-ethric-the-mad',
    'dragoons-keep',
    'oracle-of-enroth',
    'control-center',
  ],
  locations: [
    { id: 'fh-city-hall', name: 'High Council' },
    { id: 'fh-shadow-guild', name: 'Shadow Guild Hideout' },
    { id: 'fh-sewers', name: 'Sewers' },
    { id: 'fh-temple', name: 'Temple Stone' },
    { id: 'fh-oracle', name: 'Oracle of Enroth' },
  ],
  travel: {
    byFoot: [
      { destination: 'Frozen Highlands', direction: 'North' },
      { destination: 'Blackshire', direction: 'West' },
      { destination: 'Mire of the Damned', direction: 'South' },
      { destination: 'Bootleg Bay', direction: 'East' },
      { destination: 'Kriegspire', direction: 'North-West' },
      { destination: 'Dragonsand', direction: 'South-West' },
      { destination: 'Castle Ironfist', direction: 'South-East' },
    ],
    coach: [
      { destination: 'Silver Cove', days: 'Mon, Thu', cost: 100 },
      { destination: 'Castle Ironfist', days: 'Tue, Fri', cost: 100 },
      { destination: 'Darkmoor', days: 'Wed, Sat', cost: 100 },
      { destination: 'Blackshire', days: 'Mon, Thu', cost: 150 },
      { destination: 'Kriegspire', days: 'Tue, Fri', cost: 150 },
      { destination: 'White Cap', days: 'Wed, Sat', cost: 150 },
    ],
    boat: [
      { destination: 'Misty Islands', days: 'Mon, Thu', cost: 300 },
      { destination: 'Silver Cove', days: 'Tue, Thu', cost: 300 },
      { destination: 'Castle Ironfist', days: 'Wed', cost: 300 },
    ],
  },
  coordinates: { left: 46, top: 40, width: 12, height: 12 },
};
