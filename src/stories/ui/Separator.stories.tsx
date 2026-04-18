import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';

/**
 * ## Overview
 * Separator – Elemento visivo per separare contenuti o sezioni.
 * 
 * Aiuta a creare una gerarchia visiva chiara raggruppando o distinguendo elementi diversi nel layout.
 *
 * ## Linee guida di UX/UI
 * - **Orientamento:** Può essere orizzontale o verticale.
 * - **Semantica:** Di default è un elemento decorativo (`decorative={true}`), ma può avere valore semantico per screen reader.
 */
const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
        description: 'Orientamento della linea separatrice',
        control: 'select',
        options: ['horizontal', 'vertical'],
    },
    decorative: {
        description: 'Se l\'elemento è puramente decorativo (ignorato dagli screen reader)',
        control: 'boolean',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: (args) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">UI Kit</h4>
        <p className="text-sm text-muted-foreground">Un design system moderno e performante.</p>
      </div>
      <Separator className="my-4" {...args} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>React</div>
        <Separator orientation="vertical" />
        <div>Tailwind</div>
        <Separator orientation="vertical" />
        <div>Radix UI</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-5 items-center space-x-4 text-sm">
       <div>Blog</div>
       <Separator orientation="vertical" {...args} />
       <div>Docs</div>
       <Separator orientation="vertical" {...args} />
       <div>Source</div>
    </div>
  ),
  args: {
    orientation: 'vertical',
  }
};
