import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

/**
 * ## Overview
 * AspectRatio – Contenitore che mantiene un rapporto di aspetto preciso per immagini e media.
 *
 * Utile per garantire coerenza visiva nei layout, evitando distorsioni di immagini o video.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <AspectRatio ratio={16 / 9}>
 *   <img src="https://placehold.co/800x450" className="rounded-md object-cover" />
 * </AspectRatio>
 * ```
 */
const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  args: {
    ratio: 16 / 9,
  },
  argTypes: {
    ratio: {
      description: 'Rapporto larghezza/altezza desiderato (es. 16/9, 1, 4/5)',
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <img
          src="https://placehold.co/800x450"
          alt="Placeholder 16:9"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <img
          src="https://placehold.co/400x400"
          alt="Placeholder 1:1"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
  args: {
    ratio: 1,
  },
};

export const Portrait: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <img
          src="https://placehold.co/400x500"
          alt="Placeholder 4:5"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
  args: {
    ratio: 4 / 5,
  },
};
