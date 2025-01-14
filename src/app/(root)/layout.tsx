import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import Header from '@/components/Header';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session?.user) {
    redirect('/sign-in');
  }

  return (
    <SidebarProvider>
      <div className='flex w-full flex-col md:flex-row'>
        <AppSidebar />
        <div className='flex items-center justify-between p-2 md:hidden'>
          <SidebarTrigger size={'icon'} />
          <Header />
        </div>
        <main className='w-full max-w-3xl md:m-auto'>{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
