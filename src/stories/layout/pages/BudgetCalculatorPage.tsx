import { useState } from 'react';
import { AlertCircle, CheckCircle2, DollarSign, Globe, Info, Newspaper, Radio, Smartphone, Sparkles, Tv } from 'lucide-react';
import { PageSection } from '../../../components/layout/PageContent';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Progress } from '../../../components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Separator } from '../../../components/ui/separator';
import { Slider } from '../../../components/ui/slider';
import { Switch } from '../../../components/ui/switch';

const channels = [
  { id: 'tv', label: 'Television', icon: Tv, min: 10 }, { id: 'digital', label: 'Digital Paid', icon: Globe, min: 5 },
  { id: 'social', label: 'Social Media', icon: Smartphone, min: 5 }, { id: 'print', label: 'Print & OOH', icon: Newspaper, min: 0 },
  { id: 'radio', label: 'Radio & Audio', icon: Radio, min: 0 },
];
const presets = [
  { label: 'Brand Awareness', alloc: { tv: 45, digital: 25, social: 20, print: 7, radio: 3 } },
  { label: 'Performance', alloc: { tv: 10, digital: 50, social: 35, print: 0, radio: 5 } },
  { label: 'Full Funnel', alloc: { tv: 30, digital: 30, social: 25, print: 10, radio: 5 } },
];
const formatMoney = (value: number, currency: string) => new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value);

export function BudgetCalculatorPage() {
  const [totalBudget, setTotalBudget] = useState('500000');
  const [currency, setCurrency] = useState('USD');
  const [withContingency, setWithContingency] = useState(true);
  const [withVat, setWithVat] = useState(false);
  const [alloc, setAlloc] = useState<Record<string, number>>({ tv: 40, digital: 30, social: 20, print: 7, radio: 3 });
  const budget = Number(totalBudget.replace(/\D/g, '')) || 0;
  const budgetAfterVat = Math.round(budget / (withVat ? 1.22 : 1));
  const netBudget = Math.round(budgetAfterVat / (withContingency ? 1.05 : 1));
  const contingencyReserve = budgetAfterVat - netBudget;
  const vatAmount = budget - budgetAfterVat;
  const totalAlloc = Object.values(alloc).reduce((sum, value) => sum + value, 0);
  const balanced = totalAlloc === 100;

  function setChannel(id: string, value: number) {
    setAlloc(previous => {
      const others = channels.filter(channel => channel.id !== id);
      const channel = channels.find(item => item.id === id);
      if (!channel) return previous;

      const maximum = 100 - others.reduce((sum, item) => sum + item.min, 0);
      const selectedValue = Math.max(channel.min, Math.min(maximum, Math.round(value)));
      const surplus = 100 - selectedValue - others.reduce((sum, item) => sum + item.min, 0);
      let weights = others.map(item => Math.max(0, previous[item.id] - item.min));
      if (weights.every(weight => weight === 0)) weights = others.map(() => 1);

      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      const shares = others.map((item, index) => {
        const exactShare = surplus * weights[index] / totalWeight;
        return { id: item.id, allocation: item.min + Math.floor(exactShare), remainder: exactShare % 1 };
      });
      const remaining = 100 - selectedValue - shares.reduce((sum, share) => sum + share.allocation, 0);
      shares
        .sort((left, right) => right.remainder - left.remainder || others.findIndex(item => item.id === left.id) - others.findIndex(item => item.id === right.id))
        .slice(0, remaining)
        .forEach(share => { share.allocation += 1; });

      return { ...previous, [id]: selectedValue, ...Object.fromEntries(shares.map(share => [share.id, share.allocation])) };
    });
  }

  return <>
    <PageSection span="full"><div><h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight"><DollarSign className="h-7 w-7 text-primary" />Budget Planner</h1><p className="mt-1 text-sm text-muted-foreground">Plan and optimize budget allocation across media channels.</p></div></PageSection>
    <PageSection span={1} className="space-y-5">
      <Card><CardHeader className="pb-3"><CardTitle className="text-base">1. Total Budget</CardTitle><CardDescription>Enter the gross amount available for this plan.</CardDescription></CardHeader><CardContent className="space-y-4"><div className="flex gap-2"><Select value={currency} onValueChange={setCurrency}><SelectTrigger className="w-[110px]"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="USD">USD $</SelectItem><SelectItem value="EUR">EUR €</SelectItem><SelectItem value="GBP">GBP £</SelectItem></SelectContent></Select><Input value={totalBudget} onChange={event => setTotalBudget(event.target.value.replace(/[^0-9]/g, ''))} aria-label="Total budget" className="font-mono text-lg" /></div><div className="space-y-3"><div className="flex items-center justify-between rounded-xl border bg-muted/30 p-3"><div><Label htmlFor="contingency">Contingency Reserve (5%)</Label><p className="text-xs text-muted-foreground">Set aside for unexpected costs.</p></div><Switch id="contingency" checked={withContingency} onCheckedChange={setWithContingency} /></div><div className="flex items-center justify-between rounded-xl border bg-muted/30 p-3"><div><Label htmlFor="vat">Include VAT (22%)</Label><p className="text-xs text-muted-foreground">Budget is inclusive of VAT.</p></div><Switch id="vat" checked={withVat} onCheckedChange={setWithVat} /></div></div>{withContingency && budget > 0 && <div className="flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/5 p-3 text-sm"><Info className="h-4 w-4 text-primary" /><span className="text-muted-foreground">Net budget: <strong className="text-foreground">{formatMoney(netBudget, currency)}</strong> — reserve: {formatMoney(contingencyReserve, currency)}</span></div>}</CardContent></Card>
      <Card><CardHeader className="pb-3"><div className="flex items-center justify-between"><CardTitle className="text-base">2. Channel Allocation</CardTitle><span className={`flex items-center gap-1 text-xs font-medium ${balanced ? 'text-emerald-600' : 'text-amber-600'}`}>{balanced ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}{balanced ? 'Balanced' : `${totalAlloc}% allocated`}</span></div><CardDescription>Choose a preset or adjust each channel allocation.</CardDescription></CardHeader><CardContent className="space-y-5"><div><p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Quick presets</p><div className="flex flex-wrap gap-2">{presets.map(preset => <Button key={preset.label} variant="outline" size="sm" onClick={() => setAlloc(preset.alloc)}><Sparkles className="mr-1.5 h-3.5 w-3.5" />{preset.label}</Button>)}</div></div><Separator /><div className="space-y-5">{channels.map(channel => { const Icon = channel.icon; const value = alloc[channel.id]; return <div key={channel.id} className="space-y-2"><div className="flex items-center justify-between"><span className="flex items-center gap-2 text-sm font-medium"><Icon className="h-4 w-4 text-primary" />{channel.label}</span><div className="flex items-center gap-3">{budget > 0 && <span className="text-xs text-muted-foreground">{formatMoney(netBudget * value / 100, currency)}</span>}<Badge variant="outline" className="w-12 justify-center font-mono">{value}%</Badge></div></div><Slider min={channel.min} max={100} step={1} value={[value]} onValueChange={([nextValue]) => setChannel(channel.id, nextValue)} aria-label={`${channel.label} allocation`} /></div>; })}</div><Separator /><div><div className="mb-2 flex justify-between text-xs"><span className="text-muted-foreground">Total allocation</span><span className={balanced ? 'font-semibold text-emerald-600' : 'font-semibold text-amber-600'}>{totalAlloc}% / 100%</span></div><Progress value={Math.min(totalAlloc, 100)} /></div></CardContent></Card>
    </PageSection>
    <PageSection span={1}><Card className="border-primary/20 shadow-md"><CardHeader><CardTitle className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" />Plan Summary</CardTitle><CardDescription>Updates as you make changes</CardDescription></CardHeader><CardContent className="space-y-5"><div className="space-y-3"><div className="flex justify-between text-sm"><span className="text-muted-foreground">Gross Budget</span><span className="font-mono font-semibold">{budget ? formatMoney(budget, currency) : '—'}</span></div>{withContingency && budget > 0 && <div className="flex justify-between text-sm"><span className="text-muted-foreground">Contingency (5%)</span><span className="font-mono text-amber-600">− {formatMoney(contingencyReserve, currency)}</span></div>}{withVat && budget > 0 && <div className="flex justify-between text-sm"><span className="text-muted-foreground">VAT (22%)</span><span className="font-mono text-muted-foreground">− {formatMoney(vatAmount, currency)}</span></div>}<Separator /><div className="flex justify-between font-bold"><span>Net Budget</span><span className="font-mono text-primary">{budget ? formatMoney(netBudget, currency) : '—'}</span></div></div><div className="space-y-3 border-t pt-4"><p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">By Channel</p>{channels.map(channel => <div key={channel.id}><div className="mb-1 flex justify-between text-sm"><span>{channel.label}</span><span className="font-mono text-xs text-muted-foreground">{budget ? formatMoney(netBudget * alloc[channel.id] / 100, currency) : `${alloc[channel.id]}%`}</span></div><div className="h-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary/70" style={{ width: `${alloc[channel.id]}%` }} /></div></div>)}</div>{!balanced && <p className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-700"><AlertCircle className="h-4 w-4 shrink-0" />Allocation must add up to 100%.</p>}<Button className="w-full" disabled={!balanced || budget === 0}><CheckCircle2 className="mr-2 h-4 w-4" />Save Budget Plan</Button><Button variant="outline" className="w-full">Export as PDF</Button></CardContent></Card></PageSection>
  </>;
}
