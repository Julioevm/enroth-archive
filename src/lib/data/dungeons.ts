import type { Dungeon } from '../types';

export const dungeons: Dungeon[] = [
    {
        id: 'goblinwatch',
        slug: 'goblinwatch',
        name: 'Goblinwatch',
        areaSlug: 'new-sorpigal',
        mapImageId: 'goblinwatch-dungeon-map',
        description: 'A fortified outpost overrun by goblins. The air is thick with the smell of filth and stale meat.',
        monsters: ['Goblin', 'Goblin Shaman']
    },
    {
        id: 'abandoned-temple',
        slug: 'abandoned-temple',
        name: 'Abandoned Temple',
        areaSlug: 'castle-ironfist',
        mapImageId: 'abandoned-temple-dungeon-map',
        description: 'A desecrated temple, now a den for fanatics of Baa. Eerie chants echo through its halls.',
        monsters: ['Acolyte of Baa', 'Bat']
    },
    {
        id: 'shadow-guild-hideout',
        slug: 'shadow-guild-hideout',
        name: 'Shadow Guild Hideout',
        areaSlug: 'free-haven',
        mapImageId: 'shadow-guild-hideout-map',
        description: 'A hidden network of cellars and tunnels beneath Free Haven, serving as the local thieves\' guild headquarters.',
        monsters: ['Thief', 'Cutpurse', 'Rogue']
    },
    {
        id: 'temple-of-baa-mist',
        slug: 'temple-of-baa-mist',
        name: 'Temple of Baa (MIST)',
        areaSlug: 'mist',
        mapImageId: 'temple-of-baa-map',
        description: 'A major center of Baa worship on the island of MIST. The temple is heavily guarded.',
        monsters: ['Follower of Baa', 'Cleric of Baa']
    }
];
