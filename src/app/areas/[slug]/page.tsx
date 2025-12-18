import { getAreaBySlug, getDungeonsByIds } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LocationDetails } from '@/components/location-details';
import Link from 'next/link';
import { MapPin, Scroll, ShieldQuestion, LandPlot, Sailboat, Bus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type AreaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) {
    notFound();
  }

  const areaImage = getPlaceholderImage(area.mapImageId || 'fallback');
  const dungeons = getDungeonsByIds(area.dungeonIds);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-2">
          {area.name}
        </h1>
        <p className="text-lg text-muted-foreground italic">"{area.headline}"</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={areaImage.imageUrl}
                  alt={`Map of ${area.name}`}
                  fill
                  className="object-cover"
                  data-ai-hint={areaImage.imageHint}
                  priority
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <CardTitle className="font-headline text-2xl">Key Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {area.locations.map((location) => (
                  <li key={location.id}>
                    <LocationDetails location={location} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <LandPlot className="w-5 h-5 text-primary" />
              <CardTitle className="font-headline text-2xl">Travel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-2"><LandPlot className="w-4 h-4 text-muted-foreground" /> By Foot</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  {area.travel.byFoot.map(route => <li key={route.destination}>{route.destination} ({route.direction})</li>)}
                </ul>
              </div>

              {(area.travel.coach.length > 0 || area.travel.boat.length > 0) && <Separator />}

              {area.travel.coach.length > 0 && (
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2"><Bus className="w-4 h-4 text-muted-foreground" /> Coach</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    {area.travel.coach.map(route => (
                      <li key={route.destination}>
                        {route.destination} ({route.days}) - {route.cost}g
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {area.travel.boat.length > 0 && (
                 <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2"><Sailboat className="w-4 h-4 text-muted-foreground" /> Boat</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    {area.travel.boat.map(route => (
                      <li key={route.destination}>
                        {route.destination} ({route.days}) - {route.cost}g
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {dungeons.length > 0 && (
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                 <Scroll className="w-5 h-5 text-primary" />
                <CardTitle className="font-headline text-2xl">Dungeons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dungeons.map((dungeon) => (
                    <li key={dungeon.id}>
                       <Link href={`/dungeons/${dungeon.slug}`} className="text-base text-muted-foreground hover:text-primary transition-colors">
                        {dungeon.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <ShieldQuestion className="w-5 h-5 text-primary" />
              <CardTitle className="font-headline text-2xl">Related Quests</CardTitle>
            </CardHeader>
            <CardContent>
               <Link href="/quests" className="text-base text-muted-foreground hover:text-primary transition-colors">
                  View all available quests
                </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
