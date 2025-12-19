import type { Monster } from '../types';

export const monsters: Monster[] = [
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
