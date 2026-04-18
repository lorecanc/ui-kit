import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import * as React from 'react';

/**
 * ## Overview
 * Calendar – Un componente per la selezione di date singole o intervalli.
 * 
 * Basato su `react-day-picker`, è stilizzato per riflettere l'estetica del design system con bordi precisi e tipografia chiara.
 *
 * ## Linee guida di UX/UI
 * - **Interazione:** Permette la navigazione tra mesi e anni se configurato.
 * - **Stati:** Gestisce chiaramente il giorno corrente, i giorni selezionati e quelli fuori dal mese corrente.
 */
const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'range', 'multiple'],
      description: 'Selection mode for the calendar',
    },
    selected: {
      description: 'The selected date(s)',
    },
    onSelect: {
      action: 'onSelect',
      description: 'Callback when date(s) are selected',
    },
    disabled: {
      description: 'Dates that should be disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    );
  },
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 7)),
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border shadow"
      />
    );
  },
};
