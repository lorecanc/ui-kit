import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';

/**
 * ## Overview
 * Input – Campo di testo standard per la raccolta di dati.
 * 
 * L'`Input` base cattura testo e password utente, implementando nativamente stili, hover 
 * e animazioni di auto-focus allineati con i field standard.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * // Normale
 * <Input type="email" placeholder="Email" />
 * 
 * // Disabilitato
 * <Input disabled type="text" placeholder="Nome non disponibile" />
 * ```
 */
const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    type: 'text',
    disabled: false,
    placeholder: 'Inserisci qui il testo...',
  },
  argTypes: {
    type: {
      description: 'Tipo di dati attesi o formato tastiera nativa, standard HTML',
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      description: 'Stato inattivo, blocca il focus',
      control: 'boolean',
    },
    placeholder: {
      description: 'Testo suggerito neutro, appare quando l’input è vuoto',
      control: 'text',
    },
    className: {
      description: 'Stile o larghezza arbitraria aggiuntiva',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * **Default / Base**: 
 * Input stringa standard in stato neutrale, pronto per l'interazione.
 */
export const Default: Story = {};

/**
 * **Email / Type modificato**: 
 * Un format input, in questo esempio con l'attributo `type="email"`. Notare l'autohint che nativamente il browser applica di conseguenza.
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'mario.rossi@example.com',
  },
};

/**
 * **Password / Censored**: 
 * Maschera i caratteri digitati. Esempio standard d'autenticazione.
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password (min. 8 caratteri)',
  },
};

/**
 * **Disabled**:
 * Input parzialmente oscurato, previene ogni click e copiatura del contorno Focus dal Tab indexing della pagina.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Autocompletato ma bloccato...',
    value: 'Utente bloccato',
  },
};

/**
 * **Invalid / Error**: 
 * Input in stato invalido, forzando la visuale critica del brand rosso. Tipicamente azionato da form validators.
 */
export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Campo obbligatorio in errore',
  },
};
