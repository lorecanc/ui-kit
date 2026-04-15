import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * ## Overview
 * Sonner – Sistema di notifiche toast per feedback utente.
 *
 * Basato sulla libreria Sonner, offre toast con diverse varianti
 * (success, error, warning, info) integrati con il tema dell'applicazione.
 *
 * ## Linee guida di UX/UI
 * - **Messaggi:** Usa frasi brevi e chiare per comunicare lo stato.
 * - **Tipologia:** Scegli il tipo corretto (successo, errore, avviso, info) in base al contesto.
 * - **Posizionamento:** Il Toaster gestisce la posizione e la gestione multipla dei toast.
 */
const meta: Meta<typeof Toaster> = {
  title: 'UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

/**
 * **Default**: Toast base con messaggio generico.
 * Clicca il bottone per mostrare un toast informativo.
 */
export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <Button onClick={() => toast('Messaggio inviato!')}>Mostra Toast</Button>
    </>
  ),
};

/**
 * **Success**: Toast di successo con icona e colore dedicato.
 * Ideale per confermare operazioni completate con esito positivo.
 */
export const Success: Story = {
  render: () => (
    <>
      <Toaster />
      <Button onClick={() => toast.success('Operazione completata!')}>
        Toast Successo
      </Button>
    </>
  ),
};

/**
 * **Error**: Toast di errore per segnalare fallimenti
 * o problemi durante un'operazione.
 */
export const Error: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="destructive"
        onClick={() => toast.error('Errore durante l\'operazione')}
      >
        Toast Errore
      </Button>
    </>
  ),
};

/**
 * **Warning**: Toast di avviso per situazioni che richiedono
 * attenzione ma non rappresentano un errore critico.
 */
export const Warning: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => toast.warning('Attenzione!')}
      >
        Toast Avviso
      </Button>
    </>
  ),
};

/**
 * **Info**: Toast informativo per comunicare dettagli
 * o suggerimenti utili all'utente.
 */
export const Info: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="secondary"
        onClick={() => toast.info('Informazione utile')}
      >
        Toast Info
      </Button>
    </>
  ),
};
