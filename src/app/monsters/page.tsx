import { getMonsters } from '@/lib/data';
import { MonstersList } from '@/components/monsters-list';

export default async function MonstersPage() {
  const monsters = await getMonsters();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Bestiary
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A guide to the creatures found in Enroth.
        </p>
      </header>

      <MonstersList monsters={monsters} />
    </div>
  );
}
