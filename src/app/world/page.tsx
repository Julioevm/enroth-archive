import { getAreas } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/images';
import Image from 'next/image';
import Link from 'next/link';

// Define the grid layout for the world map
const worldMapGrid: (string | null)[][] = [
  ['silver-cove', null],
  [null, 'free-haven', 'bootleg-bay', 'mist'],
  [null, null, 'castle-ironfist', 'new-sorpigal'],
];

export default async function WorldPage() {
  const allAreas = await getAreas();
  const areasBySlug = new Map(allAreas.map((area) => [area.slug, area]));

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          World Map
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the regions of Enroth. Click on a map tile to view details about that area.
        </p>
      </header>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-0" style={{ width: 'fit-content' }}>
          {worldMapGrid.flat().map((slug, index) => {
            if (!slug || !areasBySlug.has(slug)) {
              return (
                <div key={index} className="aspect-square w-48 h-48 md:w-64 md:h-64 bg-background" />
              );
            }
            const area = areasBySlug.get(slug)!;
            const image = getPlaceholderImage(`${area.slug}-tile`);
            return (
              <Link
                href={`/areas/${area.slug}`}
                key={area.id}
                className="group relative aspect-square w-48 h-48 md:w-64 md:h-64 block overflow-hidden"
              >
                <Image
                  src={image.imageUrl}
                  alt={`Map of ${area.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={image.imageHint}
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
