import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@/components/ui/spinner';

/**
 * ## Overview
 * Spinner – Indicatore di caricamento circolare animato.
 *
 * Utilizzato per segnalare operazioni in corso, come caricamenti asincroni o elaborazioni.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Spinner />
 *
 * <Spinner className="size-8" />
 * ```
 */
const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Classi Tailwind per dimensione e stile',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    className: 'size-4',
  },
};

export const Large: Story = {
  args: {
    className: 'size-8',
  },
};
