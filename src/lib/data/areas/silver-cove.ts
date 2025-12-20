import type { Area } from '../../types';

export const silverCove: Area = {
  id: 'silver-cove',
  slug: 'silver-cove',
  name: 'Silver Cove',
  headline:
    'Known for its beautiful silver-sand beaches and as the home of Lord Flead, Silver Cove is a jewel of the northern coast.',
  details: `<ol><li>Anchors Away Inn</li>
<li>Abdul's Discount Travel</li>
<li>Trader Joe's</li>
<li>Well (+20 temporarily to Intellect and Personality)</li>
<li>Master Learning Training</li>
<li>Berserker's Fury Membership (50 gold)</li>
<li>Repair Expert (500 gold)</li>
<li>Bank</li>
<li>Abdul's Discount Armor</li>
<li>Abdul's Discount Training Center</li>
<li>Expert Spear Training (2000 gold)</li>
<li>Abdul's Discount Weapons</li>
<li>Abdul's Discount Magic Supplies</li>
<li>Master Earth Magic (12 Skill, 4000 gold)</li>
<li>Protection Services Membership</li>
<li>Adept Guild of Self</li>
<li>Expert Meditation (500 gold)</li>
<li>Master Merchant Training</li>
<li>Initiate Guild of Earth</li>
<li>Initiate Guild of Light</li>
<li>Protection Services</li>
<li>Silver Cove Temple</li>
<li>Fountain (restore 25 spell points)</li>
<li>Town Hall</li>
<li>Berserker's Fury Membership</li>
<li>Master of the Mind (12 Skill, 4000 gold) / Master of the Body (12 Skill, 4000 gold)</li>
<li>Light Guild Membership (1000 gold)</li>
<li>Expert Light Magic (2000 gold)</li>
<li>Earth Guild Membership (100 gold)</li>
<li>Guild of Self Membership (100 gold)</li>
<li>Eleanor Vanderbilt [Quest]</li>
<li>Lady Loretta Fleise [Quest]</li>
<li>Dragon Tower</li>
<li>Boat</li>
<li>Fountain (+2 Accuracy Permanent if < 15)</li>
<li>Fountain (+2 Speed Permanent if < 15)</li>
<li><a href="/dungeons/the-monolith">The Monolith</a></li>
<li><a href="/dungeons/warlords-fortress">Warlord's Fortress</a></li>
<li>Shrine</li>
<li>Obelisk #7</li>
<li>The Grove</li>
<li>Fountain</li>
<li>Boat</li>
<li>Circle of Stones</li>
<li><a href="/dungeons/silver-helm-stronghold">Silver Helm Stronghold</a></li></ol>`,
  mapImageUrl: '/areas/Silver_Cove_Markers.png',
  mapImageDescription: 'Map of Silver Cove',
  dungeonIds: ['the-monolith', 'warlords-fortress', 'silver-helm-stronghold'],
  locations: [
    { id: 'sc-town-hall', name: 'Town Hall' },
    { id: 'sc-monolith', name: 'The Monolith' },
    { id: 'sc-warlords-fortress', name: "Warlord's Fortress" },
    { id: 'sc-stronghold', name: 'Silver Helm Stronghold' },
  ],
  travel: {
    byFoot: [
      { destination: 'Free Haven', direction: 'East' },
      { destination: 'Frozen Highlands', direction: 'West' },
    ],
    coach: [{ destination: 'Free Haven', days: 'Mon, Fri', cost: 200 }],
    boat: [
      {
        destination: 'Eel Infested Waters (Island South)',
        days: 'Thu',
        cost: 200,
      },
      { destination: 'Misty Islands', days: 'Mon, Thu, Sat', cost: 300 },
      { destination: 'Free Haven', days: 'Tue, Fri', cost: 300 },
      {
        destination: 'Eel Infested Waters (Island North)',
        days: 'Wed',
        cost: 300,
      },
    ],
  },
  coordinates: { left: 75, top: 22, width: 10, height: 10 },
};
