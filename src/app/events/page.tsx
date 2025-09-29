import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { events } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, History, Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events - GGamer Hub',
  description: 'Stay up to date with all community events, tournaments, and giveaways.',
};

const EventCard = ({ event }: { event: typeof events[0] }) => {
  const eventImage = PlaceHolderImages.find(img => img.id === event.image);
  const isPast = event.type === 'past';

  return (
    <Card className="flex flex-col overflow-hidden">
      {eventImage && (
        <div className="aspect-video relative">
          <Image
            src={eventImage.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            data-ai-hint={eventImage.imageHint}
          />
          {isPast && <div className="absolute inset-0 bg-black/50" />}
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline">{event.title}</CardTitle>
        <p className="text-sm text-muted-foreground flex items-center gap-2 pt-1">
          <Calendar className="h-4 w-4" />
          {new Date(event.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/80">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={isPast}>
          {isPast ? <><Check className="mr-2 h-4 w-4" /> Event Finished</> : 'Participate'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.type === 'upcoming');
  const pastEvents = events.filter((e) => e.type === 'past');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Community Events
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join our tournaments, giveaways, and other activities. There's always something happening!
        </p>
      </header>

      <Tabs defaultValue="upcoming" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="upcoming">
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past">
              <History className="mr-2 h-4 w-4" />
              Past Events
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No upcoming events scheduled. Check back soon!
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No past events to show.
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
