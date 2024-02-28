'use client';
import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './ui/mode-toggle';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {};

function Navbar({}: Props) {
  const router = useRouter();
  return (
    <header className="bg-primary-foreground rounded-md shadow-sm border  mt-10 z-50 h-16 flex items-center justify-between px-10 w-[95%]">
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="space-x-5 flex items-center">
        <Button variant={'link'} onClick={() => router.push('/data-set')}>
          Dataset
        </Button>

        <ModeToggle />
        <Button onClick={() => router.push('/')}>Logout</Button>
      </div>
    </header>
  );
}

export default Navbar;
