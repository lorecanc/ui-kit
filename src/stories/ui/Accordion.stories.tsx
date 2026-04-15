import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

/**
 * ## Overview
 * Accordion – Componente per contenuti espandibili organizzati in sezioni.
 *
 * Basato su Radix UI, l'`Accordion` consente agli utenti di mostrare e nascondere
 * sezioni di contenuto in modo accessibile. Supporta apertura singola o multipla.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Domanda</AccordionTrigger>
 *     <AccordionContent>Risposta</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/**
 * **Default**: Accordion a singola apertura con tre domande frequenti su un progetto.
 * Solo una sezione alla volta può essere aperta.
 */
export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Cosa include il progetto?</AccordionTrigger>
        <AccordionContent>
          Il progetto include la progettazione UI/UX, lo sviluppo frontend e backend,
          test di integrazione e il deployment iniziale. Sono inclusi anche 3 mesi di
          supporto post-lancio.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Come funziona il processo?</AccordionTrigger>
        <AccordionContent>
          Il processo si articola in fasi: raccolta requisiti, prototipazione,
          revisione con il cliente, sviluppo iterativo e infine rilascio con
          monitoraggio continuo delle performance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Qual è il prezzo?</AccordionTrigger>
        <AccordionContent>
          Il prezzo varia in base alla complessità del progetto. Offriamo pacchetti
          a partire da €5.000 per soluzioni base, fino a €50.000+ per progetti
          enterprise su misura. Contattaci per un preventivo personalizzato.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * **Multiple**: Modalità `type="multiple"` che permette di aprire più sezioni contemporaneamente.
 */
export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Requisiti tecnici</AccordionTrigger>
        <AccordionContent>
          Node.js 18+, React 19, TypeScript 5.x. Consigliamo l'uso di pnpm
          come package manager per la gestione delle dipendenze.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Requisiti di design</AccordionTrigger>
        <AccordionContent>
          Figma per la prototipazione, sistema di design tokens e componenti
          riutilizzabili documentati con Storybook.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tempistiche stimate</AccordionTrigger>
        <AccordionContent>
          Le tempistiche dipendono dalla complessità. Un progetto tipico richiede
          tra le 4 e le 12 settimane, con milestone intermedie settimanali.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * **WithDefaultValue**: Accordion con una sezione pre-aperta tramite `defaultValue`.
 */
export const WithDefaultValue: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Questo è aperto di default</AccordionTrigger>
        <AccordionContent>
          Questa sezione si presenta già aperta al caricamento della pagina.
          Utile per evidenziare informazioni importanti fin da subito.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Questa è chiusa</AccordionTrigger>
        <AccordionContent>
          Contenuto nascosto fino a quando l'utente non clicca sul trigger.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Anch'essa chiusa</AccordionTrigger>
        <AccordionContent>
          Ogni sezione può contenere testo, form o qualsiasi altro contenuto interattivo.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
