import type { Area, Dungeon, Quest, Skill, Monster, Spell, Item, Shrine, Potion } from './types';

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

const monsters: Monster[] = [
    {
        id: 'goblin',
        name: 'Goblin',
        description: 'A small, cruel humanoid that often travels in packs.',
        hp: 15,
        attack: 'Claws (1d4)',
        locations: ['New Sorpigal', 'Goblinwatch'],
    },
    {
        id: 'bat',
        name: 'Bat',
        description: 'A flying mammal that can be a nuisance in dark caves.',
        hp: 5,
        attack: 'Bite (1d2)',
        locations: ['Abandoned Temple'],
    },
    {
        id: 'thief',
        name: 'Thief',
        description: 'A nimble rogue who preys on the unwary.',
        hp: 25,
        attack: 'Dagger (1d4)',
        locations: ['Free Haven'],
    },
];

const spells: Spell[] = [
    {
        id: 'torch-light',
        name: 'Torch Light',
        school: 'Fire',
        description: 'Creates a magical light source that follows the party.',
        cost: '1 SP',
    },
    {
        id: 'first-aid',
        name: 'First Aid',
        school: 'Body',
        description: 'Heals a small amount of damage to a single character.',
        cost: '2 SP',
    },
    {
        id: 'bless',
        name: 'Bless',
        school: 'Spirit',
        description: 'Temporarily increases a character\'s Accuracy and Damage.',
        cost: '3 SP',
    },
];

const items: Item[] = [
    {
        id: 'short-sword',
        name: 'Short Sword',
        type: 'Weapon',
        description: 'A basic one-handed sword.',
        cost: 25,
    },
    {
        id: 'leather-armor',
        name: 'Leather Armor',
        type: 'Armor',
        description: 'Armor made from tanned leather.',
        cost: 50,
    },
    {
        id: 'healing-potion',
        name: 'Healing Potion',
        type: 'Potion',
        description: 'A magical potion that restores health.',
        cost: 30,
    },
];

const shrines: Shrine[] = [
    { id: 'shrine-jan', month: 'January', name: 'Might', location: 'Bootleg Bay, on NW island' },
    { id: 'shrine-feb', month: 'February', name: 'Intellect', location: 'Mist' },
    { id: 'shrine-mar', month: 'March', name: 'Personality', location: 'Silver Cove' },
    { id: 'shrine-apr', month: 'April', name: 'Endurance', location: 'Frozen Highlands, NE' },
    { id: 'shrine-may', month: 'May', name: 'Accuracy', location: 'Free Haven' },
    { id: 'shrine-jun', month: 'June', name: 'Speed', location: 'Mire of the Damned' },
    { id: 'shrine-jul', month: 'July', name: 'Luck', location: 'New Sorpigal' },
    { id: 'shrine-aug', month: 'August', name: 'Fire', location: 'Kriegspire, near Castle Kriegspire, West on map' },
    { id: 'shrine-sep', month: 'September', name: 'Electricity', location: 'Castle Ironfist' },
    { id: 'shrine-oct', month: 'October', name: 'Cold', location: 'Kriegspire, center of map, North over the mountain range' },
    { id: 'shrine-nov', month: 'November', name: 'Poison', location: 'Eel Infested Waters, on South island' },
    { id: 'shrine-dec', month: 'December', name: 'Magic', location: 'Blackshire, NW of town' },
];

const potions: Potion[] = [
  { id: 'cure-wounds', name: 'Cure Wounds', cost: '10 gold', color: 'Red', ingredients: 'Widowsweeps berries/Empty bottle', effect: 'Restores 10 hit points' },
  { id: 'magic-potion', name: 'Magic Potion', cost: '10 gold', color: 'Blue', ingredients: 'Phirna Root/Empty bottle', effect: 'Restores 10 spell points' },
  { id: 'energy', name: 'Energy', cost: '10 gold', color: 'Yellow', ingredients: 'Poppysnaps/Empty bottle', effect: 'Adds 10 to primary statistics temporarily' },
  { id: 'cure-poison', name: 'Cure Poison', cost: '25 gold', color: 'Purple', ingredients: 'Red/Blue', effect: 'Cures poison' },
  { id: 'protection', name: 'Protection', cost: '25 gold', color: 'Orange', ingredients: 'Red/Yellow', effect: 'Adds 10 to armor class temporarily' },
  { id: 'resistance', name: 'Resistance', cost: '25 gold', color: 'Green', ingredients: 'Blue/Yellow', effect: 'Adds 10 to resistances temporarily' },
  { id: 'bless', name: 'Bless', cost: '50 gold', color: 'White', ingredients: 'Blue/Purple', effect: 'Grants Bless (as the spell) for 6 hours' },
  { id: 'extreme-energy', name: 'Extreme Energy', cost: '50 gold', color: 'White', ingredients: 'Yellow/Orange', effect: 'Adds 20 to primary statistics temporarily' },
  { id: 'haste', name: 'Haste', cost: '50 gold', color: 'White', ingredients: 'Yellow/Green', effect: 'Grants Haste (as the spell) for 6 hours' },
  { id: 'heroism', name: 'Heroism', cost: '50 gold', color: 'White', ingredients: 'Red/Orange', effect: 'Grants Heroism (as the spell) for 6 hours' },
  { id: 'restoration', name: 'Restoration', cost: '50 gold', color: 'White', ingredients: 'Green/Purple', effect: 'Cures all conditions except dead or stoned' },
  { id: 'stone-skin', name: 'Stone Skin', cost: '50 gold', color: 'White', ingredients: 'Blue/Orange', effect: 'Grants Stone Skin (as the spell) for 6 hours' },
  { id: 'super-resistance', name: 'Super Resistance', cost: '50 gold', color: 'White', ingredients: 'Blue/Green', effect: 'Adds 20 to resistances temporarily' },
  { id: 'supreme-protection', name: 'Supreme Protection', cost: '50 gold', color: 'White', ingredients: 'Green/Orange', effect: 'Adds 20 to armor class temporarily' },
  { id: 'divine-cure', name: 'Divine Cure', cost: '100 gold', color: 'Black', ingredients: 'Orange/Restoration', effect: 'Adds 100 hit points if at or below maximum and adds one year of age' },
  { id: 'divine-magic', name: 'Divine Magic', cost: '100 gold', color: 'Black', ingredients: 'Green/Super Resistance', effect: 'Adds 100 spell points if at or below maximum and adds one year of age' },
  { id: 'divine-power', name: 'Divine Power', cost: '100 gold', color: 'Black', ingredients: 'Purple/Extreme Energy', effect: 'Adds 20 to level temporarily and adds one year of age' },
  { id: 'rejuvenation', name: 'Rejuvenation', cost: '100 gold', color: 'Black', ingredients: 'Green/Extreme Energy', effect: 'Removes all magical aging effects and subtracts 1 from all 7 primary statistics' },
  { id: 'essence-of-might', name: 'Essence of Might', cost: '100 gold', color: 'Black', ingredients: 'Red/Heroism', effect: 'Once only: Adds 15 to Might and subtracts 5 from Intellect permanently' },
  { id: 'essence-of-intellect', name: 'Essence of Intellect', cost: '100 gold', color: 'Black', ingredients: 'Blue/Stoneskin', effect: 'Once only: Adds 15 to Intellect and subtracts 5 from Might permanently' },
  { id: 'essence-of-personality', name: 'Essence of Personality', cost: '100 gold', color: 'Black', ingredients: 'Blue/Restoration', effect: 'Once only: Adds 15 to Personality and subtracts 5 from Speed permanently' },
  { id: 'essence-of-endurance', name: 'Essence of Endurance', cost: '100 gold', color: 'Black', ingredients: 'Yellow/Supreme Protection', effect: 'Once only: Adds 15 to Endurance and subtracts 1 from all other primary statistics permanently' },
  { id: 'essence-of-accuracy', name: 'Essence of Accuracy', cost: '100 gold', color: 'Black', ingredients: 'Yellow/Bless', effect: 'Once only: Adds 15 to Accuracy and subtracts 5 from Luck permanently' },
  { id: 'essence-of-speed', name: 'Essence of Speed', cost: '100 gold', color: 'Black', ingredients: 'Red/Haste', effect: 'Once only: Adds 15 to Speed and subtracts 5 from Personality permanently' },
  { id: 'essence-of-luck', name: 'Essence of Luck', cost: '100 gold', color: 'Black', ingredients: 'Purple/Super Resistance', effect: 'Once only: Adds 15 to Luck and subtracts 5 from Accuracy permanently' },
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

export async function getMonsters(): Promise<Monster[]> {
    return monsters;
}

export async function getSpells(): Promise<Spell[]> {
    return spells;
}

export async function getItems(): Promise<Item[]> {
    return items;
}

export async function getShrines(): Promise<Shrine[]> {
    return shrines;
}

export async function getPotions(): Promise<Potion[]> {
    return potions;
}
