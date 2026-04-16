import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../../components/ui/card';
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
  Line,
  LineChart,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp, TrendingDown, Filter, Download, Plus, Zap, ArrowRight, Target } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 40 },
  { month: "February", desktop: 305, mobile: 200, tablet: 90 },
  { month: "March", desktop: 237, mobile: 120, tablet: 110 },
  { month: "April", desktop: 73, mobile: 190, tablet: 60 },
  { month: "May", desktop: 209, mobile: 130, tablet: 180 },
  { month: "June", desktop: 214, mobile: 140, tablet: 130 },
];

const conversionData = [
  { step: "Landing Page", visitors: 12400 },
  { step: "Pricing Page", visitors: 8400 },
  { step: "Sign Up", visitors: 3200 },
  { step: "Subscription", visitors: 1100 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
  tablet: { label: "Tablet", color: "var(--chart-3)" },
  visitors: { label: "Visitors", color: "var(--chart-4)" },
} satisfies ChartConfig;

export function AnalysisFlowPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Analysis Flow</h1>
          <p className="text-sm text-muted-foreground mt-1">Deep dive into performance metrics, user flows, and key conversion funnels.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
          <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Export</Button>
          <Button size="sm"><Plus className="mr-2 h-4 w-4" /> Create View</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area spanning 2 columns */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Engagement Overview</CardTitle>
                <CardDescription>Multi-device engagement across all channels.</CardDescription>
              </div>
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">Real-time <span className="ml-1.5 flex h-2 w-2 rounded-full bg-primary animate-pulse"></span></Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ChartContainer config={chartConfig} className="h-full min-h-[350px] w-full">
              <BarChart data={chartData} margin={{ left: 12, right: 12, top: 20 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(v) => v.slice(0, 3)} />
                <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="tablet" fill="var(--color-tablet)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Actionable Insights Panel */}
        <Card className="flex flex-col border-primary/10 shadow-sm bg-gradient-to-br from-background to-muted/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              AI Insights
            </CardTitle>
            <CardDescription>Automated anomaly detection and suggestions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <div className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <h4 className="text-sm font-semibold text-foreground">Mobile Traffic Surge</h4>
                <Badge variant="secondary" className="text-[10px]">High Priority</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-3">Unexpected 140% spike in mobile traffic from paid marketing campaigns in the final week of June.</p>
              <Button variant="link" size="sm" className="px-0 h-auto mt-2 text-primary">Investigate source <ArrowRight className="ml-1 h-3 w-3" /></Button>
            </div>

            <div className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <h4 className="text-sm font-semibold text-foreground">Conversion Drop</h4>
                <Badge variant="outline" className="text-[10px] text-destructive border-destructive/20">Warning</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-3">The user drop-off rate between 'Sign Up' and 'Subscription' increased by 12% among tablet users.</p>
              <Button variant="link" size="sm" className="px-0 h-auto mt-2 text-primary">View funnel <ArrowRight className="ml-1 h-3 w-3" /></Button>
            </div>

            <div className="rounded-lg border bg-primary text-primary-foreground p-4 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-semibold">Recommendation</h4>
                <Target className="h-4 w-4 opacity-80" />
              </div>
              <p className="text-xs opacity-90 leading-relaxed">Allocate more budget to mobile ad sets next quarter to capture the growing audience segment.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trend Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Growth Trajectory</CardTitle>
            <CardDescription>Overall performance over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
              <LineChart data={chartData} margin={{ left: 12, right: 12, top: 20 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(v) => v.slice(0, 3)} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Funnel Chart (simulated with BarChart with horizontal layout) */}
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>User progression through key lifecycle stages.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
              <BarChart data={conversionData} layout="vertical" margin={{ left: 0, right: 12, top: 0, bottom: 0 }}>
                <CartesianGrid horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="step" type="category" axisLine={false} tickLine={false} width={100} />
                <ChartTooltip cursor={{ fill: 'var(--muted)' }} content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey="visitors" fill="var(--color-visitors)" radius={[0, 4, 4, 0]} barSize={32} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}