import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { BoldIcon } from 'lucide-react';

/**
 * ## Overview
 * Toggle – Pulsante a stato per attivare/disattivare un'opzione.
 *
 * Basato su Radix UI, il `Toggle` rappresenta un interruttore on/off accessibile.
 * Supporta varianti di stile e dimensioni diverse.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Toggle variant="default" size="default">
 *   <BoldIcon />
 * </Toggle>
 * ```
 */
const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

/**
 * **Default**: Toggle standard con icona Bold.
 */
export const Default: Story = {
  render: () => (
    <Toggle aria-label="Grassetto">
      <BoldIcon />
    </Toggle>
  ),
};

/**
 * **Outline**: Variante con bordo visibile (`variant="outline"`).
 */
export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Grassetto">
      <BoldIcon />
    </Toggle>
  ),
};

/**
 * **Small**: Dimensione compatta (`size="sm"`).
 */
export const Small: Story = {
  render: () => (
    <Toggle size="sm" aria-label="Grassetto">
      <BoldIcon />
    </Toggle>
  ),
};

/**
 * **Disabled**: Toggle in stato disabilitato, non interattivo.
 */
export const Disabled: Story = {
  render: () => (
    <Toggle disabled aria-label="Grassetto">
      <BoldIcon />
    </Toggle>
  ),
};

/**
 * **PressedByDefault**: Toggle con stato premuto iniziale tramite `defaultPressed`.
 */
export const PressedByDefault: Story = {
  render: () => (
    <Toggle defaultPressed aria-label="Grassetto">
      <BoldIcon />
    </Toggle>
  ),
};
