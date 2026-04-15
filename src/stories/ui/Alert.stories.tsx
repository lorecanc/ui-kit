import type { Meta, StoryObj } from '@storybook/react';
import { AlertTriangle, Info } from 'lucide-react';
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from '@/components/ui/alert';

/**
 * ## Overview
 * Alert – Mostra un richiamo/banner testuale interattivo.
 * 
 * L'`Alert` serve per veicolare ai consumatori finali del client una comunicazione importante e statica.
 * Usato per far affiorare errori di form globali, ban preventive (es. "Utente sospeso") 
 * o feedback di avvenuta transazione su tutta la larghezza del contenitore (solitamente una `Card` o il top della pagina).
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Alert variant="destructive">
 *   <AlertTriangle className="h-4 w-4" />
 *   <AlertTitle>Errore critico</AlertTitle>
 *   <AlertDescription>
 *     Servizio temporaneamente irraggiungibile. Riprova più tardi.
 *   </AlertDescription>
 * </Alert>
 * ```
 */
const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    className: 'w-[400px]',
  },
  argTypes: {
    variant: {
      description: 'Definisce la serietà o la tematica dell\'avviso. Destructive colorerà l\'alert con i toni d\'allarme Havas (rosso scuro).',
      control: 'select',
      options: ['default', 'destructive'],
    },
    className: {
      description: 'Stile addizionale arbitrario (es. padding, margini o font)',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * **Default**: Usato generalisticamente per banner informativi o aggiornamenti benigni di stato.
 */
export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <Info className="h-4 w-4" />
      <AlertTitle>Attenzione</AlertTitle>
      <AlertDescription>
        Potrai modificare queste impostazioni anche in futuro.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * **Destructive**: Tinteggiato di rosso scuro, questo stile notifica un'azione preclusa o fallita all'utente, 
 * attirando con urgenza lo sguardo della Visual hierarchy.
 */
export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Non Autorizzato</AlertTitle>
      <AlertDescription>
        Non possiedi i privilegi d'amministratore per completare la modifica.
      </AlertDescription>
    </Alert>
  ),
};
