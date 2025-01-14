import { signIn } from '@/auth';
import { providers } from '@/lib/constants';

export default function SignInProviders() {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {providers.map(({ name, icon: Icon }) => (
        <form
          key={name}
          action={async () => {
            'use server';
            await signIn(name);
          }}
        >
          <button type='submit'>
            <p className='hidden text-center text-lg sm:block'>
              Sign In with <span className='capitalize'>{name}</span>
            </p>
            <div className='sm:hidden'>
              <Icon size={24} />
            </div>
          </button>
        </form>
      ))}
    </div>
  );
}
