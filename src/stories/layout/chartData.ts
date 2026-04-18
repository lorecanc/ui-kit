import type { ChartConfig } from '../../components/ui/chart';

export const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 40 },
  { month: "February", desktop: 305, mobile: 200, tablet: 90 },
  { month: "March", desktop: 237, mobile: 120, tablet: 110 },
  { month: "April", desktop: 73, mobile: 190, tablet: 60 },
  { month: "May", desktop: 209, mobile: 130, tablet: 180 },
  { month: "June", desktop: 214, mobile: 140, tablet: 130 },
];

export const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
  tablet: { label: "Tablet", color: "var(--chart-3)" },
} satisfies ChartConfig;

export const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

export const pieChartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
} satisfies ChartConfig;

export const tableData = [
  { name: "Project Alpha", category: "Technology", metA: "2,300", metB: "450", status: "Active" },
  { name: "Global Campaign", category: "Marketing", metA: "1,150", metB: "320", status: "Completed" },
  { name: "Financial Q3", category: "Finance", metA: "5,400", metB: "890", status: "Pending" },
  { name: "Project Beta", category: "Advertising", metA: "890", metB: "210", status: "Active" },
];
