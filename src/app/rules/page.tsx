import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { faqs } from '@/lib/data';
import { Book, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rules & FAQ - GGamer Hub',
  description: 'Find all the rules for our Discord and Minecraft servers, and get answers to frequently asked questions.',
};

const discordRules = [
  'Be respectful to all members.',
  'No spamming or self-promotion.',
  'Keep conversations in the correct channels.',
  'No NSFW content.',
  'Follow Discord\'s Terms of Service.',
];

const minecraftRules = [
  'No griefing or stealing.',
  'PvP is only allowed in designated areas.',
  'No cheating, hacking, or exploiting glitches.',
  'Respect staff and their decisions.',
  'Do not build within 100 blocks of another player without permission.',
];

export default function RulesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Rules & FAQ
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Everything you need to know to have a great time in our community.
        </p>
      </header>

      <Tabs defaultValue="rules" className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="rules"><Book className="mr-2 h-4 w-4" /> Rules</TabsTrigger>
            <TabsTrigger value="faq"><HelpCircle className="mr-2 h-4 w-4" /> FAQ</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="rules">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Discord Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {discordRules.map((rule, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary font-bold">{index + 1}.</span>
                      <p className="text-muted-foreground">{rule}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Minecraft Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {minecraftRules.map((rule, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary font-bold">{index + 1}.</span>
                      <p className="text-muted-foreground">{rule}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
