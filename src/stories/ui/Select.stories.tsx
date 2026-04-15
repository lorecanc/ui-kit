import type { Meta, StoryObj } from '@storybook/react'
import { userEvent } from '@testing-library/user-event'
import { within } from '@testing-library/react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

/**
 * ## Overview
 * Select – Un menu a discesa che permette di scegliere un'opzione da una lista.
 * 
 * Realizzato sopra Radix UI, offre un'esperienza accessibile e altamente personalizzabile.
 *
 * ## Linee guida di UX/UI
 * - **Placeholder:** Usa un testo chiaro che indichi cosa l'utente deve selezionare.
 * - **Raggruppamento:** Usa `SelectLabel` e `SelectGroup` per organizzare lunghe liste di opzioni.
 * - **Accessibilità:** Supporta pienamente la navigazione da tastiera.
 */
const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Scegli un colore" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Colori Havas</SelectLabel>
          <SelectItem value="red">Brand Red</SelectItem>
          <SelectItem value="black">Black</SelectItem>
          <SelectItem value="white">White</SelectItem>
        </SelectGroup>
        <SelectGroup>
            <SelectLabel>Colori Supporto</SelectLabel>
            <SelectItem value="teal">Teal</SelectItem>
            <SelectItem value="cyan">Cyan</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

/**
 * **Selection Interaction**: Verifica apertura del select e selezione di un'opzione.
 */
export const SelectionInteraction: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Scegli un colore" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Colori Havas</SelectLabel>
          <SelectItem value="red">Brand Red</SelectItem>
          <SelectItem value="black">Black</SelectItem>
          <SelectItem value="white">White</SelectItem>
        </SelectGroup>
        <SelectGroup>
            <SelectLabel>Colori Supporto</SelectLabel>
            <SelectItem value="teal">Teal</SelectItem>
            <SelectItem value="cyan">Cyan</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('combobox', { name: /scegli un colore/i })
    await userEvent.click(trigger)
    const item = canvas.getByRole('option', { name: /brand red/i })
    await userEvent.click(item)
  },
}

export const Small: Story = {
    render: (args) => (
      <Select {...args}>
        <SelectTrigger className="w-[180px]" size="sm">
          <SelectValue placeholder="Seleziona..." />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="opt1">Opzione 1</SelectItem>
            <SelectItem value="opt2">Opzione 2</SelectItem>
            <SelectItem value="opt3">Opzione 3</SelectItem>
        </SelectContent>
      </Select>
    ),
  };
