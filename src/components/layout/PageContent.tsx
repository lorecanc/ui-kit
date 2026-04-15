import * as React from "react"
import { cn } from "../../lib/utils"

export interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Maximum width of the content container */
    maxWidth?: "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
    /** Whether to apply consistent padding */
    padding?: boolean
}

const maxWidthClasses = {
    default: "max-w-[1600px]",
    sm: "max-w-[1200px]",
    md: "max-w-[1400px]",
    lg: "max-w-[1600px]",
    xl: "max-w-[1800px]",
    "2xl": "max-w-[2000px]",
    full: "max-w-full",
}

/**
 * PageContent - A consistent content container for page layouts.
 * 
 * Provides consistent padding and max-width for main content areas
 * within the AppLayout. Uses the working pattern: `flex flex-col gap-6 p-4 lg:p-6 w-full mx-auto`.
 * 
 * **Installation**
 * ```bash
 * npx shadcn@latest add page-content
 * ```
 * 
 * **Usage**
 * ```tsx
 * <PageContent>
 *   <h1>Page Title</h1>
 *   <Card>Content</Card>
 * </PageContent>
 * ```
 */
function PageContent({
    className,
    maxWidth = "default",
    padding = true,
    children,
    ...props
}: PageContentProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-6 w-full mx-auto",
                padding && "p-4 lg:p-6",
                maxWidthClasses[maxWidth],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export { PageContent, maxWidthClasses }
