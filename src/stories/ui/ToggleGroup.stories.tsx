import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

/**
 * ## Overview
 * ToggleGroup – Componente per gruppi di toggle selezionabili.
 * 
 * Il `ToggleGroup` consente di creare gruppi di pulsanti toggle che possono
 * essere selezionati singolarmente o multipla, con supporto per orientamento.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <ToggleGroup type="multiple">
 *   <ToggleGroupItem value="bold" aria-label="Grassetto">
 *     <BoldIcon />
 *   </ToggleGroupItem>
 *   <ToggleGroupItem value="italic" aria-label="Corsivo">
 *     <ItalicIcon />
 *   </ToggleGroupItem>
 * </ToggleGroup>
 * ```
 */
const meta: Meta<typeof ToggleGroup> = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Tipo di selezione: single o multiple',
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      description: 'Variante stilistica',
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      description: 'Dimensione dei toggle',
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    orientation: {
      description: 'Orientamento del gruppo',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    disabled: {
      description: 'Disabilita il gruppo',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

/**
 * **Default**: Gruppo di toggle multipli (es. formattazione testo).
 * Permette selezione di più opzioni contemporaneamente.
 */
export const Default: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="Grassetto">
        <BoldIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Corsivo">
        <ItalicIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Sottolineato">
        <UnderlineIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * **Single**: Toggle a selezione singola.
 * Utilizzato quando solo un'opzione può essere attiva.
 */
export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="bold">
      <ToggleGroupItem value="bold" aria-label="Grassetto">
        <BoldIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Corsivo">
        <ItalicIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Sottolineato">
        <UnderlineIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * **OutlineVariant**: Toggle con bordo visibile.
 * Utilizzato per evidenziare le opzioni selezionate.
 */
export const OutlineVariant: Story = {
  render: () => (
    <ToggleGroup type="multiple" variant="outline" defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold" aria-label="Grassetto">
        <BoldIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Corsivo">
        <ItalicIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Sottolineato">
        <UnderlineIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * **Small**: Toggle di dimensione ridotta.
 * Utilizzato per spazi limitati.
 */
export const Small: Story = {
  render: () => (
    <ToggleGroup type="multiple" size="sm" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="Grassetto">
        <BoldIcon className="size-3" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Corsivo">
        <ItalicIcon className="size-3" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Sottolineato">
        <UnderlineIcon className="size-3" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * **Vertical**: Toggle allineati verticalmente.
 * Utilizzato per layout verticali o sidebar.
 */
export const Vertical: Story = {
  render: () => (
    <ToggleGroup type="multiple" orientation="vertical" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="Grassetto">
        <BoldIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Corsivo">
        <ItalicIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Sottolineato">
        <UnderlineIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * **Disabled**: Toggle disabilitato.
 * Utilizzato quando le opzioni non sono al momento disponibili.
 */
export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="multiple" disabled defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="Grassetto">
        <BoldIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Corsivo">
        <ItalicIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Sottolineato">
        <UnderlineIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
