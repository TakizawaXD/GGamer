import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { events } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const upcomingEvent = events.find(e => e.type === 'upcoming');
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <div className="flex flex-col gap-12 md:gap-20">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter !leading-tight">
            Bienvenido a GGamer Hub
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Tu centro de operaciones para nuestra comunidad de videojuegos. Sigue tus estadísticas, únete a eventos y obtén recompensas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/ranking">
                Ver Clasificación <Trophy className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link href="/events">
                Próximos Eventos <Calendar className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Contenido principal futuro puede ir aquí */}
          </div>

          <div className="space-y-8">
            {upcomingEvent && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Calendar className="text-primary" /> Próximo Evento</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold">{upcomingEvent.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">{new Date(upcomingEvent.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-sm text-foreground/80 mb-4">{upcomingEvent.description.substring(0, 100)}...</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/events">Detalles del Evento</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
