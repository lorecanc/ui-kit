
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col items-center text-center gap-3">
          <img src="/Logo_Greppi.png" alt="Greppi" className="h-16 mb-2" />
          <h1 className="text-5xl font-black tracking-tighter mb-0" style={{ letterSpacing: '-0.03em' }}>
            GREPPI
          </h1>
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-light">
            Labour Consulting
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-tight border-b pb-2" style={{ borderColor: 'var(--border)' }}>
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-tight border-b pb-2" style={{ borderColor: 'var(--border)' }}>
            Cards &amp; Forms
          </h2>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Example Card</CardTitle>
              <CardDescription>This is a demonstration of the Greppi Design System components.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="demo-input">Sample Input</Label>
                <Input id="demo-input" placeholder="Type something here..." />
              </div>
              <Button className="w-full mt-4">Submit</Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
