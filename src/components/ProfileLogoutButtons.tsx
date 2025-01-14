'use client';

import { UserCircle, LogOut } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const ProfileLogoutButtons = () => {
  return (
    <div className='w-full p-2'>
      <div className='hidden justify-between md:flex'>
        <Button>
          <Link href='/profile'>Profile</Link>
        </Button>
        <Button onClick={() => signOut({ redirectTo: '/sign-in' })}>
          Log out
        </Button>
      </div>
      <div className='flex space-x-2 md:hidden'>
        <Button>
          <Link href='/profile'>
            <UserCircle />
          </Link>
        </Button>
        <Button onClick={() => signOut({ redirectTo: '/sign-in' })}>
          <LogOut />
        </Button>
      </div>
    </div>
  );
};

export default ProfileLogoutButtons;
