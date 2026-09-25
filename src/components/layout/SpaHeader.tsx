import * as React from "react"
import { Bell, type LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

export interface SpaNavItem {
    title: string
    href: string
    icon?: LucideIcon
}

export interface SpaUserProfile {
    name: string
    initials: string
    avatarUrl?: string
    role?: string
}

export interface SpaHeaderProps extends React.HTMLAttributes<HTMLElement> {
    /** Application or brand name shown beside the optional logo. */
    brandName?: string
    /** Optional logo displayed at the start of the header. */
    logo?: React.ReactNode
    /** Horizontal navigation links. */
    navItems?: SpaNavItem[]
    /** Custom content in place of the navigation links. */
    centerContent?: React.ReactNode
    /** User details used for the avatar. */
    userProfile?: SpaUserProfile
    /** Called when the notification button is activated. */
    onNotificationClick?: () => void
    /** Whether to show an unread indicator on notifications. */
    hasUnreadNotifications?: boolean
    /** Custom link component that accepts an href prop. */
    LinkComponent?: React.ElementType
    /** Content replacing the default notifications and avatar. */
    rightContent?: React.ReactNode
    /** Current path used to highlight the active navigation link. */
    currentPath?: string
}

/** A responsive top navigation for single-page applications. */
export function SpaHeader({
    brandName = "Design System",
    logo,
    navItems = [],
    centerContent,
    userProfile,
    onNotificationClick,
    hasUnreadNotifications = false,
    LinkComponent = "a",
    rightContent,
    currentPath = "/",
    className,
    ...props
}: SpaHeaderProps) {
    const userName = userProfile?.name || "User"
    const userInitials = userProfile?.initials || userName.slice(0, 2).toUpperCase()

    return (
        <header
            className={cn(
                "sticky top-0 z-50 flex min-h-16 w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border bg-background/50 px-4 py-2 backdrop-blur sm:h-16 sm:flex-nowrap sm:px-6 sm:py-0",
                className
            )}
            {...props}
        >
            <div className="flex shrink-0 items-center gap-2">
                {logo}
                <span className={cn("text-lg font-medium", logo && "hidden sm:inline-block")}>{brandName}</span>
            </div>

            <div className="order-3 flex min-w-0 basis-full justify-center sm:order-none sm:basis-auto sm:flex-1 sm:px-4">
                {centerContent ?? (navItems.length > 0 && (
                    <nav aria-label="Main navigation" className="w-full max-w-full sm:w-auto">
                        <div className="flex flex-wrap items-center justify-center gap-1 sm:w-max sm:flex-nowrap">
                            {navItems.map((item) => {
                                const isActive = currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href))
                                const Icon = item.icon

                                return (
                                    <Button
                                        key={item.href}
                                        variant={isActive ? "secondary" : "ghost"}
                                        size="sm"
                                        asChild
                                    >
                                        <LinkComponent href={item.href} aria-current={isActive ? "page" : undefined}>
                                            {Icon && <Icon className="size-4" />}
                                            {item.title}
                                        </LinkComponent>
                                    </Button>
                                )
                            })}
                        </div>
                    </nav>
                ))}
            </div>

            <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-4">
                {rightContent ?? (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                            onClick={onNotificationClick}
                            aria-label="Notifications"
                        >
                            <Bell className="size-5 text-muted-foreground" />
                            {hasUnreadNotifications && (
                                <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
                            )}
                        </Button>
                        <Avatar className="size-9 border border-border" title={userName}>
                            <AvatarImage src={userProfile?.avatarUrl} alt={userName} />
                            <AvatarFallback className="bg-primary/10 font-medium text-primary">
                                {userInitials}
                            </AvatarFallback>
                        </Avatar>
                    </>
                )}
            </div>
        </header>
    )
}
