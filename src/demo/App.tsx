
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function App() {
  return (
    <div className="min-h-screen bg-base-white text-black p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-display uppercase tracking-tighter mb-2">Havas UI Demo Space</h1>
          <p className="text-gray-500">Playground for testing components locally.</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-condensed font-semibold uppercase tracking-tight border-b pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-condensed font-semibold uppercase tracking-tight border-b pb-2">Cards & Forms</h2>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Example Card</CardTitle>
              <CardDescription>This is a demonstration of the Card component.</CardDescription>
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
