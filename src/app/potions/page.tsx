import { getPotions } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default async function PotionsPage() {
  const potions = await getPotions();

  const getBadgeColor = (color: string) => {
    switch (color.toLowerCase()) {
      case 'red':
        return 'bg-red-500';
      case 'blue':
        return 'bg-blue-500';
      case 'yellow':
        return 'bg-yellow-400';
      case 'purple':
        return 'bg-purple-500';
      case 'orange':
        return 'bg-orange-500';
      case 'green':
        return 'bg-green-500';
      case 'white':
        return 'bg-slate-200 text-black';
      case 'black':
        return 'bg-gray-800';
      default:
        return 'bg-secondary';
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Potion Compendium
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A list of potions, their effects, and the recipes for mixing them. Master the art of alchemy to aid you in your adventures.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Potion Recipes</CardTitle>
          <CardDescription>All craftable potions and their combinations.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Potion</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Ingredients</TableHead>
                        <TableHead>Effect</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {potions.map(potion => (
                        <TableRow key={potion.id}>
                            <TableCell className="font-medium">{potion.name}</TableCell>
                            <TableCell>
                                <Badge className={cn('text-primary-foreground', getBadgeColor(potion.color))}>{potion.color}</Badge>
                            </TableCell>
                            <TableCell>{potion.ingredients}</TableCell>
                            <TableCell>{potion.effect}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
