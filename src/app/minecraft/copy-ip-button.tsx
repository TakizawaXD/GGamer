'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function CopyIpButton({ ip }: { ip: string }) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
    setHasCopied(true);
    toast({
      title: '¡Copiado!',
      description: 'La IP del servidor se ha copiado a tu portapapeles.',
    });
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <Button
      size="lg"
      className="bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-green-800 shadow-lg"
      onClick={handleCopy}
    >
      {hasCopied ? <Check className="mr-2" /> : <Copy className="mr-2" />}
      {hasCopied ? 'IP Copiada' : 'Copiar IP'}
    </Button>
  );
}
