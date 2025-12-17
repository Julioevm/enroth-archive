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
    type: 'Weapon',
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
    type: 'Armor',
    description: 'The skill of wearing and moving effectively in armor made of leather.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'New Sorpigal', cost: 1000, requirements: 'Leather Armor 4' },
      { level: 'Master', location: 'Free Haven', cost: 3000, requirements: 'Leather Armor 10' },
    ]
  },
  {
    id: 'disarm-trap',
    name: 'Disarm Trap',
    type: 'Misc',
    description: 'The skill of recognizing and disabling traps on chests and doors.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Free Haven', cost: 1500, requirements: 'Disarm Trap 4' },
      { level: 'Master', location: 'Mire of the Damned', cost: 4000, requirements: 'Disarm Trap 10, 40 Accuracy' },
    ]
  },
  {
    id: 'bow',
    name: 'Bow',
    type: 'Weapon',
    description: 'The skill of using a bow to fire arrows at distant enemies.',
    trainers: [
        { level: 'Normal', location: 'Available at start', cost: 0 },
        { level: 'Expert', location: 'Bootleg Bay', cost: 2000, requirements: 'Bow 4' },
        { level: 'Master', location: 'Eel Infested Waters', cost: 6000, requirements: 'Bow 10, 50 Accuracy' },
    ]
  },
  {
    id: 'shield',
    name: 'Shield',
    type: 'Armor',
    description: 'The skill of using a shield to block incoming attacks.',
    trainers: [
        { level: 'Normal', location: 'Available at start', cost: 0 },
        { level: 'Expert', location: 'Silver Cove', cost: 1000, requirements: 'Shield 4' },
        { level: 'Master', location: 'Frozen Highlands', cost: 5000, requirements: 'Shield 10, 40 Endurance' },
    ]
  }
];
