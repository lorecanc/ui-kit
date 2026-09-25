import type { LucideIcon } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
  SidebarTrigger,
  SidebarInput,
  useSidebar,
} from '../ui/sidebar';


export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface AppSidebarProps {
  items?: NavItem[];
  currentPath: string;
  brandName?: string;
}

function ClickableSidebarContent({ children }: { children: React.ReactNode }) {
  const { toggleSidebar, state } = useSidebar();

  return (
    <SidebarContent
      className={state === "collapsed" ? "cursor-pointer" : ""}
      onClick={(e) => {
        if (state !== "collapsed") return;
        const target = e.target as HTMLElement;
        const hasSidebarMenuButton = target.closest('[data-sidebar="menu-button"]');
        if (!hasSidebarMenuButton) {
          toggleSidebar();
        }
      }}
    >
      {children}
    </SidebarContent>
  );
}

function ClickableLogo({ children }: { children: React.ReactNode }) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={() => toggleSidebar()}
      className="relative flex aspect-square size-8 items-center justify-center text-sidebar-primary font-bold text-sm shrink-0 group-data-[collapsible=icon]:cursor-pointer"
    >
      {children}
    </button>
  );
}

export function AppSidebar({ items = [], currentPath, brandName = "Greppi" }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="relative">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <ClickableLogo>
                  <img
                    src="/Icon_Greppi.png"
                    alt="Greppi"
                    className="h-6 w-6 object-contain"
                  />
                </ClickableLogo>
                <div className="grid text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-sans font-bold">{brandName}</span>
                  <span className="truncate text-xs text-muted-foreground font-light tracking-wider uppercase">Labour Consulting</span>
                </div>
              </div>
              <div className="group-data-[collapsible=icon]:hidden shrink-0">
                <SidebarTrigger />
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="group-data-[collapsible=icon]:hidden px-2 py-2">
          <SidebarInput placeholder="Cerca..." />
        </div>
      </SidebarHeader>
      <div className="flex flex-1 flex-col overflow-hidden">
        <ClickableSidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const isActive = currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href));
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                        <a href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ClickableSidebarContent>
        <SidebarSeparator className="shrink-0 group-data-[collapsible=icon]:hidden" />
      </div>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="group-data-[collapsible=icon]:!p-0">
              <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground text-xs font-black shrink-0 group-data-[collapsible=icon]:mx-auto">
                LC
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">Lorenzo C.</span>
                <span className="truncate text-xs text-muted-foreground">Sviluppatore</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
