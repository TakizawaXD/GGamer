import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { leaderboard } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leaderboard - GGamer Hub',
  description: 'See the top players in the GGamer Hub community. Check your rank and climb the leaderboard!',
};

export default function RankingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Leaderboard
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Check out the most active players in our community. Keep playing to climb the ranks!
        </p>
      </header>
      
      <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px] text-center font-headline text-base">Rank</TableHead>
              <TableHead className="font-headline text-base">Player</TableHead>
              <TableHead className="text-right font-headline text-base">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard.map((player) => {
              const playerAvatar = PlaceHolderImages.find(img => img.id === player.avatar);
              return (
                <TableRow key={player.id} className="hover:bg-primary/5">
                  <TableCell className="text-center">
                    <Badge className="text-lg font-bold" variant={player.rank <= 3 ? "default" : "secondary"}>
                      {player.rank}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      {playerAvatar && (
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={playerAvatar.imageUrl} alt={player.name} data-ai-hint={playerAvatar.imageHint} />
                          <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                      )}
                      <span className="font-semibold text-base">{player.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-mono text-lg font-semibold text-primary">
                    {player.points.toLocaleString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
