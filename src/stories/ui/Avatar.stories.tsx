import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@/components/ui/avatar';

/**
 * ## Overview
 * Avatar – Componente per mostrare foto profilo o iniziali utente.
 * 
 * Basato sulle API di Radix UI, L'`Avatar` gestisce auto-fallback in caso l'immagine non carichi, 
 * dot temporali/notifiche (`AvatarBadge`) e l'impostazione "Stacked" per indicare insiemi di utenti (`AvatarGroup`).
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * // Normale (con fallback)
 * <Avatar>
 *   <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
 *   <AvatarFallback>CN</AvatarFallback>
 * </Avatar>
 * 
 * // Avatar + Online dot badge
 * <Avatar>
 *   <AvatarImage src="..." />
 *   <AvatarFallback>JD</AvatarFallback>
 *   <AvatarBadge className="bg-green-500" />
 * </Avatar>
 * ```
 */
const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 'default',
  },
  argTypes: {
    size: {
      description: 'Dimensione predefinita del blocco circolare avatar',
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * **Default**: Dimensione e stile base. Include un `AvatarImage` (sorgente) 
 * e un `AvatarFallback` che accampa due iniziali in caso di link rotto o mancante.
 */
export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

/**
 * **Fallback Only**: Mostra il comportamento quando `src` non è presente o va in errore 404.
 */
export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>LR</AvatarFallback>
    </Avatar>
  ),
};

/**
 * **With Badge**: Avatar con l'estensione `<AvatarBadge>` usata per mostrare
 * uno status (🟢 Online, 🔴 Offline/DND) o conteggio notifiche.
 */
export const WithBadge: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-500" />
    </Avatar>
  ),
};

/**
 * **Avatar Group**: Un raggruppamento in cascata (overlapping) per illustrare liste d'utenti compatti
 * (es. "Utenti in questo documento"). Utilizza i wrapper `AvatarGroup` e `AvatarGroupCount`.
 */
export const Group: Story = {
  render: (args) => (
    <AvatarGroup>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>V</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
};
