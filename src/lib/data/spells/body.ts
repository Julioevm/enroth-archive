import type { Spell } from '../../types';

export const bodySpells: Spell[] = [
  {
    id: 'first-aid',
    name: 'First Aid',
    school: 'Body',
    description: 'Heals a small amount of damage to a single character.',
    cost: 2,
    normal: 'Heals 5 HP',
    expert: 'Heals 10 HP',
    master: 'Heals 15 HP',
    imageUrl: '/spells/Spell_First_Aid.gif',
  },
];
