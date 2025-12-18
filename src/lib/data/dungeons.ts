import type { Dungeon } from '../types';

export const dungeons: Dungeon[] = [
    {
        id: 'goblinwatch',
        slug: 'goblinwatch',
        name: 'Goblinwatch',
        areaSlug: 'new-sorpigal',
        mapImageUrl: 'https://images.unsplash.com/photo-1570309977742-90c800236330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkdW5nZW9uJTIwbWFwfGVufDB8fHx8MTc2NTk2NzkzMnww&ixlib=rb-4.1.0&q=80&w=1080',
        mapImageDescription: 'Map of Goblinwatch Dungeon',
        description: 'A fortified outpost overrun by goblins. The air is thick with the smell of filth and stale meat.',
        monsters: ['Goblin', 'Goblin Shaman']
    },
    {
        id: 'abandoned-temple',
        slug: 'abandoned-temple',
        name: 'Abandoned Temple',
        areaSlug: 'castle-ironfist',
        mapImageUrl: 'https://images.unsplash.com/photo-1747071766407-a8d72a802a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZW1wbGUlMjBtYXB8ZW58MHx8fHwxNzY1OTY3OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        mapImageDescription: 'Map of Abandoned Temple',
        description: 'A desecrated temple, now a den for fanatics of Baa. Eerie chants echo through its halls.',
        monsters: ['Acolyte of Baa', 'Bat']
    },
    {
        id: 'shadow-guild-hideout',
        slug: 'shadow-guild-hideout',
        name: 'Shadow Guild Hideout',
        areaSlug: 'free-haven',
        mapImageUrl: 'https://images.unsplash.com/photo-1625239622428-ba0ae330a1f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxoaWRlb3V0JTIwbWFwfGVufDB8fHx8MTc2NTk2NzkzMnww&ixlib=rb-4.1.0&q=80&w=1080',
        mapImageDescription: 'Map of Shadow Guild Hideout',
        description: 'A hidden network of cellars and tunnels beneath Free Haven, serving as the local thieves\' guild headquarters.',
        monsters: ['Thief', 'Cutpurse', 'Rogue']
    },
    {
        id: 'temple-of-baa-mist',
        slug: 'temple-of-baa-mist',
        name: 'Temple of Baa (MIST)',
        areaSlug: 'mist',
        mapImageUrl: 'https://images.unsplash.com/photo-1662307414188-334c0b5713e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxldmlsJTIwdGVtcGxlfGVufDB8fHx8MTc2NTk2NzkzMnww&ixlib=rb-4.1.0&q=80&w=1080',
        mapImageDescription: 'Map of Temple of Baa',
        description: 'A major center of Baa worship on the island of MIST. The temple is heavily guarded.',
        monsters: ['Follower of Baa', 'Cleric of Baa']
    }
];
