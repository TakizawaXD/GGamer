'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DiscordIcon } from '../icons/discord-icon';

export function UserNav() {
  return (
    <Button asChild className="font-semibold bg-[#5865F2] hover:bg-[#4752C4] text-white">
      <Link href="https://discord.gg/mag-multiplexgamex-642021836451872809" target="_blank" rel="noopener noreferrer">
        <DiscordIcon className="mr-2 h-5 w-5" />
        Unirse a Discord
      </Link>
    </Button>
  );
}
