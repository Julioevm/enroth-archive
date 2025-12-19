import { getShrines } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

export default async function ShrinesPage() {
  const shrines = await getShrines();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Magic Shrines
        </h1>
        <p className="text-lg text-muted-foreground mx-auto  text-balance mb-3">
          Listed here are all the magic shrines; when you have to pray at them
          and how they will enhance your characters.
        </p>
        <p className="text-lg  mx-auto text-balance mb-3">
          Note that you have to talk to the Seer in Castle Ironfist before you
          visit a shrine for the first time.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto  text-balance">
          The first time you visit a shrine, it will give all your characters a
          +10 permanent status change to the corresponding attribute. After the
          first visit, each shrine will give your characters only +3 more
          points. A shrine only works once a month and you have to wait a year
          before the shrine will affect you again.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Shrine Locations & Effects</CardTitle>
          <CardDescription>
            A list of all magic shrines and their monthly boons.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shrines.map((shrine) => (
                  <TableRow key={shrine.id}>
                    <TableCell className="font-medium">
                      {shrine.month}
                    </TableCell>
                    <TableCell>{shrine.name}</TableCell>
                    <TableCell>
                      <Link
                        href={`/areas/${shrine.areaSlug}`}
                        className=" hover:text-primary font-medium"
                      >
                        {shrine.location}
                      </Link>
                    </TableCell>
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
