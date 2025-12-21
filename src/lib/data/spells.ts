import type { Spell } from '../types';
import { fireSpells } from './spells/fire';
import { airSpells } from './spells/air';
import { waterSpells } from './spells/water';
import { earthSpells } from './spells/earth';
import { spiritSpells } from './spells/spirit';
import { mindSpells } from './spells/mind';
import { bodySpells } from './spells/body';
import { lightSpells } from './spells/light';
import { darkSpells } from './spells/dark';

export const spells: Spell[] = [
  ...fireSpells,
  ...airSpells,
  ...waterSpells,
  ...earthSpells,
  ...spiritSpells,
  ...mindSpells,
  ...bodySpells,
  ...lightSpells,
  ...darkSpells,
];
