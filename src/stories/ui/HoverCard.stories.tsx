import type { Meta, StoryObj } from '@storybook/react';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar';

/**
 * ## Overview
 * HoverCard – Anteprima di contenuto al passaggio del mouse su un trigger.
 *
 * Basato su Radix UI, l'`HoverCard` mostra informazioni contestuali senza richiedere
 * un click, ideale per preview di profili utente, link o riferimenti.
 *
 * ## Linee guida di UX/UI
 * - **Attivazione:** Si apre al passaggio del mouse (hover).
 * - **Contenuto:** Limitato a informazioni di anteprima, non interattive.
 * - **Posizionamento:** Si posiziona automaticamente vicino al trigger.
 */
const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

/**
 * **Default**: HoverCard con trigger come testo link e contenuto che mostra
 * avatar, nome e bio dell'utente.
 */
export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="#"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          @utente
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@utente" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Lorenzo Rossi</h4>
            <p className="text-sm text-muted-foreground">
              Sviluppatore frontend specializzato in React e TypeScript.
              Appassionato di design system e accessibilità web.
            </p>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span>Membro dal Gennaio 2024</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
