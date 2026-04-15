import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Field, FieldLabel } from '@/components/ui/field';
import { Slider } from '@/components/ui/slider';

/**
 * ## Overview
 * Progress – Mostra lo stato di avanzamento di un processo.
 * 
 * Viene utilizzato per dare feedback visivo durante caricamenti o completamento di task.
 *
 * ## Linee guida di UX/UI
 * - **Valore:** Il valore dovrebbe essere compreso tra 0 e 100.
 * - **Animazione:** Il componente include transizioni fluide per i cambiamenti di valore.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Progress value={33} />
 * ```
 */
const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'Percentuale di completamento (0-100)',
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

/**
 * **Default**: Progress bar base con valore al 33%.
 */
export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={33} />
    </div>
  ),
};

/**
 * **Label**: Progress bar con etichetta usando il componente Field.
 */
export const Label: Story = {
  render: () => (
    <div className="w-[400px]">
      <Field>
        <FieldLabel>Progress</FieldLabel>
        <Progress value={33} />
      </Field>
    </div>
  ),
};

/**
 * **Controlled**: Progress bar controllato da uno Slider.
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(33);
    return (
      <div className="w-[400px]">
        <Field>
          <FieldLabel>Progress: {value}%</FieldLabel>
          <Progress value={value} />
          <Slider
            value={[value]}
            onValueChange={([v]) => setValue(v)}
            max={100}
            step={1}
          />
        </Field>
      </div>
    );
  },
};

/**
 * **HalfWay**: Progress bar al 50%.
 */
export const HalfWay: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={50} />
    </div>
  ),
};

/**
 * **Complete**: Progress bar al 100%.
 */
export const Complete: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={100} />
    </div>
  ),
};