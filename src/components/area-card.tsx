import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Area } from '@/lib/types';
import type { ImagePlaceholder } from '@/lib/images';

interface AreaCardProps {
  area: Area;
  image: ImagePlaceholder;
}

export function AreaCard({ area, image }: AreaCardProps) {
  const [width, height] = image.imageUrl.split('/').slice(-2);
  
  return (
    <Link href={`/areas/${area.slug}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={`Map of ${area.name}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="font-headline group-hover:text-primary transition-colors">
            {area.name}
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
