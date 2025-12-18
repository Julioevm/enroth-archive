import type { Area } from '../types';

export const areas: Area[] = [
  {
    id: 'new-sorpigal',
    slug: 'new-sorpigal',
    name: 'New Sorpigal',
    headline: 'Our town was founded centuries ago as the last major town in Enroth. We have historically been a point from which colony ships left for the rest of the world.',
    mapImageUrl: '/areas/New_Sorpigal_Markers.png',
    mapImageDescription: 'Map of New Sorpigal',
    dungeonIds: ['goblinwatch'],
    locations: [
      { id: 'ns-town-hall', name: 'Town Hall' },
      { id: 'ns-goblinwatch', name: 'Goblinwatch' },
      { id: 'ns-stable', name: 'Stable' },
      { id: 'ns-tavern', name: 'Inn' },
    ],
    travel: {
      byFoot: [{ destination: 'Castle Ironfist', direction: 'West' }],
      coach: [
        { destination: 'Castle Ironfist', days: 'Mon, Wed, Fri', cost: 10 },
        { destination: 'Free Haven', days: 'Tue, Thu, Sat', cost: 20 },
      ],
      boat: [
        { destination: 'Misty Islands', days: 'Mon, Thu', cost: 15 },
      ]
    },
    coordinates: { left: 75, top: 70, width: 9, height: 9 }
  },
  {
    id: 'castle-ironfist',
    slug: 'castle-ironfist',
    name: 'Castle Ironfist',
    headline: 'Seat of the Ironfist dynasty and the royal court. The castle has stood for generations as a symbol of law and order in Enroth.',
    mapImageUrl: '/areas/Castle_Ironfist_Markers.png',
    mapImageDescription: 'Map of Castle Ironfist',
    dungeonIds: ['abandoned-temple'],
    locations: [
      { id: 'ci-castle', name: 'Castle Ironfist' },
      { id: 'ci-abandoned-temple', name: 'Abandoned Temple' },
      { id: 'ci-dragon-rider', name: 'Dragon Rider' },
      { id: 'ci-well', name: 'Well' },
    ],
    travel: {
      byFoot: [
        { destination: 'New Sorpigal', direction: 'East' },
        { destination: 'Free Haven', direction: 'West' }
      ],
      coach: [
        { destination: 'New Sorpigal', days: 'Mon, Wed, Fri', cost: 10 },
        { destination: 'Free Haven', days: 'Tue, Thu, Sat', cost: 10 },
      ],
      boat: []
    },
    coordinates: { left: 60, top: 60, width: 10, height: 10 }
  },
  {
    id: 'mist',
    slug: 'mist',
    name: 'Misty Islands',
    headline: 'A cluster of islands known for their magical significance and the great city of Mist, where the study of the arcane is a way of life.',
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
      ]
    },
    coordinates: { left: 88, top: 46, width: 8, height: 8 }
  },
  {
    id: 'bootleg-bay',
    slug: 'bootleg-bay',
    name: 'Bootleg Bay',
    headline: 'A treacherous coast frequented by pirates and smugglers. Its hidden coves hold many secrets, and even more dangers.',
    mapImageUrl: '/areas/Bootleg_Bay_Markers.png',
    mapImageDescription: 'Map of Bootleg Bay',
    dungeonIds: [],
    locations: [
      { id: 'bb-town', name: 'Town of Bootleg Bay' },
      { id: 'bb-shipwreck', name: 'Shipwreck' },
      { id: 'bb-smugglers-cove', name: 'Smuggler\'s Cove' },
    ],
    travel: {
      byFoot: [],
      coach: [],
      boat: [
        { destination: 'Misty Islands', days: 'Tue, Fri', cost: 20 },
        { destination: 'Free Haven', days: 'Wed, Sat', cost: 25 },
      ]
    },
    coordinates: { left: 65, top: 48, width: 10, height: 10 }
  },
  {
    id: 'free-haven',
    slug: 'free-haven',
    name: 'Free Haven',
    headline: 'The largest and most prosperous city in Enroth, a hub of commerce and the meeting place of the Council.',
    mapImageUrl: '/areas/Free_Haven_Markers.png',
    mapImageDescription: 'Map of Free Haven',
    dungeonIds: ['shadow-guild-hideout'],
    locations: [
      { id: 'fh-city-hall', name: 'City Hall' },
      { id: 'fh-shadow-guild', name: 'Shadow Guild Hideout' },
      { id: 'fh-sewers', name: 'Sewers' },
      { id: 'fh-temple', name: 'Temple' },
    ],
    travel: {
      byFoot: [
        { destination: 'Castle Ironfist', direction: 'East' },
        { destination: 'Silver Cove', direction: 'West' }
      ],
      coach: [
        { destination: 'New Sorpigal', days: 'Mon, Wed, Fri', cost: 20 },
        { destination: 'Castle Ironfist', days: 'Tue, Thu, Sat', cost: 10 },
        { destination: 'Silver Cove', days: 'Mon, Thu', cost: 15 },
      ],
      boat: [
        { destination: 'Bootleg Bay', days: 'Wed, Sat', cost: 25 },
      ]
    },
    coordinates: { left: 46, top: 40, width: 12, height: 12 }
  },
  {
    id: 'silver-cove',
    slug: 'silver-cove',
    name: 'Silver Cove',
    headline: 'Known for its beautiful silver-sand beaches and as the home of Lord Flead, Silver Cove is a jewel of the northern coast.',
    mapImageUrl: '/areas/Silver_Cove_Markers.png',
    mapImageDescription: 'Map of Silver Cove',
    dungeonIds: [],
    locations: [
      { id: 'sc-town', name: 'Town of Silver Cove' },
      { id: 'sc-monolith', name: 'Monolith' },
      { id: 'sc-witches-lair', name: 'Witches Lair' },
    ],
    travel: {
      byFoot: [{ destination: 'Free Haven', direction: 'East' }],
      coach: [
        { destination: 'Free Haven', days: 'Mon, Thu', cost: 15 },
      ],
      boat: []
    },
    coordinates: { left: 75, top: 22, width: 10, height: 10 }
  },
  {
    id: 'blackshire',
    slug: 'blackshire',
    name: 'Blackshire',
    headline: 'A town shrouded in mystery and beset by curses. Few travelers dare to stay long in Blackshire these days.',
    mapImageUrl: '/areas/Blackshire_Markers.png',
    mapImageDescription: 'Map of Blackshire',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 25, top: 28, width: 10, height: 10 }
  },
  {
    id: 'dragonsand',
    slug: 'dragonsand',
    name: 'Dragonsand',
    headline: 'A vast, scorching desert where ancient dragons roam and the sands themselves seem to hold a burning thirst.',
    mapImageUrl: '/areas/Dragonsand_Markers.png',
    mapImageDescription: 'Map of Dragonsand',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 25, top: 55, width: 10, height: 10 }
  },
  {
    id: 'eel-infested-waters',
    slug: 'eel-infested-waters',
    name: 'Eel-infested Waters',
    headline: 'Named for the dangerous sea creatures that inhabit them, these waters are a challenge for even the most experienced sailors.',
    mapImageUrl: '/areas/Eel_Infested_Waters_Markers.png',
    mapImageDescription: 'Map of Eel-infested Waters',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 85, top: 5, width: 10, height: 10 }
  },
  {
    id: 'frozen-highlands',
    slug: 'frozen-highlands',
    name: 'Frozen Highlands',
    headline: 'A land of eternal winter and rugged mountains, home to the resilient people of the north and the formidable White Cap.',
    mapImageUrl: '/areas/Frozen_Highlands_Markers.png',
    mapImageDescription: 'Map of Frozen Highlands',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 45, top: 5, width: 10, height: 10 }
  },
  {
    id: 'hermits-isle',
    slug: 'hermits-isle',
    name: 'Hermit\'s Isle',
    headline: 'A remote and isolated island, said to be the refuge of those who wish to be forgotten by the world.',
    mapImageUrl: '/areas/Hermits_Isle_Markers.png',
    mapImageDescription: 'Map of Hermit\'s Isle',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 5, top: 65, width: 10, height: 10 }
  },
  {
    id: 'kriegspire',
    slug: 'kriegspire',
    name: 'Kriegspire',
    headline: 'Dominating the landscape with its volcanic peaks, Kriegspire is a place of fire, brimstone, and ancient shadows.',
    mapImageUrl: '/areas/Kriegspire_Markers.png',
    mapImageDescription: 'Map of Kriegspire',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 25, top: 5, width: 10, height: 10 }
  },
  {
    id: 'mire-of-the-damned',
    slug: 'mire-of-the-damned',
    name: 'Mire of the Damned',
    headline: 'A foul-smelling swamp where the dead do not always rest easily. It is a place of decay and dark magic.',
    mapImageUrl: '/areas/Mire_of_the_Damned_Markers.png',
    mapImageDescription: 'Map of Mire of the Damned',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 45, top: 65, width: 10, height: 10 }
  },
  {
    id: 'paradise-valley',
    slug: 'paradise-valley',
    name: 'Paradise Valley',
    headline: 'Once a lush and beautiful region, it has become a dangerous frontier where only the strongest survive.',
    mapImageUrl: '/areas/Paradise_Valley_Markers.png',
    mapImageDescription: 'Map of Paradise Valley',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 5, top: 25, width: 10, height: 10 }
  },
  {
    id: 'sweet-water',
    slug: 'sweet-water',
    name: 'Sweet Water',
    headline: 'The site of the first Kreegan landing, now a desolate wasteland where the struggle for the fate of Enroth began.',
    mapImageUrl: '/areas/Sweet_Water_Markers.png',
    mapImageDescription: 'Map of Sweet Water',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    },
    coordinates: { left: 5, top: 5, width: 10, height: 10 }
  }
];
