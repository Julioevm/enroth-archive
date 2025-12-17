import Image from 'next/image';
import { getAreas } from '@/lib/data';
import { areaCoordinates } from '@/lib/data/map_coordinates';

export default async function Home() {
  const areas = await getAreas();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Explore the World of Enroth
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your comprehensive guide to the lands, quests, and secrets of Might and Magic VI. Select a region to begin your adventure.
        </p>
      </header>

      <div className="relative w-full max-w-7xl mx-auto">
        <Image
          src="/map_enroth.png"
          alt="Map of Enroth"
          width={1400}
          height={900}
          layout="responsive"
          objectFit="contain"
        />
        {areas.map((area) => (
          <a
            key={area.id}
            href={`/areas/${area.slug}`}
            className="absolute rounded-full bg-blue-500 opacity-50 hover:opacity-75"
            style={{
              left: `${areaCoordinates[area.slug]?.left || 0}%`,
              top: `${areaCoordinates[area.slug]?.top || 0}%`,
              width: `${areaCoordinates[area.slug]?.width || 0}%`,
              height: `${areaCoordinates[area.slug]?.height || 0}%`,
            }}
          >
            <span className="sr-only">{area.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
