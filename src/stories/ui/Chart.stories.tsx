import type { Meta, StoryObj } from "@storybook/react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  XAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const meta: Meta<typeof ChartContainer> = {
  title: "UI/Chart",
  component: ChartContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-6 bg-base-white rounded-xl shadow-sm border border-border">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 40 },
  { month: "February", desktop: 305, mobile: 200, tablet: 90 },
  { month: "March", desktop: 237, mobile: 120, tablet: 110 },
  { month: "April", desktop: 73, mobile: 190, tablet: 60 },
  { month: "May", desktop: 209, mobile: 130, tablet: 180 },
  { month: "June", desktop: 214, mobile: 140, tablet: 130 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  tablet: {
    label: "Tablet",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const pieChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export const AreaChartExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-center font-display text-xl text-foreground">Havas Area Chart</div>
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <AreaChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  ),
};

export const BarChartExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-center font-display text-xl text-foreground">Havas Bar Chart</div>
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          <Bar dataKey="tablet" fill="var(--color-tablet)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
};

export const LineChartExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-center font-display text-xl text-foreground">Havas Line Chart</div>
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="desktop"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="mobile"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  ),
};

export const PieChartExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-center font-display text-xl text-foreground">Havas Pie Chart</div>
      <ChartContainer
        config={pieChartConfig}
        className="min-h-[300px] w-full"
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie 
            data={pieChartData} 
            dataKey="visitors" 
            nameKey="browser" 
            innerRadius={60}
            strokeWidth={2}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </PieChart>
      </ChartContainer>
    </div>
  ),
};

export const RadarChartExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-center font-display text-xl text-foreground">Havas Radar Chart</div>
      <ChartContainer
        config={chartConfig}
        className="min-h-[300px] w-full"
      >
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={0.6}
            stroke="var(--color-desktop)"
          />
          <Radar
            dataKey="mobile"
            fill="var(--color-mobile)"
            fillOpacity={0.6}
            stroke="var(--color-mobile)"
          />
          <ChartLegend content={<ChartLegendContent />} />
        </RadarChart>
      </ChartContainer>
    </div>
  ),
};

export const RadialChartExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-center font-display text-xl text-foreground">Havas Radial Chart</div>
      <ChartContainer
        config={pieChartConfig}
        className="min-h-[300px] w-full"
      >
        <RadialBarChart 
          data={pieChartData} 
          innerRadius={40} 
          outerRadius={110}
        >
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="browser" />} />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
          <ChartLegend content={<ChartLegendContent nameKey="browser" />} className="flex-wrap gap-2" />
        </RadialBarChart>
      </ChartContainer>
    </div>
  ),
};
