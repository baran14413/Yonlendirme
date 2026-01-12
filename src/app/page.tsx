"use client";

import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://studio--bematch-f168d.us-central1.hosted.app/';
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-headline text-5xl font-bold text-primary md:text-7xl">
          Hoşgeldiniz
        </h1>
        <div className="mt-8 flex items-center space-x-3 text-accent">
          <Loader2 className="h-6 w-6 animate-spin" />
          <p className="font-body text-lg">Redirecting...</p>
        </div>
      </div>
    </main>
  );
}
