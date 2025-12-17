import { getItems } from '@/lib/data';
import { ItemsList } from '@/components/items-list';

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Item Compendium
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          An index of items, equipment, and potions found throughout Enroth.
        </p>
      </header>
      <ItemsList items={items} />
    </div>
  );
}
