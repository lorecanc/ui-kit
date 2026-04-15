import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * ## Overview
 * Skeleton – Placeholder animato che indica contenuto in caricamento.
 *
 * Fornisce un'anteprima visiva della struttura della UI mentre i dati vengono recuperati, migliorando la percezione delle performance.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Skeleton className="h-4 w-full" />
 *
 * <div className="flex items-center space-x-4">
 *   <Skeleton className="h-12 w-12 rounded-full" />
 *   <div className="space-y-2">
 *     <Skeleton className="h-4 w-[250px]" />
 *     <Skeleton className="h-4 w-[200px]" />
 *   </div>
 * </div>
 * ```
 */
const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Classi Tailwind per dimensione e forma',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div className="p-4 rounded-md border">
      <Skeleton className="h-4 w-full" />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-[250px] space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
};

export const CircleSkeleton: Story = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
};

export const TextBlockSkeleton: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
};
