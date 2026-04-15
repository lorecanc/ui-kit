import type { Meta, StoryObj } from '@storybook/react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';

/**
 * ## Overview
 * Resizable – Pannelli ridimensionabili trascinabili dall'utente.
 *
 * Basato su `react-resizable-panels`, permette di creare layout
 * flessibili con pannelli orizzontali o verticali.
 *
 * ## Linee guida di UX/UI
 * - **Handle:** Usa `withHandle` per mostrare un grip visibile.
 * - **Direzione:** Imposta `direction` su "horizontal" o "vertical".
 * - **Dimensioni:** Usa `defaultSize` per definire la dimensione iniziale dei pannelli.
 */
const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

/**
 * **Default**: Layout orizzontale con due pannelli ridimensionabili
 * separati da un handle invisibile.
 */
export const Default: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Pannello Sinistro</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Pannello Destro</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

/**
 * **Vertical**: Layout verticale con due pannelli impilati
 * e un handle orizzontale tra di essi.
 */
export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup orientation="vertical" className="min-h-[300px] rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Pannello Superiore</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Pannello Inferiore</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

/**
 * **WithHandle**: Layout con handle visibile dotato di grip,
 * per rendere evidente la possibilità di trascinamento.
 */
export const WithHandle: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Pannello Sinistro</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Pannello Destro</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

/**
 * **ThreePanels**: Layout con tre pannelli e due handle,
 * utile per layout a colonne tipo IDE o dashboard.
 */
export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] rounded-lg border">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Contenuto Principale</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Pannello Laterale</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
