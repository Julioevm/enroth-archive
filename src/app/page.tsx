import { getAreas } from '@/lib/data';
import { AreaCard } from '@/components/area-card';
import { getPlaceholderImage } from '@/lib/images';

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {areas.map((area) => (
          <AreaCard key={area.id} area={area} image={getPlaceholderImage(area.mapImageId)} />
        ))}
      </div>
    </div>
  );
}
