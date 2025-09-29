import { Gamepad2, Twitter, Twitch, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../logo';
import { DiscordIcon } from '../icons/discord-icon';
import { WhatsappIcon } from '../icons/whatsapp-icon';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              Tu centro de operaciones para nuestra comunidad de videojuegos.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitch">
              <Twitch className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://discord.gg/mag-multiplexgamex-642021836451872809" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <DiscordIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
             <Link href="https://chat.whatsapp.com/I69dASTrftn2hO331ZbWFg" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsappIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GGamer Hub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
