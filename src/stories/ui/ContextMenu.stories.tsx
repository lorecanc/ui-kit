import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuShortcut,
} from '@/components/ui/context-menu';

/**
 * ## Overview
 * ContextMenu – Menu contestuale al click destro.
 *
 * Il `ContextMenu` è un menu che appare quando l'utente fa click destro su un elemento.
 * È utile per azioni rapide contestuali all'elemento selezionato. È costruito su Radix UI.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <ContextMenu>
 *   <ContextMenuTrigger>
 *     <div>Area cliccabile</div>
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Azione 1</ContextMenuItem>
 *     <ContextMenuItem>Azione 2</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * ```
 */
const meta: Meta<typeof ContextMenu> = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

/**
 * **Default**: Menu contestuale con voci base, separatori e azione distruttiva.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-200 rounded-lg">
      <ContextMenu {...args}>
        <ContextMenuTrigger className="flex h-full w-full items-center justify-center rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100">
          Clicca destro qui
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuItem>
            Indietro
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Avanti
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Ricarica
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Salva
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">
            Esci
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};

/**
 * **WithCheckboxes**: Menu contestuale con voci checkbox.
 */
export const WithCheckboxes: Story = {
  render: (args) => {
    const [showBar, setShowBar] = useState(true);
    const [showGrid, setShowGrid] = useState(false);

    return (
      <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-200 rounded-lg">
        <ContextMenu {...args}>
          <ContextMenuTrigger className="flex h-full w-full items-center justify-center rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100">
            Clicca destro qui
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuLabel>Visualizzazione</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={showBar}
              onCheckedChange={setShowBar}
            >
              Mostra barra
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showGrid}
              onCheckedChange={setShowGrid}
            >
              Mostra griglia
            </ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    );
  },
};