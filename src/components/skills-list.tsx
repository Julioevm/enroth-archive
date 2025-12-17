'use client';

import type { Skill, SkillTrainer } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SkillsListProps {
  skills: Skill[];
}

type GroupedSkills = {
  [key: string]: Skill[];
};

export function SkillsList({ skills }: SkillsListProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    const { type } = skill;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(skill);
    return acc;
  }, {} as GroupedSkills);

  const categoryOrder: (keyof GroupedSkills)[] = ['Weapon', 'Armor', 'Magic', 'Misc'];

  const getTrainerInfo = (trainers: SkillTrainer[], level: 'Normal' | 'Expert' | 'Master') => {
    const filteredTrainers = trainers.filter(t => t.level === level);
    if (filteredTrainers.length === 0) return <span className="text-muted-foreground">None</span>;
    return (
      <ul className="space-y-1">
        {filteredTrainers.map((trainer, index) => (
          <li key={index}>
            {trainer.location}
            {trainer.cost > 0 && <span className="text-muted-foreground text-xs block">({trainer.requirements}, {trainer.cost}g)</span>}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="space-y-8">
      <Card className="sticky top-14 z-40">
        <CardContent className="p-2">
            <nav className="flex flex-wrap items-center justify-center gap-2">
                {categoryOrder.map(category => {
                    const categorySkills = groupedSkills[category];
                    if (!categorySkills || categorySkills.length === 0) return null;
                    return (
                        <Button key={category} variant="ghost" asChild>
                            <Link href={`#${category.toLowerCase()}`}>{category}</Link>
                        </Button>
                    );
                })}
            </nav>
        </CardContent>
      </Card>

      <div className="space-y-12">
        {categoryOrder.map(category => {
          const categorySkills = groupedSkills[category];
          if (!categorySkills || categorySkills.length === 0) return null;

          return (
            <Card key={category} id={category.toLowerCase()}>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/4">Skill</TableHead>
                        <TableHead className="w-1/4">Learn</TableHead>
                        <TableHead className="w-1/4">Expert</TableHead>
                        <TableHead className="w-1/4">Master</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {categorySkills.map(skill => (
                        <TableRow key={skill.id}>
                          <TableCell className="font-medium">
                            <p className="font-semibold">{skill.name}</p>
                            <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                          </TableCell>
                          <TableCell>{getTrainerInfo(skill.trainers, 'Normal')}</TableCell>
                          <TableCell>{getTrainerInfo(skill.trainers, 'Expert')}</TableCell>
                          <TableCell>{getTrainerInfo(skill.trainers, 'Master')}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
