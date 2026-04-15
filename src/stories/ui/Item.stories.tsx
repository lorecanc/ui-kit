import type { Meta, StoryObj } from '@storybook/react';
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup, ItemSeparator } from '@/components/ui/item';
import { Button } from '@/components/ui/button';
import { UserIcon, SettingsIcon } from 'lucide-react';

/**
 * ## Overview
 * Item – Componente per visualizzare elementi in liste o menu.
 * 
 * L'`Item` è utilizzato per creare voci di lista strutturate con supporto
 * per media (icone/immagini), contenuto (titolo/descrizione) e azioni.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Item>
 *   <ItemMedia variant="icon">
 *     <UserIcon />
 *   </ItemMedia>
 *   <ItemContent>
 *     <ItemTitle>Mario Rossi</ItemTitle>
 *     <ItemDescription>mario.rossi@havas.com</ItemDescription>
 *   </ItemContent>
 *   <ItemActions>
 *     <Button variant="ghost" size="icon">...</Button>
 *   </ItemActions>
 * </Item>
 * ```
 */
const meta: Meta<typeof Item> = {
  title: 'UI/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Variante stilistica dell\'item',
      control: 'select',
      options: ['default', 'outline', 'muted'],
    },
    size: {
      description: 'Dimensione dell\'item',
      control: 'select',
      options: ['default', 'sm', 'xs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

/**
 * **Default**: Item con icona, contenuto e azioni.
 * Struttura base per voci di lista o menu.
 */
export const Default: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemMedia variant="icon">
        <UserIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Mario Rossi</ItemTitle>
        <ItemDescription>mario.rossi@havas.com</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon" aria-label="Impostazioni">
          <SettingsIcon className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
};

/**
 * **OutlineVariant**: Item con bordo visibile.
 * Utilizzato per evidenziare l'item nella lista.
 */
export const OutlineVariant: Story = {
  render: (args) => (
    <Item {...args} variant="outline">
      <ItemMedia variant="icon">
        <UserIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Utente con bordo</ItemTitle>
        <ItemDescription>Item evidenziato con bordo</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon" aria-label="Azione">
          <SettingsIcon className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
};

/**
 * **MutedVariant**: Item con sfondo attenuato.
 * Utilizzato per elementi secondari o disattivi.
 */
export const MutedVariant: Story = {
  render: (args) => (
    <Item {...args} variant="muted">
      <ItemMedia variant="icon">
        <UserIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Elemento secondario</ItemTitle>
        <ItemDescription>Con sfondo attenuato</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

/**
 * **Small**: Item in formato ridotto.
 * Utilizzato per spazi limitati o liste dense.
 */
export const Small: Story = {
  render: (args) => (
    <Item {...args} size="sm">
      <ItemMedia variant="icon">
        <UserIcon className="size-3" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Elemento piccolo</ItemTitle>
        <ItemDescription>Descrizione ridotta</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

/**
 * **InGroup**: Gruppo di item separati.
 * Utilizzato per liste di elementi correlati.
 */
export const InGroup: Story = {
  render: (args) => (
    <ItemGroup {...args}>
      <Item>
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Primo elemento</ItemTitle>
          <ItemDescription>Descrizione del primo elemento</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Secondo elemento</ItemTitle>
          <ItemDescription>Descrizione del secondo elemento</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Terzo elemento</ItemTitle>
          <ItemDescription>Descrizione del terzo elemento</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

/**
 * **WithImageMedia**: Item con immagine invece di icona.
 * Utilizzato per profili utenti o anteprime.
 */
export const WithImageMedia: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemMedia variant="image">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mario" alt="Avatar" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Profilo utente</ItemTitle>
        <ItemDescription>Avatar visualizzato con immagine</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon" aria-label="Visualizza">
          <SettingsIcon className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
};