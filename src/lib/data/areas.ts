import type { Area } from '../types';

export const areas: Area[] = [
  {
    id: 'new-sorpigal',
    slug: 'new-sorpigal',
    name: 'New Sorpigal',
    mapImageId: 'new-sorpigal-map',
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
        { destination: 'Mist', days: 'Mon, Thu', cost: 15 },
      ]
    }
  },
  {
    id: 'castle-ironfist',
    slug: 'castle-ironfist',
    name: 'Castle Ironfist',
    mapImageId: 'castle-ironfist-map',
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
    }
  },
  {
    id: 'mist',
    slug: 'mist',
    name: 'Mist',
    mapImageId: 'mist-map',
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
    }
  },
  {
    id: 'bootleg-bay',
    slug: 'bootleg-bay',
    name: 'Bootleg Bay',
    mapImageId: 'bootleg-bay-map',
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
        { destination: 'Mist', days: 'Tue, Fri', cost: 20 },
        { destination: 'Free Haven', days: 'Wed, Sat', cost: 25 },
      ]
    }
  },
  {
    id: 'free-haven',
    slug: 'free-haven',
    name: 'Free Haven',
    mapImageId: 'free-haven-map',
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
    }
  },
  {
    id: 'silver-cove',
    slug: 'silver-cove',
    name: 'Silver Cove',
    mapImageId: 'silver-cove-map',
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
    }
  },
  {
    id: 'blackshire',
    slug: 'blackshire',
    name: 'Blackshire',
    mapImageId: null,
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'dragonsand',
    slug: 'dragonsand',
    name: 'Dragonsand',
    mapImageId: 'dragonsand-map',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'eel-infested-waters',
    slug: 'eel-infested-waters',
    name: 'Eel-infested Waters',
    mapImageId: 'eel-infested-waters-map',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'frozen-highlands',
    slug: 'frozen-highlands',
    name: 'Frozen Highlands',
    mapImageId: 'frozen-highlands-map',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'hermits-isle',
    slug: 'hermits-isle',
    name: 'Hermit\'s Isle',
    mapImageId: 'hermits-isle-map',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'kriegspire',
    slug: 'kriegspire',
    name: 'Kriegspire',
    mapImageId: 'kriegspire-map',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'mire-of-the-damned',
    slug: 'mire-of-the-damned',
    name: 'Mire of the Damned',
    mapImageId: null,
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'misty-islands',
    slug: 'misty-islands',
    name: 'Misty Islands',
    mapImageId: 'misty-islands-map',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'paradise-valley',
    slug: 'paradise-valley',
    name: 'Paradise Valley',
    mapImageId: 'paradise-valley-map',
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  },
  {
    id: 'sweet-water',
    slug: 'sweet-water',
    name: 'Sweet Water',
    mapImageId: null,
    dungeonIds: [],
    locations: [],
    travel: {
      byFoot: [],
      coach: [],
      boat: []
    }
  }
];
