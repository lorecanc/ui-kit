import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupTextarea } from '@/components/ui/input-group';
import { SearchIcon, MailIcon } from 'lucide-react';

/**
 * ## Overview
 * InputGroup – Componente per raggruppare input con addon testuali o bottoni.
 * 
 * L'`InputGroup` consente di creare campi di input con prefissi o suffissi,
 * come icone, bottoni o testo esplicativo.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <InputGroup>
 *   <InputGroupAddon>
 *     <SearchIcon />
 *   </InputGroupAddon>
 *   <InputGroupInput placeholder="Cerca..." />
 * </InputGroup>
 * ```
 */
const meta: Meta<typeof InputGroup> = {
  title: 'UI/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

/**
 * **Default**: Campo di ricerca con icona e input.
 * Utilizzato per ricerche con indicatore visivo.
 */
export const Default: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon align="inline-start">
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Cerca..." />
    </InputGroup>
  ),
};

/**
 * **WithSuffix**: Input con suffisso testuale (es. dominio email).
 * Utilizzato per campi come email o URL.
 */
export const WithSuffix: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupInput placeholder="mario.rossi" />
      <InputGroupAddon align="inline-end">.com</InputGroupAddon>
    </InputGroup>
  ),
};

/**
 * **WithButton**: Input con bottone all'inizio.
 * Utilizzato per azioni di ricerca o invio.
 */
export const WithButton: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon align="inline-start">
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Cerca..." />
      <InputGroupButton variant="ghost" aria-label="Cerca">
        <SearchIcon className="size-4" />
      </InputGroupButton>
    </InputGroup>
  ),
};

/**
 * **TextareaGroup**: Area di testo con addon.
 * Utilizzato per input multi-linea con contesto.
 */
export const TextareaGroup: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon align="block-start">
        <MailIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupTextarea placeholder="Scrivi il tuo messaggio..." />
    </InputGroup>
  ),
};