import type { Area } from '../../types';

export const newSorpigal: Area = {
  id: 'new-sorpigal',
  slug: 'new-sorpigal',
  name: 'New Sorpigal',
  headline:
    'Our town was founded centuries ago as the last major town in Enroth. We have historically been a point from which colony ships left for the rest of the world.',
  details: `<ol>
  <li>Inn (A Lonely Knight)
    <ol>
      <li>Andover Potbello
        <ul>
          <li>Letter</li>
          <li>Candelabra</li>
        </ul>
      </li>
      <li>Sheila Loompus (upstairs)
        <ul>
          <li>Expert identification (rank 4, 500 gold)</li>
        </ul>
      </li>
      <li>Tara D'Cathay (upstairs)
        <ul>
          <li>Expert perception (rank 4, 500 gold)</li>
        </ul>
      </li>
    </ol>
  </li>
  <li>Well, 100 gold if 0 in purse (once per week)</li>
  <li>Dragon tower</li>
  <li>Hejaz Mawsil
    <ul>
      <li>Buys cobra eggs for 1000 gold each</li>
      <li>Buccaneers' Lair membership (25 gold)</li>
    </ul>
  </li>
  <li>Harold Hess
    <ul>
      <li>Blades' End membership (25 gold)</li>
    </ul>
  </li>
  <li>Alchemist store (The Seeing Eye)</li>
  <li>Weapon store (The Knife Shoppe)</li>
  <li>Armor store (The Common Defense)</li>
  <li>Blades' End</li>
  <li>Enk Salzburg
    <ul>
      <li>Expert body building (rank 4, 500 gold)</li>
    </ul>
  </li>
  <li>Victor Hose
    <ul>
      <li>Expert meditation (rank 4, 500 gold)</li>
    </ul>
  </li>
  <li>Violet Dawson
    <ul>
      <li>Angela</li>
      <li>Guild of the Self membership (100 gold)</li>
    </ul>
  </li>
  <li>Buford T. Allman
    <ul>
      <li>Spider Queen (Quest, Spider Queen Heart)</li>
      <li>Elemental Guild membership (100 gold)</li>
    </ul>
  </li>
  <li>Fountain, +10 might temporarily</li>
  <li>Fountain, 5 HP restored</li>
  <li>Fountain, 5 SP restored</li>
  <li>Isao Magistrus
    <ul>
      <li>Expert fire magic (rank 4, 1000 gold)</li>
    </ul>
  </li>
  <li>Taro
    <ul>
      <li>Expert earth magic (rank 4, 1000 gold)</li>
    </ul>
  </li>
  <li>Training hall, max level 15 (New Sorpigal Training Grounds)</li>
  <li>Enoch Highridge
    <ul>
      <li>Expert spirit magic (rank 4, 1000 gold)</li>
    </ul>
  </li>
  <li>Virgil Holiday
    <ul>
      <li>Expert mind magic (rank 4, 1000 gold)</li>
    </ul>
  </li>
  <li>Abdulai Mahgreb
    <ul>
      <li>Expert body magic (rank 4, 1000 gold)</li>
    </ul>
  </li>
  <li>Stables (2 horseshoes)</li>
  <li>General store (Traveler's Supply)</li>
  <li>Bank, Cheryl Duncan (upstairs )
    <ul>
      <li>Expert air magic (rank 4, 1000 gold)</li>
    </ul>
  </li>
  <li>Town hall
    <ol>
      <li>Frank Fairchild
        <ul>
          <li>Sharry</li>
        </ul>
      </li>
      <li>Janice
        <ul>
          <li>Goblinwatch Code</li>
        </ul>
      </li>
    </ol>
  </li>
  <li>Buccaneers' Lair (teleporter to <a href="/areas/dragonsand" title="Dragonsand">Dragonsand</a>)</li>
  <li>Temple</li>
  <li>Initiate Guild of the Elements</li>
  <li>Initiate Guild of the Self, Donald Retzer (upstairs )
    <ul>
      <li>Expert learning (rank 4, 2000 gold)</li>
    </ul>
  </li>
  <li><a href="/dungeons/abandoned-temple">Abandoned Temple</a></li>
  <li><a href="/dungeons/goblinwatch">Goblinwatch</a></li>
  <li>Dorf
    <ul>
      <li>Expert staff (rank 4, 2000 gold)</li>
    </ul>
  </li>
  <li>Falagar</li>
  <li>Docks</li>
  <li>Shrine of Luck</li>
  <li>Douglas Hill
    <ul>
      <li>Expert water magic (rank 4, 1000 gold)</li>
    </ul>
  </li>
  <li>Igor
    <ul>
      <li>Expert blaster (rank 4, 2000 gold)</li>
    </ul>
  </li>
  <li><a href="/dungeons/ghariks-forge">Gharik's Forge</a></li>
  <li>Naomi Highland the Healer</li>
  <li>Orville Corvair the Scholar</li>
  <li>Obelisk #15</li>
  <li>Buoy (makes the volcano erupt)</li>
  <li>Well, +2 luck if < 15 (8 times)</li>
</ol>`,
  mapImageUrl: '/areas/New_Sorpigal_Markers.png',
  mapImageDescription: 'Map of New Sorpigal',
  dungeonIds: ['goblinwatch', 'abandoned-temple', 'ghariks-forge'],
  locations: [
    { id: 'ns-town-hall', name: 'Town Hall' },
    { id: 'ns-goblinwatch', name: 'Goblinwatch' },
    { id: 'ns-abandoned-temple', name: 'Abandoned Temple' },
    { id: 'ns-stable', name: 'Stable' },
    { id: 'ns-tavern', name: 'Inn (A Lonely Knight)' },
    { id: 'ns-bank', name: 'Bank' },
    { id: 'ns-training-hall', name: 'Training Grounds' },
    { id: 'ns-general-store', name: "Traveler's Supply" },
    { id: 'ns-alchemist', name: 'The Seeing Eye' },
    { id: 'ns-weapon-store', name: 'The Knife Shoppe' },
    { id: 'ns-armor-store', name: 'The Common Defense' },
    { id: 'ns-guild-self', name: 'Guild of the Self' },
    { id: 'ns-guild-elements', name: 'Elemental Guild' },
    { id: 'ns-blades-end', name: "Blades' End" },
    { id: 'ns-buccaneers-lair', name: "Buccaneers' Lair" },
    { id: 'ns-docks', name: 'Docks' },
  ],
  travel: {
    byFoot: [{ destination: 'Castle Ironfist', direction: 'West' }],
    coach: [
      { destination: 'Castle Ironfist', days: 'Mon, Wed, Fri', cost: 10 },
      { destination: 'Free Haven', days: 'Tue, Thu, Sat', cost: 20 },
    ],
    boat: [{ destination: 'Misty Islands', days: 'Tue, Thu, Sat', cost: 100 }],
  },
  coordinates: { left: 75, top: 70, width: 9, height: 9 },
};
