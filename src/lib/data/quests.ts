import type { Quest } from '../types';

export const quests: Quest[] = [
  {
    id: 'find-goblinwatch',
    name: 'Find Goblinwatch',
    description: 'Find the Goblinwatch outpost for the mayor of New Sorpigal.',
    areaSlug: 'new-sorpigal',
    locationName: 'Goblinwatch'
  },
  {
    id: 'rescue-sharry',
    name: 'Rescue Sharry',
    description: 'Rescue the singer Sharry from the Shadow Guild Hideout in Free Haven.',
    areaSlug: 'free-haven',
    locationName: 'Shadow Guild Hideout'
  },
  {
    id: 'clear-abandoned-temple',
    name: 'Clear Abandoned Temple',
    description: 'Clear the Abandoned Temple of Baa followers for the lord of Castle Ironfist.',
    areaSlug: 'castle-ironfist',
    locationName: 'Abandoned Temple'
  },
];
