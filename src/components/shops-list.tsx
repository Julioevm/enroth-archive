'use client';

import type { Shop, Area } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ShopsListProps {
  shops: Shop[];
  areas: Area[];
}

type GroupedShops = {
  [key: string]: Shop[];
};

const categoryOrder: string[] = [
  'Weapon Shop',
  'Armor Shop',
  'Magic Shop',
  'General Store',
  'Stables',
  'Boats',
  'Temple',
  'Training Hall',
  'Town Hall',
  'Tavern',
  'Bank',
  'Magic Guild',
  'Guild',
];

export function ShopsList({ shops, areas }: ShopsListProps) {
  const groupedShops = shops.reduce((acc, shop) => {
    const { type } = shop;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(shop);
    return acc;
  }, {} as GroupedShops);

  const getLocationLink = (location: string) => {
    const area = areas.find((a) => a.name === location);
    if (area) {
      return (
        <Link
          href={`/areas/${area.slug}`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {location}
        </Link>
      );
    }
    return <span className="text-muted-foreground">{location}</span>;
  };

  const renderWeaponArmorMagicGeneralTable = (shops: Shop[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">Name</TableHead>
          <TableHead className="w-1/4">Location</TableHead>
          <TableHead className="w-1/4">Buy</TableHead>
          <TableHead className="w-1/4">Special</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop) => (
          <TableRow key={shop.id}>
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{getLocationLink(shop.location)}</TableCell>
            <TableCell>{shop.buy}</TableCell>
            <TableCell>{shop.special}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderTravelTable = (shops: Shop[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Name</TableHead>
          <TableHead className="w-1/3">Location</TableHead>
          <TableHead className="w-1/3">Destinations</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop) => (
          <TableRow key={shop.id}>
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{getLocationLink(shop.location)}</TableCell>
            <TableCell>
              <ul className="space-y-1">
                {shop.destinations?.map((dest, index) => (
                  <li key={index} className="text-sm">
                    {dest}
                  </li>
                ))}
              </ul>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderTempleTable = (shops: Shop[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Name</TableHead>
          <TableHead className="w-1/3">Location</TableHead>
          <TableHead className="w-1/3">Restriction</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop) => (
          <TableRow key={shop.id}>
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{getLocationLink(shop.location)}</TableCell>
            <TableCell>{shop.restriction}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderTrainingHallTable = (shops: Shop[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">Name</TableHead>
          <TableHead className="w-1/4">Location</TableHead>
          <TableHead className="w-1/4">Cost</TableHead>
          <TableHead className="w-1/4">Max Level</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop) => (
          <TableRow key={shop.id}>
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{getLocationLink(shop.location)}</TableCell>
            <TableCell>{shop.cost}</TableCell>
            <TableCell>{shop.maxLevel}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderSimpleTable = (shops: Shop[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">Name</TableHead>
          <TableHead className="w-1/2">Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop) => (
          <TableRow key={shop.id}>
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{getLocationLink(shop.location)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderTavernTable = (shops: Shop[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/5">Name</TableHead>
          <TableHead className="w-1/5">Location</TableHead>
          <TableHead className="w-1/5">Food</TableHead>
          <TableHead className="w-1/5">Food Cost</TableHead>
          <TableHead className="w-1/5">Rest Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop) => (
          <TableRow key={shop.id}>
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{getLocationLink(shop.location)}</TableCell>
            <TableCell>{shop.food}</TableCell>
            <TableCell>{shop.foodCost}</TableCell>
            <TableCell>{shop.restCost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderMagicGuildTable = (shops: Shop[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">Name</TableHead>
          <TableHead className="w-1/4">Type</TableHead>
          <TableHead className="w-1/4">Location</TableHead>
          <TableHead className="w-1/4">Spells</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop) => (
          <TableRow key={shop.id}>
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{shop.type}</TableCell>
            <TableCell>{getLocationLink(shop.location)}</TableCell>
            <TableCell>{shop.spells}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderGuildTable = (shops: Shop[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">Name</TableHead>
          <TableHead className="w-1/4">Type</TableHead>
          <TableHead className="w-1/4">Location</TableHead>
          <TableHead className="w-1/4">Skills</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shops.map((shop) => (
          <TableRow key={shop.id}>
            <TableCell className="font-medium">{shop.name}</TableCell>
            <TableCell>{shop.type}</TableCell>
            <TableCell>{getLocationLink(shop.location)}</TableCell>
            <TableCell>{shop.skills}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const getTableForCategory = (category: string, categoryShops: Shop[]) => {
    switch (category) {
      case 'Weapon Shop':
      case 'Armor Shop':
      case 'Magic Shop':
      case 'General Store':
        return renderWeaponArmorMagicGeneralTable(categoryShops);
      case 'Stables':
      case 'Boats':
        return renderTravelTable(categoryShops);
      case 'Temple':
        return renderTempleTable(categoryShops);
      case 'Training Hall':
        return renderTrainingHallTable(categoryShops);
      case 'Town Hall':
      case 'Bank':
        return renderSimpleTable(categoryShops);
      case 'Tavern':
        return renderTavernTable(categoryShops);
      case 'Magic Guild':
        return renderMagicGuildTable(categoryShops);
      case 'Guild':
        return renderGuildTable(categoryShops);
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <Card className="sticky top-14 z-40">
        <CardContent className="p-2">
          <nav className="flex flex-wrap items-center justify-center gap-2">
            {categoryOrder.map((category) => {
              const categoryShops = groupedShops[category];
              if (!categoryShops || categoryShops.length === 0) return null;
              return (
                <Button key={category} variant="ghost" asChild>
                  <Link href={`#${category.replace(/\s+/g, '-')}`}>
                    {category}
                  </Link>
                </Button>
              );
            })}
          </nav>
        </CardContent>
      </Card>

      <div className="space-y-12">
        {categoryOrder.map((category) => {
          const categoryShops = groupedShops[category];
          if (!categoryShops || categoryShops.length === 0) return null;

          const table = getTableForCategory(category, categoryShops);
          if (!table) return null;

          return (
            <Card key={category} id={category.replace(/\s+/g, '-')}>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">{table}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
