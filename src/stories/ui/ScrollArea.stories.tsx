import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@/components/ui/scroll-area';

/**
 * ## Overview
 * ScrollArea – Un'area di scorrimento personalizzata che sostituisce la scrollbar nativa del browser.
 * 
 * Fornisce un aspetto coerente tra diversi sistemi operativi e browser, mantenendo l'estetica del design system.
 *
 * ## Linee guida di UX/UI
 * - **Contenuto:** Usalo quando il contenuto eccede le dimensioni del container.
 * - **Visibilità:** La scrollbar appare solo quando l'utente interagisce con l'area (di default).
 */
const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Notifiche</h4>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="text-sm">
            Messaggio di log di sistema #{i + 1}: Il server ha risposto correttamente alla richiesta.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
    render: () => (
      <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
        <div className="flex w-max p-4 space-x-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-20 w-32 shrink-0 rounded bg-muted flex items-center justify-center text-xs">
              Card #{i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
  };
