import type { Spell } from '../../types';

export const mindSpells: Spell[] = [
  {
    id: 'meditation',
    name: 'Meditation',
    school: 'Mind',
    description:
      'Temporarily increases a single character’s Intellect and Personality statistics by 10 points plus 2 per point of skill in Mind Magic.',
    cost: 1,
    normal:
      'Increases Intellect and Personality by 10 points plus 2 per point of skill',
    expert:
      'Increases Intellect and Personality by 10 points plus 3 per point of skill',
    master: 'Spell affects entire party',
    imageUrl: '/spells/Spell_Meditation.gif',
  },
  {
    id: 'remove-fear',
    name: 'Remove Fear',
    school: 'Mind',
    description:
      'Removes the afraid condition from a character if you cast this spell in time. The greater the skill and rank in Mind Magic the longer the condition could have been present before the “point of no return” is reached. After that, the only way to remove the condition short of Divine Intervention is to visit a temple.',
    cost: 2,
    normal: 'Works if afraid less than 3 minutes per point of skill',
    expert: 'Works if afraid less than 1 hour per point of skill',
    master: 'Works if afraid less than 1 day per point of skill',
    imageUrl: '/spells/Spell_Remove_Fear.gif',
  },
  {
    id: 'mind-blast',
    name: 'Mind Blast',
    school: 'Mind',
    description:
      'Fires a bolt of mental force damaging to a single targets’ nervous system. Mind Blast does 5 points of damage plus 1-2 per point of skill in Mind Magic.',
    cost: 3,
    normal: 'Moderate recovery rate',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Mind_Blast.gif',
  },
  {
    id: 'precision',
    name: 'Precision',
    school: 'Mind',
    description:
      'Temporarily increases a single character’s Accuracy statistic by 10 points plus 2 per point of skill in Mind Magic.',
    cost: 4,
    normal: 'Increases Accuracy by 10 points plus 2 per point of skill',
    expert: 'Increases Accuracy by 10 points plus 3 per point of skill',
    master: 'Spell affects entire party',
    imageUrl: '/spells/Spell_Precision.gif',
  },
  {
    id: 'cure-paralysis',
    name: 'Cure Paralysis',
    school: 'Mind',
    description:
      'Cures paralysis if you cast this spell in time. The greater the skill and rank in Mind Magic the longer the character could have been paralyzed before the “point of no return” is reached. After that, the only way to remove the condition short of Divine Intervention is to visit a temple.',
    cost: 5,
    normal: 'Works if paralyzed less than 3 minutes per point of skill',
    expert: 'Works if paralyzed less than 1 hour per point of skill',
    master: 'Works if paralyzed less than 1 day per point of skill',
    imageUrl: '/spells/Spell_Cure_Paralysis.gif',
  },
  {
    id: 'charm',
    name: 'Charm',
    school: 'Mind',
    description:
      'Calms a single targeted creature and removes any hostile feelings it has towards your characters. If this creature takes any damage, it will immediately become hostile again.',
    cost: 8,
    normal: 'Duration 3 minutes per point of skill',
    expert: 'Duration 6 minutes per point of skill',
    master: 'Duration 12 minutes per point of skill',
    imageUrl: '/spells/Spell_Charm.gif',
  },
  {
    id: 'mass-fear',
    name: 'Mass Fear',
    school: 'Mind',
    description:
      'All creatures in the caster’s sight fear the caster and flee. If a creature takes damage while under the influence of this spell, the spell will be broken. Mass Fear will not work on Undead creatures. The duration of Mass Fear is 3 minutes per point of skill in Mind Magic.',
    cost: 10,
    normal: 'Moderate recovery rate',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Mass_Fear.gif',
  },
  {
    id: 'feeblemind',
    name: 'Feeblemind',
    school: 'Mind',
    description:
      'Feeblemind removes the ability of a target to cast spells until this spell wears out. The duration of this spell is 5 minutes per point of skill in Mind Magic',
    cost: 15,
    normal: 'Moderate recovery rate',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Feeblemind.gif',
  },
  {
    id: 'cure-insanity',
    name: 'Cure Insanity',
    school: 'Mind',
    description:
      'Cures insanity if you cast this spell in time. The greater the skill and rank in Mind Magic the longer the character could have been insane before the “point of no return” is reached. After that, the only way to remove the condition short of Divine Intervention is to visit a temple.',
    cost: 20,
    normal: 'Works if insane less than 3 minutes per point of skill',
    expert: 'Works if insane less than 1 hour per point of skill',
    master: 'Works if insane less than 1 day per point of skill',
    imageUrl: '/spells/Spell_Cure_Insanity.gif',
  },
  {
    id: 'psychic-shock',
    name: 'Psychic Shock',
    school: 'Mind',
    description:
      'Similar to Mind Blast, Psychic Shock targets a single creature with mind damaging magic, only to a much greater effect. Psychic Shock does 12 points of damage plus 1-12 per point of skill in Mind Magic.',
    cost: 25,
    normal: 'Slow rate of recovery',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Psychic_Shock.gif',
  },
  {
    id: 'telekinesis',
    name: 'Telekinesis',
    school: 'Mind',
    description:
      'Telekinesis lets you manipulate an object at a distance at a strength equal to your character’s skill in Mind Magic. Switches can be thrown, objects picked up, and doors opened with this spell, all from a nice safe distance from those nasty traps.',
    cost: 30,
    normal: 'Strength of effect is 1 point per point of skill',
    expert: 'Strength of effect is 2 points per point of skill',
    master: 'Strength of effect is 3 points per point of skill',
    imageUrl: '/spells/Spell_Telekinesis.gif',
  },
];
