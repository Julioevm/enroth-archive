import type { Area, Dungeon, Quest, Skill, Monster, Spell, Item, Shrine, Potion } from './types';
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
