export interface GameLocation {
  id: string;
  name: string;
}

export interface TravelRoutes {
  byFoot: { destination: string; direction: string }[];
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
  details?: string;
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
  mission: string;
  solution: string;
  reward: string;
  award: string;
  areaSlug: string;
  locationName?: string;
  promotionClass?:
    | 'Knight'
    | 'Paladin'
    | 'Archer'
    | 'Cleric'
    | 'Sorcerer'
    | 'Druid';
}

export interface SkillTrainer {
  name: string;
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
  school:
    | 'Spirit'
    | 'Body'
    | 'Mind'
    | 'Fire'
    | 'Air'
    | 'Water'
    | 'Earth'
    | 'Light'
    | 'Dark';
  description: string;
  cost: number;
  normal: string;
  expert: string;
  master: string;
  imageUrl: string;
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
  areaSlug: AreaSlug;
}

export interface Potion {
  id: string;
  name: string;
  color: string;
  ingredients: string;
  effect: string;
}

export interface Shop {
  id: string;
  name: string;
  type: ShopType;
  location: string;
  buy?: string;
  special?: string;
  destinations?: string[];
  restriction?: string;
  cost?: number;
  maxLevel?: string;
  food?: number;
  foodCost?: number;
  restCost?: number;
  skills?: string;
  spells?: string;
}

export type ShopType =
  | 'Weapon Shop'
  | 'Armor Shop'
  | 'Magic Shop'
  | 'General Store'
  | 'Stables'
  | 'Boats'
  | 'Temple'
  | 'Training Hall'
  | 'Town Hall'
  | 'Tavern'
  | 'Bank'
  | 'Magic Guild'
  | 'Guild';
