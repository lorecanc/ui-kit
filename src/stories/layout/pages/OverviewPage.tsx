import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../../components/ui/card';
import { chartData, chartConfig, pieChartData, pieChartConfig } from '../chartData';
import { Button } from '../../../components/ui/button';
import { Download, Users, Activity, Clock, FileBarChart, TrendingUp, TrendingDown } from 'lucide-react';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";
import {
  Area,
  AreaChart,
  Pie,
  PieChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts";

export function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Overview</h1>
          <p className="text-sm text-muted-foreground mt-1">A comprehensive daily summary of your platform's performance and audience insights.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Configure</Button>
          <Button size="sm"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Users", value: "24,591", trend: "+14.5%", up: true, icon: Users },
          { title: "Active Sessions", value: "1,234", trend: "+5.1%", up: true, icon: Activity },
          { title: "Conversion Rate", value: "3.2%", trend: "-0.4%", up: false, icon: FileBarChart },
          { title: "Avg. Session", value: "4m 12s", trend: "+1.2%", up: true, icon: Clock },
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <p className={`text-xs mt-1 flex items-center gap-1 font-medium ${kpi.up ? 'text-green-600' : 'text-destructive'}`}>
                  {kpi.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {kpi.trend} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Audience Trend</CardTitle>
            <CardDescription>Daily desktop visitors over time.</CardDescription>
          </CardHeader>
          <CardContent className="pb-4">
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
              <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(v) => v.slice(0, 3)} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area dataKey="desktop" type="natural" fill="var(--color-desktop)" fillOpacity={0.4} stroke="var(--color-desktop)" stackId="a" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Browser Usage</CardTitle>
            <CardDescription>Desktop browser distribution.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-4">
            <ChartContainer config={pieChartConfig} className="min-h-[200px] w-full">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={pieChartData} dataKey="visitors" nameKey="browser" innerRadius={40} strokeWidth={2} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Distribution</CardTitle>
            <CardDescription>Mobile vs desktop engagement.</CardDescription>
          </CardHeader>
          <CardContent className="pb-4">
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(v) => v.slice(0, 3)} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}