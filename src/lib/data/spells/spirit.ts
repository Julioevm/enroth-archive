import type { Spell } from '../../types';

export const spiritSpells: Spell[] = [
  {
    id: 'bless',
    name: 'Bless',
    school: 'Spirit',
    description: "Temporarily increases a character's Accuracy and Damage.",
    cost: 3,
    normal: 'Duration 1 hour per point of skill',
    expert: 'Duration 2 hours per point of skill',
    master: 'Duration 3 hours per point of skill',
    imageUrl: '/spells/Spell_Bless.gif',
  },
];
