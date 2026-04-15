import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';

/**
 * ## Overview
 * Textarea – Area di testo multilinea per la raccolta di contenuti estesi.
 *
 * Permette l'inserimento di testo libero su più righe, ideale per commenti, feedback e descrizioni lunghe.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Textarea placeholder="Inserisci testo..." />
 *
 * <Textarea disabled value="Testo non modificabile" />
 *
 * <Textarea aria-invalid={true} placeholder="Campo obbligatorio" />
 * ```
 */
const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Inserisci testo...',
    disabled: false,
  },
  argTypes: {
    placeholder: {
      description: 'Testo suggerito appare quando la textarea è vuota',
      control: 'text',
    },
    disabled: {
      description: 'Disabilita l\'interazione con la textarea',
      control: 'boolean',
    },
    rows: {
      description: 'Numero iniziale di righe visibili',
      control: 'number',
    },
    className: {
      description: 'Stile o larghezza arbitraria aggiuntiva',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Testo non modificabile',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Questo è un contenuto precompilato nella textarea.',
  },
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Campo obbligatorio',
  },
};
