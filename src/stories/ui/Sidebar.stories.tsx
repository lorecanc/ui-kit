import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInput,
  SidebarSeparator,
  SidebarInset,
  useSidebar,
} from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { HomeIcon, SettingsIcon, UserIcon, FolderIcon, PanelLeftIcon } from 'lucide-react';

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
      className="relative flex aspect-square size-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-sm shrink-0 group-data-[collapsible=icon]:cursor-pointer"
    >
      {children}
    </button>
  );
}

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

function SidebarLayout({ defaultOpen = true }: { defaultOpen?: boolean }) {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <Sidebar collapsible="icon">
          <SidebarHeader className="relative">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <ClickableLogo>
                      <span className="absolute opacity-100 group-data-[collapsible=icon]:group-hover:opacity-0 transition-opacity duration-200 ease-in-out">P</span>
                      <PanelLeftIcon className="absolute size-4 opacity-0 group-data-[collapsible=icon]:group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-primary-foreground" />
                    </ClickableLogo>
                    <div className="grid text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                      <span className="truncate font-sans text-xl">UI Kit</span>
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
          <ClickableSidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Generale</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Home">
                      <HomeIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Progetti">
                      <FolderIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Progetti</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Profilo">
                      <UserIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Profilo</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator className="group-data-[collapsible=icon]:hidden" />
            <SidebarGroup>
              <SidebarGroupLabel>Sistema</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Impostazioni">
                      <SettingsIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Impostazioni</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </ClickableSidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="group-data-[collapsible=icon]:!p-0">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted text-foreground text-xs font-medium shrink-0 group-data-[collapsible=icon]:mx-auto">
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
        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b px-4 shrink-0">
            <h1 className="font-semibold text-lg">Dashboard</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-6">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[200px] flex-1 rounded-xl bg-muted/50" />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export const Default: Story = {
  render: () => <SidebarLayout />,
};

export const Collapsed: Story = {
  render: () => <SidebarLayout defaultOpen={false} />,
};

export const RightSide: Story = {
  render: () => (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar collapsible="icon" side="right">
          <SidebarHeader className="relative">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <ClickableLogo>
                      <span className="absolute opacity-100 group-data-[collapsible=icon]:group-hover:opacity-0 transition-opacity duration-200 ease-in-out">P</span>
                      <PanelLeftIcon className="absolute size-4 opacity-0 group-data-[collapsible=icon]:group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-primary-foreground" />
                    </ClickableLogo>
                    <div className="grid text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                      <span className="truncate font-sans text-xl">UI Kit</span>
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
          <ClickableSidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Generale</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Home">
                      <HomeIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Progetti">
                      <FolderIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Progetti</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Profilo">
                      <UserIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Profilo</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator className="group-data-[collapsible=icon]:hidden" />
            <SidebarGroup>
              <SidebarGroupLabel>Sistema</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Impostazioni">
                      <SettingsIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Impostazioni</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </ClickableSidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="group-data-[collapsible=icon]:!p-0">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted text-foreground text-xs font-medium shrink-0 group-data-[collapsible=icon]:mx-auto">
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
        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b px-4">
            <h1 className="font-semibold text-lg">Contenuto</h1>
            <div className="ml-auto">
              <SidebarTrigger />
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-6">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[200px] flex-1 rounded-xl bg-muted/50" />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  ),
};

export const Floating: Story = {
  render: () => (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar collapsible="icon" variant="floating">
          <SidebarHeader className="relative">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <ClickableLogo>
                      <span className="absolute opacity-100 group-data-[collapsible=icon]:group-hover:opacity-0 transition-opacity duration-200 ease-in-out">P</span>
                      <PanelLeftIcon className="absolute size-4 opacity-0 group-data-[collapsible=icon]:group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-primary-foreground" />
                    </ClickableLogo>
                    <div className="grid text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                      <span className="truncate font-sans text-xl">UI Kit</span>
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
          <ClickableSidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Generale</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Home">
                      <HomeIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Progetti">
                      <FolderIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Progetti</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Profilo">
                      <UserIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Profilo</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator className="group-data-[collapsible=icon]:hidden" />
            <SidebarGroup>
              <SidebarGroupLabel>Sistema</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Impostazioni">
                      <SettingsIcon />
                      <span className="group-data-[collapsible=icon]:hidden">Impostazioni</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </ClickableSidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="group-data-[collapsible=icon]:!p-0">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted text-foreground text-xs font-medium shrink-0 group-data-[collapsible=icon]:mx-auto">
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
        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b px-4">
            <h1 className="font-semibold text-lg">Dashboard</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-6">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[200px] flex-1 rounded-xl bg-muted/50" />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  ),
};
