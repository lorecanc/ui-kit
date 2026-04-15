import type { Meta, StoryObj } from '@storybook/react';
import { DirectionProvider } from '@/components/ui/direction';

/**
 * ## Overview
 * DirectionProvider – Provider per la direzione del testo (LTR / RTL).
 *
 * Avvolge i discendenti e imposta la direzione di layout, utile per il supporto multilingua con lingue right-to-left come l'arabo o l'ebraico.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <DirectionProvider dir="rtl">
 *   <p>مرحبا بالعالم</p>
 * </DirectionProvider>
 * ```
 */
const meta: Meta<typeof DirectionProvider> = {
  title: 'UI/Direction',
  component: DirectionProvider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DirectionProvider>;

export const LTR: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="space-y-2 rounded-md border p-4">
        <p className="text-sm font-medium">Direzione: Left-to-Right</p>
        <p className="text-sm text-muted-foreground">Il contenuto scorre da sinistra a destra, come nelle lingue occidentali.</p>
        <div className="flex gap-2">
          <span className="rounded bg-primary px-2 py-1 text-xs text-primary-foreground">Primo</span>
          <span className="rounded bg-primary px-2 py-1 text-xs text-primary-foreground">Secondo</span>
          <span className="rounded bg-primary px-2 py-1 text-xs text-primary-foreground">Terzo</span>
        </div>
      </div>
    </DirectionProvider>
  ),
};

export const RTL: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div className="space-y-2 rounded-md border p-4" dir="rtl">
        <p className="text-sm font-medium">اتجاه: من اليمين إلى اليسار</p>
        <p className="text-sm text-muted-foreground">المحتوى يتدفق من اليمين إلى اليسار، كما في اللغات السامية.</p>
        <div className="flex gap-2">
          <span className="rounded bg-primary px-2 py-1 text-xs text-primary-foreground">الأول</span>
          <span className="rounded bg-primary px-2 py-1 text-xs text-primary-foreground">الثاني</span>
          <span className="rounded bg-primary px-2 py-1 text-xs text-primary-foreground">الثالث</span>
        </div>
      </div>
    </DirectionProvider>
  ),
};
