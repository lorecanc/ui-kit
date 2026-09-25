import * as React from "react"
import { cn } from "../../lib/utils"

export interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Maximum width of the content container */
    maxWidth?: "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
    /** Whether to apply consistent padding */
    padding?: boolean
    /** Desktop grid column count. Supplying rows or cols switches the content to grid layout. */
    cols?: 1 | 2 | 3 | 4
    /** Desktop explicit content-sized row count. */
    rows?: 1 | 2 | 3 | 4
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

const columnClasses = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
}

const rowClasses = {
    1: "lg:grid-rows-[repeat(1,_max-content)]",
    2: "lg:grid-rows-[repeat(2,_max-content)]",
    3: "lg:grid-rows-[repeat(3,_max-content)]",
    4: "lg:grid-rows-[repeat(4,_max-content)]",
}

const sectionSpanClasses = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    full: "col-span-full",
}

export interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
    /** Desktop column span. Keep numeric spans within the parent PageContent column count. */
    span?: 1 | 2 | 3 | 4 | "full"
}

/** A direct-child section for use inside a grid-configured PageContent. */
export function PageSection({ span, className, ...props }: PageSectionProps) {
    return (
        <section
            className={cn(span && sectionSpanClasses[span], className)}
            {...props}
        />
    )
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
    rows,
    cols,
    children,
    ...props
}: PageContentProps) {
    const gridLayout = rows !== undefined || cols !== undefined

    return (
        <div
            className={cn(
                gridLayout ? "grid grid-cols-1 gap-6 w-full mx-auto" : "flex flex-col gap-6 w-full mx-auto",
                gridLayout && columnClasses[cols ?? 1],
                gridLayout && rows !== undefined && rowClasses[rows],
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
