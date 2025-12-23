import { getShops, getAreas } from '@/lib/data';
import { ShopsList } from '@/components/shops-list';

export default async function ShopsPage() {
  const shops = getShops();
  const areas = getAreas();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Shops
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          All sorts of shops that can be found in the world of Might and Magic
          VI. Shop names, locations, items.
        </p>
      </header>
      <ShopsList shops={shops} areas={areas} />
    </div>
  );
}
