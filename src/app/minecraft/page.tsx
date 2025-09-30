import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Server, Users, ShieldCheck, Download } from 'lucide-react';
import type { Metadata } from 'next';
import { CopyIpButton } from './copy-ip-button';

export const metadata: Metadata = {
  title: 'Servidor de Minecraft - GGamer Hub',
  description: 'Únete a nuestro servidor de Minecraft. Encuentra la IP, el estado y las reglas.',
};

const serverIp = 'juega.ggamerhub.com';

const features = [
  { 
    id: 'minecraft-feature-1',
    title: 'Survival Personalizado', 
    description: 'Una experiencia survival mejorada con economía, clanes y protecciones.',
    imageHint: 'Minecraft house'
  },
  { 
    id: 'minecraft-feature-2',
    title: 'Comunidad Activa', 
    description: 'Juega con docenas de otros jugadores, participa en proyectos y haz nuevos amigos.',
    imageHint: 'Minecraft players'
  },
  { 
    id: 'minecraft-feature-3',
    title: 'Eventos Constantes', 
    description: 'Desde torneos de construcción hasta batallas épicas, siempre hay algo que hacer.',
    imageHint: 'Minecraft village'
  },
];

const rules = [
  'No destruir construcciones ajenas ni robar.',
  'El PvP solo está permitido en áreas designadas.',
  'No hacer trampas, usar hacks o aprovecharse de fallos.',
  'Respeta al personal y sus decisiones.',
  'No construyas a menos de 100 bloques de otro jugador sin permiso.',
];

async function getMinecraftServerStatus() {
  try {
    const res = await fetch(`https://api.mcsrvstat.us/3/${serverIp}`, {
      // Revalidate cache every 60 seconds
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch server status');
    }

    const data = await res.json();
    
    if (data.online) {
      return {
        ip: serverIp,
        version: data.version || 'Desconocida',
        status: 'Online',
        players: data.players.online,
        maxPlayers: data.players.max,
      };
    }
  } catch (error) {
    console.error("Error fetching Minecraft server status:", error);
  }
  
  // Fallback data if API fails or server is offline
  return {
    ip: serverIp,
    version: 'Desconocida',
    status: 'Offline',
    players: 0,
    maxPlayers: 0,
  };
}


export default async function MinecraftPage() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'minecraft-page-bg');
  const serverInfo = await getMinecraftServerStatus();

  return (
    <div className="relative overflow-hidden">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt="Minecraft Landscape"
          fill
          className="object-cover z-0"
          data-ai-hint={bgImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10" />
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
            Servidor de Minecraft
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Tu aventura de supervivencia y construcción te espera. Conecta con amigos y crea tu propio legado.
          </p>
        </header>

        <section className="max-w-4xl mx-auto mb-16">
            <Card className="bg-white/10 border-2 border-white/20 text-white backdrop-blur-md">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl">¡Conéctate Ahora!</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-center justify-around gap-6">
                    <div className="text-center">
                        <p className="text-lg text-gray-300">IP del Servidor</p>
                        <p className="font-mono text-2xl font-bold text-primary-foreground tracking-widest">{serverInfo.ip}</p>
                    </div>
                    <CopyIpButton ip={serverInfo.ip} />
                </CardContent>
            </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <Card className="bg-black/20 border border-white/20 backdrop-blur-sm p-6 flex flex-col items-center">
                <Server className="h-10 w-10 text-cyan-400 mb-3"/>
                <h3 className="font-headline text-xl">Estado</h3>
                <p className={`text-2xl font-bold ${serverInfo.status === 'Online' ? 'text-green-400' : 'text-red-500'}`}>{serverInfo.status}</p>
            </Card>
             <Card className="bg-black/20 border border-white/20 backdrop-blur-sm p-6 flex flex-col items-center">
                <Users className="h-10 w-10 text-cyan-400 mb-3"/>
                <h3 className="font-headline text-xl">Jugadores</h3>
                <p className="text-2xl font-bold">{serverInfo.players} / {serverInfo.maxPlayers}</p>
            </Card>
             <Card className="bg-black/20 border border-white/20 backdrop-blur-sm p-6 flex flex-col items-center">
                <Download className="h-10 w-10 text-cyan-400 mb-3"/>
                <h3 className="font-headline text-xl">Versión</h3>
                <p className="text-2xl font-bold">{serverInfo.version}</p>
            </Card>
        </section>

        <section className="mb-16">
          <h2 className="font-headline text-4xl text-center mb-8">Características del Servidor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(feature => {
              const featureImage = PlaceHolderImages.find(img => img.id === feature.id);
              return (
              <Card key={feature.id} className="bg-white/10 border-white/20 border flex flex-col overflow-hidden">
                {featureImage && (
                  <div className="aspect-video relative">
                    <Image src={featureImage.imageUrl} alt={feature.title} fill className="object-cover" data-ai-hint={featureImage.imageHint} />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="font-headline text-4xl text-center mb-8">Reglas del Servidor</h2>
          <Card className="max-w-2xl mx-auto bg-black/20 border-white/20 border p-6">
            <ul className="space-y-4">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-green-400 shrink-0 mt-1" />
                  <span className="text-gray-200 text-lg">{rule}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
