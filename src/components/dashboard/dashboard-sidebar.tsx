'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import packageJson from '../../../package.json';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/context';
import {
  Home,
  BarChart3,
  Package,
  Tag,
  Box,
  Truck,
  Store,
  LineChart,
  Users,
  Settings,
  History,
  WalletCards,
  CalendarCheck,
} from 'lucide-react';

interface DashboardSidebarProps {
  isCollapsed: boolean;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isCollapsed: boolean;
  isActive: boolean;
}

const SidebarItem = ({
  icon,
  label,
  href,
  isCollapsed,
  isActive,
}: SidebarItemProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} passHref>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'w-full justify-start h-auto py-2.5 px-3 my-1 rounded-lg',
                isActive
                  ? 'bg-primary/10 text-primary hover:bg-primary/20'
                  : 'hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {icon}
                </div>
                {!isCollapsed && <span className="font-medium">{label}</span>}
              </div>
            </Button>
          </Link>
        </TooltipTrigger>
        {isCollapsed && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

interface SidebarGroupProps {
  title: string;
  children: React.ReactNode;
  isCollapsed: boolean;
}

const SidebarGroup = ({ title, children, isCollapsed }: SidebarGroupProps) => {
  return (
    <div className="mb-6">
      {!isCollapsed && (
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
          {title}
        </div>
      )}
      <div className="space-y-1 px-1">{children}</div>
    </div>
  );
};

export function DashboardSidebar({ isCollapsed }: DashboardSidebarProps) {
  const pathname = usePathname();
  const {} = useAuth();

  const navigation = [
    {
      title: 'Overview',
      items: [
        {
          icon: <Home size={20} />,
          label: 'Dashboard',
          href: '/dashboard',
        },
        {
          icon: <BarChart3 size={20} />,
          label: 'Analytics',
          href: '/dashboard/analytics',
        },
      ],
    },
    {
      title: 'Bookings',
      items: [
        {
          icon: <CalendarCheck size={20} />,
          label: 'Field Bookings',
          href: '/dashboard/bookings',
        },
        {
          icon: <Store size={20} />,
          label: 'Fields',
          href: '/dashboard/fields',
        },
        {
          icon: <History size={20} />,
          label: 'Booking History',
          href: '/dashboard/bookings/history',
        },
      ],
    },
    {
      title: 'Teams & Users',
      items: [
        {
          icon: <Users size={20} />,
          label: 'Teams/Clubs',
          href: '/dashboard/teams',
        },
        {
          icon: <Users size={20} />,
          label: 'Customers',
          href: '/dashboard/customers',
        },
        {
          icon: <Settings size={20} />,
          label: 'User Management',
          href: '/dashboard/users',
        },
      ],
    },
    {
      title: 'Financial',
      items: [
        {
          icon: <LineChart size={20} />,
          label: 'Accounting',
          href: '/dashboard/accounting',
        },
        {
          icon: <WalletCards size={20} />,
          label: 'Expenses',
          href: '/dashboard/expenses',
        },
        {
          icon: <Users size={20} />,
          label: 'Payroll',
          href: '/dashboard/payroll',
        },
      ],
    },
    {
      title: 'Operations',
      items: [
        {
          icon: <Package size={20} />,
          label: 'Inventory',
          href: '/dashboard/inventory',
        },
        {
          icon: <Tag size={20} />,
          label: 'Categories',
          href: '/dashboard/inventory/categories',
        },
        {
          icon: <Box size={20} />,
          label: 'Assets',
          href: '/dashboard/assets',
        },
        {
          icon: <Truck size={20} />,
          label: 'Asset Repairs',
          href: '/dashboard/assets/repairs',
        },
      ],
    },
  ];
  return (
    <div
      className={cn(
        'border-r border-border bg-background flex flex-col h-full transition-all duration-300 relative z-20 shadow-sm',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      {' '}
      {/* Logo and Toggle Button */}
      <div className="h-16 border-b border-border flex items-center justify-between p-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary text-primary-foreground">
            <Image
              src="/logo.png"
              alt="MSOCC Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          {!isCollapsed && (
            <div>
              <div className="font-bold text-lg">MSOCC</div>
              <div className="text-xs text-muted-foreground">
                Mini Soccer Dashboard
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Navigation Items */}
      <ScrollArea className="flex-grow">
        <div className={cn('px-3 py-4', isCollapsed ? 'px-2' : '')}>
          {navigation.map((group, idx) => (
            <SidebarGroup
              key={idx}
              title={group.title}
              isCollapsed={isCollapsed}
            >
              {group.items.map((item, itemIdx) => (
                <SidebarItem
                  key={itemIdx}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isCollapsed={isCollapsed}
                  isActive={pathname === item.href}
                />
              ))}
            </SidebarGroup>
          ))}
        </div>
      </ScrollArea>{' '}
      {/* Sidebar Footer */}
      <div
        className={cn(
          'border-t border-border p-4 text-xs text-muted-foreground',
          isCollapsed && 'hidden sm:block text-center'
        )}
      >
        {!isCollapsed ? (
          <div>
            <div className="font-medium mb-1">MSOCC © 2025</div>
            <div>Version {packageJson.version}</div>
          </div>
        ) : (
          <div className="py-2 text-xs">v{packageJson.version}</div>
        )}
      </div>
    </div>
  );
}
