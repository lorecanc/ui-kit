import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';

/**
 * ## Overview
 * Badge – Indicatore visivo minimale di stato o metadato.
 * 
 * Il `Badge` viene utilizzato principalmente per la categorizzazione, indicando 
 * ai componenti come Data Tables, Cards o Avatars uno stato (es. "Online", "Bozza") 
 * e agisce anche decorativamente.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * // Default Badge primary/rosso
 * <Badge variant="default">Nuovo Utente</Badge>
 * 
 * // Modello neutrale in grigio (Secondary/Outline)
 * <Badge variant="secondary">In lavorazione</Badge>
 * ```
 */
const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Etichetta',
  },
  argTypes: {
    variant: {
      description: 'Il livello cromatico (e di risalto) da applicare al metadato visivo.',
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
    asChild: {
      description: 'Trasforma l\'etichetta in uno <span>/<a> delegato per la navigazione semantica',
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * **Default**: Colore primario brand. Cattura subito l'attenzione (es. Status "Completato").
 */
export const Default: Story = {
  args: { variant: 'default' },
};

/**
 * **Secondary**: Sfondo chiaro grigio, meno pesante e invasivo, utile se ci sono gruppi massicci di Badges.
 */
export const Secondary: Story = {
  args: { variant: 'secondary' },
};

/**
 * **Destructive**: Per etichettare un qualcosa in errore critico. 
 * Molto simile nello stile del primario con toni DarkRed standardizzati (es. "Scaduto"). 
 */
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Azione Rifiutata' },
};

/**
 * **Outline**: Variabile schematica e pulita. Eccellente per definire una lunga riga
 * scorrevole di "Tags" di competenza su una card profilo.
 */
export const Outline: Story = {
  args: { variant: 'outline', children: 'Web Development' },
};

/**
 * **Link**: Variante link per la navigazione. Utilizzato per badges cliccabili.
 */
export const Link: Story = {
  args: { variant: 'link', children: 'Vai alla documentazione' },
};
