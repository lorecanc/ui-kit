import * as React from "react"
import { Bell } from "lucide-react"
import { cn } from "../../lib/utils"
import { SidebarTrigger } from "../ui/sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../ui/breadcrumb"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export interface BreadcrumbData {
    title: string;
    href?: string;
}

export interface GlobalHeaderProps extends React.HTMLAttributes<HTMLElement> {
    /** List of breadcrumbs to display */
    breadcrumbs?: BreadcrumbData[];
    /** Display name for the user profile */
    userName?: string;
    /** Initials to show if no avatar image is available */
    userInitials?: string;
    /** URL for the user avatar image */
    userAvatarUrl?: string;
    /** Callback function when the notification icon is clicked */
    onNotificationClick?: () => void;
    /** Whether to show an unread notification indicator */
    hasUnreadNotifications?: boolean;
    /** custom Link component for breadcrumbs (e.g. from react-router or next/link) */
    LinkComponent?: React.ElementType;
    /** Optional logo to display on the left of breadcrumbs */
    logo?: React.ReactNode;
    /** Optional content to replace the default notifications and avatar section */
    rightContent?: React.ReactNode;
}

/**
 * GlobalHeader component for the application top navigation.
 * Standardizes the display of breadcrumbs, notifications, and user profile.
 */
export function GlobalHeader({
    breadcrumbs = [],
    userName = "User",
    userInitials = "U",
    userAvatarUrl,
    onNotificationClick,
    hasUnreadNotifications = false,
    LinkComponent = "a" as any,
    logo,
    rightContent,
    className,
    ...props
}: GlobalHeaderProps) {
    return (
        <header 
            className={cn(
                "h-16 w-full flex items-center justify-between px-6 border-b border-border bg-background/50 backdrop-blur sticky top-0 z-50",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                {logo}
                {breadcrumbs.length > 0 && (
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbs.map((crumb, index) => {
                                const isLast = index === breadcrumbs.length - 1;
                                return (
                                    <React.Fragment key={index}>
                                        <BreadcrumbItem>
                                            {isLast || !crumb.href ? (
                                                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink asChild>
                                                    <LinkComponent href={crumb.href}>{crumb.title}</LinkComponent>
                                                </BreadcrumbLink>
                                            )}
                                        </BreadcrumbItem>
                                        {!isLast && <BreadcrumbSeparator />}
                                    </React.Fragment>
                                )
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                )}
            </div>

            <div className="flex items-center gap-4">
                {rightContent ? rightContent : (
                    <>
                        {/* Notifications */}
                        <Button variant="ghost" size="icon" className="relative" onClick={onNotificationClick}>
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            {hasUnreadNotifications && (
                                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
                            )}
                        </Button>

                        {/* User Avatar */}
                        <Avatar className="h-9 w-9 border border-border" title={userName}>
                            <AvatarImage src={userAvatarUrl} alt={userName} />
                            <AvatarFallback className="bg-primary/10 text-primary font-medium">{userInitials}</AvatarFallback>
                        </Avatar>
                    </>
                )}
            </div>
        </header>
    )
}
