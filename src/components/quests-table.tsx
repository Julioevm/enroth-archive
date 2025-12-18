'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Quest, Area } from '@/lib/types';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

type SortKey = keyof Quest;

export function QuestsTable({
  quests,
  areas,
}: {
  quests: Quest[];
  areas: Area[];
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [areaFilter, setAreaFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: 'ascending' | 'descending';
  } | null>({ key: 'name', direction: 'ascending' });

  const areaSlugToName = useMemo(() => {
    return areas.reduce((acc, area) => {
      acc[area.slug] = area.name;
      return acc;
    }, {} as Record<string, string>);
  }, [areas]);

  const sortedQuests = useMemo(() => {
    let sortableItems = [...quests];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const valA = a[sortConfig.key] ?? '';
        const valB = b[sortConfig.key] ?? '';
        if (valA < valB) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (valA > valB) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [quests, sortConfig]);

  const filteredQuests = useMemo(() => {
    return sortedQuests.filter((quest) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        quest.name.toLowerCase().includes(searchLower) ||
        quest.description.toLowerCase().includes(searchLower) ||
        quest.mission.toLowerCase().includes(searchLower) ||
        quest.solution.toLowerCase().includes(searchLower) ||
        quest.reward.toLowerCase().includes(searchLower) ||
        quest.award.toLowerCase().includes(searchLower);
      const matchesArea = areaFilter === 'all' || quest.areaSlug === areaFilter;
      return matchesSearch && matchesArea;
    });
  }, [sortedQuests, searchTerm, areaFilter]);

  const requestSort = (key: SortKey) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: SortKey) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="ml-2 h-4 w-4 opacity-30" />;
    }
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Input
          placeholder="Search quests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={areaFilter} onValueChange={setAreaFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Areas</SelectItem>
            {areas.map((area) => (
              <SelectItem key={area.slug} value={area.slug}>
                {area.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" onClick={() => requestSort('name')}>
                  Quest Name {getSortIcon('name')}
                </Button>
              </TableHead>
              <TableHead>Mission/Giver</TableHead>
              <TableHead>Reward</TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => requestSort('areaSlug')}>
                  Area {getSortIcon('areaSlug')}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredQuests.length > 0 ? (
              filteredQuests.map((quest) => (
                <TableRow key={quest.id}>
                  <TableCell className="font-medium">
                    <div>{quest.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {quest.description}
                    </div>
                  </TableCell>
                  <TableCell>{quest.mission}</TableCell>
                  <TableCell>{quest.reward}</TableCell>
                  <TableCell>
                    <Link
                      href={`/areas/${quest.areaSlug}`}
                      className="hover:text-primary font-medium"
                    >
                      {areaSlugToName[quest.areaSlug] || quest.areaSlug}
                    </Link>
                    {quest.locationName && (
                      <div className="text-xs text-muted-foreground">
                        {quest.locationName}
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No quests found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
