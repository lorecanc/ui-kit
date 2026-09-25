import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { PageContent, PageSection } from "./PageContent"
import { SpaLayout } from "./SpaLayout"
import { DashboardGridPage } from "../../stories/layout/pages/DashboardGridPage"
import { TelemetryDashboardPage } from "../../stories/layout/pages/TelemetryDashboardPage"
import { CloudDeployWizard } from "../../stories/layout/pages/CloudDeployWizard"

describe("PageContent", () => {
    it("keeps the default content as a padded flex column", () => {
        const markup = renderToStaticMarkup(createElement(PageContent, null, "Content"))
        const className = markup.match(/class="([^"]+)"/)?.[1] ?? ""

        expect(className).toContain("flex flex-col gap-6 w-full mx-auto")
        expect(className).toContain("p-4 lg:p-6")
        expect(className).toContain("max-w-[1600px]")
        expect(className).not.toContain("grid-cols-")
    })

    it.each([1, 2, 3, 4] as const)("supports %i grid columns and rows", (count) => {
        const markup = renderToStaticMarkup(
            createElement(PageContent, { cols: count, rows: count }, "Grid content"),
        )
        const className = markup.match(/class="([^"]+)"/)?.[1] ?? ""

        expect(className).toContain("grid grid-cols-1 gap-6 w-full mx-auto")
        expect(className).toContain(`lg:grid-cols-${count}`)
        expect(className).toContain(`lg:grid-rows-[repeat(${count},_max-content)]`)
    })

    it.each([1, 2, 3, 4, "full"] as const)("applies the %s section span", (span) => {
        const markup = renderToStaticMarkup(
            createElement(PageSection, { span }, "Section content"),
        )

        expect(markup).toContain(span === "full" ? "col-span-full" : `lg:col-span-${span}`)
    })
})

describe("SpaLayout", () => {
    it("marks the active navigation link in the default header", () => {
        const markup = renderToStaticMarkup(
            createElement(
                SpaLayout,
                {
                    brandName: "Studio",
                    currentPath: "/reports",
                    navItems: [{ title: "Reports", href: "/reports" }],
                },
            ),
        )

        expect(markup).toContain("Studio")
        expect(markup).toContain('aria-current="page"')
        expect(markup).toContain("Reports")
    })

    it("replaces navigation with custom header content and composes page content and footer", () => {
        const markup = renderToStaticMarkup(
            createElement(
                SpaLayout,
                {
                    brandName: "Studio",
                    currentPath: "/reports",
                    navItems: [{ title: "Reports", href: "/reports" }],
                    headerCenterContent: createElement("span", null, "Wizard progress"),
                    headerRightContent: createElement("button", null, "Save"),
                    footer: createElement("div", null, "Page actions"),
                    cols: 2,
                    rows: 2,
                },
                createElement(PageSection, { span: 2 }, "Report content"),
            ),
        )

        expect(markup).toContain("Studio")
        expect(markup).not.toContain('aria-current="page"')
        expect(markup).toContain("Wizard progress")
        expect(markup).toContain("Save")
        expect(markup).toContain("lg:grid-cols-2")
        expect(markup).toContain("lg:grid-rows-[repeat(2,_max-content)]")
        expect(markup).toContain("lg:col-span-2")
        expect(markup).toContain("Report content")
        expect(markup).toContain("Page actions")
    })

    it("keeps adjacent telemetry metric sections as grid siblings", () => {
        const markup = renderToStaticMarkup(
            createElement(
                SpaLayout,
                { brandName: "Operations", cols: 2, rows: 2 },
                createElement(TelemetryDashboardPage),
            ),
        )

        expect(markup).toContain("lg:grid-cols-2")
        expect(markup).toMatch(
            /<section class="lg:col-span-1 grid grid-cols-1 gap-4 sm:grid-cols-2">[\s\S]*?Healthy Nodes[\s\S]*?<\/section><section class="lg:col-span-1 grid grid-cols-1 gap-4 sm:grid-cols-2">[\s\S]*?Avg CPU Load/,
        )
    })
})

describe("DashboardGridPage", () => {
    it("renders the primary chart and capabilities as adjacent 2-column and 1-column sections", () => {
        const markup = renderToStaticMarkup(
            createElement(
                PageContent,
                { cols: 3 },
                createElement(DashboardGridPage),
            ),
        )

        expect(markup).toMatch(
            /<section class="lg:col-span-2">[\s\S]*?Primary Trend Chart[\s\S]*?<\/section><section class="lg:col-span-1">[\s\S]*?Capabilities/,
        )
    })
})

describe("CloudDeployWizard", () => {
    it("shows only the active step's form content initially", () => {
        const markup = renderToStaticMarkup(createElement(CloudDeployWizard))

        expect(markup).toContain("Environment Setup")
        expect(markup).not.toContain("Initial Node Count")
        expect(markup).not.toContain("Deployment Strategy")
        expect(markup).toContain("Step 1 of 3")
    })
})
