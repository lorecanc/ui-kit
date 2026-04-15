import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxSeparator,
} from '@/components/ui/combobox';

/**
 * ## Overview
 * Combobox – Un campo di ricerca con suggerimenti filtrabili e selezionabili.
 *
 * Combina un input di testo con una lista a discesa, permettendo all'utente
 * di cercare e selezionare un'opzione in modo rapido e accessibile.
 *
 * ## Linee guida di UX/UI
 * - **Placeholder:** Usa un testo descrittivo che indichi cosa cercare.
 * - **Raggruppamento:** Usa `ComboboxGroup` e `ComboboxLabel` per organizzare le opzioni.
 * - **Stato vuoto:** Usa `ComboboxEmpty` per mostrare un messaggio quando non ci sono risultati.
 */
const meta: Meta<typeof Combobox> = {
  title: 'UI/Combobox',
  component: Combobox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'];

/**
 * **Default**: Un combobox semplice con una lista di framework selezionabili.
 * L'utente può digitare per filtrare le opzioni disponibili.
 */
export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>('React');

    return (
      <div className="w-[280px]">
        <Combobox
          items={frameworks}
          value={value}
          onValueChange={(v) => setValue(v)}
        >
          <ComboboxInput placeholder="Select a framework" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

/**
 * **WithGroups**: Combobox con opzioni raggruppate per categoria
 * (Frontend e Backend). Utile per liste lunghe e strutturate.
 */
export const WithGroups: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>(null);

    return (
      <div className="w-[280px]">
        <Combobox
          items={frameworks}
          value={value}
          onValueChange={(v) => setValue(v)}
        >
          <ComboboxInput placeholder="Select a technology" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              <ComboboxGroup>
                <ComboboxLabel>Frontend</ComboboxLabel>
                <ComboboxItem value="react">React</ComboboxItem>
                <ComboboxItem value="vue">Vue</ComboboxItem>
                <ComboboxItem value="angular">Angular</ComboboxItem>
                <ComboboxItem value="svelte">Svelte</ComboboxItem>
              </ComboboxGroup>
              <ComboboxSeparator />
              <ComboboxGroup>
                <ComboboxLabel>Backend</ComboboxLabel>
                <ComboboxItem value="node">Node.js</ComboboxItem>
                <ComboboxItem value="python">Python</ComboboxItem>
                <ComboboxItem value="go">Go</ComboboxItem>
                <ComboboxItem value="rust">Rust</ComboboxItem>
              </ComboboxGroup>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

/**
 * **WithEmpty**: Mostra il messaggio `ComboboxEmpty` quando la ricerca
 * non produce risultati. Pattern essenziale per gestire query senza match.
 */
export const WithEmpty: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>(null);

    return (
      <div className="w-[280px]">
        <Combobox
          items={frameworks}
          value={value}
          onValueChange={(v) => setValue(v)}
        >
          <ComboboxInput placeholder="Select a framework" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

/**
 * **CustomItems**: Usa `itemToStringValue` quando i tuoi items sono oggetti.
 */
export const CustomItems: Story = {
  render: function Render() {
    const [value, setValue] = useState<{ label: string; value: string } | null>(null);

    const customFrameworks = [
      { label: 'Next.js', value: 'next' },
      { label: 'SvelteKit', value: 'sveltekit' },
      { label: 'Nuxt', value: 'nuxt' },
    ];

    return (
      <div className="w-[280px]">
        <Combobox
          items={customFrameworks}
          itemToStringValue={(framework) => framework.label}
          value={value}
          onValueChange={(v) => setValue(v as { label: string; value: string } | null)}
        >
          <ComboboxInput placeholder="Select a framework" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(framework) => (
                <ComboboxItem key={framework.value} value={framework}>
                  {framework.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};