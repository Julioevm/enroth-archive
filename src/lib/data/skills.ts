import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    id: 'spirit-magic',
    name: 'Spirit Magic',
    type: 'Magic',
    description: 'The study of magic that governs the soul, life, death, and the afterlife.',
    trainers: [
      { name: 'Self-Taught', level: 'Normal', location: 'Available at start', cost: 0 },
      { name: 'Expert Trainer', level: 'Expert', location: 'New Sorpigal', cost: 2000, requirements: 'Spirit Magic 4' },
      { name: 'Master Trainer', level: 'Master', location: 'Silver Cove', cost: 5000, requirements: 'Spirit Magic 12, 50 Spirit' },
    ]
  },
  {
    id: 'body-magic',
    name: 'Body Magic',
    type: 'Magic',
    description: 'The study of magic that heals, harms, or enhances the physical body.',
    trainers: [
      { name: 'Self-Taught', level: 'Normal', location: 'Available at start', cost: 0 },
      { name: 'Expert Trainer', level: 'Expert', location: 'Free Haven', cost: 2000, requirements: 'Body Magic 4' },
      { name: 'Master Trainer', level: 'Master', location: 'Bootleg Bay', cost: 6000, requirements: 'Body Magic 12, 50 Endurance' },
    ]
  },
  {
    id: 'axe',
    name: 'Axe',
    type: 'Weapon',
    description: 'The skill of fighting with an axe, providing high damage output.',
    trainers: [
      { name: "Blades' End", level: 'Normal', location: 'New Sorpigal', cost: 0 },
      { name: "Blades' End", level: 'Normal', location: 'Frozen Highlands', cost: 0 },
      { name: 'Stephen Biggs', level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Axe 4' },
      { name: 'Connie Lettering', level: 'Expert', location: 'Mire of the Damned', cost: 2000, requirements: 'Rank 4' },
      { name: 'Avinril Smythers', level: 'Master', location: 'Mire of the Damned', cost: 0, requirements: 'Quest 26 complete' },
    ]
  },
  {
    id: 'blaster',
    name: 'Blaster',
    type: 'Weapon',
    description: 'Ancient technology that fires bolts of concentrated energy.',
    trainers: [
      { name: 'Control Center', level: 'Normal', location: 'Free Haven', cost: 0 },
      { name: 'Igor', level: 'Expert', location: 'New Sorpigal', cost: 2000, requirements: 'Blaster 4' },
      { name: 'Pat Skylark', level: 'Expert', location: 'Eel Infested Waters', cost: 2000, requirements: 'Rank 4' },
      { name: 'Rexella', level: 'Master', location: 'Paradise Valley', cost: 5000, requirements: 'Possess Blaster' },
    ]
  },
  {
    id: 'bow',
    name: 'Bow',
    type: 'Weapon',
    description: 'The skill of using a bow to fire arrows at distant enemies.',
    trainers: [
      { name: "Berserkers' Fury", level: 'Normal', location: 'Castle Ironfist', cost: 0 },
      { name: "Berserkers' Fury", level: 'Normal', location: 'Silver Cove', cost: 0 },
      { name: "Duelists' Edge", level: 'Normal', location: 'Misty Islands', cost: 0 },
      { name: "Duelists' Edge", level: 'Normal', location: 'Free Haven', cost: 0 },
      { name: 'Helen Teal', level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Bow 4' },
      { name: 'Jed Morrison', level: 'Expert', location: 'Frozen Highlands', cost: 2000, requirements: 'Rank 4' },
      { name: 'Desmond Weller', level: 'Master', location: 'Kriegspire', cost: 0, requirements: 'Rank 8, Battle Mage promotion' },
    ]
  },
  {
    id: 'dagger',
    name: 'Dagger',
    type: 'Weapon',
    description: 'The skill of fighting with a short-bladed weapon, allowing for quick attacks.',
    trainers: [
      { name: "Buccaneers' Lair", level: 'Normal', location: 'New Sorpigal', cost: 0 },
      { name: 'Protection Services', level: 'Normal', location: 'Frozen Highlands', cost: 0 },
      { name: "Smugglers' Guild", level: 'Normal', location: 'Free Haven', cost: 0 },
      { name: 'Terrance Smith', level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Dagger 4' },
      { name: 'Logan Dasher', level: 'Expert', location: 'Free Haven', cost: 2000, requirements: 'Rank 4' },
      { name: 'Jules Miles', level: 'Master', location: 'Frozen Highlands', cost: 5000, requirements: 'Rank 8, Speed 40' },
    ]
  },
  {
    id: 'mace',
    name: 'Mace',
    type: 'Weapon',
    description: 'The skill of fighting with a blunt crushing weapon.',
    trainers: [
      { name: "Duelists' Edge", level: 'Normal', location: 'Misty Islands', cost: 0 },
      { name: "Duelists' Edge", level: 'Normal', location: 'Free Haven', cost: 0 },
      { name: 'Jack Crow', level: 'Expert', location: 'Mire of the Damned', cost: 2000, requirements: 'Mace 4' },
      { name: 'Dickson Parks', level: 'Expert', location: 'Frozen Highlands', cost: 2000, requirements: 'Rank 4' },
      { name: 'Errol Ostermann', level: 'Master', location: 'Blackshire', cost: 5000, requirements: 'Rank 8, 40 Might' },
    ]
  },
  {
    id: 'spear',
    name: 'Spear',
    type: 'Weapon',
    description: 'The skill of fighting with a long polearm, offering reach and power.',
    trainers: [
      { name: "Blades' End", level: 'Normal', location: 'New Sorpigal', cost: 0 },
      { name: "Blades' End", level: 'Normal', location: 'Frozen Highlands', cost: 0 },
      { name: 'Gonzalo Ramirez', level: 'Expert', location: 'Misty Islands', cost: 2000, requirements: 'Spear 4' },
      { name: 'Sigriv', level: 'Expert', location: 'Silver Cove', cost: 2000, requirements: 'Rank 4' },
      { name: 'Burton Rutherford', level: 'Master', location: 'Mire of the Damned', cost: 5000, requirements: 'Rank 8, Cavalier promotion' },
    ]
  },
  {
    id: 'staff',
    name: 'Staff',
    type: 'Weapon',
    description: 'The skill of fighting with a long wooden staff, often used by magic users.',
    trainers: [
      { name: "Blades' End", level: 'Normal', location: 'New Sorpigal', cost: 0 },
      { name: "Blades' End", level: 'Normal', location: 'Frozen Highlands', cost: 0 },
      { name: 'Dorf', level: 'Expert', location: 'New Sorpigal', cost: 2000, requirements: 'Staff 4' },
      { name: 'Calvin Black', level: 'Expert', location: 'Misty Islands', cost: 2000, requirements: 'Rank 4' },
      { name: 'Jasper Rice', level: 'Master', location: 'Silver Cove', cost: 5000, requirements: 'Rank 8' },
    ]
  },
  {
    id: 'sword',
    name: 'Sword',
    type: 'Weapon',
    description: 'The skill of fighting with a bladed weapon, the most versatile of weapon skills.',
    trainers: [
      { name: "Blades' End", level: 'Normal', location: 'New Sorpigal', cost: 0 },
      { name: "Blades' End", level: 'Normal', location: 'Frozen Highlands', cost: 0 },
      { name: 'Aaron Strongmun', level: 'Expert', location: 'Castle Ironfist', cost: 2000, requirements: 'Sword 4' },
      { name: 'Michael Ogilvy', level: 'Expert', location: 'Free Haven', cost: 2000, requirements: 'Rank 4' },
      { name: 'Guy Hampton', level: 'Master', location: 'Blackshire', cost: 0, requirements: 'Rank 8, Cavalier promotion' },
    ]
  },
  {
    id: 'leather-armor',
    name: 'Leather Armor',
    type: 'Armor',
    description: 'The skill of wearing and moving effectively in armor made of leather.',
    trainers: [
      { name: 'Leather Guild', level: 'Normal', location: 'New Sorpigal', cost: 0 },
      { name: 'Expert Trainer', level: 'Expert', location: 'New Sorpigal', cost: 1000, requirements: 'Leather Armor 4' },
      { name: 'Master Trainer', level: 'Master', location: 'Free Haven', cost: 3000, requirements: 'Leather Armor 10' },
    ]
  },
  {
    id: 'disarm-trap',
    name: 'Disarm Trap',
    type: 'Misc',
    description: 'The skill of recognizing and disabling traps on chests and doors.',
    trainers: [
      { name: 'Guild of Thieves', level: 'Normal', location: 'Free Haven', cost: 0 },
      { name: 'Expert Trainer', level: 'Expert', location: 'Free Haven', cost: 1500, requirements: 'Disarm Trap 4' },
      { name: 'Master Trainer', level: 'Master', location: 'Mire of the Damned', cost: 4000, requirements: 'Disarm Trap 10, 40 Accuracy' },
    ]
  },
  {
    id: 'shield',
    name: 'Shield',
    type: 'Armor',
    description: 'The skill of using a shield to block incoming attacks.',
    trainers: [
      { name: 'Shield Guild', level: 'Normal', location: 'Available at start', cost: 0 },
      { name: 'Expert Trainer', level: 'Expert', location: 'Silver Cove', cost: 1000, requirements: 'Shield 4' },
      { name: 'Master Trainer', level: 'Master', location: 'Frozen Highlands', cost: 5000, requirements: 'Shield 10, 40 Endurance' },
    ]
  }
];
