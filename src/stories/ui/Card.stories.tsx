import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/**
 * ## Overview
 * Card – Contenitore versatile per raggruppare informazioni e azioni correlate in blocchi distinti.
 * 
 * Il `Card` compone internamente diverse sezioni tipicamente necessarie (header, titolo, contenuto e azioni)
 * mantenendo una struttura visiva coerente con i bordi ad alto contrasto del design system Havas.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Titolo Card</CardTitle>
 *     <CardDescription>Sottotitolo descrittivo</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Contenuto principale es. Form, Tabella, Testo</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Azione primario</Button>
 *   </CardFooter>
 * </Card>
 * ```
 */
const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    className: 'w-[350px]',
  },
  argTypes: {
    className: {
      description: 'Classi addizionali per sovrascrivere o aggiungere stili e dimensioni alla card principale',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * **Default**: L'istanziazione standard di una Card con Header, Contenuto e Footer.
 * Usata universalmente per form, presentazioni di dati a blocchi o sezioni di pagina.
 */
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Project Alpha</CardTitle>
        <CardDescription>Gestisci i dettagli del progetto Alpha qui.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          Fase corrente: <strong>Integrazione UI</strong><br />
          Scadenza: <strong>14 Novembre</strong>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancella</Button>
        <Button>Salva Progetto</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * **Con Azione in Header (`CardAction`)**: Utilizzata per mostrare bottoni
 * icona o menu (dropdown) pertinenti al titolo, allocati nello spazio dell'header.
 */
export const WithHeaderAction: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader className="flex flex-row items-center">
        <div>
          <CardTitle>Notifiche</CardTitle>
          <CardDescription>Hai 3 messaggi non letti.</CardDescription>
        </div>
        <CardAction>
          <Button variant="ghost" size="icon" aria-label="Mark all as read">
            ✔
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">La cronologia messaggi viene mostrata qui.</p>
      </CardContent>
    </Card>
  ),
};

/**
 * **Minimal**: Utilizzata per blocchi di utilità, cruscotti o elementi metrici
 * in cui un header o un footer formattati potrebbero risultare eccessivi.
 */
export const Minimal: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent className="pt-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold leading-none">Visite Totali</h3>
          <p className="text-sm font-medium text-muted-foreground">Ultimi 7 giorni</p>
        </div>
        <div className="text-2xl font-bold">+1,234</div>
      </CardContent>
    </Card>
  ),
};
