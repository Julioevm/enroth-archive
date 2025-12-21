import Image from 'next/image';
import type { Spell } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SpellCardProps {
  spell: Spell;
}

export function SpellCard({ spell }: SpellCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="bg-muted/50 pb-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-4 items-center">
            {spell.imageUrl && (
              <div className="relative w-16 h-12 flex-shrink-0">
                <Image
                  src={spell.imageUrl}
                  alt={spell.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            )}
            <div>
              <CardTitle className="font-headline text-xl">
                {spell.name}
              </CardTitle>
              <Badge variant="secondary" className="mt-1">
                {spell.cost} SP
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <div className="space-y-4">
          <div className="grid gap-3 pt-2">
            <div className="text-sm">
              <span className="font-bold text-primary">Normal:</span>{' '}
              <span className="text-muted-foreground">{spell.normal}</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-primary">Expert:</span>{' '}
              <span className="text-muted-foreground">{spell.expert}</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-primary">Master:</span>{' '}
              <span className="text-muted-foreground">{spell.master}</span>
            </div>
          </div>
          <div>
            <p className="text-sm italic text-muted-foreground">
              {spell.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
