'use client';

import type { Monster } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MonstersListProps {
  monsters: Monster[];
}

export function MonstersList({ monsters }: MonstersListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {monsters.map((monster) => (
        <Card key={monster.id}>
          <CardHeader>
            <CardTitle className="font-headline">{monster.name}</CardTitle>
            <CardDescription>{monster.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <span className="font-semibold">HP:</span> {monster.hp}
            </p>
            <p>
              <span className="font-semibold">Attack:</span> {monster.attack}
            </p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold mr-2">Found in:</span>
            {monster.locations.map((location) => (
              <Badge key={location} variant="secondary">
                {location}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
