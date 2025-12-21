import { notFound } from 'next/navigation';
import { getSpellsBySchool } from '@/lib/data';
import { SpellCard } from '@/components/spell-card';

const validSchools = [
  'fire',
  'air',
  'water',
  'earth',
  'spirit',
  'mind',
  'body',
  'light',
  'dark',
];

export default async function SchoolSpellsPage({
  params,
}: {
  params: Promise<{ school: string }>;
}) {
  const { school } = await params;

  if (!validSchools.includes(school.toLowerCase())) {
    notFound();
  }

  const spells = getSpellsBySchool(school);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {spells.map((spell) => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </div>
  );
}
