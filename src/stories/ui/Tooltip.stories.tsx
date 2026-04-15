import type { Meta, StoryObj } from '@storybook/react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

/**
 * ## Overview
 * Tooltip – Suggerimento testuale che appare al passaggio del mouse o al focus.
 *
 * Basato su Radix UI, il `Tooltip` fornisce informazioni contestuali brevi.
 * Deve essere wrappato da `TooltipProvider` per il delay di apertura.
 *
 * ## Linee guida di UX/UI
 * - **Contenuto:** Testo breve e descrittivo, massimo una frase.
 * - **Attivazione:** Hover o focus su elemento interattivo.
 * - **Posizionamento:** Specificabile tramite prop `side` (top, bottom, left, right).
 */
const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * **Default**: Tooltip posizionato di default (top) con trigger Button.
 */
export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Descrizione tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

/**
 * **PositionTop**: Tooltip posizionato sopra il trigger con `side="top"`.
 */
export const PositionTop: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip in alto</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

/**
 * **PositionLeft**: Tooltip posizionato a sinistra del trigger con `side="left"`.
 */
export const PositionLeft: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip a sinistra</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

/**
 * **PositionRight**: Tooltip posizionato a destra del trigger con `side="right"`.
 */
export const PositionRight: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip a destra</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

/**
 * **PositionBottom**: Tooltip posizionato sotto il trigger con `side="bottom"`.
 */
export const PositionBottom: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip in basso</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
