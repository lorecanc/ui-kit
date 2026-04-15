import type { Meta, StoryObj } from '@storybook/react'
import { userEvent } from '@testing-library/user-event'
import { within } from '@testing-library/react'
import { Button } from '@/components/ui/button'

/**
 * ## Overview
 * Button – Componente per azioni primarie, secondarie o distruttive.
 * 
 * Il `Button` è uno dei componenti chiave del design system, progettato per comunicare all'utente 
 * che può scatenare un'azione o inviare dati (es. in un Form).
 *
 * ## Linee guida di UX/UI
 * - **Scopo:** Indicare l'azione primaria o secondaria disponibile nella vista.
 * - **Gerarchia:** Usa la variante `default` (Primary) al massimo una o due volte per pagina 
 *   per evitare di confondere l'utente.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * // Uso primario
 * <Button variant="default" onClick={...}>Continua</Button>
 * 
 * // Azione distruttiva (es. Elimina)
 * <Button variant="destructive" onClick={...}>Elimina Progetto</Button>
 * ```
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    onClick: { action: 'clicked', description: 'Funzione chiamata al click sul pulsante' },
    variant: {
      description: 'Stile visivo del pulsante in base alla gerarchia dell’azione',
      control: 'select',
      options: ['default', 'outline', 'ghost', 'link', 'destructive', 'secondary'],
    },
    size: {
      description: 'Dimensione del pulsante, da icon a large',
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: {
      description: 'Disabilita il componente, applicando stile e impedendo interazioni',
      control: 'boolean',
    },
    asChild: {
      description: 'Passa il render a un componente figlio (es. tag `<a>`) invece di usare `<button>`',
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * **Default / Primary**: Usato per la Call To Action principale.
 * Indica all'utente qual è l'azione più importante della pagina.
 */
export const Default: Story = {
  args: { variant: 'default' },
}

/**
 * **Click Interaction**: Verifica che il pulsante risponda correttamente al click.
 */
export const ClickInteraction: Story = {
  args: { variant: 'default', children: 'Click Me' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /click me/i })
    await userEvent.click(button)
  },
}

/**
 * **Outline**: Usato per le azioni secondarie che devono essere visibili 
 * ma non devono rubare l'attenzione dalla CTA principale.
 */
export const Outline: Story = {
  args: { variant: 'outline' },
};

/**
 * **Destructive**: Usato esclusivamente per azioni irreversibili o che eliminano dati 
 * (es. cancellare un record). Richiede l'uso attento del colore rosso Havas.
 */
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete Item' },
};

/**
 * **Ghost**: Usato quasi sempre all'interno di dropdown, toolbar o menù. 
 * Privo di sfondo finché l'utente non vi passa sopra col cursor.
 */
export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Cancel' },
};

/**
 * **Disabled**: Un pulsante in stato disabilitato. Utilizzato quando l'azione 
 * o l'invio del form non è attualmente possibile.
 */
export const Disabled: Story = {
  args: { variant: 'default', children: 'Not Allowed', disabled: true },
};

/**
 * **Extra Small**: Dimensione XS per spazi molto compatti.
 */
export const ExtraSmall: Story = {
  args: { size: 'xs', children: 'XS Button' },
};

/**
 * **Icon XS**: Pulsante icona extra piccolo.
 */
export const IconExtraSmall: Story = {
  args: { size: 'icon-xs', children: '🔍' },
};

/**
 * **Icon Small**: Pulsante icona piccolo.
 */
export const IconSmall: Story = {
  args: { size: 'icon-sm', children: '⚙️' },
};

/**
 * **Icon Default**: Pulsante icona dimensione standard.
 */
export const IconDefault: Story = {
  args: { size: 'icon', children: '➕' },
};

/**
 * **Icon Large**: Pulsante icona grande.
 */
export const IconLarge: Story = {
  args: { size: 'icon-lg', children: '🎯' },
};

/**
 * **All Sizes**: Panoramica di tutte le dimensioni disponibili.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * **All Icon Sizes**: Panoramica di tutte le dimensioni icona.
 */
export const AllIconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="icon-xs">🔍</Button>
      <Button size="icon-sm">⚙️</Button>
      <Button size="icon">➕</Button>
      <Button size="icon-lg">🎯</Button>
    </div>
  ),
};

/**
 * **Secondary**: Variante secondaria per azioni meno importanti.
 */
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary Action' },
};

/**
 * **Link**: Variante link per navigazione inline.
 */
export const Link: Story = {
  args: { variant: 'link', children: 'Go to documentation' },
};

/**
 * **Loading State**: Pulsante in stato di caricamento.
 */
export const Loading: Story = {
  args: { variant: 'default', children: 'Loading...', disabled: true },
  render: (args) => (
    <Button {...args} className="opacity-75 cursor-wait">
      <span className="animate-pulse">Loading...</span>
    </Button>
  ),
};
