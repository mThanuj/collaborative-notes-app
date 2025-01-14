import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session?.user) {
    redirect('/');
  }

  return (
    <main className='flex h-screen w-screen items-center justify-center'>
      {children}
    </main>
  );
};

export default Layout;
