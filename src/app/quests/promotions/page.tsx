import { getQuests, getAreas } from '@/lib/data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default async function PromotionsPage() {
  const quests = getQuests();
  const areas = getAreas();
  const promotionQuests = quests.filter((q) => q.promotionClass);

  const classes = [
    'Knight',
    'Paladin',
    'Archer',
    'Cleric',
    'Sorcerer',
    'Druid',
  ] as const;

  const areaMap = Object.fromEntries(areas.map((a) => [a.slug, a.name]));

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Class Promotions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every character class in Enroth can be promoted twice, increasing
          their power and unlocking new potential. Here are the quests required
          for each promotion.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {classes.map((cls) => (
          <Button key={cls} variant="secondary" asChild size="sm">
            <Link href={`#${cls.toLowerCase()}`}>{cls}</Link>
          </Button>
        ))}
      </div>

      <div className="space-y-16">
        {classes.map((cls) => {
          const classQuests = promotionQuests.filter(
            (q) => q.promotionClass === cls
          );
          return (
            <section key={cls} id={cls.toLowerCase()} className="scroll-mt-20">
              <div className="flex items-center gap-4 mb-6 border-b pb-2">
                <h2 className="font-headline text-3xl font-bold">
                  {cls} Promotions
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {classQuests.map((quest) => (
                  <Card key={quest.id} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">{quest.name}</CardTitle>
                      <CardDescription>
                        Award:{' '}
                        <span className="text-foreground font-medium">
                          {quest.award}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-primary uppercase text-xs mb-1">
                          Mission
                        </h4>
                        <p className="text-muted-foreground">{quest.mission}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary uppercase text-xs mb-1">
                          Solution
                        </h4>
                        <p className="text-muted-foreground">
                          {quest.solution}
                        </p>
                      </div>
                      <div className="pt-4 border-t flex justify-between items-end gap-4">
                        <div>
                          <h4 className="font-semibold text-primary uppercase text-xs mb-1">
                            Location
                          </h4>
                          <Link
                            href={`/areas/${quest.areaSlug}`}
                            className="hover:text-primary transition-colors font-medium"
                          >
                            {areaMap[quest.areaSlug]}
                          </Link>
                          {quest.locationName && (
                            <div className="text-muted-foreground text-xs">
                              {quest.locationName}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <h4 className="font-semibold text-primary uppercase text-xs mb-1">
                            Reward
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {quest.reward}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
