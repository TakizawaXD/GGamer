import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { gallery } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Upload } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería - GGamer Hub',
  description: 'Echa un vistazo a los mejores momentos de nuestra comunidad y servidores.',
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        <div className="text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            Galería Multimedia
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Los mejores momentos de nuestros servidores y eventos, capturados por la comunidad.
          </p>
        </div>
        <Button size="lg">
          <Upload className="mr-2 h-5 w-5" />
          Subir Imagen
        </Button>
      </header>
      
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {gallery.map((item) => {
          const image = PlaceHolderImages.find(img => img.id === item.src);
          if (!image) return null;
          return (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="overflow-hidden rounded-lg cursor-pointer transition-all hover:shadow-primary/20 hover:shadow-lg hover:scale-[1.02]">
                  <Image
                    src={image.imageUrl}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-0">
                <DialogTitle className="sr-only">{item.alt}</DialogTitle>
                <Image
                  src={image.imageUrl}
                  alt={item.alt}
                  width={1280}
                  height={720}
                  className="w-full h-auto object-contain rounded-lg"
                  data-ai-hint={image.imageHint}
                />
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
