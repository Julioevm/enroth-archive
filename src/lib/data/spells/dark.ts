import type { Spell } from '../../types';

export const darkSpells: Spell[] = [
  {
    id: 'reanimate',
    name: 'Reanimate',
    school: 'Dark',
    description:
      'Reanimate allows you to raise a lifeless creature from the dead (sort of). The spell does not make them grateful or peaceful in any way, but you can always kill them again, if you want.',
    cost: 5,
    normal:
      'Creature gets 10 hit points per skill point (up to creature’s maximum)',
    expert: 'Creature gets 20 hit points per skill point',
    master: 'Creature gets 30 hit points per skill point',
    imageUrl: '/spells/Spell_Reanimate.gif',
  },
  {
    id: 'toxic-cloud',
    name: 'Toxic Cloud',
    school: 'Dark',
    description:
      'A poisonous cloud of noxious gases is formed in front of the caster and moves slowly away from your characters. The cloud does 25 points of damage plus 1-10 per point of skill in Dark Magic and lasts until something runs into it.',
    cost: 10,
    normal: 'Moderate recovery rate',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Toxic_Cloud.gif',
  },
  {
    id: 'mass-curse',
    name: 'Mass Curse',
    school: 'Dark',
    description:
      'Inflicts the cursed condition on all monsters in the sight of the caster.',
    cost: 15,
    normal: 'Duration 2 minutes per point of skill',
    expert: 'Duration 3 minutes per point of skill',
    master: 'Duration 4 minutes per point of skill',
    imageUrl: '/spells/Spell_Mass_Curse.gif',
  },
  {
    id: 'shrapmetal',
    name: 'Shrapmetal',
    school: 'Dark',
    description:
      'Fires a blast of hot, jagged metal in front of the caster, striking any creature that gets in the way. Each piece inflicts 6 points of damage plus 1-6 per point of skill in Dark Magic.',
    cost: 20,
    normal: 'Moderate recovery rate and 3 fragments',
    expert: 'Faster recovery rate and 5 fragments',
    master: 'Fastest recovery rate and 7 fragments',
    imageUrl: '/spells/Spell_Shrapmetal.gif',
  },
  {
    id: 'shrinking-ray',
    name: 'Shrinking Ray',
    school: 'Dark',
    description:
      'Shrinks even the grandest of monsters to more manageable sizes. Duration of this spell is 5 minutes per point of skill in Dark Magic. A shrunken monster deals one half, one third, or one quarter its normal damage while shrunk.',
    cost: 25,
    normal: 'Reduces monster size to one half normal',
    expert: 'Reduces monster size to one third normal',
    master: 'Reduces monster size to one fourth normal',
    imageUrl: '/spells/Spell_Shrinking_Ray.gif',
  },
  {
    id: 'day-of-protection',
    name: 'Day of Protection',
    school: 'Dark',
    description:
      'Simultaneously casts Protection from Fire, Electricity, Cold, Poison, and Magic, plus Feather Fall and Wizard Eye on all your characters at your skill in Dark Magic.',
    cost: 30,
    normal: 'All spells cast at twice skill in Dark Magic',
    expert: 'All spells cast at three times skill',
    master: 'All spells cast at four times skill',
    imageUrl: '/spells/Spell_Day_of_Protection.gif',
  },
  {
    id: 'finger-of-death',
    name: 'Finger of Death',
    school: 'Dark',
    description:
      'Attempts to immediately slay a single creature by stripping its soul from its body. Finger of Death has a 3% chance per skill point in Dark Magic of working, with Experts and Masters getting 4 and 5% chances respectively.',
    cost: 35,
    normal: '3% chance of success per point of skill in Dark Magic',
    expert: '4% chance of success per point of skill in Dark Magic',
    master: '5% chance of success per point of skill in Dark Magic',
    imageUrl: '/spells/Spell_Finger_of_Death.gif',
  },
  {
    id: 'moon-ray',
    name: 'Moon Ray',
    school: 'Dark',
    description:
      'A powerful spell of Darkness, Moon Ray heals your characters and damages all monsters in sight. It doesn’t do a lot of damage or cure conditions, but it is the only spell that harms all monsters in sight and works outside. Moon Ray is restricted to working outdoors and at night. All monsters take 1-4 points of damage per point of skill in Dark Magic, and all characters heal 1-4 points of damage per point of skill.',
    cost: 40,
    normal: 'Slow recovery rate',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Moon_Ray.gif',
  },
  {
    id: 'dragon-breath',
    name: 'Dragon Breath',
    school: 'Dark',
    description:
      'Dragon Breath empowers the caster to exhale a cloud of toxic vapors that target a single monster and damage all creatures nearby. This spell is the most powerful damage spell in the lands, doing 1-25 points of damage per point of skill in Dark Magic.',
    cost: 45,
    normal: 'Slow recovery rate',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Dragon_Breath.gif',
  },
  {
    id: 'armageddon',
    name: 'Armageddon',
    school: 'Dark',
    description:
      'This spell is the town killer. It can only be cast once per day by Apprentices to Dark Magic, and only outdoors at that. Armageddon inflicts 50 points of damage plus 1 point of damage for every point of Dark skill your character has to every creature on the map, including all your characters.',
    cost: 50,
    normal: 'Can only be cast once per day',
    expert: 'Can only be cast twice per day',
    master: 'Can only be cast three times per day',
    imageUrl: '/spells/Spell_Armageddon.gif',
  },
  {
    id: 'dark-containment',
    name: 'Dark Containment',
    school: 'Dark',
    description:
      'This spell attempts to trap the force of darkness into its victims, hence the name Dark Containment. The target of the spell will suffer from random effects- though certain creatures are immune to this spell.',
    cost: 55,
    normal: 'Slow rate of recovery',
    expert: 'Faster recovery rate',
    master: 'Fastest recovery rate',
    imageUrl: '/spells/Spell_Dark_Containment.gif',
  },
];
