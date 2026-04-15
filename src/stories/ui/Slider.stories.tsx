import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/slider';

/**
 * ## Overview
 * Slider – Controllo per selezione numerica su un intervallo definito.
 *
 * Basato su Radix UI, lo `Slider` consente agli utenti di selezionare un singolo
 * valore o un range di valori tramite trascinamento di thumb(s).
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * // Singolo valore
 * <Slider defaultValue={[50]} max={100} step={1} />
 *
 * // Range (due thumb)
 * <Slider defaultValue={[25, 75]} max={100} step={1} />
 * ```
 */
const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

/**
 * **Default**: Slider singolo con valore di default al 33%.
 */
export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  ),
};

/**
 * **Range**: Slider con due thumb per selezionare un intervallo di valori (25-75).
 */
export const Range: Story = {
  render: () => (
    <div className="w-[400px]">
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  ),
};

/**
 * **Disabled**: Slider in stato disabilitato, non interattivo.
 */
export const Disabled: Story = {
  render: () => (
    <div className="w-[400px]">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};

/**
 * **WithStep**: Slider con passo incrementale di 10 unità su scala 0-100.
 */
export const WithStep: Story = {
  render: () => (
    <div className="w-[400px]">
      <Slider defaultValue={[50]} min={0} max={100} step={10} />
    </div>
  ),
};
