import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

/**
 * ## Overview
 * RadioGroup – Gruppo di opzioni mutualmente esclusive per la selezione singola.
 *
 * Ogni `RadioGroupItem` rappresenta una scelta; l'utente può selezionarne solo una alla volta all'interno del gruppo.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <RadioGroup defaultValue="option-1">
 *   <div className="flex items-center space-x-2">
 *     <RadioGroupItem value="option-1" id="o1" />
 *     <Label htmlFor="o1">Opzione 1</Label>
 *   </div>
 *   <div className="flex items-center space-x-2">
 *     <RadioGroupItem value="option-2" id="o2" />
 *     <Label htmlFor="o2">Opzione 2</Label>
 *   </div>
 * </RadioGroup>
 * ```
 */
const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="carta">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="carta" id="r-carta" />
        <Label htmlFor="r-carta">Carta di credito</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="r-paypal" />
        <Label htmlFor="r-paypal">PayPal</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="bonifico" id="r-bonifico" />
        <Label htmlFor="r-bonifico">Bonifico bancario</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue="paypal">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="carta" id="rd-carta" />
        <Label htmlFor="rd-carta">Carta di credito</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="rd-paypal" />
        <Label htmlFor="rd-paypal">PayPal</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="bonifico" id="rd-bonifico" />
        <Label htmlFor="rd-bonifico">Bonifico bancario</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="carta">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="carta" id="rx-carta" />
        <Label htmlFor="rx-carta">Carta di credito</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="rx-paypal" disabled />
        <Label htmlFor="rx-paypal" className="opacity-50">PayPal (non disponibile)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="bonifico" id="rx-bonifico" />
        <Label htmlFor="rx-bonifico">Bonifico bancario</Label>
      </div>
    </RadioGroup>
  ),
};
