import type { Meta, StoryObj } from '@storybook/react';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty';
import { Button } from '@/components/ui/button';
import { InboxIcon, FolderOpenIcon } from 'lucide-react';

/**
 * ## Overview
 * Empty – Componente per visualizzare stati vuoti o "nessun risultato".
 * 
 * L'`Empty` viene utilizzato quando una lista, un contenuto o una ricerca
 * non restituisce elementi da mostrare all'utente.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Empty>
 *   <EmptyMedia variant="icon">
 *     <InboxIcon />
 *   </EmptyMedia>
 *   <EmptyTitle>Nessun risultato</EmptyTitle>
 *   <EmptyDescription>Non ci sono elementi da mostrare</EmptyDescription>
 * </Empty>
 * ```
 */
const meta: Meta<typeof Empty> = {
  title: 'UI/Empty',
  component: Empty,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Empty>;

/**
 * **Default**: Stato vuoto con icona, titolo e descrizione.
 * Utilizzato per indicare l'assenza di contenuto.
 */
export const Default: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyMedia variant="icon">
        <InboxIcon />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>Nessun risultato</EmptyTitle>
        <EmptyDescription>Non ci sono elementi da mostrare</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

/**
 * **WithAction**: Stato vuoto con azione per creare nuovo contenuto.
 * Include un pulsante per permettere all'utente di aggiungere elementi.
 */
export const WithAction: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyMedia variant="icon">
        <InboxIcon />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>Nessun risultato</EmptyTitle>
        <EmptyDescription>Non ci sono elementi da mostrare</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Crea nuovo</Button>
      </EmptyContent>
    </Empty>
  ),
};

/**
 * **DefaultMedia**: Stato vuoto senza variante icona.
 * Utilizzato quando non serve un'icona visiva.
 */
export const DefaultMedia: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyMedia>
        <FolderOpenIcon className="size-8 text-muted-foreground" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>Nessun elemento</EmptyTitle>
        <EmptyDescription>La cartella è vuota</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};