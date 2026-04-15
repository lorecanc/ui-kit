import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogMedia,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { TriangleAlertIcon } from 'lucide-react';

/**
 * ## Overview
 * AlertDialog – Modale di conferma per azioni critiche o irreversibili.
 *
 * A differenza del `Dialog` standard, l'`AlertDialog` è progettato per catturare
 * l'attenzione dell'utente prima di eseguire azioni distruttive. Supporta layout
 * con icona media e varianti dimensionali.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <AlertDialog>
 *   <AlertDialogTrigger asChild>
 *     <Button>Azione</Button>
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Conferma</AlertDialogTitle>
 *       <AlertDialogDescription>Descrizione</AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Annulla</AlertDialogCancel>
 *       <AlertDialogAction>Conferma</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */
const meta: Meta<typeof AlertDialog> = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

/**
 * **Default**: Dialog di conferma generico con pulsanti Annulla e Conferma.
 */
export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Apri dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sei sicuro?</AlertDialogTitle>
          <AlertDialogDescription>
            Questa azione richiederà la tua conferma prima di procedere.
            Assicurati di aver verificato tutte le informazioni.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annulla</AlertDialogCancel>
          <AlertDialogAction>Conferma</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

/**
 * **Destructive**: AlertDialog con icona di avviso e azione distruttiva per conferma eliminazione.
 * Utilizza `AlertDialogMedia` per l'icona e `variant="destructive"` sull'azione.
 */
export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Elimina progetto</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <TriangleAlertIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Eliminare il progetto?</AlertDialogTitle>
          <AlertDialogDescription>
            Questa azione è irreversibile. Il progetto, tutti i report associati,
            le credenziali operative e gli assets creati verranno eliminati
            definitivamente dal sistema.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annulla</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Elimina definitivamente</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

/**
 * **Small**: Variante compatta con `size="sm"` sul `AlertDialogContent`.
 * Ideale per conferme rapide con testo breve.
 */
export const Small: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Conferma rapida</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Salvare le modifiche?</AlertDialogTitle>
          <AlertDialogDescription>
            Le modifiche non salvate andranno perse.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Scarta</AlertDialogCancel>
          <AlertDialogAction>Salva</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
