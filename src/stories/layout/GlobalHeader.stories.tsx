import type { Meta, StoryObj } from '@storybook/react';
import { GlobalHeader } from '@/components/layout/GlobalHeader';
import { SidebarProvider } from '@/components/ui/sidebar';

/**
 * ## Overview
 * GlobalHeader – La barra di navigazione superiore dell'applicazione.
 * 
 * Contiene i breadcrumb per l'orientamento, le notifiche e il profilo utente.
 *
 * ## Linee guida di UX/UI
 * - **Breadcrumbs:** Mostra sempre il percorso di navigazione corrente.
 * - **Azioni:** Fornisce accesso rapido a notifiche e impostazioni profilo.
 * - **Sticky:** Rimane fissa in alto per garantire l'accesso costante alle azioni globali.
 */
const meta: Meta<typeof GlobalHeader> = {
  title: 'Layout/GlobalHeader',
  component: GlobalHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <SidebarProvider>
        <div className="w-full bg-muted/5">
          <Story />
        </div>
      </SidebarProvider>
    ),
  ],
  args: {
    userName: 'Demo User',
    userInitials: 'DU',
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'Section', href: '/section' },
      { title: 'Current Page' },
    ],
    hasUnreadNotifications: true,
  },
};

export default meta;
type Story = StoryObj<typeof GlobalHeader>;

export const Default: Story = {};

export const NoNotifications: Story = {
  args: {
    hasUnreadNotifications: false,
  },
};

export const DeepNav: Story = {
  args: {
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'Settaggi', href: '/settings' },
      { title: 'Sicurezza', href: '/settings/security' },
      { title: 'Audit Logs' },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    logo: <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold">DS</div>,
    breadcrumbs: [
      { title: 'Design System', href: '/' },
      { title: 'Components' },
    ],
  },
};
