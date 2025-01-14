import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { sidebarItems } from '@/lib/constants';
import Link from 'next/link';
import ProfileLogoutButtons from './ProfileLogoutButtons';

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className='mb-4'>
        <Link href='/'>
          <h1 className='text-3xl font-semibold'>CollabNotes</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className='space-y-4'>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span className='text-lg'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='flex justify-around gap-2'>
          <ProfileLogoutButtons />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
