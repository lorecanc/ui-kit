import type { Meta, StoryObj } from '@storybook/react'
import { userEvent } from '@testing-library/user-event'
import { within } from '@testing-library/react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

/**
 * ## Overview
 * Checkbox – Un controllo che permette all'utente di selezionare uno o più valori da un insieme.
 * 
 * Il `Checkbox` è essenziale nei form e nelle liste di impostazioni dove è possibile una selezione multipla.
 *
 * ## Linee guida di UX/UI
 * - **Label:** Un checkbox dovrebbe sempre essere accompagnato da una label descrittiva.
 * - **Interazione:** Cliccare sulla label dovrebbe attivare/disattivare il checkbox.
 * - **Stato:** Indica chiaramente lo stato 'checked', 'unchecked' o 'disabled'.
 */
const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex items-center space-x-2">
        <Story />
        <Label htmlFor="terms">Accetto i termini e le condizioni</Label>
      </div>
    ),
  ],
  args: {
    id: 'terms',
  },
  argTypes: {
    checked: {
        description: 'Stato di selezione del checkbox',
        control: 'boolean',
    },
    indeterminate: {
        description: 'Stato indeterminato del checkbox',
        control: 'boolean',
    },
    disabled: {
        description: 'Disabilita l\'interazione',
        control: 'boolean',
    },
    onCheckedChange: {
        action: 'checkedChanged',
        description: 'Callback chiamata quando lo stato cambia',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}

/**
 * **Toggle Interaction**: Verifica il toggle del checkbox al click.
 */
export const ToggleInteraction: Story = {
  args: {
    id: 'terms',
  },
  decorators: [
    (Story) => (
      <div className="flex items-center space-x-2">
        <Story />
        <Label htmlFor="terms">Accetto i termini e le condizioni</Label>
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: /accetto i termini/i })
    await userEvent.click(checkbox)
    await userEvent.click(checkbox)
  },
}
