import { getAreas } from '@/lib/data';
import { AreaSlug } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

// Define the grid layout for the world map
const worldMapGrid: (AreaSlug | null)[][] = [
  [
    'sweet-water',
    'kriegspire',
    'frozen-highlands',
    'silver-cove',
    'eel-infested-waters',
  ],
  ['paradise-valley', 'blackshire', 'free-haven', 'bootleg-bay', 'mist'],
  [
    'hermits-isle',
    'dragonsand',
    'mire-of-the-damned',
    'castle-ironfist',
    'new-sorpigal',
  ],
];

const regionImages: Record<string, string> = {
  'new-sorpigal': '/regions/Mm6-region-newsorpigal.png',
  'castle-ironfist': '/regions/Castle_Ironfist_Markers.png',
  mist: '/regions/Mm6-region-mistyislands.png',
  'bootleg-bay': '/regions/Bootleg_Bay_Markers.png',
  'free-haven': '/regions/Mm6-region-freehaven.png',
  'silver-cove': '/regions/Mm6-region-silvercove.png',
  blackshire: '/regions/Blackshire_Markers.png',
  dragonsand: '/regions/Mm6-region-dragonsand.png',
  'eel-infested-waters': '/regions/Mm6-region-eelinfestedwaters.png',
  'frozen-highlands': '/regions/Mm6-region-frozenhighlands.png',
  'hermits-isle': '/regions/Mm6-region-hermitsisle.png',
  kriegspire: '/regions/Mm6-region-kriegspire.png',
  'mire-of-the-damned': '/regions/Mire_of_the_Damned_Markers.png',
  'misty-islands': '/regions/Mm6-region-mistyislands.png',
  'paradise-valley': '/regions/Mm6-region-paradisevalley.png',
  'sweet-water': '/regions/Sweet_Water_Markers.png',
};

export default async function WorldPage() {
  const allAreas = getAreas();
  const areasBySlug = new Map(allAreas.map((area) => [area.slug, area]));

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          World Map
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the regions of Enroth. Click on a map tile to view details
          about that area.
        </p>
      </header>

      <div className="flex justify-center">
        <div
          className="grid grid-cols-5 gap-0"
          style={{ width: 'fit-content' }}
        >
          {worldMapGrid.flat().map((slug, index) => {
            if (!slug || !areasBySlug.has(slug)) {
              return (
                <div
                  key={index}
                  className="aspect-square w-48 h-48 md:w-64 md:h-64 bg-background"
                />
              );
            }
            const area = areasBySlug.get(slug)!;
            const imageUrl = regionImages[slug] || '/map_enroth.png'; // Fallback to world map if specific region image missing

            return (
              <Link
                href={`/areas/${area.slug}`}
                key={area.id}
                className="group relative aspect-square w-48 h-48 md:w-64 md:h-64 block overflow-hidden"
              >
                <Image
                  src={imageUrl}
                  alt={`Map of ${area.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-headline text-2xl text-white text-center p-2">
                    {area.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
