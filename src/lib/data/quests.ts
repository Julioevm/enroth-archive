import type { Quest } from '../types';

export const quests: Quest[] = [
  {
    id: 'sulmans-letter-andover',
    name: "Show Sulman's Letter to Andover Potbello",
    description: "Show Sulman's letter to Andover Potbello in New Sorpigal.",
    mission:
      'Unknown, but Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      'You start the game with this quest, and with the letter. Go into the Inn of New Sorpigal and show it to Andover Potbello.',
    reward: '1000gp, 3.000 xp, 0 karma',
    award: '-',
    areaSlug: 'new-sorpigal',
    locationName: 'Inn of New Sorpigal',
  },
  {
    id: 'sulmans-letter-humphrey',
    name: "Bring Sulman's Letter to Regent Wilbur Humphrey",
    description:
      "Bring Sulman's letter to Regent Wilbur Humphrey in Castle Ironfist.",
    mission:
      'Andover Potbello in New Sorpigal (#1) (Seer in Castle Ironfist (#32) gives you this advice too)',
    solution:
      'Go into the castle at Castle Ironfist and show it to Regent Wilbur Humphrey.',
    reward: '5000gp, 3.000 xp, 0 karma',
    award: 'Delivered 6th Letter to Wilbur Humphrey',
    areaSlug: 'castle-ironfist',
    locationName: 'Castle Ironfist',
  },
  {
    id: 'goblinwatch-combination',
    name: 'Find the combination to the vault door in Goblinwatch',
    description:
      'Find the Combination Scroll in Goblinwatch and bring it to Janice.',
    mission: 'Janice in New Sorpigal (#21)',
    solution:
      'Go into the Goblinwatch at New Sorpigal and bring back the Combination Scroll.',
    reward: '2000gp, 2.000 xp, +50 karma',
    award: 'Solved the Goblinwatch Combination',
    areaSlug: 'new-sorpigal',
    locationName: 'Goblinwatch',
  },
  {
    id: 'retrieve-candelabra',
    name: 'Retrieve the Candelabra',
    description:
      'Retrieve the Baa Candelabra from the Abandoned Temple for Andover Potbello.',
    mission: 'Andover Potbello in New Sorpigal (#1)',
    solution:
      'Go into the Abandoned Temple at New Sorpigal, and bring back the item to him.',
    reward: '1000gp, 2.000 xp, -200 karma',
    award: 'Retrieved the Baa Candelabra',
    areaSlug: 'new-sorpigal',
    locationName: 'Abandoned Temple',
  },
  {
    id: 'kill-spider-queen',
    name: 'Kill the Queen of the Spiders',
    description:
      'Kill the Spider Queen in the Abandoned Temple and bring her heart to Buford T. Allman.',
    mission: 'Buford T. Allman in New Sorpigal (#7)',
    solution:
      'Go into the Abandoned Temple at New Sorpigal, and bring back the heart of queen to him.',
    reward: '1000gp, 3.000 xp, 0 karma',
    award: 'Killed the Spider Queen',
    areaSlug: 'new-sorpigal',
    locationName: 'Abandoned Temple',
  },
  {
    id: 'rescue-sharry',
    name: 'Rescue Sharry',
    description:
      'Rescue Sharry from the Shadow Guild Hideout for Frank Fairchild.',
    mission: 'Frank Fairchild in New Sorpingal (#21)',
    solution:
      'Go into the Shadow Guild Hideout at Castle Ironfist and return with her.',
    reward: '2000gp, 10.000 xp, 0 karma',
    award: 'Rescued Sharry',
    areaSlug: 'new-sorpigal',
    locationName: 'Shadow Guild Hideout',
  },
  {
    id: 'rescue-angela',
    name: 'Rescue Angela',
    description: 'Rescue Angela from the Abandoned Temple for Violet Dawson.',
    mission: 'Violet Dawson in New Sorpingal (#6)',
    solution:
      'Go into the Abandoned Temple at New Sorpingal and return with her.',
    reward: '500gp, 10 food, 1.000 xp, 0 karma',
    award: 'Rescued Angela',
    areaSlug: 'new-sorpigal',
    locationName: 'Abandoned Temple',
  },
  {
    id: 'chime-of-harmony',
    name: 'Get the Chime of Harmony',
    description:
      'Retrieve the Chime of Harmony from the Temple of Baa for Janice.',
    mission: 'Janice in New Sorpingal (#21)',
    solution:
      'Go into the Temple of Baa at Castle Ironfist and bring back the item.',
    reward: '5000gp, 10.000 xp, +50 karma',
    award: 'Returned with the Chime of Harmony',
    areaSlug: 'new-sorpigal',
    locationName: 'Temple of Baa',
  },
  {
    id: 'retrieve-harp',
    name: 'Retrieve the Harp',
    description: "Retrieve Andrew Besper's Harp from the Dragoon's Caverns.",
    mission: 'Andrew Besper in Castle Ironfist (#6)',
    solution:
      "Go into the Dragoon's Caverns at Castle Ironfist and bring back the item.",
    reward: '5000gp, 10.000 xp, +50 karma',
    award: "Retrieved Andrew's Harp",
    areaSlug: 'castle-ironfist',
    locationName: "Dragoon's Caverns",
  },
  {
    id: 'find-prince-nicolai',
    name: 'Find and return Prince Nicolai',
    description:
      'Find Prince Nicolai at the Circus and return him to Castle Ironfist.',
    mission:
      'Nobody (Talk to Prince Nikolai in castle at Castle Ironfist (#24), leave the castle, click on rest icon, Nicolai disappeares).',
    solution:
      'Go into the main tent of Circus, talk to Nicolai, and return with him. While this quest is in progress, you cannot visit the castle. The circus is at Bootleg Bay (December-March), Blackshire (April-July), Mire of the Damned (August-November). There are six tents at circus that each have a game that test one of six primary stats. 50gp to play each time. You can win a Lodestone, a Harpy Feather, or a Four Leaf Clover. Play in one of tent with character, who has the highest skill. In the big tent you can trade. A Lodestone is worth 1 point; a Harpy Feather is worth 3 points and a Four Leaf Clover is worth 5. You can buy a keg of wine for 10 or a golden pyramid for 30. Davis Carp is seeking Lodestones, Bonnie Rotterdam is seeking Harpy Feathers, Geoff Southy is seeking Four Leaf Clovers, Nick Fenster is seeking Kegs of Wine, and Renee Blackburn is seeking Golden Pyramids at Free Haven. But the best choice is to go to Najat Ramadi, Kerman Murian, or Irbil Baktarian at Dragonsands with pyramids, and to buy great items.',
    reward: '0gp, 7.500 xp, 0 karma',
    award: 'Returned the Prince, but not shown (BUG!)',
    areaSlug: 'castle-ironfist',
    locationName: 'Circus',
  },
  {
    id: 'rescue-damsel',
    name: 'Rescue a Damsel in Distress',
    description:
      'Rescue Melody Silver from the Silver Helm Outpost for Regent Wilbur Humphrey.',
    mission: 'Regent Wilbur Humphrey in Castle Ironfist (#24)',
    solution:
      'Go into the Silver Helm Outpost at Misty Islands and return with Melody Silver.',
    reward: '0 gp, 15.000 xp, +50 karma',
    award: 'Received promotion to (honorary) Crusader',
    areaSlug: 'castle-ironfist',
    locationName: 'Silver Helm Outpost',
    promotionClass: 'Paladin',
  },
  {
    id: 'kilburns-shield',
    name: "Find Lord Kilburn's Shield",
    description:
      "Find Lord Kilburn's Shield in Blackshire for Regent Wilbur Humphrey.",
    mission:
      'Regent Wilbur Humphrey in Castle Ironfist (#24), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      'Go to middle of Blackshire, open the chest and bring back the item.',
    reward: '5000gp, 40.000 xp, +200 karma',
    award:
      "Retrieved Lord Kilburn's Shield (the lord gives his vote on the High Council at Free Haven)",
    areaSlug: 'castle-ironfist',
    locationName: 'Blackshire',
  },
  {
    id: 'hourglass-of-time',
    name: 'Find the Hourglass of Time',
    description:
      "Find the Hourglass of Time in Gharik's Forge for Lord Albert Newton.",
    mission:
      'Lord Albert Newton in Misty Islands (#28), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      "Go into the Gharik's Forge at New Sorpigal, and bring back the item.",
    reward: '0 gp, 50.000 xp, +200 karma',
    award:
      'Retrieved Hourglass of Time (the lord gives his vote on the High Council at Free Haven)',
    areaSlug: 'misty-islands',
    locationName: "Gharik's Forge",
  },
  {
    id: 'fountain-of-magic',
    name: 'Drink from the Fountain of Magic',
    description:
      'Drink from the Fountain of Magic in Bootleg Bay for Lord Albert Newton.',
    mission: 'Lord Albert Newton in Misty Islands',
    solution:
      'Go to the middle south of Bootleg Bay, drink from fountain and return.',
    reward: '0 gp, 15.000 xp, +50 karma',
    award: 'Received promotion to (honorary) Wizard',
    areaSlug: 'misty-islands',
    locationName: 'Fountain of Magic',
    promotionClass: 'Sorcerer',
  },
  {
    id: 'storm-silver-helm',
    name: 'Storm the Silver Helm Outpost',
    description:
      'Retrieve the Enemies List Scroll from the Silver Helm Outpost for the Mayor of Mist.',
    mission: "Charles D'Sorpigal in Misty Islands (#12)",
    solution:
      'Go into the Silver Helm Outpost at Misty Islands and bring back the Enemies List Scroll.',
    reward: '3000gp, 15.000 xp, +50 karma',
    award: 'Saved the Mayor of Mist',
    areaSlug: 'misty-islands',
    locationName: 'Silver Helm Outpost',
  },
  {
    id: 'destroy-crystal-fist',
    name: 'Destroy the crystal in the Temple of the Fist',
    description:
      'Destroy the wicked crystal in the Temple of the Fist for Winston Schezar.',
    mission: 'Winston Schezar in Bootleg Bay (#9)',
    solution:
      'Go into the Temple of the Fist at Bootleg Bay, destroy the crystal and return.',
    reward: '3000gp, 10.000 xp, +50 karma',
    award: 'Destroyed the wicked crystal',
    areaSlug: 'bootleg-bay',
    locationName: 'Temple of the Fist',
  },
  {
    id: 'destroy-devils-outpost',
    name: "Destroy the Devil's Outpost",
    description:
      "Destroy the Devil's Outpost in Kriegspire for Lord Osric Temper.",
    mission:
      'Lord Osric Temper in Free Haven (#72), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      "Go into the Devil's Outpost at Kriegspire and bring back Devil Plans Scroll.",
    reward:
      'the lord give his vote on the High Council at Free Haven, 40.000 xp, +200 karma',
    award: '-',
    areaSlug: 'free-haven',
    locationName: "Devil's Outpost",
  },
  {
    id: 'knights-nomination',
    name: "Get Knight's Nomination",
    description:
      'Get nominated for Knighthood by Chadwick Blackpool for Lord Osric Temper.',
    mission: 'Lord Osric Temper in Free Haven (#72)',
    solution:
      'Go into the Inn of Free Haven, talk to Chadwick Blackpool and return.',
    reward: '0 gp, 15.000 xp, +50 karma',
    award: 'Received promotion to (honorary) Cavalier',
    areaSlug: 'free-haven',
    locationName: 'Inn of Free Haven',
    promotionClass: 'Knight',
  },
  {
    id: 'find-lost-artifact',
    name: 'Find the lost artifact',
    description:
      "Find the artifact Mordred in Dragoons' Keep for Zoltan Phelps.",
    mission: 'Zoltan Phelps in Free Haven (#25)',
    solution: "Go into Dragoons' Keep at Free Haven and bring back Mordred.",
    reward: '30000gp, 10.000 xp, +100 karma',
    award: "Found Zoltan's artifact",
    areaSlug: 'free-haven',
    locationName: "Dragoons' Keep",
  },
  {
    id: 'rescue-sherell',
    name: 'Rescue Sherell',
    description: 'Rescue Sherell from the Temple of Tsantsa for Carlo Tormini.',
    mission: 'Carlo Tormini in Free Haven (#39)',
    solution: 'Go into Temple of Tsantsa at Bootleg Bay and bring back her.',
    reward: '1500gp, 10.000 xp, 0 karma',
    award: 'Rescued Sherell',
    areaSlug: 'free-haven',
    locationName: 'Temple of Tsantsa',
  },
  {
    id: 'ethrics-skull',
    name: "Retrieve Ethric's Skull",
    description:
      "Retrieve Ethric's Skull from the Tomb of Ethric the Mad for Gabriel Cartman.",
    mission: 'Gabriel Cartman in Free Haven (#57)',
    solution:
      'Go into Tomb of Ethric the Mad at Free Haven and bring back the item.',
    reward: '7500gp, 15.000 xp, 0 karma',
    award: "Retrieved Ethric's Skull",
    areaSlug: 'free-haven',
    locationName: 'Tomb of Ethric the Mad',
  },
  {
    id: 'defeat-warlord',
    name: 'Defeat the Warlord',
    description:
      "Retrieve the Discharge Paper Scroll from the Warlord's Fortress for Lord Osric Temper.",
    mission: 'Lord Osric Temper in Free Haven (#72)',
    solution:
      "Go into the Warlord's Fortress at Silver Cove and bring back Discharge Paper Scroll.",
    reward: '0 gp, 40.000 xp, +100 karma',
    award: 'Received promotion to (honorary) Champion',
    areaSlug: 'free-haven',
    locationName: "Warlord's Fortress",
    promotionClass: 'Knight',
  },
  {
    id: 'crystal-of-terrax',
    name: 'Retrieve the Crystal of Terrax',
    description:
      "Retrieve the Crystal of Terrax from Corlagon's Estate for Lord Albert Newton.",
    mission: 'Lord Albert Newton in Misty Islands (#28)',
    solution:
      "Go into the Corlagon's Estate at Castle Ironfist and bring back the item.",
    reward: '0 gp, 30.000 xp, +100 karma',
    award: 'Received promotion to (honorary) Archmage',
    areaSlug: 'misty-islands',
    locationName: "Corlagon's Estate",
    promotionClass: 'Sorcerer',
  },
  {
    id: 'slay-longfang',
    name: 'Slay Longfang Witherhide',
    description:
      'Slay the dragon Longfang Witherhide and bring his claw to Regent Wilbur Humphrey.',
    mission: 'Regent Wilbur Humphrey in Castle Ironfist (#24)',
    solution:
      "Go into the Dragon's Lair at Mire of Damned and bring back the Dragon Claw to him.",
    reward: '0 gp, 30.000 xp, +100 karma',
    award: 'Received promotion to (honorary) Hero',
    areaSlug: 'castle-ironfist',
    locationName: "Dragon's Lair",
    promotionClass: 'Paladin',
  },
  {
    id: 'destroy-book-liches',
    name: 'Destroy the Book of Liches',
    description:
      'Destroy the Book of Liches in Castle Darkmoor for Terry Ross.',
    mission: 'Terry Ross in Mire of the Damned (#11)',
    solution:
      'Go into the Castle Darkmoor at Mire of the Damned, touch the book and return.',
    reward: '5000gp, 50.000 xp, +100 karma',
    award: 'Destroyed the Book of Liches',
    areaSlug: 'mire-of-the-damned',
    locationName: 'Castle Darkmoor',
  },
  {
    id: 'kill-snergle',
    name: 'Kill Snergle',
    description: 'Kill Snergle and bring his axe to Avinril Smythers.',
    mission: 'Avinril Smythers in Inn at the Mire of the Damned (#18)',
    solution:
      "Go into the Snergle's Iron Mines at the Mire of the Damned for Key to Snergle's Chambers, then go into the Snergle's Caverns at Castle Ironfist and bring back his axe.",
    reward: '0 gp, 20.000 xp, +100 karma, can learn Master Axe',
    award: 'Killed Snergle',
    areaSlug: 'mire-of-the-damned',
    locationName: "Snergle's Caverns",
  },
  {
    id: 'repair-temple',
    name: 'Repair the temple',
    description:
      'Hire a Stonecutter and a Carpenter to repair the temple in Free Haven for Lord Anthony Stone.',
    mission: 'Lord Anthony Stone in Frozen Highlands',
    solution:
      'Hire a Stonecutter and a Carpenter, bring them to the temple in Free Haven to repair and return.',
    reward: '0 gp, 15.000 xp, +50 karma',
    award: 'Received promotion to (honorary) Priest',
    areaSlug: 'frozen-highlands',
    locationName: 'Temple in Free Haven',
    promotionClass: 'Cleric',
  },
  {
    id: 'capture-prince-thieves',
    name: 'Capture the Prince of Thieves',
    description:
      'Capture the Prince of Thieves in the Free Haven Sewers for Lord Anthony Stone.',
    mission:
      'Lord Anthony Stone in Frozen Highlands (#2), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      "Go into the Free Haven Sewers at Free Haven and bring him back (before you enter the Sewers, be sure you have completed the Dragoons' Caverns in the Castle Ironfist, and then Shadow Guild Hideout in the Castle Ironfist, and then Shadow Guild in the Frozen Highlands, because he has fled from them).",
    reward: '10.000gp, 30.000 xp, +200 karma',
    award:
      'Captured the Prince of Thieves (the lord gives his vote on the High Council at Free Haven)',
    areaSlug: 'frozen-highlands',
    locationName: 'Free Haven Sewers',
  },
  {
    id: 'fix-stable-prices',
    name: 'Fix the prices of all stables',
    description:
      'Visit all 9 stables in Enroth and fix their prices for Lady Loretta Fleise.',
    mission:
      'Lady Loretta Fleise in Silver Cove (#32), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      'Go into the 9 stables are at: Silver Cove, Mire of the Damned, Kriegspire, Blackshire, Castle Ironfist, New Sorpigal, Frozen Highlands, two in Free Haven, talk to the owners, and return.',
    reward: '5000gp, 25.000 xp, -200 karma (BUG!)',
    award:
      'Fixed the stable prices (the lady gives her vote on the High Council at Free Haven)',
    areaSlug: 'silver-cove',
    locationName: 'Stables',
  },
  {
    id: 'altar-of-sun',
    name: 'Visit the Altar of the Sun',
    description:
      'Visit the Altar of the Sun on an equinox or solstice for Lady Loretta Fleise.',
    mission: 'Lady Loretta Fleise in Silver Cove (#32)',
    solution:
      'Go to the Circle of Stones at Silver Cove on an equinox or solstice (March 20th, June 21st, September 23rd, and December 21st).',
    reward: '0 gp, 15.000 xp, +50 karma',
    award: 'Received promotion to (honorary) Great Druid',
    areaSlug: 'silver-cove',
    locationName: 'Circle of Stones',
    promotionClass: 'Druid',
  },
  {
    id: 'deface-altar',
    name: 'Deface the altar',
    description: 'Deface the altar in the Monolith for Eleanor Vanderbilt.',
    mission: 'Eleanor Vanderbilt in Silver Cove (#31)',
    solution:
      'Go into the Monolith west of Silver Cove, touch the altar and return.',
    reward: '3000gp, 15.000 xp, +50 karma',
    award: 'Saved the Monolith',
    areaSlug: 'silver-cove',
    locationName: 'Monolith',
  },
  {
    id: 'altar-of-moon',
    name: 'Visit the Altar of the Moon',
    description:
      'Visit the Altar of the Moon in the Temple of the Moon at midnight for Lady Loretta Fleise.',
    mission: 'Lady Loretta Fleise in Silver Cove (#32)',
    solution:
      'Go into the Temple of the Moon at Free Haven and touch the altar at midnight.',
    reward: '0 gp, 40.000 xp, +100 karma',
    award: 'Received promotion to (honorary) Arch Druid',
    areaSlug: 'silver-cove',
    locationName: 'Temple of the Moon',
    promotionClass: 'Druid',
  },
  {
    id: 'sacred-chalice',
    name: 'Take the Sacred Chalice',
    description:
      'Retrieve the Sacred Chalice from the Temple of the Sun for Lord Anthony Stone.',
    mission: 'Lord Anthony Stone in Frozen Highlands (#2)',
    solution:
      'Go into the Temple of the Sun at Bootleg Bay, find the chalice, bring it back to the temple in Free Haven and return.',
    reward: '0 gp, 30.000 xp, +100 karma',
    award: 'Received promotion to (honorary) High Priest',
    areaSlug: 'frozen-highlands',
    locationName: 'Temple of the Sun',
    promotionClass: 'Cleric',
  },
  {
    id: 'end-winter',
    name: 'End winter',
    description:
      'Talk to the Hermit in Kriegspire to end winter for Lord Eric von Stromgard.',
    mission:
      'Lord Eric von Stromgard in Frozen Highlands (#12), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution: "Go to Hermit's Hut in Kriegspire, talk to Hermit and return.",
    reward: '0 gp, 50.000 xp, +200 karma',
    award:
      'Ended winter (the lord gives his vote on the High Council at Free Haven)',
    areaSlug: 'frozen-highlands',
    locationName: "Hermit's Hut",
  },
  {
    id: 'dragon-tower-key',
    name: 'Retrieve the Key to the Dragon Towers',
    description:
      'Retrieve the Key to the Dragon Towers from Icewind Keep for Lord Eric von Stromgard.',
    mission: 'Lord Eric von Stromgard in Frozen Highlands (#12)',
    solution:
      'Go into Icewind Keep at Frozen Highlands, and bring back the item.',
    reward: '0 gp, 15.000 xp, +50 karma',
    award: 'Received promotion to (honorary) Battle Mage',
    areaSlug: 'frozen-highlands',
    locationName: 'Icewind Keep',
    promotionClass: 'Archer',
  },
  {
    id: 'reset-dragon-towers',
    name: 'Reset all of the Dragon Towers',
    description:
      'Reset the Dragon Towers in 6 cities for Lord Eric von Stromgard.',
    mission: 'Lord Eric von Stromgard in Frozen Highlands (#12)',
    solution:
      'Click on the lock in 6 cities: Frozen Highlands, Silver Cove, Free Haven, Misty Islands, New Sorpigal, Blackshire. You can can reach theese cities with Town Portal spell easily (at master rank of Water Magic). Be sure that you have the Key to the Dragon Towers.',
    reward:
      '0 gp, 40.000 xp, +100 karma (and the towers do not fire you at last)',
    award: 'Received promotion to (honorary) Warrior Mage',
    areaSlug: 'frozen-highlands',
    locationName: 'Dragon Towers',
    promotionClass: 'Archer',
  },
  {
    id: 'rescue-emmanuel',
    name: 'Rescue Emmanuel',
    description:
      'Rescue Emmanuel from the Temple of the Snake for Joanne Cravitz.',
    mission: 'Joanne Cravitz in Blackshire (#11)',
    solution:
      'Go into the Temple of the Snake at Blackshire and bring back him from cage.',
    reward: '500gp, 25.000 xp, 0 karma',
    award: 'Rescued Emmanuel',
    areaSlug: 'blackshire',
    locationName: 'Temple of the Snake',
  },
  {
    id: 'destroy-werewolf-altar',
    name: "Destroy the werewolf's altar",
    description:
      "Destroy the werewolf's altar in the Lair of the Wolf for Maria Trepan.",
    mission: 'Maria Trepan in Blackshire (#17)',
    solution:
      'Go into the Lair of the Wolf at Blackshire, talk to Ghost of Baltazar, find the Peral of Purity and touch the altar.',
    reward: '4000gp, 20.000 xp, +100 karma',
    award: 'Broke the Blackshire Curse',
    areaSlug: 'blackshire',
    locationName: 'Lair of the Wolf',
  },
  {
    id: 'place-statuettes',
    name: 'Place the statuettes',
    description:
      "Place Twillen's five statuettes on pedestals in different regions.",
    mission: 'Twillen in Blackshire (#20)',
    solution:
      'Open the chest at house of Twillen and get the five statuettes. Go to the Bootleg Bay, Mire of the Damned, Kriegspire, Dragonsands, Sweet Water, touch the pedestals and return.',
    reward: '0gp, 75.000 xp, 0 karma, and the chest with random items',
    award: "Placed Twillen's statuettes",
    areaSlug: 'blackshire',
    locationName: 'Pedestals',
  },
  {
    id: 'pearl-of-putrescence',
    name: 'Find the Pearl of Putrescence',
    description:
      'Kill the Werewolf Leader and bring the Pearl of Putrescence to the Ghost of Balthazar.',
    mission: 'Ghost of Balthazar in the Lair of the Wolf at Blackshire (#28)',
    solution: 'Kill the Werewolf Leader and bring back the item.',
    reward: '0gp, 5.000 xp, 0 karma',
    award: 'Killed the Werewolf Leader',
    areaSlug: 'blackshire',
    locationName: 'Lair of the Wolf',
  },
  {
    id: 'jewelled-egg',
    name: 'Retrieve the Jewelled Egg',
    description: "Retrieve Emil Lime's Jewelled Egg from Castle Kriegspire.",
    mission: 'Emil Lime in Kriegspire (#9)',
    solution:
      'Go into the Castle Kriegspire at Kriegspire and bring back the item.',
    reward: '5000gp, 50.000 xp, +100 karma',
    award: "Retrieved Emil's Egg",
    areaSlug: 'kriegspire',
    locationName: 'Castle Kriegspire',
  },
  {
    id: 'cure-silvertongue',
    name: 'Find a cure for Slicker Silvertongue',
    description:
      'Retrieve the Letter from Zenofex from the Superior Temple of Baa.',
    mission:
      'Regent Wilbur Humphrey in Castle Ironfist (#24), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      'Go into the Superior Temple of Baa at Kriegspire and bring back the Letter from Zenofex Scroll.',
    reward: '0gp, 0 xp, 0 karma, but quest 43',
    award: '-',
    areaSlug: 'castle-ironfist',
    locationName: 'Superior Temple of Baa',
  },
  {
    id: 'expose-silvertongue',
    name: "Bring the letter detailing Silvertongue's treason to the High Council",
    description:
      'Expose Slicker Silvertongue as a traitor to the High Council.',
    mission: 'Regent Wilbur Humphrey in Castle Ironfist (#24)',
    solution:
      'Go into the High Council at Free Haven, talk to Silvertongue and return.',
    reward:
      '0gp, 0 xp, +800 karma. Silvertongue leaves the council, possible to visit the Oracle if you have the support of the other five lords. Regent Wilburn Humphrey will let you use the Royal Yacht.',
    award:
      'Exposed the Traitor on the High Council, and Allowed to use the Royal Yacht, but not shown (BUG!)',
    areaSlug: 'castle-ironfist',
    locationName: 'High Council',
  },
  {
    id: 'memory-crystal-alpha',
    name: 'Find Memory Crystal Alpha',
    description:
      'Find Memory Crystal Alpha in the Supreme Temple of Baa for the Oracle.',
    mission:
      'Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      "Go into the Supreme Temple of Baa at Hermit's Isle, bring back the item and restore it.",
    reward: '0gp, 100.000 xp, 0 karma',
    award: 'Awakened the Oracle, if quests 44, 45, 46, 47 are completed',
    areaSlug: 'hermits-isle',
    locationName: 'Supreme Temple of Baa',
  },
  {
    id: 'memory-crystal-beta',
    name: 'Find Memory Crystal Beta',
    description: 'Find Memory Crystal Beta in Castle Alamos for the Oracle.',
    mission:
      'Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      'Go into the Castle Alamos at Eel Infested Waters, bring back the item and restore it.',
    reward: '0gp, 100.000 xp, 0 karma',
    award: 'Awakened the Oracle, if quests 44, 45, 46, 47 are completed',
    areaSlug: 'eel-infested-waters',
    locationName: 'Castle Alamos',
  },
  {
    id: 'memory-crystal-delta',
    name: 'Find Memory Crystal Delta',
    description: 'Find Memory Crystal Delta in Castle Darkmoor for the Oracle.',
    mission:
      'Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      'Go into the Castle Darkmoor at Mire of the Damned, bring back the item and restore it.',
    reward: '0gp, 100.000 xp, 0 karma',
    award: 'Awakened the Oracle, if quests 44, 45, 46, 47 are completed',
    areaSlug: 'mire-of-the-damned',
    locationName: 'Castle Darkmoor',
  },
  {
    id: 'memory-crystal-epsilon',
    name: 'Find Memory Crystal Epsilon',
    description:
      'Find Memory Crystal Epsilon in Castle Kriegspire for the Oracle.',
    mission:
      'Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      'Go into the Castle Kriegspire at Kriegspire, bring back the item and restore it.',
    reward: '0gp, 100.000 xp, 0 karma',
    award: 'Awakened the Oracle, if quests 44, 45, 46, 47 are completed',
    areaSlug: 'kriegspire',
    locationName: 'Castle Kriegspire',
  },
  {
    id: 'unward-doors',
    name: 'Unward the doors',
    description: 'Unward the doors in the Hall of the Fire Lord.',
    mission: 'Lord of Fire in the Hall of the Fire Lord at Bootleg Bay (#2)',
    solution: 'Touch 2 doors (need 2 ambers) and return to the lord.',
    reward: '0gp, 10.000 xp, 0 karma',
    award: 'Aided the Lord of Fire',
    areaSlug: 'bootleg-bay',
    locationName: 'Hall of the Fire Lord',
  },
  {
    id: 'control-cube',
    name: 'Retrieve the Control Cube',
    description:
      'Retrieve the Control Cube from the Tomb of VARN for the Oracle.',
    mission:
      'Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution: 'Go into the Tomb of VARN at Dragonsand and bring back the item.',
    reward: '0gp, 500.000 xp, 0 karma',
    award: 'Gained Access to the Control Center',
    areaSlug: 'dragonsand',
    locationName: 'Tomb of VARN',
  },
  {
    id: 'ancient-magic-archibald',
    name: 'Obtain Ancient Magic from Archibald',
    description: 'Free Archibald and obtain the Ritual of the Void.',
    mission:
      'Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution:
      'Go into the Royal Library in the to of Castle Ironfist, and talk to Archibald, but be sure you have completed the quest 51.',
    reward: '0gp, 50.000 xp, -928 karma, Ritual of the Void',
    award: 'Freed Archibald, but not shown (BUG!)',
    areaSlug: 'castle-ironfist',
    locationName: 'Castle Ironfist',
  },
  {
    id: 'third-eye',
    name: 'Find the Third Eye',
    description: 'Find the Third Eye for Prince Nicolai.',
    mission:
      'Prince Nicolai Ironfist at Castle Ironfist (#24), and Seer in Castle Ironfist (#32) gives you this advice too',
    solution: 'Touch the well near Castle Ironfist and bring back the item.',
    reward: "0gp, 0 xp, 0 karma, Tanir's Bell (which can be used in quest 50)",
    award: '-',
    areaSlug: 'castle-ironfist',
    locationName: 'Well near Castle Ironfist',
  },
  {
    id: 'bounty-hunting',
    name: 'Bounty hunting',
    description: 'Kill a monster on the bounty list for a Town Hall.',
    mission:
      'Boss of Town Halls: Janice in New Sorpigal (#21), Earnest in Misty Islands (#12), Jake in Silver Cove (#24).',
    solution:
      'Kill at least 1 noticed monster and return. Hunting list resets every month, but can run 3 hunting at the same time, because there are 3 Town Hall in Enroth.',
    reward: 'various gp, 0 xp, +(gp/100) karma',
    award: 'Collected X bounties',
    areaSlug: 'new-sorpigal',
    locationName: 'Town Hall',
  },
  {
    id: 'shadow-guild-letter',
    name: 'Show Shadow Guild letter',
    description:
      "Show the Shadow Guild letter from the Dragoon's Caverns to Frank Fairchild.",
    mission: 'Frank Fairchild in New Sorpigal (#21)',
    solution:
      "Go into the Dragoon's Caverns at Castle Ironfist and bring back the item.",
    reward: '5000gp, 5.000 xp, +50 karma',
    award: '-',
    areaSlug: 'new-sorpigal',
    locationName: "Dragoon's Caverns",
  },
  {
    id: 'pearl-of-purity-humphrey',
    name: 'Bring Pearl of Purity to Wilbur Humphrey',
    description:
      'Bring the Pearl of Purity from the Lair of the Wolf to Regent Wilbur Humphrey.',
    mission: 'Ghost of Baltazar in Lair of the Wolf at Blackshire (#28).',
    solution:
      'Go into the Lair of the Wolf, talk to Ghost of Baltazar, finish the quest 38 and bring the item to Wilbur Humphrey.',
    reward: '0gp, 10.000 xp, 0 karma',
    award: '-',
    areaSlug: 'blackshire',
    locationName: 'Castle Ironfist',
  },
  {
    id: 'ankh-quest',
    name: 'Ankh',
    description: 'Retrieve the Ankh and bring it to Anthony Stone.',
    mission:
      'Ghost of John Silver in Silver Helm Stronghold at Silver Cove (#45)',
    solution:
      'Go into the stronghold, kill the warlock (Gerrard Blacknames), get the ankh, talk to Ghost of John Silver, talk to Lady Loretta Fleise at Silver Cove, and bring the item to Anthony Stone at Frozen Highlands.',
    reward: '5000gp, 10.000 xp, 0 karma',
    award: '-',
    areaSlug: 'silver-cove',
    locationName: 'Silver Helm Stronghold',
  },
  {
    id: 'baa-follower',
    name: 'Let you be a Baa follower',
    description: 'Become a follower of Baa in the Superior Temple of Baa.',
    mission:
      'Almighty Head of Baa in Superior Temple of Baa at Kriegspire (#13)',
    solution:
      'Go into the temple, press the Baa Head 1,2,3,4, walk through the spiral corridor, and return.',
    reward: '0gp, 50.000 xp, -976 karma',
    award: '-',
    areaSlug: 'kriegspire',
    locationName: 'Superior Temple of Baa',
  },
  {
    id: 'pray-baa-altars',
    name: 'Pray at Baa Altars',
    description: 'Pray at the Baa Altars in the Supreme Temple of Baa.',
    mission:
      "Altars of Supreme Temple in Supreme Temple of Baa at Hermit's Isle (#1)",
    solution:
      'Go into the temple, press the Baa Altars of Pain, of Cold, of Fire in one room Head and touch the other 4 altar.',
    reward:
      '0gp, 0 xp, 0 karma, +10 Elemental Resistance for one character permanently',
    award: '-',
    areaSlug: 'hermits-isle',
    locationName: 'Supreme Temple of Baa',
  },
  {
    id: 'obelisk-puzzle',
    name: 'Read Obelisks',
    description: 'Visit all 15 obelisks in Enroth to solve the puzzle.',
    mission: '-',
    solution:
      'There are 15 maps in Enroth, and every map has 1 obelisk. Go to every 15 place, and touch the obelisks. Solve the riddle to find the treasure in Dragonsands.',
    reward:
      '250.000gp, 0 xp, 0 karma, Dark Containment book, Divine Intervention book, Morgan, Igraine, Guinevere.',
    award: 'Solved the Obelisk Puzzle, but not shown (BUG!)',
    areaSlug: 'dragonsand',
    locationName: 'Obelisks',
  },
  {
    id: 'arena-champion',
    name: 'Be a champion',
    description: 'Win battles in the Arena.',
    mission:
      'Arena Master in the Arena (reachable by coach travel at Sunday from Castle Ironfist (#5))',
    solution:
      'Talk to Arena Master, choose the level of combat (Page, Squire, Knight, Lord), beat the monsters and return to him for reward.',
    reward: 'various gp, 0 xp, 0 karma',
    award: 'X Page/Squire/Knight/Lord Arena victories',
    areaSlug: 'castle-ironfist',
    locationName: 'Arena',
  },
  {
    id: 'be-a-goober',
    name: 'Be a goober',
    description: 'Find the Proclamation Scroll in the Control Center.',
    mission: 'unknown',
    solution:
      'Go into the Control Center at Free Haven and find the Proclamation Scroll.(#60)',
    reward: 'various gp, 0 xp, 0 karma',
    award: 'Super-Goober',
    areaSlug: 'free-haven',
    locationName: 'Control Center',
  },
  {
    id: 'save-enroth',
    name: 'Save Enroth',
    description: 'Destroy the Hive in Sweet Water to save Enroth.',
    mission: 'Seer in Castle Ironfist (#32) gives you this advice',
    solution:
      'Go into the The Hive at Sweet Water (#4), kill the Reactor and the Demon Queen. Be sure that you have the Ritual of the Void Scroll from Archibald Ironfist.',
    reward: '0 gp, 0 xp, 0 karma, but win the whole game',
    award: 'Destroyed the Hive and saved Enroth',
    areaSlug: 'sweet-water',
    locationName: 'The Hive',
  },
];
