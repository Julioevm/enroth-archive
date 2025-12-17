import type { Spell } from '../types';

export const spells: Spell[] = [
    {
        id: 'torch-light',
        name: 'Torch Light',
        school: 'Fire',
        description: 'Creates a magical light source that follows the party.',
        cost: '1 SP',
    },
    {
        id: 'first-aid',
        name: 'First Aid',
        school: 'Body',
        description: 'Heals a small amount of damage to a single character.',
        cost: '2 SP',
    },
    {
        id: 'bless',
        name: 'Bless',
        school: 'Spirit',
        description: 'Temporarily increases a character\'s Accuracy and Damage.',
        cost: '3 SP',
    },
];
