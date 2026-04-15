import type { Meta, StoryObj } from '@storybook/react'
import { userEvent } from '@testing-library/user-event'
import { within } from '@testing-library/react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/**
 * ## Overview
 * Dialog – Interfaccia modale per catturare il focus.
 * 
 * Il `Dialog` interrompe il flusso applicativo oscurando la pagina sottostante e ponendo 
 * il focus dell'utente su un'azione critica o un modulo in isolamento. Gestisce nativamente Escape
 * key e il blocco del focus al suo interno (a11y).
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button variant="outline">Apri Dialog</Button>
 *   </DialogTrigger>
 *   <DialogContent sm="max-w-md">
 *     <DialogHeader>
 *       <DialogTitle>Azione Richiesta</DialogTitle>
 *     </DialogHeader>
 *     <div>Contenuto form o dati</div>
 *     <DialogFooter>
 *       <DialogClose asChild><Button>Conferma</Button></DialogClose>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/**
 * **Default / Demo**: Costruito tipicamente con un bottone Trigger, un Header espiacativo
 * e le Call to actions nel Footer (Accetta o Annulla). La x in alto è renderizzata per default.
 */
export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Modifica Profilo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifica profilo</DialogTitle>
          <DialogDescription>
            Rivedi i tuoi dati base di Havas e conferma per aggiornare il database.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" defaultValue="Lorenzo" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Ruolo
            </Label>
            <Input id="username" defaultValue="Sviluppatore / Frontend" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">Annulla</Button>
          </DialogClose>
          <Button type="submit">Salva Modifiche</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * **Destructive Modal**: Dialog di conferma distruttiva (Pattern classico per Delete).
 * L'azione che cancella l'entità dev'esser mappata al brand color di pericolo (`variant="destructive"`).
 */
export const DestructiveConfirmation: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="destructive">Elimina Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sei assolutamente sicuro?</DialogTitle>
          <DialogDescription>
            Questa azione compilerà l'hard-deletion. Tutti i report,
            credenziali operative e assets creati finora verranno estirpati.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-between items-center mt-4">
          <DialogClose asChild>
            <Button type="button" variant="ghost">Non ora, per fortuna</Button>
          </DialogClose>
          <Button type="button" variant="destructive">Si, Elimina Definitivamente</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

/**
 * **Open Close Interaction**: Verifica apertura del dialog al click sul trigger
 * e chiusura con tasto Escape.
 */
export const OpenCloseInteraction: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Modifica Profilo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifica profilo</DialogTitle>
          <DialogDescription>
            Rivedi i tuoi dati base di Havas e conferma per aggiornare il database.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" defaultValue="Lorenzo" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Ruolo
            </Label>
            <Input id="username" defaultValue="Sviluppatore / Frontend" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">Annulla</Button>
          </DialogClose>
          <Button type="submit">Salva Modifiche</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: /modifica profilo/i })
    await userEvent.click(trigger)
    await userEvent.keyboard('{Escape}')
  },
}
