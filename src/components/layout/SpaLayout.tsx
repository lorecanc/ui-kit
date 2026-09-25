import type React from "react"
import { PageContent } from "./PageContent"
import { SpaHeader, type SpaHeaderProps, type SpaNavItem, type SpaUserProfile } from "./SpaHeader"

export interface SpaLayoutProps {
    /** Navigation links to show in the header. */
    navItems?: SpaNavItem[]
    /** Current path to highlight in header navigation. */
    currentPath?: string
    /** Brand name displayed in the header. */
    brandName?: string
    /** Custom logo displayed in the header. */
    logo?: React.ReactNode
    /** Main page content, passed directly to PageContent. */
    children?: React.ReactNode
    /** User profile used by the header avatar. */
    userProfile?: SpaUserProfile
    /** Desktop grid column count for the page content. */
    cols?: 1 | 2 | 3 | 4
    /** Desktop content-sized row count for the page content. */
    rows?: 1 | 2 | 3 | 4
    /** Custom content in place of header navigation, useful for wizard progress. */
    headerCenterContent?: React.ReactNode
    /** Custom content replacing the header's default notification and avatar actions. */
    headerRightContent?: React.ReactNode
    /** Optional content below the page grid, useful for wizard actions. */
    footer?: React.ReactNode
    /** Additional props forwarded to SpaHeader. */
    headerProps?: Omit<SpaHeaderProps, "brandName" | "logo" | "navItems" | "currentPath" | "userProfile" | "centerContent" | "rightContent">
}

/** A top-navigation application shell with a bounded, optionally gridded page body. */
export function SpaLayout({
    navItems = [],
    currentPath = "/",
    brandName = "Design System",
    logo,
    children,
    userProfile,
    cols,
    rows,
    headerCenterContent,
    headerRightContent,
    footer,
    headerProps,
}: SpaLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <SpaHeader
                {...headerProps}
                navItems={navItems}
                currentPath={currentPath}
                brandName={brandName}
                logo={logo}
                userProfile={userProfile}
                centerContent={headerCenterContent}
                rightContent={headerRightContent}
            />
            <main className="flex w-full flex-1 flex-col">
                <PageContent rows={rows} cols={cols}>
                    {children}
                </PageContent>
                {footer}
            </main>
        </div>
    )
}
