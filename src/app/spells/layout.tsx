import Link from 'next/link';
import { Button } from '@/components/ui/button';

const schools = [
  'Fire',
  'Air',
  'Water',
  'Earth',
  'Spirit',
  'Mind',
  'Body',
  'Light',
  'Dark',
];

export default function SpellsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Spellbook
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          A compendium of magical spells available in Enroth.
        </p>

        <nav className="flex flex-wrap justify-center gap-2 mb-8">
          {schools.map((school) => (
            <Button key={school} variant="outline" asChild>
              <Link href={`/spells/${school.toLowerCase()}`}>{school}</Link>
            </Button>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}
