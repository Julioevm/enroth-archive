'use client';

import type { Skill } from '@/lib/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface SkillProps {
    skills: Skill[];
}

export function SkillsList({ skills }: SkillProps) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {skills.map(skill => (
                <AccordionItem value={skill.id} key={skill.id}>
                    <AccordionTrigger className="text-xl font-headline hover:no-underline">
                        <div className="flex items-center gap-4">
                            <span>{skill.name}</span>
                            <Badge variant={skill.type === 'Magic' ? 'default' : 'secondary'}>{skill.type}</Badge>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-1">
                        <p className="text-muted-foreground mb-4">{skill.description}</p>
                        <h4 className="font-semibold mb-2">Trainers</h4>
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Level</TableHead>
                                        <TableHead>Location</TableHead>
                                        <TableHead>Requirements</TableHead>
                                        <TableHead className="text-right">Cost</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {skill.trainers.map(trainer => (
                                        <TableRow key={`${skill.id}-${trainer.level}`}>
                                            <TableCell>
                                                <Badge variant={trainer.level === 'Master' ? 'destructive' : trainer.level === 'Expert' ? 'outline' : 'secondary'}>
                                                    {trainer.level}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{trainer.location}</TableCell>
                                            <TableCell>{trainer.requirements || 'None'}</TableCell>
                                            <TableCell className="text-right">{trainer.cost > 0 ? trainer.cost.toLocaleString() : 'Free'}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
