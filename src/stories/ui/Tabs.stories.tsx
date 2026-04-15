import type { Meta, StoryObj } from '@storybook/react'
import { userEvent } from '@testing-library/user-event'
import { within } from '@testing-library/react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'

/**
 * ## Overview
 * Tabs – Component per navigazione a schede.
 *
 * Il `Tabs` è un componente che permette di organizzare il contenuto in schede separate.
 * L'utente può navigare tra i contenuti senza ricaricare la pagina. È costruito su Radix UI.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Tabs defaultValue="overview">
 *   <TabsList>
 *     <TabsTrigger value="overview">Panoramica</TabsTrigger>
 *     <TabsTrigger value="settings">Impostazioni</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="overview">Contenuto scheda 1</TabsContent>
 *   <TabsContent value="settings">Contenuto scheda 2</TabsContent>
 * </Tabs>
 * ```
 */
const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default value for the selected tab',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the tab to select',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback when the selected tab changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * **Default**: Tabs con tre schede: Panoramica, Configurazione, Sicurezza.
 */
export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="panoramica">
      <TabsList>
        <TabsTrigger value="panoramica">Panoramica</TabsTrigger>
        <TabsTrigger value="configurazione">Configurazione</TabsTrigger>
        <TabsTrigger value="sicurezza">Sicurezza</TabsTrigger>
      </TabsList>
      <TabsContent value="panoramica" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Panoramica. Qui puoi visualizzare una panoramica generale del sistema.
        </p>
      </TabsContent>
      <TabsContent value="configurazione" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Configurazione. Qui puoi modificare le impostazioni del sistema.
        </p>
      </TabsContent>
      <TabsContent value="sicurezza" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Sicurezza. Qui puoi gestire le impostazioni di sicurezza.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * **LineVariant**: Tabs con variante "line" sulla TabsList.
 */
export const LineVariant: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="panoramica">
      <TabsList variant="line">
        <TabsTrigger value="panoramica">Panoramica</TabsTrigger>
        <TabsTrigger value="configurazione">Configurazione</TabsTrigger>
        <TabsTrigger value="sicurezza">Sicurezza</TabsTrigger>
      </TabsList>
      <TabsContent value="panoramica" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Panoramica. Qui puoi visualizzare una panoramica generale del sistema.
        </p>
      </TabsContent>
      <TabsContent value="configurazione" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Configurazione. Qui puoi modificare le impostazioni del sistema.
        </p>
      </TabsContent>
      <TabsContent value="sicurezza" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Sicurezza. Qui puoi gestire le impostazioni di sicurezza.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * **DisabledTab**: Tabs con una scheda disabilitata.
 */
export const DisabledTab: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="panoramica">
      <TabsList>
        <TabsTrigger value="panoramica">Panoramica</TabsTrigger>
        <TabsTrigger value="configurazione" disabled>Configurazione</TabsTrigger>
        <TabsTrigger value="sicurezza">Sicurezza</TabsTrigger>
      </TabsList>
      <TabsContent value="panoramica" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Panoramica. Qui puoi visualizzare una panoramica generale del sistema.
        </p>
      </TabsContent>
      <TabsContent value="configurazione" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Configurazione. Qui puoi modificare le impostazioni del sistema.
        </p>
      </TabsContent>
      <TabsContent value="sicurezza" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Sicurezza. Qui puoi gestire le impostazioni di sicurezza.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * **WithDefaultValue**: Tabs con defaultValue impostato sulla seconda scheda.
 */
export const WithDefaultValue: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="configurazione">
      <TabsList>
        <TabsTrigger value="panoramica">Panoramica</TabsTrigger>
        <TabsTrigger value="configurazione">Configurazione</TabsTrigger>
        <TabsTrigger value="sicurezza">Sicurezza</TabsTrigger>
      </TabsList>
      <TabsContent value="panoramica" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Panoramica. Qui puoi visualizzare una panoramica generale del sistema.
        </p>
      </TabsContent>
      <TabsContent value="configurazione" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Configurazione. Qui puoi modificare le impostazioni del sistema.
        </p>
      </TabsContent>
      <TabsContent value="sicurezza" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Sicurezza. Qui puoi gestire le impostazioni di sicurezza.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

/**
 * **TabSwitchInteraction**: Verifica il cambio di scheda al click.
 */
export const TabSwitchInteraction: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="panoramica">
      <TabsList>
        <TabsTrigger value="panoramica">Panoramica</TabsTrigger>
        <TabsTrigger value="configurazione">Configurazione</TabsTrigger>
        <TabsTrigger value="sicurezza">Sicurezza</TabsTrigger>
      </TabsList>
      <TabsContent value="panoramica" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Panoramica. Qui puoi visualizzare una panoramica generale del sistema.
        </p>
      </TabsContent>
      <TabsContent value="configurazione" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Configurazione. Qui puoi modificare le impostazioni del sistema.
        </p>
      </TabsContent>
      <TabsContent value="sicurezza" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-muted-foreground">
          Contenuto della scheda Sicurezza. Qui puoi gestire le impostazioni di sicurezza.
        </p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const configTab = canvas.getByRole('tab', { name: /configurazione/i })
    await userEvent.click(configTab)
    const securityTab = canvas.getByRole('tab', { name: /sicurezza/i })
    await userEvent.click(securityTab)
  },
}