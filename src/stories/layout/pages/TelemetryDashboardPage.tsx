import { Activity, AlertTriangle, CheckCircle2, Cpu, Download, HardDrive, RefreshCw, TrendingDown, TrendingUp, Wifi } from 'lucide-react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ReferenceLine, XAxis, YAxis } from 'recharts';
import { PageSection } from '../../../components/layout/PageContent';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '../../../components/ui/chart';
import { Progress } from '../../../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';

const latencyData = [
  { time: '00:00', p50: 28, p95: 68, p99: 120 }, { time: '04:00', p50: 19, p95: 44, p99: 78 },
  { time: '08:00', p50: 56, p95: 145, p99: 280 }, { time: '12:00', p50: 42, p95: 108, p99: 200 },
  { time: '16:00', p50: 29, p95: 67, p99: 115 }, { time: '20:00', p50: 35, p95: 88, p99: 165 },
];
const requestData = [
  { region: 'EU-West', requests: 42800, errors: 214 }, { region: 'US-East', requests: 38200, errors: 96 },
  { region: 'AP-South', requests: 18600, errors: 420 }, { region: 'US-West', requests: 14900, errors: 149 },
];
const chartConfig = {
  p50: { label: 'P50 (ms)', color: 'var(--chart-2)' }, p95: { label: 'P95 (ms)', color: 'var(--chart-1)' },
  p99: { label: 'P99 (ms)', color: 'var(--chart-5)' }, requests: { label: 'Requests', color: 'var(--chart-1)' },
  errors: { label: 'Errors', color: 'var(--chart-5)' },
} satisfies ChartConfig;
const nodes = [
  { id: 'core-01', region: 'EU-West', cpu: 42, ram: 61, latency: '28ms', status: 'Healthy' },
  { id: 'core-02', region: 'EU-West', cpu: 38, ram: 55, latency: '31ms', status: 'Healthy' },
  { id: 'core-03', region: 'US-East', cpu: 71, ram: 80, latency: '39ms', status: 'Warning' },
  { id: 'edge-14', region: 'AP-South', cpu: 98, ram: 95, latency: '148ms', status: 'Critical' },
];
const logs = [
  { time: '16:31:02', level: 'Error', node: 'edge-14', message: 'Connection timeout to upstream exceeded 30s' },
  { time: '16:30:47', level: 'Warning', node: 'core-03', message: 'CPU usage exceeded 70% threshold — scaling triggered' },
  { time: '16:28:15', level: 'Info', node: 'core-01', message: 'Health check passing — endpoints within SLA' },
];

export function TelemetryDashboardPage() {
  const healthy = nodes.filter(node => node.status === 'Healthy').length;
  const metrics = [
    { icon: CheckCircle2, label: 'Healthy Nodes', value: `${healthy}/${nodes.length}`, change: '1 warning', good: true },
    { icon: Wifi, label: 'Requests / sec', value: '44.2K', change: '+6.3%', good: true },
    { icon: Cpu, label: 'Avg CPU Load', value: '55%', change: '+12pp', good: false },
    { icon: HardDrive, label: 'Avg Latency (P95)', value: '99ms', change: '-8ms', good: true },
  ];
  return <>
    <PageSection span="full" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div><h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight"><Activity className="h-7 w-7 text-primary" />System Overview</h1><p className="mt-1 text-sm text-muted-foreground">Real-time metrics across {nodes.length} nodes — last sync 12 seconds ago</p></div>
      <div className="flex gap-2"><Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" />Export</Button><Button variant="outline" size="sm"><RefreshCw className="mr-2 h-4 w-4" />Refresh</Button></div>
    </PageSection>
    {[metrics.slice(0, 2), metrics.slice(2)].map((group, index) => <PageSection key={index} span={1} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {group.map(({ icon: Icon, label, value, change, good }) => <Card key={label}><CardContent className="pt-5"><div className="flex justify-between"><Icon className="h-5 w-5 text-muted-foreground" /><span className={`flex items-center text-xs ${good ? 'text-emerald-600' : 'text-rose-600'}`}>{good ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}{change}</span></div><p className="mt-3 text-2xl font-bold">{value}</p><p className="text-xs text-muted-foreground">{label}</p></CardContent></Card>)}
    </PageSection>)}
    <PageSection span="full">
      <Tabs defaultValue="overview">
        <TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="nodes">Active Nodes</TabsTrigger><TabsTrigger value="logs">Network Logs</TabsTrigger></TabsList>
        <TabsContent value="overview" className="mt-4 space-y-4">
          <Card><CardHeader><div className="flex items-center justify-between"><div><CardTitle>Response Latency</CardTitle><CardDescription>P50 / P95 / P99 percentiles across all regions</CardDescription></div><Badge variant="outline" className="text-primary">● Live</Badge></div></CardHeader><CardContent><ChartContainer config={chartConfig} className="min-h-[260px] w-full"><AreaChart data={latencyData}><CartesianGrid vertical={false} strokeDasharray="3 3" /><XAxis dataKey="time" /><YAxis /><ChartTooltip content={<ChartTooltipContent />} /><ChartLegend content={<ChartLegendContent />} /><ReferenceLine y={100} stroke="var(--destructive)" strokeDasharray="4 2" /><Area dataKey="p99" fill="var(--color-p99)" fillOpacity={0.08} stroke="var(--color-p99)" /><Area dataKey="p95" fill="var(--color-p95)" fillOpacity={0.12} stroke="var(--color-p95)" /><Area dataKey="p50" fill="var(--color-p50)" fillOpacity={0.18} stroke="var(--color-p50)" /></AreaChart></ChartContainer></CardContent></Card>
          <div className="grid gap-4 lg:grid-cols-3"><Card className="lg:col-span-2"><CardHeader><CardTitle>Requests by Region</CardTitle><CardDescription>Total requests vs errors in the last 24 hours</CardDescription></CardHeader><CardContent><ChartContainer config={chartConfig} className="min-h-[220px] w-full"><BarChart data={requestData} layout="vertical"><CartesianGrid horizontal={false} /><XAxis type="number" /><YAxis dataKey="region" type="category" width={75} /><ChartTooltip content={<ChartTooltipContent />} /><Bar dataKey="requests" fill="var(--color-requests)" /><Bar dataKey="errors" fill="var(--color-errors)" /></BarChart></ChartContainer></CardContent></Card><Card><CardHeader><CardTitle>Cluster Health</CardTitle><CardDescription>Node status distribution</CardDescription></CardHeader><CardContent className="space-y-4">{['Healthy', 'Warning', 'Critical'].map((status, index) => <div key={status}><div className="mb-1 flex justify-between text-sm"><span>{status}</span><span>{[healthy, 1, 1][index]}</span></div><Progress value={([healthy, 1, 1][index] / nodes.length) * 100} /></div>)}<div className="border-t pt-3 text-sm text-muted-foreground">Uptime (30d) <span className="float-right font-semibold text-emerald-600">99.94%</span></div></CardContent></Card></div>
        </TabsContent>
        <TabsContent value="nodes" className="mt-4"><Card><CardHeader><CardTitle>Active Nodes</CardTitle><CardDescription>Per-node resource usage and network metrics</CardDescription></CardHeader><CardContent className="p-0"><Table><TableHeader><TableRow><TableHead className="pl-6">Node ID</TableHead><TableHead>Region</TableHead><TableHead>CPU</TableHead><TableHead>RAM</TableHead><TableHead>Latency</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody>{nodes.map(node => <TableRow key={node.id}><TableCell className="pl-6 font-mono">{node.id}</TableCell><TableCell>{node.region}</TableCell><TableCell>{node.cpu}%</TableCell><TableCell>{node.ram}%</TableCell><TableCell>{node.latency}</TableCell><TableCell><Badge variant={node.status === 'Critical' ? 'destructive' : node.status === 'Warning' ? 'secondary' : 'outline'}>{node.status}</Badge></TableCell></TableRow>)}</TableBody></Table></CardContent></Card></TabsContent>
        <TabsContent value="logs" className="mt-4"><Card><CardHeader><CardTitle>Network Logs</CardTitle><CardDescription>Recent event stream</CardDescription></CardHeader><CardContent className="space-y-3">{logs.map(log => <div key={log.time} className="flex flex-wrap items-center gap-3 border-b pb-3 text-sm"><span className="font-mono text-muted-foreground">{log.time}</span><Badge variant={log.level === 'Error' ? 'destructive' : 'outline'}>{log.level}</Badge><span className="font-mono">[{log.node}]</span><span>{log.message}</span>{log.level === 'Error' && <AlertTriangle className="ml-auto h-4 w-4 text-destructive" />}</div>)}</CardContent></Card></TabsContent>
      </Tabs>
    </PageSection>
  </>;
}
