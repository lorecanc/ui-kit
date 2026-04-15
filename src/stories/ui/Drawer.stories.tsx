import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

/**
 * ## Overview
 * Drawer – Pannello laterale che scivola dal bordo dello schermo.
 *
 * Basato sulla libreria vaul, il `Drawer` è un'alternativa mobile-first al `Sheet` e al `Dialog`,
 * con supporto per swipe gestures e posizionamento su tutti i lati.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Drawer>
 *   <DrawerTrigger asChild>
 *     <Button>Apri</Button>
 *   </DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Titolo</DrawerTitle>
 *     </DrawerHeader>
 *     <DrawerFooter>
 *       <DrawerClose asChild><Button>Chiudi</Button></DrawerClose>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */
const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

/**
 * **Default**: Drawer inferiore con header, contenuto form e footer con azione di chiusura.
 */
export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Apri Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Modifica Profilo</DrawerTitle>
          <DrawerDescription>
            Aggiorna le tue informazioni personali e conferma per salvare.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="grid gap-2">
            <Label htmlFor="drawer-name">Nome</Label>
            <Input id="drawer-name" defaultValue="Lorenzo" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="drawer-email">Email</Label>
            <Input id="drawer-email" defaultValue="lorenzo@havas.com" />
          </div>
        </div>
        <DrawerFooter>
          <Button>Salva modifiche</Button>
          <DrawerClose asChild>
            <Button variant="outline">Annulla</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

/**
 * **Left**: Drawer che scivola dal lato sinistro con `direction="left"`.
 */
export const Left: Story = {
  render: () => (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Drawer Sinistra</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigazione</DrawerTitle>
          <DrawerDescription>
            Accedi alle sezioni del portale.
          </DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-col gap-2 p-4">
          <Button variant="ghost" className="justify-start">Dashboard</Button>
          <Button variant="ghost" className="justify-start">Progetti</Button>
          <Button variant="ghost" className="justify-start">Impostazioni</Button>
        </nav>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Chiudi</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

/**
 * **Right**: Drawer che scivola dal lato destro con `direction="right"`.
 */
export const Right: Story = {
  render: () => (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Drawer Destra</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Dettagli Progetto</DrawerTitle>
          <DrawerDescription>
            Informazioni rapide sul progetto selezionato.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-3 p-4 text-sm">
          <div><span className="font-medium">Nome:</span> Havas UI Kit</div>
          <div><span className="font-medium">Stato:</span> In sviluppo</div>
          <div><span className="font-medium">Priorità:</span> Alta</div>
          <div><span className="font-medium">Scadenza:</span> 15 Aprile 2026</div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Chiudi</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
