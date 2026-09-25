import type React from "react"
import { SidebarProvider, SidebarInset } from "../ui/sidebar"
import { AppSidebar, type NavItem } from "./AppSidebar"
import { GlobalHeader, type BreadcrumbData } from "./GlobalHeader"
import { PageContent } from "./PageContent"

export interface AppLayoutProps {
  navItems?: NavItem[];
  currentPath?: string;
  brandName?: string;
  breadcrumbs?: BreadcrumbData[];
  defaultSidebarOpen?: boolean;
  rows?: 1 | 2 | 3 | 4;
  cols?: 1 | 2 | 3 | 4;
  children?: React.ReactNode;
}

export function AppLayout({
  navItems = [],
  currentPath = "/",
  brandName = "Design System",
  breadcrumbs = [],
  defaultSidebarOpen = true,
  rows,
  cols,
  children,
}: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={defaultSidebarOpen}>
      <AppSidebar items={navItems} currentPath={currentPath} brandName={brandName} />
      <SidebarInset>
        <GlobalHeader breadcrumbs={breadcrumbs} />

        <PageContent rows={rows} cols={cols}>
          {children}
        </PageContent>
      </SidebarInset>
    </SidebarProvider>
  )
}
