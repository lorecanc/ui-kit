import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../../../components/ui/table';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";
import {
  Area,
  AreaChart,
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
} from "recharts";
import { MoreHorizontalIcon } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../components/ui/select';
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

const tableData = [
  { name: "Project Alpha", category: "Technology", metA: "2,300", metB: "450", status: "Active" },
  { name: "Global Campaign", category: "Marketing", metA: "1,150", metB: "320", status: "Completed" },
  { name: "Financial Q3", category: "Finance", metA: "5,400", metB: "890", status: "Pending" },
  { name: "Havas Pitch", category: "Advertising", metA: "890", metB: "210", status: "Active" },
];

export function DashboardGridPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Grid</h1>
        <p className="text-sm text-muted-foreground mt-1">High-density view of multiple metrics and capabilities in a single pane of glass.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Primary Trend Chart</CardTitle>
            <Select defaultValue="filter">
              <SelectTrigger className="w-[180px] h-8 text-xs">
                <SelectValue placeholder="Filter items..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last 7 days</SelectItem>
                <SelectItem value="month">Last 30 days</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <AreaChart data={chartData} margin={{ left: 12, right: 12, top: 20 }}>
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area dataKey="desktop" type="natural" fill="var(--color-desktop)" fillOpacity={0.4} stroke="var(--color-desktop)" stackId="a" />
                <Area dataKey="mobile" type="natural" fill="var(--color-mobile)" fillOpacity={0.4} stroke="var(--color-mobile)" stackId="a" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Capabilities</CardTitle>
            <div className="px-2 py-0.5 rounded-full bg-muted text-[10px] font-mono text-muted-foreground">Live</div>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <RadarChart data={chartData}>
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <PolarAngleAxis dataKey="month" />
                <PolarGrid />
                <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} stroke="var(--color-desktop)" />
                <Radar dataKey="mobile" fill="var(--color-mobile)" fillOpacity={0.6} stroke="var(--color-mobile)" />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Detailed List View</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontalIcon className="h-4 w-4" /></Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">Entity Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Metric A</TableHead>
                <TableHead className="text-right">Metric B</TableHead>
                <TableHead className="text-right pr-6">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="pl-6 font-medium">{row.name}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell className="text-right">{row.metA}</TableCell>
                  <TableCell className="text-right">{row.metB}</TableCell>
                  <TableCell className="text-right pr-6">
                    <Badge variant={row.status === 'Active' ? 'default' : row.status === 'Completed' ? 'secondary' : 'outline'}>
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}