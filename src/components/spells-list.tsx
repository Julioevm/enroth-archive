'use client';

import type { Spell } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface SpellsListProps {
  spells: Spell[];
}

export function SpellsList({ spells }: SpellsListProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>School</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spells.map((spell) => (
            <TableRow key={spell.id}>
              <TableCell className="font-medium">{spell.name}</TableCell>
              <TableCell>
                <Badge variant="outline">{spell.school}</Badge>
              </TableCell>
              <TableCell>{spell.description}</TableCell>
              <TableCell className="text-right">{spell.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
