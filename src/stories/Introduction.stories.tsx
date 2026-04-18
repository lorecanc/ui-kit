import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof WelcomePage>;

const WelcomePage = () => {
  return (
    <div className="w-full h-full overflow-auto py-8">
    <div className="flex flex-col gap-8 max-w-4xl mx-auto px-8">
      <div className="text-center space-y-4">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>UI Kit</h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>Component library built on shadcn/ui + Tailwind CSS v4</p>
        <div className="flex gap-2 justify-center">
          <Badge variant="outline">shadcn/ui</Badge>
          <Badge variant="outline">Tailwind CSS v4</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
        </div>
      </div>

      <Tabs defaultValue="components" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="design-tokens">Design Tokens</TabsTrigger>
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
        </TabsList>
        <TabsContent value="components" className="space-y-4 pt-4">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Component Showcase</h2>
          <p>Explore the building blocks of UI Kit. Each component is designed to be accessible, themeable, and production-ready.</p>

          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Interactive elements for user actions</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button variant="default">Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
              <CardDescription>Available in multiple sizes for different contexts</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔍</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Form input components with validation states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Input with error" className="border-red-500" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Small status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design-tokens" className="space-y-6 pt-4">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Design Tokens</h2>
          <p>The foundation of UI Kit's visual language — semantic color mappings for light/dark modes.</p>

          <Card>
            <CardHeader>
              <CardTitle>Semantic Color Mappings</CardTitle>
              <CardDescription>How primitives map to shadcn/ui tokens in light/dark modes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Light Mode
                  </h4>
                  <div className="space-y-3">
                    {[
                      { token: '--background', hex: 'hsl(0 0% 100%)' },
                      { token: '--foreground', hex: 'hsl(240 5.9% 10%)' },
                      { token: '--primary', hex: 'hsl(240 5.9% 10%)' },
                      { token: '--primary-foreground', hex: 'hsl(0 0% 98%)' },
                      { token: '--secondary', hex: 'hsl(240 4.8% 95.9%)' },
                      { token: '--muted', hex: 'hsl(240 4.8% 95.9%)' },
                      { token: '--accent', hex: 'hsl(240 4.8% 95.9%)' },
                      { token: '--destructive', hex: 'hsl(0 84.2% 60.2%)' },
                      { token: '--border', hex: 'hsl(240 5.9% 90%)' },
                      { token: '--ring', hex: 'hsl(240 5.9% 10%)' },
                    ].map((item) => (
                      <div key={item.token} className="flex items-center gap-3">
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: item.hex,
                            borderRadius: '6px',
                            border: item.hex.includes('100') ? '1px solid #e4e4e7' : 'none',
                          }}
                        />
                        <div className="flex flex-col">
                          <code style={{ fontSize: '0.75rem', fontWeight: 500 }}>{item.token}</code>
                          <code style={{ fontSize: '0.65rem', color: '#999' }}>{item.hex}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Dark Mode
                  </h4>
                  <div className="space-y-3">
                    {[
                      { token: '--background', hex: 'hsl(0 0% 3.9%)' },
                      { token: '--foreground', hex: 'hsl(0 0% 98%)' },
                      { token: '--primary', hex: 'hsl(0 0% 98%)' },
                      { token: '--primary-foreground', hex: 'hsl(240 5.9% 10%)' },
                      { token: '--secondary', hex: 'hsl(240 3.7% 15.9%)' },
                      { token: '--muted', hex: 'hsl(240 3.7% 15.9%)' },
                      { token: '--accent', hex: 'hsl(240 3.7% 15.9%)' },
                      { token: '--destructive', hex: 'hsl(0 62.8% 30.6%)' },
                      { token: '--border', hex: 'hsl(240 3.7% 15.9%)' },
                      { token: '--ring', hex: 'hsl(240 4.9% 83.9%)' },
                    ].map((item) => (
                      <div key={item.token} className="flex items-center gap-3">
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: item.hex,
                            borderRadius: '6px',
                            border: item.hex.includes('98') && item.hex.includes('100') ? '1px solid #333' : 'none',
                          }}
                        />
                        <div className="flex flex-col">
                          <code style={{ fontSize: '0.75rem', fontWeight: 500 }}>{item.token}</code>
                          <code style={{ fontSize: '0.65rem', color: '#999' }}>{item.hex}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>Font families with available weights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600 }}>Geist Variable</h4>
                  <code style={{ fontSize: '0.7rem', color: '#666' }}>font-sans</code>
                  <Badge variant="outline" style={{ fontSize: '0.65rem' }}>Sans</Badge>
                </div>
                <div className="space-y-2 pl-4 border-l-2 border-primary">
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 400, fontSize: '1rem' }}>
                    Regular 400 — The quick brown fox jumps over the lazy dog
                  </p>
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 500, fontSize: '1rem' }}>
                    Medium 500 — The quick brown fox jumps over the lazy dog
                  </p>
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 700, fontSize: '1rem' }}>
                    Bold 700 — The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radius Scale</CardTitle>
              <CardDescription>Border radius tokens derived from --radius (0.625rem = 10px)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-4">
                {[
                  { token: '--radius-sm', label: 'sm', value: 'calc(var(--radius) - 4px)', px: '6px' },
                  { token: '--radius-md', label: 'md', value: 'calc(var(--radius) - 2px)', px: '8px' },
                  { token: '--radius-lg', label: 'lg', value: 'var(--radius)', px: '10px' },
                  { token: '--radius-xl', label: 'xl', value: 'calc(var(--radius) + 4px)', px: '14px' },
                  { token: '--radius-2xl', label: '2xl', value: 'calc(var(--radius) + 8px)', px: '18px' },
                  { token: '--radius-3xl', label: '3xl', value: 'calc(var(--radius) + 12px)', px: '22px' },
                  { token: '--radius-4xl', label: '4xl', value: 'calc(var(--radius) + 16px)', px: '26px' },
                ].map((radius) => (
                  <div key={radius.token} className="flex flex-col items-center gap-3">
                    <div
                      className="bg-primary flex items-center justify-center"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: radius.px,
                      }}
                    />
                    <div className="text-center">
                      <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{radius.label}</div>
                      <code style={{ fontSize: '0.6rem', color: '#666' }}>{radius.value}</code>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="getting-started" className="space-y-4 pt-4">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Getting Started</h2>

          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <pre style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
{`npm install @ui-kit/ui-kit`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <pre style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
{`import { Button, Input, Card } from '@ui-kit/ui-kit'

function MyPage() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="default">Submit</Button>
    </Card>
  )
}`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Storybook Controls</CardTitle>
              <CardDescription>Use the Controls panel to interact with component props in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Click on a component story in the sidebar</li>
                <li>Use the Controls tab to change props</li>
                <li>Toggle dark/light mode to preview theming</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center pt-8 border-t">
        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Explore Components</h3>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>
          Browse the sidebar to discover all available components organized by category.
        </p>
      </div>
    </div>
    </div>
  );
};

export const Welcome: Story = {
  render: () => <WelcomePage />,
};
