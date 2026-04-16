import * as React from "react"
import { SidebarProvider, SidebarInset } from "../ui/sidebar"
import { AppSidebar, type NavItem } from "./AppSidebar"
import { GlobalHeader, type BreadcrumbData } from "./GlobalHeader"
import { PageContent } from "./PageContent"

export interface AppLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  navItems?: NavItem[];
  currentPath?: string;
  brandName?: string;
  breadcrumbs?: BreadcrumbData[];
  defaultSidebarOpen?: boolean;
}

export function AppLayout({
  navItems = [],
  currentPath = "/",
  brandName = "Design System",
  breadcrumbs = [],
  defaultSidebarOpen = true,
  className,
  children,
  ...props
}: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={defaultSidebarOpen}>
      <AppSidebar items={navItems} currentPath={currentPath} brandName={brandName} />
      <SidebarInset>
        <GlobalHeader breadcrumbs={breadcrumbs} />

        <PageContent>
          {children}
        </PageContent>
      </SidebarInset>
    </SidebarProvider>
  )
}
