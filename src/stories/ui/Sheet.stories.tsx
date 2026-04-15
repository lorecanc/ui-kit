import type { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

/**
 * ## Overview
 * Sheet – Un pannello laterale (overlay) che scivola all'interno della vista.
 * 
 * Viene spesso utilizzato per menù di navigazione mobile, filtri avanzati o dettagli rapidi senza cambiare contesto.
 *
 * ## Linee guida di UX/UI
 * - **Posizionamento:** Può apparire da qualsiasi lato (top, bottom, left, right).
 * - **Contenuto:** Ideale per form complessi o navigazione che richiede persistenza temporanea.
 */
const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the sheet is open',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Apri Pannello Destra</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Modifica Profilo</SheetTitle>
          <SheetDescription>
            Apporta modifiche al tuo profilo qui. Clicca su salva quando hai finito.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
           {/* Form content would go here */}
           <div className="h-32 rounded bg-muted animate-pulse" />
        </div>
        <Button className="w-full">Salva Cambiamenti</Button>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
    render: () => (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Apri Menù Sinistra</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigazione</SheetTitle>
            <SheetDescription>
              Accedi rapidamente alle sezioni del portale.
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-2 mt-4">
            <Button variant="ghost" className="justify-start">Dashboard</Button>
            <Button variant="ghost" className="justify-start">Progetti</Button>
            <Button variant="ghost" className="justify-start">Impostazioni</Button>
          </nav>
        </SheetContent>
      </Sheet>
    ),
  };
