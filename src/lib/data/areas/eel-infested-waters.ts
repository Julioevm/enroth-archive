import type { Area } from '../../types';

export const eelInfestedWaters: Area = {
  id: 'eel-infested-waters',
  slug: 'eel-infested-waters',
  name: 'Eel-infested Waters',
  headline:
    'Named for the dangerous sea creatures that inhabit them, these waters are a challenge for even the most experienced sailors.',
  details: `<ol><li>Docks North</li>
<li>Inn</li>
<li>Pat Skylark [Expert Blaster]</li>
<li>Alchemist store (Little Charms)</li>
<li>Temple</li>
<li><a href="/dungeons/castle-alamos">Castle Alamos</a></li>
<li>Excalibur (Requires 200 Might)</li>
<li>Fountain (+20 Magic resist temporary)</li>
<li>Docks South</li>
<li><ol><li>Inn</li>
<li>Ki Lo Nee [Master Light Magic]</li></ol></li>
<li>Shrine of Poison (November)</li>
<li>Obelisk #13</li>
<li>Fountain (+20 Elemental resist temporary)</li></ol>`,
  mapImageUrl: '/areas/Eel_Infested_Waters_Markers.png',
  mapImageDescription: 'Map of Eel-infested Waters',
  dungeonIds: ['castle-alamos'],
  locations: [{ id: 'eiw-castle', name: 'Castle Alamos' }],
  travel: {
    byFoot: [],
    coach: [],
    boat: [
      { destination: 'Silver Cove', days: 'Mon', cost: 400 },
      { destination: 'Island North', days: 'Sat', cost: 200 },
    ],
  },
  coordinates: { left: 85, top: 5, width: 10, height: 10 },
};
