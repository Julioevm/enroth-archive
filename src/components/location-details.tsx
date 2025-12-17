'use client';
import type { GameLocation } from '@/lib/types';

export function LocationDetails({ location }: { location: GameLocation }) {

  return (
    <span className="text-base text-muted-foreground">
      {location.name}
    </span>
  );
}
