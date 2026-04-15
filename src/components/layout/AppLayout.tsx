import * as React from "react"
import { cn } from "../../lib/utils"
import {
    Sidebar,
    SidebarProvider,
    SidebarInset,
} from "../ui/sidebar"

export interface AppLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
    children?: React.ReactNode;
    defaultSidebarOpen?: boolean;
}

export function AppLayout({ sidebar, header, children, defaultSidebarOpen = true, className, ...props }: AppLayoutProps) {
    return (
        <SidebarProvider defaultOpen={defaultSidebarOpen}>
            <div className={cn("flex h-screen w-full overflow-hidden bg-background text-foreground", className)} {...props}>
                <Sidebar variant="floating" collapsible="icon">
                    {sidebar}
                </Sidebar>
                <SidebarInset className="flex flex-col min-w-0 h-full overflow-hidden relative">
                    {header}
                    <div className="flex-1 overflow-y-auto">
                        {children}
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
