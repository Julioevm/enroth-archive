import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

const imagesById = new Map(placeholderImages.map((img) => [img.id, img]));

export function getPlaceholderImage(id: string): ImagePlaceholder {
    const image = imagesById.get(id);
    if (!image) {
        console.warn(`Image with id "${id}" not found.`);
        // Return a default/fallback image
        return {
            id: 'fallback',
            description: 'Fallback Image',
            imageUrl: 'https://picsum.photos/seed/fallback/800/600',
            imageHint: 'placeholder',
        }
    }
    return image;
}
