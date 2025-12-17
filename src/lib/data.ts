import type { Area, Dungeon, Quest, Skill } from './types';

const skills: Skill[] = [
  {
    id: 'spirit-magic',
    name: 'Spirit Magic',
    type: 'Magic',
    description: 'The study of magic that governs the soul, life, death, and the afterlife.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'New Sorpigal', cost: 2000, requirements: 'Spirit Magic 4' },
      { level: 'Master', location: 'Silver Cove', cost: 5000, requirements: 'Spirit Magic 12, 50 Spirit' },
    ]
  },
  {
    id: 'body-magic',
    name: 'Body Magic',
    type: 'Magic',
    description: 'The study of magic that heals, harms, or enhances the physical body.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Free Haven', cost: 2000, requirements: 'Body Magic 4' },
      { level: 'Master', location: 'Bootleg Bay', cost: 6000, requirements: 'Body Magic 12, 50 Endurance' },
    ]
  },
  {
    id: 'sword',
    name: 'Sword',
    type: 'Might',
    description: 'The skill of fighting with a one-handed bladed weapon.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Sword 4' },
      { level: 'Master', location: 'Silver Cove', cost: 4000, requirements: 'Sword 10, 50 Might' },
    ]
  },
  {
    id: 'leather-armor',
    name: 'Leather Armor',
    type: 'General',
    description: 'The skill of wearing and moving effectively in armor made of leather.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'New Sorpigal', cost: 1000, requirements: 'Leather Armor 4' },
      { level: 'Master', location: 'Free Haven', cost: 3000, requirements: 'Leather Armor 10' },
    ]
  },
];

const quests: Quest[] = [
  {
    id: 'find-goblinwatch',
    name: 'Find Goblinwatch',
    description: 'Find the Goblinwatch outpost for the mayor of New Sorpigal.',
    areaSlug: 'new-sorpigal',
    locationName: 'Goblinwatch'
  },
  {
    id: 'rescue-sharry',
    name: 'Rescue Sharry',
    description: 'Rescue the singer Sharry from the Shadow Guild Hideout in Free Haven.',
    areaSlug: 'free-haven',
    locationName: 'Shadow Guild Hideout'
  },
  {
    id: 'clear-abandoned-temple',
    name: 'Clear Abandoned Temple',
    description: 'Clear the Abandoned Temple of Baa followers for the lord of Castle Ironfist.',
    areaSlug: 'castle-ironfist',
    locationName: 'Abandoned Temple'
  },
];

const dungeons: Dungeon[] = [
    {
        id: 'goblinwatch',
        slug: 'goblinwatch',
        name: 'Goblinwatch',
        areaSlug: 'new-sorpigal',
        mapImageId: 'goblinwatch-dungeon-map',
        description: 'A fortified outpost overrun by goblins. The air is thick with the smell of filth and stale meat.',
        monsters: ['Goblin', 'Goblin Shaman']
    },
    {
        id: 'abandoned-temple',
        slug: 'abandoned-temple',
        name: 'Abandoned Temple',
        areaSlug: 'castle-ironfist',
        mapImageId: 'abandoned-temple-dungeon-map',
        description: 'A desecrated temple, now a den for fanatics of Baa. Eerie chants echo through its halls.',
        monsters: ['Acolyte of Baa', 'Bat']
    },
    {
        id: 'shadow-guild-hideout',
        slug: 'shadow-guild-hideout',
        name: 'Shadow Guild Hideout',
        areaSlug: 'free-haven',
        mapImageId: 'shadow-guild-hideout-map',
        description: 'A hidden network of cellars and tunnels beneath Free Haven, serving as the local thieves\' guild headquarters.',
        monsters: ['Thief', 'Cutpurse', 'Rogue']
    },
    {
        id: 'temple-of-baa-mist',
        slug: 'temple-of-baa-mist',
        name: 'Temple of Baa (MIST)',
        areaSlug: 'mist',
        mapImageId: 'temple-of-baa-map',
        description: 'A major center of Baa worship on the island of MIST. The temple is heavily guarded.',
        monsters: ['Follower of Baa', 'Cleric of Baa']
    }
];

const areas: Area[] = [
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
  }
];

// Data access functions
export async function getSkills(): Promise<Skill[]> {
  return skills;
}

export async function getQuests(): Promise<Quest[]> {
  return quests;
}

export async function getAreas(): Promise<Area[]> {
  return areas;
}

export async function getAreaBySlug(slug: string): Promise<Area | undefined> {
  return areas.find((area) => area.slug === slug);
}

export async function getDungeons(): Promise<Dungeon[]> {
  return dungeons;
}

export async function getDungeonBySlug(slug: string): Promise<Dungeon | undefined> {
    return dungeons.find((dungeon) => dungeon.slug === slug);
}

export async function getDungeonsByIds(ids: string[]): Promise<Dungeon[]> {
    return dungeons.filter(d => ids.includes(d.id));
}
