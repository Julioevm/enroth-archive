import type { Skill } from '../types';

export const skills: Skill[] = [
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
