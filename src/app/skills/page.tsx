import { getSkills } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SkillsList } from '@/components/skills-list';

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Skill Directory
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A complete guide to skills in Might and Magic VI, including trainer locations and mastery requirements.
        </p>
      </header>

      <SkillsList skills={skills} />
    </div>
  );
}
