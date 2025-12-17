import { getSpells } from '@/lib/data';
import { SpellsList } from '@/components/spells-list';

export default async function SpellsPage() {
  const spells = await getSpells();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Spellbook
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A compendium of magical spells available in Enroth.
        </p>
      </header>
      <SpellsList spells={spells} />
    </div>
  );
}
