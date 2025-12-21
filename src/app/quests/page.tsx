import { getQuests, getAreas } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { QuestsTable } from '@/components/quests-table';

export default async function QuestsPage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string | string[] }>;
}) {
  const params = await searchParams;
  const area = typeof params.area === 'string' ? params.area : undefined;
  const quests = getQuests();
  const areas = getAreas();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Quest Directory
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Browse all available quests in the world of Enroth. Use the filters to
          narrow down your search.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/quests/promotions">View Class Promotions</Link>
          </Button>
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>All Quests</CardTitle>
          <CardDescription>
            A list of known quests and their objectives.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <QuestsTable
            key={area || 'all'}
            quests={quests}
            areas={areas}
            initialArea={area}
          />
        </CardContent>
      </Card>
    </div>
  );
}
