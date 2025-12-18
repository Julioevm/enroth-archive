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
    id: 'axe',
    name: 'Axe',
    type: 'Weapon',
    description: 'The skill of fighting with an axe, providing high damage output.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Axe 4' },
      { level: 'Expert', location: 'Mire of the Damned', cost: 2000, requirements: 'Axe 4' },
      { level: 'Master', location: 'Mire of the Damned', cost: 0, requirements: 'Axe 12, Quest 26' },
    ]
  },
  {
    id: 'blaster',
    name: 'Blaster',
    type: 'Weapon',
    description: 'Ancient technology that fires bolts of concentrated energy.',
    trainers: [
      { level: 'Normal', location: 'Control Center', cost: 0 },
      { level: 'Expert', location: 'New Sorpigal', cost: 2000, requirements: 'Blaster 4' },
      { level: 'Expert', location: 'Eel Infested Waters', cost: 2000, requirements: 'Blaster 4' },
      { level: 'Master', location: 'Paradise Valley', cost: 5000, requirements: 'Blaster 12, Possess Blaster' },
    ]
  },
  {
    id: 'bow',
    name: 'Bow',
    type: 'Weapon',
    description: 'The skill of using a bow to fire arrows at distant enemies.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Bow 4' },
      { level: 'Expert', location: 'Frozen Highlands', cost: 2000, requirements: 'Bow 4' },
      { level: 'Master', location: 'Kriegspire', cost: 0, requirements: 'Bow 12, Rank 8 Battle Mage' },
    ]
  },
  {
    id: 'dagger',
    name: 'Dagger',
    type: 'Weapon',
    description: 'The skill of fighting with a short-bladed weapon, allowing for quick attacks.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Dagger 4' },
      { level: 'Expert', location: 'Free Haven', cost: 2000, requirements: 'Dagger 4' },
      { level: 'Master', location: 'Frozen Highlands', cost: 5000, requirements: 'Dagger 12, Rank 8 Speed 40' },
    ]
  },
  {
    id: 'mace',
    name: 'Mace',
    type: 'Weapon',
    description: 'The skill of fighting with a blunt crushing weapon.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Mire of the Damned', cost: 2000, requirements: 'Mace 4' },
      { level: 'Expert', location: 'Frozen Highlands', cost: 2000, requirements: 'Mace 4' },
      { level: 'Master', location: 'Blackshire', cost: 5000, requirements: 'Mace 12, Rank 8 Might 40' },
    ]
  },
  {
    id: 'spear',
    name: 'Spear',
    type: 'Weapon',
    description: 'The skill of fighting with a long polearm, offering reach and power.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Misty Islands', cost: 2000, requirements: 'Spear 4' },
      { level: 'Expert', location: 'Silver Cove', cost: 2000, requirements: 'Spear 4' },
      { level: 'Master', location: 'Mire of the Damned', cost: 5000, requirements: 'Spear 12, Rank 8 Cavalier' },
    ]
  },
  {
    id: 'staff',
    name: 'Staff',
    type: 'Weapon',
    description: 'The skill of fighting with a long wooden staff, often used by magic users.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'New Sorpigal', cost: 2000, requirements: 'Staff 4' },
      { level: 'Expert', location: 'Misty Islands', cost: 2000, requirements: 'Staff 4' },
      { level: 'Master', location: 'Silver Cove', cost: 5000, requirements: 'Staff 12, Rank 8' },
    ]
  },
  {
    id: 'sword',
    name: 'Sword',
    type: 'Weapon',
    description: 'The skill of fighting with a bladed weapon, the most versatile of weapon skills.',
    trainers: [
      { level: 'Normal', location: 'Available at start', cost: 0 },
      { level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Sword 4' },
      { level: 'Expert', location: 'Free Haven', cost: 2000, requirements: 'Sword 4' },
      { level: 'Master', location: 'Blackshire', cost: 0, requirements: 'Sword 12, Rank 8 Cavalier' },
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
