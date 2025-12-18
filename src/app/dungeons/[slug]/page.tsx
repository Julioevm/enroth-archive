import { getDungeonBySlug } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skull, Map, ScrollText } from 'lucide-react';
import Link from 'next/link';

type DungeonPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DungeonPage({ params }: DungeonPageProps) {
  const { slug } = await params;
  const dungeon = getDungeonBySlug(slug);

  if (!dungeon) {
    notFound();
  }

  const dungeonImage = getPlaceholderImage(dungeon.mapImageId);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-2">
          {dungeon.name}
        </h1>
        <CardDescription className="text-lg">
          Located in <Link href={`/areas/${dungeon.areaSlug}`} className="text-primary hover:underline">{dungeon.areaSlug.replace('-', ' ')}</Link>.
        </CardDescription>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Map className="w-5 h-5 text-primary" />
              <CardTitle className="font-headline text-2xl">Dungeon Map</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-b-lg">
                <Image
                  src={dungeonImage.imageUrl}
                  alt={`Map of ${dungeon.name}`}
                  fill
                  className="object-contain"
                  data-ai-hint={dungeonImage.imageHint}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-8">
            <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                    <ScrollText className="w-5 h-5 text-primary" />
                    <CardTitle className="font-headline text-2xl">Description</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{dungeon.description}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                    <Skull className="w-5 h-5 text-primary" />
                    <CardTitle className="font-headline text-2xl">Monsters</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {dungeon.monsters.map((monster, index) => (
                            <li key={index}>{monster}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
