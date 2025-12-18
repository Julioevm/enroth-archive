export interface GameLocation {
  id: string;
  name: string;
}

export interface TravelRoutes {
  byFoot: { destination: string; direction: string; }[];
  coach: { destination: string; days: string; cost: number }[];
  boat: { destination: string; days: string; cost: number }[];
}

export type AreaSlug =
  | 'new-sorpigal'
  | 'castle-ironfist'
  | 'mist'
  | 'bootleg-bay'
  | 'free-haven'
  | 'silver-cove'
  | 'blackshire'
  | 'dragonsand'
  | 'eel-infested-waters'
  | 'frozen-highlands'
  | 'hermits-isle'
  | 'kriegspire'
  | 'mire-of-the-damned'
  | 'misty-islands'
  | 'paradise-valley'
  | 'sweet-water';

export interface Area {
  id: string;
  slug: AreaSlug;
  name: string;
  headline: string;
  mapImageUrl: string;
  mapImageDescription: string;
  locations: GameLocation[];
  dungeonIds: string[];
  travel: TravelRoutes;
  coordinates: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

export interface Dungeon {
  id: string;
  slug: string;
  name: string;
  areaSlug: string;
  mapImageUrl: string;
  mapImageDescription: string;
  description: string;
  monsters: string[];
}

export interface Quest {
  id: string;
  name: string;
  description: string;
  areaSlug: string;
  locationName?: string;
}

export interface SkillTrainer {
  level: 'Normal' | 'Expert' | 'Master';
  location: string;
  cost: number;
  requirements?: string;
}

export interface Skill {
  id: string;
  name: string;
  type: 'Weapon' | 'Magic' | 'Armor' | 'Misc';
  description: string;
  trainers: SkillTrainer[];
}

export interface Monster {
  id: string;
  name: string;
  description: string;
  hp: number;
  attack: string;
  locations: string[];
}

export interface Spell {
  id: string;
  name: string;
  school: 'Spirit' | 'Body' | 'Mind' | 'Fire' | 'Air' | 'Water' | 'Earth' | 'Light' | 'Dark';
  description: string;
  cost: string;
}

export interface Item {
  id: string;
  name: string;
  type: 'Weapon' | 'Armor' | 'Shield' | 'Accessory' | 'Potion' | 'Reagent';
  description: string;
  cost: number;
}

export interface Shrine {
  id: string;
  month: string;
  name: string;
  location: string;
}

export interface Potion {
  id: string;
  name: string;
  color: string;
  ingredients: string;
  effect: string;
}
