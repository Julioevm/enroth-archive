export interface GameLocation {
  id: string;
  name: string;
}

export interface Area {
  id: string;
  slug: string;
  name: string;
  mapImageId: string;
  locations: GameLocation[];
  dungeonIds: string[];
}

export interface Dungeon {
  id:string;
  slug: string;
  name: string;
  areaSlug: string;
  mapImageId: string;
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
  type: 'Magic' | 'Might' | 'General';
  description: string;
  trainers: SkillTrainer[];
}
