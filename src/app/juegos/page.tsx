import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { games } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gamepad2 } from 'lucide-react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Juegos - GGamer Hub',
  description: 'Descubre los juegos más populares del momento, tanto gratis como de pago.',
};

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Juegos Populares
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explora los títulos más jugados por la comunidad. ¡Encuentra tu próxima aventura!
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {games.map((game) => {
          const gameImage = PlaceHolderImages.find(img => img.id === game.imageId);
          return (
            <Card 
              key={game.id} 
              className="group flex flex-col overflow-hidden transition-all bg-card/80 backdrop-blur-sm relative isolate"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors -z-10 animate-border-pulse" />
              <div className="aspect-video relative">
                {gameImage && (
                  <Image
                    src={gameImage.imageUrl}
                    alt={game.title}
                    fill
                    className="object-cover"
                    data-ai-hint={gameImage.imageHint}
                  />
                )}
                 <Badge 
                  variant={game.type === 'Gratis' ? 'default' : 'secondary'}
                  className="absolute top-2 right-2 text-xs"
                >
                  {game.type}
                </Badge>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline text-xl">{game.title}</CardTitle>
              </CardHeader>
              <CardFooter>
                 <Button asChild className="w-full font-semibold">
                  <a href={game.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Gamepad2 className="mr-2" />
                    Jugar Ahora
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
