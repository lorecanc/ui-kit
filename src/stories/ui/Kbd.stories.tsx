import type { Meta, StoryObj } from '@storybook/react';
import { Kbd, KbdGroup } from '@/components/ui/kbd';

/**
 * ## Overview
 * Kbd – Rappresentazione visiva di tasti o scorciatoie da tastiera.
 *
 * Utilizzato per documentare combinazioni di tasti all'interno di menu, tooltip e guide.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Kbd>⌘</Kbd>
 *
 * <KbdGroup>
 *   <Kbd>Ctrl</Kbd>
 *   <Kbd>K</Kbd>
 * </KbdGroup>
 * ```
 */
const meta: Meta<typeof Kbd> = {
  title: 'UI/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Contenuto del tasto',
      control: 'text',
    },
    className: {
      description: 'Classi Tailwind aggiuntive',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: '⌘',
  },
};

export const Combination: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const ModifierKeys: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  ),
};
