import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"

import { BudgetCalculatorPage } from "./BudgetCalculatorPage"

afterEach(cleanup)

const channels = [
  { label: "Television", min: 10 },
  { label: "Digital Paid", min: 5 },
  { label: "Social Media", min: 5 },
  { label: "Print & OOH", min: 0 },
  { label: "Radio & Audio", min: 0 },
] as const

function allocationFor(label: (typeof channels)[number]["label"]) {
  const channelIndex = channels.findIndex((channel) => channel.label === label)
  return Number(screen.getAllByRole("slider")[channelIndex].getAttribute("aria-valuenow"))
}

function allocations() {
  return screen.getAllByRole("slider").map((slider) => Number(slider.getAttribute("aria-valuenow")))
}

function expectBalanced() {
  expect(allocations().reduce((total, value) => total + value, 0)).toBe(100)
  expect(screen.getByText("100% / 100%")).toBeTruthy()
}

describe("BudgetCalculatorPage channel allocations", () => {
  it.each([
    { label: "Television", min: 10, max: 90 },
    { label: "Digital Paid", min: 5, max: 85 },
    { label: "Social Media", min: 5, max: 85 },
    { label: "Print & OOH", min: 0, max: 80 },
    { label: "Radio & Audio", min: 0, max: 80 },
  ])("keeps the 100% total when $label reaches its limits", async ({ label, min, max }) => {
    const user = userEvent.setup()
    render(<BudgetCalculatorPage />)

    const slider = screen.getAllByRole("slider")[channels.findIndex((channel) => channel.label === label)]
    slider.focus()
    await user.keyboard("{End}")

    expect(allocationFor(label)).toBe(max)
    expectBalanced()

    await user.keyboard("{Home}")

    expect(allocationFor(label)).toBe(min)
    expectBalanced()
    channels.forEach(({ label: channelLabel, min: channelMin }) => {
      expect(allocationFor(channelLabel)).toBeGreaterThanOrEqual(channelMin)
    })
  })

  it("stays exactly balanced when reducing a channel from its maximum", async () => {
    const user = userEvent.setup()
    render(<BudgetCalculatorPage />)

    const slider = screen.getAllByRole("slider")[0]
    slider.focus()
    await user.keyboard("{End}")
    expect(allocationFor("Television")).toBe(90)
    expectBalanced()

    await user.keyboard("{ArrowLeft}")

    expect(allocationFor("Television")).toBe(89)
    expectBalanced()
  })

  it("remains balanced through rounding-prone intermediate slider changes", async () => {
    const user = userEvent.setup()
    render(<BudgetCalculatorPage />)

    const changes: Array<[string, number]> = [
      ["Television", 43],
      ["Digital Paid", 37],
      ["Social Media", 28],
      ["Print & OOH", 13],
      ["Radio & Audio", 17],
      ["Digital Paid", 19],
      ["Television", 26],
    ]

    for (const [label, target] of changes) {
      const slider = screen.getAllByRole("slider")[channels.findIndex((channel) => channel.label === label)]
      slider.focus()
      const current = allocationFor(label as (typeof channels)[number]["label"])
      const direction = target > current ? "{ArrowRight}" : "{ArrowLeft}"
      for (let step = 0; step < Math.abs(target - current); step += 1) {
        await user.keyboard(direction)
        expectBalanced()
      }
    }

    channels.forEach(({ label, min }) => {
      expect(allocationFor(label)).toBeGreaterThanOrEqual(min)
    })
  })

  it.each([
    { label: "Brand Awareness", values: [45, 25, 20, 7, 3] },
    { label: "Performance", values: [10, 50, 35, 0, 5] },
    { label: "Full Funnel", values: [30, 30, 25, 10, 5] },
  ])("applies the $label preset as an exact 100% allocation", async ({ label, values }) => {
    const user = userEvent.setup()
    render(<BudgetCalculatorPage />)

    await user.click(screen.getByRole("button", { name: label }))

    expect(allocations()).toEqual(values)
    expectBalanced()
  })
})
