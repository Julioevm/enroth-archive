import type { Spell } from '../../types';

export const bodySpells: Spell[] = [
  {
    id: 'cure-weakness',
    name: 'Cure Weakness',
    school: 'Body',
    description:
      'Cures the weak condition from a character if you cast this spell in time. The greater the skill and rank in Body Magic the longer the character could have been weak before the “point of no return” is reached. After that, the only way to cure the condition short of Divine Intervention is to visit a temple.',
    cost: 1,
    normal: 'Works if weak less than 3 minutes per point of skill',
    expert: 'Works if weak less than 1 hour per point of skill',
    master: 'Works if weak less than 1 day per point of skill',
    imageUrl: '/spells/Spell_Cure_Weakness.gif',
  },
  {
    id: 'first-aid',
    name: 'First Aid',
    school: 'Body',
    description:
      "Cures 5 hit points on a single target when cast. Recovery is reduced by an amount equal to the caster's skill in Body Magic.",
    cost: 2,
    normal: 'Cures 5 hit points',
    expert: 'Cures 7 hit points',
    master: 'Cures 10 hit points',
    imageUrl: '/spells/Spell_First_Aid.gif',
  },
  {
    id: 'protection-from-poison',
    name: 'Protection from Poison',
    school: 'Body',
    description:
      'Increases all your characters’ resistance to poison by an amount equal to your skill in Body Magic.',
    cost: 3,
    normal: '1 point resistance per point of skill',
    expert: '2 points resistance per point of skill',
    master: '3 points resistance per point of skill',
    imageUrl: '/spells/Spell_Protection_from_Poison.gif',
  },
  {
    id: 'harm',
    name: 'Harm',
    school: 'Body',
    description:
      'Directly inflicts magical damage upon a single creature. Harm does 8 points of damage plus 1-2 per point of skill in Body Magic.',
    cost: 4,
    normal: 'Moderate recovery rate',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Harm.gif',
  },
  {
    id: 'cure-wounds',
    name: 'Cure Wounds',
    school: 'Body',
    description:
      'Cures hit points on a single target when cast. The number cured is equal to five plus 2 per point of skill in Body Magic.',
    cost: 5,
    normal: 'Moderate recovery rate',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Cure_Wounds.gif',
  },
  {
    id: 'cure-poison',
    name: 'Cure Poison',
    school: 'Body',
    description:
      'Cures poison in a character if you cast this spell in time. The greater the skill and rank in Body Magic the longer the character could have been poisoned before the “point of no return” is reached. After that, the only way to remove the condition short of Divine Intervention is to visit a temple.',
    cost: 8,
    normal: 'Works if poisoned less than 3 minutes per point of skill',
    expert: 'Works if poisoned less than 1 hour per point of skill',
    master: 'Works if poisoned less than 1 day per point of skill',
    imageUrl: '/spells/Spell_Cure_Poison.gif',
  },
  {
    id: 'speed',
    name: 'Speed',
    school: 'Body',
    description:
      'Temporarily increases a single character’s Speed statistic by 10 points plus 2 per point of skill in Body Magic.',
    cost: 10,
    normal: 'Increases Speed by 10 points plus 2 per point of skill',
    expert: 'Increases Speed by 10 points plus 3 per point of skill',
    master: 'Spell affects entire party',
    imageUrl: '/spells/Spell_Speed.gif',
  },
  {
    id: 'cure-disease',
    name: 'Cure Disease',
    school: 'Body',
    description:
      'Cures disease in a character if you cast this spell in time. The greater the skill and rank in Body Magic the longer the character could have been diseased before the “point of no return” is reached. After that, the only way to remove the condition short of Divine Intervention is to visit a temple.',
    cost: 15,
    normal: 'Works if diseased less than 3 minutes per point of skill',
    expert: 'Works if diseased less than 1 hour per point of skill',
    master: 'Works if diseased less than 1 day per point of skill',
    imageUrl: '/spells/Spell_Cure_Disease.gif',
  },
  {
    id: 'power',
    name: 'Power',
    school: 'Body',
    description:
      'Temporarily increases a single character’s Might and Endurance statistics by 10 points plus 2 per point of skill in Body Magic.',
    cost: 20,
    normal:
      'Increases Might and Endurance by 10 points plus 2 per point of skill',
    expert:
      'Increases Might and Endurance by 10 points plus 3 per point of skill',
    master: 'Spell affects entire party',
    imageUrl: '/spells/Spell_Power.gif',
  },
  {
    id: 'flying-fist',
    name: 'Flying Fist',
    school: 'Body',
    description:
      'Flying Fist throws a heavy magical force at a single opponent that does 30 points of damage plus 1-5 per point of skill in Body Magic.',
    cost: 25,
    normal: 'Slow rate of recovery',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Flying_Fist.gif',
  },
  {
    id: 'power-cure',
    name: 'Power Cure',
    school: 'Body',
    description:
      'Cures hit points of all characters in your party at once. The number cured is equal to 10 plus 2 per point of skill in Body Magic.',
    cost: 30,
    normal: 'Slow rate of recovery',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Power_Cure.gif',
  },
];
