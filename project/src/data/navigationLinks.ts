import { LayoutDashboard, History, Calendar, ClipboardList, BarChart3, TestTube, MessageCircle, Headset as HeadsetHelp, Settings } from 'lucide-react';

export interface NavLink {
  id: string;
  title: string;
  icon: React.ElementType;
  isActive?: boolean;
}

export const generalLinks: NavLink[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    id: 'history',
    title: 'History',
    icon: History,
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: Calendar,
  },
  {
    id: 'appointments',
    title: 'Appointments',
    icon: ClipboardList,
  },
  {
    id: 'statistics',
    title: 'Statistics',
    icon: BarChart3,
  },
  {
    id: 'tests',
    title: 'Tests',
    icon: TestTube,
  },
];

export const moreLinks: NavLink[] = [
  {
    id: 'chat',
    title: 'Chat',
    icon: MessageCircle,
  },
  {
    id: 'support',
    title: 'Support',
    icon: HeadsetHelp,
  },
  {
    id: 'setting',
    title: 'Setting',
    icon: Settings,
  },
];