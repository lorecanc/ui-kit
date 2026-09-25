import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { Download, Euro, Eye, ExternalLink, MousePointerClick, RefreshCw, TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { PageSection } from '../../../components/layout/PageContent';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '../../../components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';

const performanceData = [
  { day: 'Mon', impressions: 420, clicks: 38, conversions: 12 }, { day: 'Tue', impressions: 510, clicks: 52, conversions: 18 },
  { day: 'Wed', impressions: 388, clicks: 41, conversions: 14 }, { day: 'Thu', impressions: 620, clicks: 67, conversions: 25 },
  { day: 'Fri', impressions: 740, clicks: 80, conversions: 31 }, { day: 'Sat', impressions: 580, clicks: 55, conversions: 20 },
  { day: 'Sun', impressions: 460, clicks: 43, conversions: 15 },
];
const channelSpend = [
  { channel: 'Google', spend: 12400, target: 15000, roas: 4.2 }, { channel: 'Meta', spend: 9800, target: 10000, roas: 3.8 },
  { channel: 'TikTok', spend: 4200, target: 5000, roas: 5.1 }, { channel: 'LinkedIn', spend: 3100, target: 4000, roas: 2.9 },
  { channel: 'YouTube', spend: 5600, target: 6000, roas: 3.4 },
];
const campaigns = [
  { id: 'CMP-001', name: 'Q2 Brand Awareness', channel: 'Google', impressions: '1.2M', ctr: '3.8%', cpc: '$1.42', roas: '4.1x', status: 'Live' },
  { id: 'CMP-002', name: 'Retargeting Summer', channel: 'Meta', impressions: '640K', ctr: '5.2%', cpc: '$0.98', roas: '6.3x', status: 'Ended' },
  { id: 'CMP-003', name: 'Product Launch EU', channel: 'TikTok', impressions: '890K', ctr: '7.1%', cpc: '$0.72', roas: '5.8x', status: 'Live' },
  { id: 'CMP-004', name: 'B2B Lead Gen', channel: 'LinkedIn', impressions: '280K', ctr: '1.9%', cpc: '$3.95', roas: '2.6x', status: 'Paused' },
  { id: 'CMP-005', name: 'Video Upper Funnel', channel: 'YouTube', impressions: '2.1M', ctr: '2.3%', cpc: '$1.18', roas: '3.2x', status: 'Live' },
];
const chartConfig = {
  impressions: { label: 'Impressions (K)', color: 'var(--chart-1)' }, clicks: { label: 'Clicks (K)', color: 'var(--chart-2)' },
  conversions: { label: 'Conversions', color: 'var(--chart-3)' }, spend: { label: 'Spend ($)', color: 'var(--chart-1)' }, target: { label: 'Target ($)', color: 'var(--chart-2)' },
} satisfies ChartConfig;

export function CampaignMonitorPage() {
  const activeCampaigns = campaigns.filter(campaign => campaign.status === 'Live');
  const metrics = [
    { icon: Eye, label: 'Total Impressions', value: '5.22M', delta: '+14.3%', up: true }, { icon: MousePointerClick, label: 'Click Rate (CTR)', value: '3.74%', delta: '+0.8pp', up: true },
    { icon: Euro, label: 'Average CPC', value: '$1.51', delta: '-$0.12', up: true }, { icon: Zap, label: 'Average ROAS', value: '4.06x', delta: '-0.3x', up: false },
  ];
  return <>
    <PageSection span="full" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h1 className="text-3xl font-bold tracking-tight">Campaign Monitor</h1><p className="mt-1 text-sm text-muted-foreground">Live campaign performance — last synced <span className="font-medium text-foreground">3 minutes ago</span></p></div><div className="flex items-center gap-2"><Select defaultValue="7d"><SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="today">Today</SelectItem><SelectItem value="7d">Last 7 days</SelectItem><SelectItem value="30d">Last 30 days</SelectItem><SelectItem value="q">This quarter</SelectItem></SelectContent></Select><Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" />Report</Button><Button variant="outline" size="sm"><RefreshCw className="mr-2 h-4 w-4" />Refresh</Button></div></PageSection>
    {[metrics.slice(0, 2), metrics.slice(2)].map((group, index) => <PageSection key={index} span={1} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {group.map(({ icon: Icon, label, value, delta, up }) => <Card key={label}><CardContent className="pt-5"><div className="flex justify-between"><Icon className="h-5 w-5 text-muted-foreground" /><span className={`flex items-center text-xs ${up ? 'text-emerald-600' : 'text-rose-600'}`}>{up ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}{delta}</span></div><p className="mt-3 text-2xl font-bold">{value}</p><p className="text-xs text-muted-foreground">{label}</p></CardContent></Card>)}
    </PageSection>)}
    <PageSection span="full"><Tabs defaultValue="performance"><TabsList><TabsTrigger value="performance">Performance</TabsTrigger><TabsTrigger value="spend">Spend by Channel</TabsTrigger><TabsTrigger value="campaigns">All Campaigns</TabsTrigger></TabsList>
      <TabsContent value="performance" className="mt-4"><div className="grid gap-4 lg:grid-cols-3"><Card className="lg:col-span-2"><CardHeader><CardTitle>Weekly Trend</CardTitle><CardDescription>Impressions, clicks, and conversions over the last 7 days</CardDescription></CardHeader><CardContent><ChartContainer config={chartConfig} className="min-h-[280px] w-full"><LineChart data={performanceData}><CartesianGrid vertical={false} strokeDasharray="3 3" /><XAxis dataKey="day" /><YAxis /><ChartTooltip content={<ChartTooltipContent />} /><ChartLegend content={<ChartLegendContent />} /><Line dataKey="impressions" stroke="var(--color-impressions)" strokeWidth={2.5} /><Line dataKey="clicks" stroke="var(--color-clicks)" strokeWidth={2.5} /><Line dataKey="conversions" stroke="var(--color-conversions)" strokeWidth={2.5} strokeDasharray="5 3" /></LineChart></ChartContainer></CardContent></Card><Card><CardHeader><div className="flex items-center justify-between"><CardTitle>Live Campaigns</CardTitle><Badge variant="outline" className="text-emerald-700">{activeCampaigns.length} active</Badge></div></CardHeader><CardContent className="space-y-3">{activeCampaigns.map((campaign, index) => <div key={campaign.id} className="rounded-xl border bg-muted/30 p-3"><div className="flex items-center justify-between"><div><p className="text-sm font-medium">{campaign.name}</p><p className="text-xs text-muted-foreground">{campaign.channel}</p></div><Badge variant="outline">Live</Badge></div><div className="mt-3 flex justify-between text-xs text-muted-foreground"><span>Budget used</span><span>{[61, 45, 73][index]}%</span></div><div className="mt-1 h-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${[61, 45, 73][index]}%` }} /></div></div>)}</CardContent></Card></div></TabsContent>
      <TabsContent value="spend" className="mt-4"><div className="grid gap-4 lg:grid-cols-2"><Card><CardHeader><CardTitle>Spend vs Target by Channel</CardTitle><CardDescription>Budget consumed compared to target</CardDescription></CardHeader><CardContent><ChartContainer config={chartConfig} className="min-h-[300px] w-full"><BarChart data={channelSpend} layout="vertical"><CartesianGrid horizontal={false} /><XAxis type="number" /><YAxis dataKey="channel" type="category" width={75} /><ChartTooltip content={<ChartTooltipContent />} /><ChartLegend content={<ChartLegendContent />} /><Bar dataKey="spend" fill="var(--color-spend)" /><Bar dataKey="target" fill="var(--color-target)" fillOpacity={0.35} /></BarChart></ChartContainer></CardContent></Card><Card><CardHeader><CardTitle>ROAS by Channel</CardTitle><CardDescription>Return on ad spend (target: 4.5x)</CardDescription></CardHeader><CardContent className="space-y-4">{channelSpend.map(channel => <div key={channel.channel}><div className="mb-2 flex justify-between text-sm"><span className="font-medium">{channel.channel}</span><span className={channel.roas >= 4.5 ? 'font-bold text-emerald-600' : 'font-bold text-amber-600'}>{channel.roas}x</span></div><div className="h-2 overflow-hidden rounded-full bg-muted"><div className={`h-full rounded-full ${channel.roas >= 4.5 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${Math.min(channel.roas / 6 * 100, 100)}%` }} /></div><p className="mt-1 text-xs text-muted-foreground">Spend: ${(channel.spend / 1000).toFixed(1)}K</p></div>)}</CardContent></Card></div></TabsContent>
      <TabsContent value="campaigns" className="mt-4"><Card><CardHeader><div className="flex items-center justify-between"><div><CardTitle>Campaign List</CardTitle><CardDescription>{campaigns.length} campaigns in selected period</CardDescription></div><Button variant="outline" size="sm"><ExternalLink className="mr-2 h-4 w-4" />Open platform</Button></div></CardHeader><CardContent className="p-0"><Table><TableHeader><TableRow><TableHead className="pl-6">Campaign</TableHead><TableHead>Channel</TableHead><TableHead>Impressions</TableHead><TableHead>CTR</TableHead><TableHead>CPC</TableHead><TableHead>ROAS</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody>{campaigns.map(campaign => <TableRow key={campaign.id}><TableCell className="pl-6"><p className="font-medium">{campaign.name}</p><p className="font-mono text-xs text-muted-foreground">{campaign.id}</p></TableCell><TableCell>{campaign.channel}</TableCell><TableCell className="font-mono">{campaign.impressions}</TableCell><TableCell className="font-mono">{campaign.ctr}</TableCell><TableCell className="font-mono">{campaign.cpc}</TableCell><TableCell className="font-mono font-semibold">{campaign.roas}</TableCell><TableCell><Badge variant={campaign.status === 'Live' ? 'default' : campaign.status === 'Paused' ? 'secondary' : 'outline'}>{campaign.status}</Badge></TableCell></TableRow>)}</TableBody></Table></CardContent></Card></TabsContent>
    </Tabs></PageSection>
  </>;
}
