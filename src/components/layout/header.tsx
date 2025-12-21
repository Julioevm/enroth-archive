'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Swords } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'World', href: '/world' },
  { name: 'Quests', href: '/quests' },
  { name: 'Skills', href: '/skills' },
  { name: 'Monsters', href: '/monsters' },
  { name: 'Spells', href: '/spells' },
  { name: 'Items', href: '/items' },
  { name: 'Potions', href: '/potions' },
  { name: 'Shrines', href: '/shrines' },
  { name: 'Links', href: '/links' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Swords className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-lg">
            Enroth Archives
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Swords className="h-6 w-6 text-primary" />
                <span className="font-headline font-bold text-lg">
                  Enroth Archives
                </span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
