import type { Meta, StoryObj } from '@storybook/react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronsUpDownIcon } from 'lucide-react';

/**
 * ## Overview
 * Collapsible – Componente per mostrare/nascondere contenuti in modo accessibile.
 *
 * Basato su Radix UI, il `Collapsible` è un wrapper leggero per toggle di contenuto.
 * A differenza dell'Accordion, è pensato per un singolo blocco espandibile.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Collapsible>
 *   <CollapsibleTrigger asChild>
 *     <Button variant="ghost" size="sm">Toggle</Button>
 *   </CollapsibleTrigger>
 *   <CollapsibleContent>Contenuto</CollapsibleContent>
 * </Collapsible>
 * ```
 */
const meta: Meta<typeof Collapsible> = {
  title: 'UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

/**
 * **Default**: Collapsible con trigger a bottone e contenuto nascosto di default.
 */
export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Cosa c'è qui?</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDownIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        Questo contenuto è sempre visibile come anteprima.
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          Contenuto espandibile nascosto. Può contenere dettagli aggiuntivi,
          form, tabelle o qualsiasi altro elemento UI.
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Ulteriore contenuto che appare quando il collapsible è aperto.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

/**
 * **OpenByDefault**: Collapsible con stato iniziale aperto tramite `defaultOpen={true}`.
 */
export const OpenByDefault: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Dettagli tecnici</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDownIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        Informazioni principali sempre visibili.
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm font-mono text-xs">
          Versione: 2.4.1<br />
          Ultimo aggiornamento: 15 Marzo 2026<br />
          Stato: Attivo
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
