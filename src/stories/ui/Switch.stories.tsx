import type { Meta, StoryObj } from '@storybook/react'
import { userEvent } from '@testing-library/user-event'
import { within } from '@testing-library/react'
import { Switch } from '@/components/ui/switch'

/**
 * ## Overview
 * Switch – Interruttore per attivare o disattivare un singolo stato binario.
 *
 * Alternativa visiva al checkbox, ideale per impostazioni on/off nelle preferenze utente.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Switch />
 *
 * <Switch size="sm" />
 *
 * <Switch disabled />
 * ```
 */
const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    size: 'default',
    disabled: false,
  },
  argTypes: {
    size: {
      description: 'Dimensione del toggle',
      control: 'select',
      options: ['default', 'sm'],
    },
    checked: {
      description: 'Stato di attivazione controllato',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabilita l\'interazione',
      control: 'boolean',
    },
    onCheckedChange: {
      action: 'checkedChanged',
      description: 'Callback chiamata quando lo stato cambia',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

/**
 * **Toggle Interaction**: Verifica il toggle dello switch al click.
 */
export const ToggleInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchEl = canvas.getByRole('switch')
    await userEvent.click(switchEl)
    await userEvent.click(switchEl)
  },
}
