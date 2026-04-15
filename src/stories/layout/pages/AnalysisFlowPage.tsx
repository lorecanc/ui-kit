import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../../../components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts";
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { PageLayout } from '../PageLayout';

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 40 },
  { month: "February", desktop: 305, mobile: 200, tablet: 90 },
  { month: "March", desktop: 237, mobile: 120, tablet: 110 },
  { month: "April", desktop: 73, mobile: 190, tablet: 60 },
  { month: "May", desktop: 209, mobile: 130, tablet: 180 },
  { month: "June", desktop: 214, mobile: 140, tablet: 130 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
  tablet: { label: "Tablet", color: "var(--chart-3)" },
} satisfies ChartConfig;

export function AnalysisFlowPage() {
  return (
    <PageLayout
      title="Analysis Dashboard"
      description="Deep dive analytics and insights."
      actions={<Button variant="outline" className="h-9"><CalendarIcon className="mr-2 h-4 w-4" /> Date Range Picker</Button>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="py-4 pb-2">
            <CardTitle className="text-sm font-normal text-muted-foreground">KPI Metric 1</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-condensed tracking-tight font-semibold">12,4%</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1 font-medium"><TrendingUp className="h-3 w-3" /> +2.1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4 pb-2">
            <CardTitle className="text-sm font-normal text-muted-foreground">KPI Metric 2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-condensed tracking-tight font-semibold">4,1%</div>
            <p className="text-xs text-destructive mt-1 flex items-center gap-1 font-medium"><TrendingDown className="h-3 w-3" /> -0.5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4 pb-2">
            <CardTitle className="text-sm font-normal text-muted-foreground">KPI Metric 3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-condensed tracking-tight font-semibold text-destructive">8,9%</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1 font-medium"><TrendingUp className="h-3 w-3" /> Lagging</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4 pb-2">
            <CardTitle className="text-sm font-normal text-muted-foreground">KPI Metric 4</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-condensed tracking-tight font-semibold text-primary">+15,0%</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1 font-medium"><TrendingUp className="h-3 w-3" /> High Priority</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Full Width Chart Area</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <BarChart data={chartData} margin={{ left: 12, right: 12, top: 20 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(v) => v.slice(0, 3)} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              <Bar dataKey="tablet" fill="var(--color-tablet)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </PageLayout>
  );
}