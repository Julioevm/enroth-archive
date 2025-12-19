import type {
  Area,
  Dungeon,
  Quest,
  Skill,
  Monster,
  Spell,
  Item,
  Shrine,
  Potion,
} from './types';
import { areas } from './data/areas';
import { dungeons } from './data/dungeons';
import { items } from './data/items';
import { monsters } from './data/monsters';
import { potions } from './data/potions';
import { quests } from './data/quests';
import { shrines } from './data/shrines';
import { skills } from './data/skills';
import { spells } from './data/spells';

// Data access functions
export function getSkills(): Skill[] {
  return skills;
}

export function getQuests(): Quest[] {
  return quests;
}

export function getAreas(): Area[] {
  return areas;
}

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}

export function getDungeons(): Dungeon[] {
  return dungeons;
}

export function getDungeonBySlug(slug: string): Dungeon | undefined {
  return dungeons.find((dungeon) => dungeon.slug === slug);
}

export function getDungeonsByIds(ids: string[]): Dungeon[] {
  return dungeons.filter((d) => ids.includes(d.id));
}

export function getMonsters(): Monster[] {
  return monsters;
}

export function getSpells(): Spell[] {
  return spells;
}

export function getItems(): Item[] {
  return items;
}

export function getShrines(): Shrine[] {
  return shrines;
}

export function getPotions(): Potion[] {
  return potions;
}
