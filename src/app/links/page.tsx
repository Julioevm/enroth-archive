import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const links = [
  {
    title: 'MM6 Wiki (Archived)',
    description:
      'The inspiration for this site, now only available through the internet archive. A comprehensive repository of information.',
    url: 'https://web.archive.org/web/20250803181444/https://mm6.wiki/w/Main_Page',
    category: 'Wikis & Guides',
  },
  {
    title: 'RPG Gamers Walkthrough',
    description:
      'Another great resource with detailed walkthroughs and information about Might and Magic VI.',
    url: 'https://rpggamers.com/walkthrough/might-magic-vi-mandate-of-heaven',
    category: 'Wikis & Guides',
  },
  {
    title: 'Interactive Map',
    description:
      'A fantastic interactive map tool for exploring the world of Enroth.',
    url: 'https://jschnurer.github.io/mm-tools/maps/interactive/mm6/world',
    category: 'Tools',
  },
  {
    title: 'French Wiki (ResidivJeux)',
    description: 'A great resource for French-speaking fans of the game.',
    url: 'https://www.residivjeux.com/mm6/',
    category: 'International Communities',
  },
  {
    title: 'Czech Site (Svet Might and Magic)',
    description: 'Detailed Czech guide and information about MMVI.',
    url: 'https://www.svetmightandmagic.cz/mmvi/mmvi_navod.php',
    category: 'International Communities',
  },
  {
    title: 'German Site (Might and Magic World)',
    description:
      'A long-standing German resource for the entire Might and Magic series.',
    url: 'https://www.mightandmagicworld.de/mm6/',
    category: 'International Communities',
  },
  {
    title: 'r/MightAndMagic',
    description: 'The official subreddit for the Might and Magic series.',
    url: 'https://www.reddit.com/r/MightAndMagic/',
    category: 'Communities',
  },
  {
    title: 'GOG.com - Might and Magic 6',
    description:
      'The best place to legally purchase a digital copy of the game, including the Limited Edition.',
    url: 'https://www.gog.com/en/game/might_and_magic_6_limited_edition',
    category: 'Purchase',
  },
];

export default function LinksPage() {
  const categories = Array.from(new Set(links.map((link) => link.category)));

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Useful Links
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of external resources, guides, and communities for Might
          and Magic VI: The Mandate of Heaven.
        </p>
      </header>

      <div className="grid gap-12 max-w-4xl mx-auto">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="font-headline text-2xl font-bold mb-6 border-b pb-2">
              {category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {links
                .filter((link) => link.category === category)
                .map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full transition-colors group-hover:border-primary/50 group-hover:bg-accent/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          {link.title}
                          <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </CardTitle>
                        <CardDescription>{link.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </a>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
