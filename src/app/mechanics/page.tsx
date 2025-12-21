import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Mechanics - Enroth Archive',
  description: 'Deep dive into the game mechanics of Might and Magic VI.',
};

const statsBreakpoints = [
  { barrier: 500, effect: 30 },
  { barrier: 400, effect: 25 },
  { barrier: 350, effect: 20 },
  { barrier: 300, effect: 19 },
  { barrier: 275, effect: 18 },
  { barrier: 250, effect: 17 },
  { barrier: 225, effect: 16 },
  { barrier: 200, effect: 15 },
  { barrier: 175, effect: 14 },
  { barrier: 150, effect: 13 },
  { barrier: 125, effect: 12 },
  { barrier: 100, effect: 11 },
  { barrier: 75, effect: 10 },
  { barrier: 50, effect: 9 },
  { barrier: 40, effect: 8 },
  { barrier: 35, effect: 7 },
  { barrier: 30, effect: 6 },
  { barrier: 25, effect: 5 },
  { barrier: 21, effect: 4 },
  { barrier: 19, effect: 3 },
  { barrier: 17, effect: 2 },
  { barrier: 15, effect: 1 },
  { barrier: 13, effect: 0 },
  { barrier: 11, effect: -1 },
  { barrier: 9, effect: -2 },
  { barrier: 7, effect: -3 },
  { barrier: 5, effect: -4 },
  { barrier: 3, effect: -5 },
  { barrier: 0, effect: -6 },
];

const resistanceAverageDamage = [
  { resistance: 0, damage: '100%' },
  { resistance: 20, damage: '75%' },
  { resistance: 40, damage: '60%' },
  { resistance: 60, damage: '50%' },
  { resistance: 100, damage: '39%' },
  { resistance: 150, damage: '31%' },
  { resistance: 200, damage: '26%' },
  { resistance: 300, damage: '20%' },
];

const baseRecoveryTimes = [
  { weapon: 'Staff', time: 100 },
  { weapon: 'Sword', time: 90 },
  { weapon: 'Dagger', time: 60 },
  { weapon: 'Axe', time: 100 },
  { weapon: 'Spear', time: 80 },
  { weapon: 'Bow', time: 100 },
  { weapon: 'Mace', time: 80 },
  { weapon: 'Blaster', time: 30 },
];

export default function MechanicsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">
          Might and Magic Mechanics
        </h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Original source:</span>
          <Link
            href="https://grayface.github.io/mm/mechanics/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:underline"
          >
            GrayFace&apos;s Mechanics <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="flex flex-col gap-2">
            <Link href="#statistics" className="text-primary hover:underline">
              Statistics
            </Link>
            <Link href="#experience" className="text-primary hover:underline">
              Experience
            </Link>
            <Link
              href="#chance-to-hit"
              className="text-primary hover:underline"
            >
              Chance To Hit
            </Link>
            <Link href="#resistances" className="text-primary hover:underline">
              Resistances
            </Link>
            <Link
              href="#recovery-time"
              className="text-primary hover:underline"
            >
              Recovery Time
            </Link>
            <Link href="#dual-weapons" className="text-primary hover:underline">
              Dual Weapons
            </Link>
            <Link href="#other" className="text-primary hover:underline">
              Other
            </Link>
          </nav>
        </CardContent>
      </Card>

      <div className="space-y-12">
        <section id="statistics">
          <h2 className="font-headline text-3xl font-bold mb-6">Statistics</h2>
          <p className="mb-6">
            All statistics give bonus according to the table below. The first
            row is statistic barrier (or breakpoint). The second is effect you
            get from getting equal or bigger statistic.
          </p>
          <div className="bg-muted p-4 rounded-lg mb-6">
            <p className="italic">
              Example: If 400 &le; Might &lt; 500, then you will get +25 to
              melee damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Statistic</TableHead>
                    <TableHead>Effect</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {statsBreakpoints.slice(0, 15).map((row) => (
                    <TableRow key={row.barrier}>
                      <TableCell>{row.barrier}</TableCell>
                      <TableCell>{row.effect}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="border rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Statistic</TableHead>
                    <TableHead>Effect</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {statsBreakpoints.slice(15).map((row) => (
                    <TableRow key={row.barrier}>
                      <TableCell>{row.barrier}</TableCell>
                      <TableCell>{row.effect}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p>
              Values obtained from this table are referred to as
              &quot;MightEffect&quot;, &quot;IntellectEffect&quot;, etc.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Might effect</strong> is added to melee damage.
              </li>
              <li>
                <strong>Intellect and/or Personality effects</strong> are
                multiplied by mana multiplier of character class and added to
                SP.
              </li>
              <li>
                <strong>Accuracy effect</strong> is added to Attack and Shoot.
              </li>
              <li>
                <strong>Endurance effect</strong> is multiplied by HP multiplier
                of the class and added to HP. It also decreases time of recovery
                from enemy attacks. The formula is 20 - EnduranceEffect. (With
                Endurance of 350+ the recovery is immediate).
              </li>
              <li>
                <strong>Speed effect</strong> is added to Armor Class and
                subtracted from recovery time.
              </li>
              <li>
                <strong>Luck effect</strong> is added to all non-zero
                resistances, although this is not shown in your character
                screen. It also protects you from bad things monsters can do to
                you.
              </li>
            </ul>
          </div>
        </section>

        <Separator />

        <section id="experience">
          <h2 className="font-headline text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-4">
            <p>
              N&apos;th level takes (N-1)*1000 more experience points to
              achieve.
            </p>
            <ul className="list-disc pl-6">
              <li>Level 2: 1000 exp</li>
              <li>Level 3: 2000 more (3000 total)</li>
              <li>Level 4: 3000 more (6000 total)</li>
            </ul>
            <p className="font-mono bg-muted p-4 rounded-md">
              TotalExp(N) = N * (N - 1) * 500
            </p>
          </div>
        </section>

        <Separator />

        <section id="chance-to-hit">
          <h2 className="font-headline text-3xl font-bold mb-6">
            Chance To Hit
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Monster hitting you
              </h3>
              <p className="mb-4 font-mono bg-muted p-4 rounded-md overflow-x-auto">
                (5 + MonsterLevel * 2) / (10 + MonsterLevel * 2 +
                PlayerArmorClass)
              </p>
              <p>
                This includes elemental ranged attacks. Only spells always hit.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                You hitting monster
              </h3>
              <p className="mb-4 font-mono bg-muted p-4 rounded-md overflow-x-auto">
                (15 + PlayerAttack * 2 + Bonus - DistancePenalty) / (30 +
                PlayerAttack * 2 + MonsterArmorClass)
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Bonus</strong>: When using a Blaster (Master/GM)
                  it&apos;s the skill. For Blades (MM6/7) it&apos;s skill * 5.
                </li>
                <li>
                  <strong>DistancePenalty</strong>: MonsterArmorClass / 2 at
                  1024–2559 units; MonsterArmorClass + 15 at 2560+ units.
                  (Maximum engagement distance is 5119 units).
                </li>
                <li>
                  With a Blaster (Expert+), the distance penalty isn&apos;t
                  applied.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Spell Success</h3>
              <p className="mb-2">For spells like Paralyze or Slow:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>MM7/8:</strong> 30 / (30 + MonsterResistance +
                  MonsterLevel / 4)
                </li>
                <li>
                  <strong>MM6:</strong> 30 / (30 + MonsterResistance +
                  MonsterLevel)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Saving Throws</h3>
              <p className="mb-4">
                Chance for enemy to succeed in a bad effect:
                <br />
                <span className="font-mono bg-muted p-2 rounded block mt-2">
                  30 / (30 + LuckEffect + OtherEffect)
                </span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm">MM7 / MM8</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1">
                      <li>
                        <strong>
                          Weak, Asleep, Drunk, Disease, Unconscious, Age:
                        </strong>{' '}
                        EnduranceEffect
                      </li>
                      <li>
                        <strong>Curse:</strong> PersonalityEffect
                      </li>
                      <li>
                        <strong>DrainSP, Dispel Magic:</strong> (Pers. +
                        Intellect) / 2
                      </li>
                      <li>
                        <strong>Insane, Paralyze, Afraid:</strong> Mind
                        Resistance
                      </li>
                      <li>
                        <strong>Stone:</strong> Earth Resistance
                      </li>
                      <li>
                        <strong>Poison, Dead, Eradicated:</strong> Body
                        Resistance
                      </li>
                      <li>
                        <strong>Break Item:</strong> Item strength
                      </li>
                      <li>
                        <strong>Steal Item:</strong> AccuracyEffect
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm">MM6</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1">
                      <li>
                        <strong>
                          Weak, Asleep, Drunk, Disease, Unconscious, Afraid:
                        </strong>{' '}
                        EnduranceEffect
                      </li>
                      <li>
                        <strong>Curse:</strong> PersonalityEffect
                      </li>
                      <li>
                        <strong>Insane:</strong> IntellectEffect
                      </li>
                      <li>
                        <strong>Poison:</strong> Poison Resistance
                      </li>
                      <li>
                        <strong>
                          Paralyze, Stone, Dead, Eradicated, DrainSP, Age:
                        </strong>{' '}
                        Magic Resistance
                      </li>
                      <li>
                        <strong>Break Item:</strong> Item strength
                      </li>
                      <li>
                        <strong>Steal Item:</strong> AccuracyEffect
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The chance that he attempts it during a strike is MonsterLevel *
                BonusMul (e.g. &quot;Agex3&quot;).
              </p>
            </div>
          </div>
        </section>

        <Separator />

        <section id="resistances">
          <h2 className="font-headline text-3xl font-bold mb-6">Resistances</h2>
          <p className="mb-4">
            When hit by magic, there is a{' '}
            <code className="bg-muted px-1 rounded">
              1 - 30 / (30 + Resistance + LuckEffect)
            </code>{' '}
            chance of reducing damage on each &quot;dice drop&quot;:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Drop dice. Unlucky: 100% damage.</li>
            <li>Lucky? Drop again. Unlucky: 50% damage.</li>
            <li>Lucky? Drop again. Unlucky: 25% damage.</li>
            <li>Lucky? Drop again. Unlucky: 12.5% damage.</li>
            <li>Lucky? 6.25% damage.</li>
          </ol>
          <p className="mb-4">
            Average damage based on Resistance (including Luck):
          </p>
          <div className="max-w-xs border rounded-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Resistance</TableHead>
                  <TableHead>Avg. Damage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resistanceAverageDamage.map((row) => (
                  <TableRow key={row.resistance}>
                    <TableCell>{row.resistance}</TableCell>
                    <TableCell>{row.damage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm italic">
            Note: If Resistance is 0, player always takes 100% damage regardless
            of Luck. Monsters use the same logic but without Luck bonus, and can
            have physical resistance.
          </p>
        </section>

        <Separator />

        <section id="recovery-time">
          <h2 className="font-headline text-3xl font-bold mb-6">
            Recovery Time
          </h2>
          <p className="mb-6">
            Recovery time is the delay between strikes. It is the sum of factors
            below, but cannot go lower than <strong>30</strong> for melee
            attacks. Ranged can go lower in some versions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Base Weapon Times</h3>
              <Table className="border">
                <TableBody>
                  {baseRecoveryTimes.map((row) => (
                    <TableRow key={row.weapon}>
                      <TableCell className="font-medium">
                        {row.weapon}
                      </TableCell>
                      <TableCell>{row.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="mt-2 text-sm text-muted-foreground">
                Unarmed: 60 (with skill) or 100 (without).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Armor & Shield</h3>
              <Table className="border">
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Shield</TableCell>
                    <TableCell>10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Leather</TableCell>
                    <TableCell>10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Chain</TableCell>
                    <TableCell>20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Plate</TableCell>
                    <TableCell>30</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Modifiers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Skills:</strong> -1 * skill (-2 * skill for GM
                Armsmaster).
              </li>
              <li>
                <strong>Speed:</strong> SpeedEffect is subtracted from recovery.
              </li>
              <li>
                <strong>Special Effects:</strong> Haste (-25), Swift (-20), Slow
                (+20).
              </li>
            </ul>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                <strong>Example 1:</strong> Mace (80), Shield (10), Leather
                (10), 15 Speed (Effect 1) = 80 + 10 + 10 - 1 = 99.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        <section id="dual-weapons">
          <h2 className="font-headline text-3xl font-bold mb-6">
            Dual Weapons
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Recovery Time</h3>
              <p>
                The weapon with the <strong>higher base recovery time</strong>{' '}
                is used. If equal, the main (right) hand is used. Only the skill
                and properties of this weapon are used.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Attack & Damage</h3>
              <p className="mb-2">
                <strong>MM7/8:</strong> Only the skill of the{' '}
                <strong>second (left)</strong> hand weapon is used for
                attack/damage calculations.
              </p>
              <p>
                <strong>MM6:</strong> Right hand skill used for damage, Left
                hand skill used for attack.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        <section id="other" className="pb-20">
          <h2 className="font-headline text-3xl font-bold mb-6">Other</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Daggers</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                10% chance to triple damage (weapon damage only).
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recovery Enchantment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Intended to be 1.5x speed, but often broken on modern systems.
                GrayFace&apos;s patch fixes it to 10% increase.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vampiric</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Adds 20% of physical damage to HP. Works for both weapons. Only
                non-lethal strikes add HP (except in MM8).
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Staff</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                MM7: GM Staff gains Unarmed bonus but loses Armsmaster bonus.
                MM8: Skill added to damage, Armsmaster works correctly.
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
