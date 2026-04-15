import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

/**
 * ## Overview
 * Label – Componente per etichette di testo associate a controlli di input.
 * 
 * Migliora l'accessibilità e l'usabilità fornendo una descrizione testuale cliccabile per i campi del form.
 *
 * ## Linee guida di UX/UI
 * - **Associazione:** Usa sempre `htmlFor` per collegare la label al suo input tramite l'ID.
 * - **Stile:** Mantiene una tipografia chiara e leggibile, ereditando i pesi dal design system.
 */
const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Nome Utente',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label {...args} htmlFor="email-input" />
      <Input type="email" id="email-input" placeholder="Email" />
    </div>
  ),
  args: {
    children: 'Email Address',
  },
};
