import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';

/**
 * ## Overview
 * ButtonGroup – Componente per raggruppare pulsanti in una sequenza unificata.
 * 
 * Il `ButtonGroup` consente di raggruppare più pulsanti in un'unica unità visiva,
 * con supporto per orientamento orizzontale o verticale e separatori.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <ButtonGroup>
 *   <Button>Sinistra</Button>
 *   <Button>Centro</Button>
 *   <Button>Destra</Button>
 * </ButtonGroup>
 * 
 * <ButtonGroup orientation="vertical">
 *   <Button>Opzione 1</Button>
 *   <Button>Opzione 2</Button>
 * </ButtonGroup>
 * ```
 */
const meta: Meta<typeof ButtonGroup> = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      description: 'Orientamento del gruppo di pulsanti',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

/**
 * **Default**: Gruppo di pulsanti allineati orizzontalmente.
 * Utilizzato per azioni correlate nella stessa riga.
 */
export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Sinistra</Button>
      <Button variant="outline">Centro</Button>
      <Button variant="outline">Destra</Button>
    </ButtonGroup>
  ),
};

/**
 * **Vertical**: Gruppo di pulsanti allineati verticalmente.
 * Utilizzato quando lo spazio orizzontale è limitato o per menu.
 */
export const Vertical: Story = {
  render: (args) => (
    <ButtonGroup {...args} orientation="vertical">
      <Button variant="outline">Sinistra</Button>
      <Button variant="outline">Centro</Button>
      <Button variant="outline">Destra</Button>
    </ButtonGroup>
  ),
};

/**
 * **WithSeparator**: Gruppo di pulsanti separati da linee verticali.
 * Utile per distinguere visivamente gruppi di azioni.
 */
export const WithSeparator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Sinistra</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Centro</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Destra</Button>
    </ButtonGroup>
  ),
};

/**
 * **WithText**: Gruppo con etichetta testuale prima dei pulsanti.
 * Utilizzato per contestualizzare un gruppo di azioni.
 */
export const WithText: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <ButtonGroupText>Opzioni:</ButtonGroupText>
      <ButtonGroup {...args}>
        <Button variant="outline">Sinistra</Button>
        <Button variant="outline">Centro</Button>
        <Button variant="outline">Destra</Button>
      </ButtonGroup>
    </div>
  ),
};