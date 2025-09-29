import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Trophy, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { discordFeed, leaderboard, events } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const topPlayers = leaderboard.slice(0, 3);
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
            Welcome to GGamer Hub
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Your central hub for our gaming community. Track your stats, join events, and get rewards.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/ranking">
                View Leaderboard <Trophy className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link href="/events">
                Upcoming Events <Calendar className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-bold mb-6 flex items-center gap-3">
              <MessageSquare className="text-primary" />
              Latest Activity
            </h2>
            <div className="space-y-4">
              {discordFeed.slice(0, 4).map(post => {
                const authorAvatar = PlaceHolderImages.find(img => img.id === post.author.avatar);
                return (
                  <Card key={post.id} className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 flex gap-4">
                      {authorAvatar && (
                        <Avatar>
                          <AvatarImage src={authorAvatar.imageUrl} alt={post.author.name} data-ai-hint={authorAvatar.imageHint} />
                          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{post.author.name}</p>
                          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                        </div>
                        <p className="text-sm text-foreground/80">{post.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Trophy className="text-primary" /> Top Players</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {topPlayers.map((player) => {
                    const playerAvatar = PlaceHolderImages.find(img => img.id === player.avatar);
                    return (
                      <li key={player.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {playerAvatar && (
                             <Avatar className="h-10 w-10">
                              <AvatarImage src={playerAvatar.imageUrl} alt={player.name} data-ai-hint={playerAvatar.imageHint} />
                              <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <p className="font-semibold">{player.name}</p>
                            <p className="text-sm text-muted-foreground">{player.points.toLocaleString()} pts</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="font-bold text-lg">#{player.rank}</Badge>
                      </li>
                    );
                  })}
                </ul>
                <Button asChild variant="link" className="px-0 mt-4">
                  <Link href="/ranking">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            {upcomingEvent && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Calendar className="text-primary" /> Upcoming Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold">{upcomingEvent.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">{new Date(upcomingEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-sm text-foreground/80 mb-4">{upcomingEvent.description.substring(0, 100)}...</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/events">Event Details</Link>
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
