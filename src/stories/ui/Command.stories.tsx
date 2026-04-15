import type { Meta, StoryObj } from '@storybook/react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react"

/**
 * ## Overview
 * Command – Un componente "Omnibar" o menu di comando rapido.
 * 
 * Permette agli utenti di cercare e navigare velocemente tra azioni, file o strumenti.
 *
 * ## Linee guida di UX/UI
 * - **Feedback:** Mostra sempre uno stato "vuoto" se la ricerca non produce risultati.
 * - **Scorciatoie:** Supporta scorciatoie da tastiera per un'interazione da "power user".
 */
const meta: Meta<typeof Command> = {
  title: 'UI/Command',
  component: Command,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Digita un comando o cerca..." />
      <CommandList>
        <CommandEmpty>Nessun risultato trovato.</CommandEmpty>
        <CommandGroup heading="Suggerimenti">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendario</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Cerca Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calcolatrice</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Impostazioni">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profilo</span>
            <span className="ml-auto text-xs text-muted-foreground italic">⌘P</span>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Fatturazione</span>
            <span className="ml-auto text-xs text-muted-foreground italic">⌘B</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Impostazioni</span>
            <span className="ml-auto text-xs text-muted-foreground italic">⌘S</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
