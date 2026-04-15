import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

import {
  Database,
  LayoutDashboard,
  LineChart as LineChartIcon,
  Bell,
  Settings,
  Trophy,
  FileText,
  BarChart3,
  Image as ImageIcon,
  Calendar,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';

export const defaultNavItems: NavItem[] = [
  { title: "Overview", href: "/", icon: LayoutDashboard },
  { title: "Alerts", href: "/alerts", icon: Bell },
  { title: "Auctions", href: "/auctions", icon: Trophy },
  { title: "Analytics", href: "/analytics", icon: LineChartIcon },
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Database", href: "/database", icon: Database },
  { title: "Forms", href: "/forms", icon: FileText },
  { title: "Data", href: "/data", icon: BarChart3 },
  { title: "Content", href: "/content", icon: ImageIcon },
  { title: "Calendar", href: "/calendar", icon: Calendar },
  { title: "Messages", href: "/messages", icon: MessageSquare },
  { title: "Feedback", href: "/feedback", icon: AlertCircle },
];

export { defaultNavItems as genericNavItems };
