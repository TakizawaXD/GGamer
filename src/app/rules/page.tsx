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
  title: 'Reglas y Preguntas Frecuentes - GGamer Hub',
  description: 'Encuentra todas las reglas para nuestros servidores de Discord y Minecraft, y obtén respuestas a las preguntas más frecuentes.',
};

const discordRules = [
  'Sé respetuoso con todos los miembros.',
  'No hacer spam ni autopromoción.',
  'Mantén las conversaciones en los canales correctos.',
  'No hay contenido NSFW.',
  'Sigue los Términos de Servicio de Discord.',
];

const minecraftRules = [
  'No destruir construcciones ajenas ni robar.',
  'El PvP solo está permitido en áreas designadas.',
  'No hacer trampas, usar hacks o aprovecharse de fallos.',
  'Respeta al personal y sus decisiones.',
  'No construyas a menos de 100 bloques de otro jugador sin permiso.',
];

export default function RulesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Reglas y Preguntas Frecuentes
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Todo lo que necesitas saber para pasar un buen rato en nuestra comunidad.
        </p>
      </header>

      <Tabs defaultValue="rules" className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="rules"><Book className="mr-2 h-4 w-4" /> Reglas</TabsTrigger>
            <TabsTrigger value="faq"><HelpCircle className="mr-2 h-4 w-4" /> Preguntas Frecuentes</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="rules">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Reglas de Discord</CardTitle>
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
                <CardTitle className="font-headline">Reglas de Minecraft</CardTitle>
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
