import type { Meta, StoryObj } from '@storybook/react';
import { Field, FieldLabel, FieldDescription, FieldSet as FieldSetComponent, FieldLegend, FieldGroup, FieldSeparator, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

/**
 * ## Overview
 * Field – Componente per strutturare form e campi di input con etichette e descrizioni.
 * 
 * Il `Field` fornisce una struttura coerente per i campi dei form, supportando
 * orientamento verticale, orizzontale e responsive.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Field>
 *   <FieldLabel>Email</FieldLabel>
 *   <FieldDescription>Inserisci la tua email</FieldDescription>
 *   <Input type="email" placeholder="esempio@email.com" />
 * </Field>
 * ```
 */
const meta: Meta<typeof Field> = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      description: 'Orientamento del campo',
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

/**
 * **Default**: Campo con etichetta, descrizione e input in orientamento verticale.
 * Struttura base per un campo form.
 */
export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Email</FieldLabel>
      <FieldDescription>Inserisci il tuo indirizzo email</FieldDescription>
      <Input type="email" placeholder="mario.rossi@havas.com" />
    </Field>
  ),
};

/**
 * **Horizontal**: Campo con etichetta e input sulla stessa riga.
 * Utilizzato quando lo spazio verticale è limitato.
 */
export const Horizontal: Story = {
  render: (args) => (
    <Field {...args} orientation="horizontal">
      <FieldLabel>Username</FieldLabel>
      <Input placeholder="mario.rossi" />
    </Field>
  ),
};

/**
 * **Responsive**: Campo che cambia orientamento in base alla viewport.
 * Verticale su mobile, orizzontale su desktop.
 */
export const Responsive: Story = {
  render: (args) => (
    <Field {...args} orientation="responsive">
      <FieldLabel>Telefono</FieldLabel>
      <Input type="tel" placeholder="+39 123 456 7890" />
    </Field>
  ),
};

/**
 * **WithError**: Campo con messaggio di errore.
 * Utilizzato per mostrare errori di validazione all'utente.
 */
export const WithError: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Password</FieldLabel>
      <Input type="password" placeholder="Inserisci password" aria-invalid="true" />
      <FieldError>La password deve contenere almeno 8 caratteri</FieldError>
    </Field>
  ),
};

/**
 * **FieldSet**: Gruppo di campi con legend condivisa.
 * Utilizzato per raggruppare campi correlati in un form.
 */
export const WithFieldSet: Story = {
  render: () => (
    <FieldSetComponent>
      <FieldLegend>Informazioni Personali</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel>Nome</FieldLabel>
          <Input placeholder="Mario" />
        </Field>
        <Field>
          <FieldLabel>Cognome</FieldLabel>
          <Input placeholder="Rossi" />
        </Field>
        <FieldSeparator>Contatti</FieldSeparator>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="mario.rossi@havas.com" />
        </Field>
      </FieldGroup>
    </FieldSetComponent>
  ),
};