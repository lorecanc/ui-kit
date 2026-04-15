import type { Meta, StoryObj } from '@storybook/react';
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from '@/components/ui/native-select';

/**
 * ## Overview
 * NativeSelect – Select nativo HTML con stile personalizzato.
 *
 * Utilizza l'elemento `<select>` nativo del browser, garantendo
 * massima compatibilità e accessibilità senza JavaScript aggiuntivo.
 *
 * ## Linee guida di UX/UI
 * - **Dimensioni:** Usa `size="sm"` per contesti compatti.
 * - **Raggruppamento:** Usa `NativeSelectOptGroup` per organizzare opzioni lunghe.
 * - **Disabilitato:** Applica `disabled` per opzioni non interattive.
 */
const meta: Meta<typeof NativeSelect> = {
  title: 'UI/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

/**
 * **Default**: Select nativo con una lista di paesi europei.
 * Utilizza lo stile predefinito con dimensione standard.
 */
export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Seleziona un paese</NativeSelectOption>
      <NativeSelectOption value="it">Italia</NativeSelectOption>
      <NativeSelectOption value="fr">Francia</NativeSelectOption>
      <NativeSelectOption value="de">Germania</NativeSelectOption>
      <NativeSelectOption value="es">Spagna</NativeSelectOption>
    </NativeSelect>
  ),
};

/**
 * **Small**: Variante compatta con `size="sm"`,
 * ideale per tabelle o layout con spazio limitato.
 */
export const Small: Story = {
  render: () => (
    <NativeSelect size="sm">
      <NativeSelectOption value="">Seleziona...</NativeSelectOption>
      <NativeSelectOption value="opt1">Opzione 1</NativeSelectOption>
      <NativeSelectOption value="opt2">Opzione 2</NativeSelectOption>
      <NativeSelectOption value="opt3">Opzione 3</NativeSelectOption>
    </NativeSelect>
  ),
};

/**
 * **WithOptGroups**: Select con opzioni raggruppate per categoria,
 * utile quando ci sono molte opzioni da organizzare logicamente.
 */
export const WithOptGroups: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Seleziona una città</NativeSelectOption>
      <NativeSelectOptGroup label="Italia">
        <NativeSelectOption value="roma">Roma</NativeSelectOption>
        <NativeSelectOption value="milano">Milano</NativeSelectOption>
        <NativeSelectOption value="napoli">Napoli</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Francia">
        <NativeSelectOption value="parigi">Parigi</NativeSelectOption>
        <NativeSelectOption value="lione">Lione</NativeSelectOption>
        <NativeSelectOption value="marsiglia">Marsiglia</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Germania">
        <NativeSelectOption value="berlino">Berlino</NativeSelectOption>
        <NativeSelectOption value="monaco">Monaco</NativeSelectOption>
        <NativeSelectOption value="amburgo">Amburgo</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
};

/**
 * **Disabled**: Select disabilitato. L'utente non può interagire
 * con il campo né selezionare alcuna opzione.
 */
export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled>
      <NativeSelectOption value="">Non disponibile</NativeSelectOption>
      <NativeSelectOption value="opt1">Opzione 1</NativeSelectOption>
      <NativeSelectOption value="opt2">Opzione 2</NativeSelectOption>
    </NativeSelect>
  ),
};
