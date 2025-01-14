import { Home, Inbox, Calendar, Search } from 'lucide-react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export const sidebarItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'My Notes',
    url: '/notes',
    icon: Inbox,
  },
  {
    title: 'Shared with me',
    url: '/shared',
    icon: Calendar,
  },
  {
    title: 'Favourites',
    url: '/favourites',
    icon: Search,
  },
];

export const providers = [
  {
    name: 'google',
    icon: FaGoogle,
  },
  {
    name: 'github',
    icon: FaGithub,
  },
];
