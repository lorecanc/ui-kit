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
        <img
          src="/Logo_Greppi.png"
          alt="Greppi Labour Consulting"
          className="h-20 mx-auto mb-2"
        />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
          GREPPI
        </h1>
        <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--muted-foreground)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Labour Consulting
        </p>
        <div className="flex gap-2 justify-center mt-4">
          <Badge variant="outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>UI Kit</Badge>
          <Badge variant="outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Tailwind CSS v4</Badge>
          <Badge variant="outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>shadcn/ui</Badge>
        </div>
      </div>

      <Tabs defaultValue="components" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="design-tokens">Design Tokens</TabsTrigger>
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
        </TabsList>
        <TabsContent value="components" className="space-y-4 pt-4">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Component Showcase</h2>
          <p style={{ color: 'var(--muted-foreground)' }}>Explore the building blocks of the Greppi Design System.</p>

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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Design Tokens</h2>
          <p style={{ color: 'var(--muted-foreground)' }}>The foundation of the Greppi visual language — semantic color mappings for light/dark modes.</p>

          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>Greppi corporate palette — professionale, pulito, minimalista</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Blu Corporate', token: '--brand-blue', hex: '#00648C', description: 'Logo, elementi grafici' },
                  { label: 'Nero Intenso', token: '--brand-dark', hex: '#1A1A1A', description: 'Logotipo, dati in evidenza' },
                  { label: 'Grigio Medio', token: '--brand-medium', hex: '#7D7D7D', description: 'Etichette, testo secondario' },
                ].map((item) => (
                  <div key={item.token} className="flex flex-col gap-2">
                    <div
                      className="h-16 w-full rounded-md flex items-center justify-center"
                      style={{ backgroundColor: item.hex }}
                    >
                      <span style={{ color: item.hex === '#7D7D7D' ? '#fff' : '#fff', fontWeight: 600, fontSize: '0.75rem' }}>
                        {item.label}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <code style={{ fontSize: '0.75rem', fontWeight: 600 }}>{item.token}</code>
                      <code style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)' }}>{item.hex}</code>
                      <span style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)' }}>{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Semantic Color Mappings</CardTitle>
              <CardDescription>How primitives map to shadcn/ui tokens in light/dark modes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Light Mode
                  </h4>
                  <div className="space-y-3">
                    {[
                      { token: '--background', hex: '#FFFFFF' },
                      { token: '--foreground', hex: '#1A1A1A' },
                      { token: '--primary', hex: '#00648C' },
                      { token: '--primary-foreground', hex: '#FFFFFF' },
                      { token: '--secondary', hex: '#EDF3F5' },
                      { token: '--muted', hex: '#F4F8F9' },
                      { token: '--accent', hex: '#E8F0F3' },
                      { token: '--destructive', hex: '#DC2626' },
                      { token: '--border', hex: '#E5E5E5' },
                      { token: '--ring', hex: '#00648C' },
                    ].map((item) => (
                      <div key={item.token} className="flex items-center gap-3">
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: item.hex,
                            borderRadius: '4px',
                            border: item.hex === '#FFFFFF' ? '1px solid #E5E5E5' : 'none',
                          }}
                        />
                        <div className="flex flex-col">
                          <code style={{ fontSize: '0.75rem', fontWeight: 500 }}>{item.token}</code>
                          <code style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)' }}>{item.hex}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Dark Mode
                  </h4>
                  <div className="space-y-3">
                    {[
                      { token: '--background', hex: '#0A0A0A' },
                      { token: '--foreground', hex: '#FAFAFA' },
                      { token: '--primary', hex: '#4493BD' },
                      { token: '--primary-foreground', hex: '#FFFFFF' },
                      { token: '--secondary', hex: '#1A2530' },
                      { token: '--muted', hex: '#1A2530' },
                      { token: '--accent', hex: '#243444' },
                      { token: '--destructive', hex: '#DC2626' },
                      { token: '--border', hex: '#262626' },
                      { token: '--ring', hex: '#4493BD' },
                    ].map((item) => (
                      <div key={item.token} className="flex items-center gap-3">
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: item.hex,
                            borderRadius: '4px',
                            border: item.hex === '#FAFAFA' || item.hex === '#FFFFFF' ? '1px solid #333' : 'none',
                          }}
                        />
                        <div className="flex flex-col">
                          <code style={{ fontSize: '0.75rem', fontWeight: 500 }}>{item.token}</code>
                          <code style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)' }}>{item.hex}</code>
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
                  <code style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)' }}>font-sans</code>
                  <Badge variant="outline" style={{ fontSize: '0.65rem' }}>Sans</Badge>
                  <Badge variant="outline" style={{ fontSize: '0.65rem' }}>Geometric</Badge>
                </div>
                <div className="space-y-2 pl-4 border-l-2 border-primary">
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 100, fontSize: '1rem' }}>
                    Thin 100 — The quick brown fox jumps over the lazy dog
                  </p>
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 300, fontSize: '1rem' }}>
                    Light 300 — The quick brown fox jumps over the lazy dog
                  </p>
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 400, fontSize: '1rem' }}>
                    Regular 400 — The quick brown fox jumps over the lazy dog
                  </p>
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 500, fontSize: '1rem' }}>
                    Medium 500 — The quick brown fox jumps over the lazy dog
                  </p>
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 700, fontSize: '1rem' }}>
                    Bold 700 — The quick brown fox jumps over the lazy dog
                  </p>
                  <p style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 900, fontSize: '1rem' }}>
                    Black 900 — THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radius Scale</CardTitle>
              <CardDescription>Border radius tokens — Greppi style is square/geometric (4px base)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-4">
                {[
                  { token: '--radius-sm', label: 'sm', value: 'calc(var(--radius) - 2px)', px: '2px' },
                  { token: '--radius-md', label: 'md', value: 'var(--radius)', px: '4px' },
                  { token: '--radius-lg', label: 'lg', value: 'calc(var(--radius) + 2px)', px: '6px' },
                  { token: '--radius-xl', label: 'xl', value: 'calc(var(--radius) + 4px)', px: '8px' },
                  { token: '--radius-2xl', label: '2xl', value: 'calc(var(--radius) + 8px)', px: '12px' },
                  { token: '--radius-3xl', label: '3xl', value: 'calc(var(--radius) + 12px)', px: '16px' },
                  { token: '--radius-4xl', label: '4xl', value: 'calc(var(--radius) + 16px)', px: '20px' },
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
                      <code style={{ fontSize: '0.6rem', color: 'var(--muted-foreground)' }}>{radius.value}</code>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="getting-started" className="space-y-4 pt-4">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Getting Started</h2>

          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <pre style={{ backgroundColor: 'var(--muted)', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`npm install @ui-kit/ui-kit`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <pre style={{ backgroundColor: 'var(--muted)', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`import { Button, Input, Card } from '@ui-kit/ui-kit'
import '@ui-kit/ui-kit/theme.css'

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
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted-foreground)' }}>
                <li>Click on a component story in the sidebar</li>
                <li>Use the Controls tab to change props</li>
                <li>Toggle dark/light mode to preview theming</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>Explore Components</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
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