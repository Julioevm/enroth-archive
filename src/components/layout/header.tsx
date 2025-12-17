'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swords } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Quests', href: '/quests' },
  { name: 'Skills', href: '/skills' },
  { name: 'Monsters', href: '/monsters' },
  { name: 'Spells', href: '/spells' },
  { name: 'Items', href: '/items' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Swords className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-lg">Enroth Archive</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
