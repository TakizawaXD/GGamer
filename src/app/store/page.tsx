import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { rewards } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Ticket, Gem } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rewards Store - GGamer Hub',
  description: 'Redeem your points for exclusive rewards, including Discord roles, Minecraft items, and more.',
};

const categories = ['All', 'Discord', 'Minecraft', 'Digital'];

export default function StorePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Rewards Store
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Spend your hard-earned points on awesome rewards. You deserve it!
        </p>
      </header>

      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rewards
                .filter(reward => category === 'All' || reward.category === category)
                .map((reward) => {
                  const rewardImage = PlaceHolderImages.find(img => img.id === reward.image);
                  return (
                    <Card key={reward.id} className="flex flex-col overflow-hidden transition-all hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="font-headline">{reward.title}</CardTitle>
                        <CardDescription>{reward.category} Reward</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        {rewardImage && (
                          <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                            <Image
                              src={rewardImage.imageUrl}
                              alt={reward.title}
                              fill
                              className="object-cover"
                              data-ai-hint={rewardImage.imageHint}
                            />
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center bg-card/50 p-4">
                        <div className="font-bold text-lg text-primary flex items-center gap-2">
                           <Gem className="h-5 w-5" /> {reward.cost.toLocaleString()}
                        </div>
                        <Button>
                          <Ticket className="mr-2 h-4 w-4" />
                          Redeem
                        </Button>
                      </CardFooter>
                    </Card>
                  );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
