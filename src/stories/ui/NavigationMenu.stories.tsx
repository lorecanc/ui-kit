import type { Meta, StoryObj } from '@storybook/react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';


/**
 * ## Overview
 * NavigationMenu – Menu di navigazione con dropdown.
 *
 * Il `NavigationMenu` è un menu di navigazione orizzontale con dropdown per sottocategorie.
 * È costruito su Radix UI.
 *
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <NavigationMenu>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <NavigationMenuLink>Link</NavigationMenuLink>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenu>
 * ```
 */
const meta: Meta<typeof NavigationMenu> = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

/**
 * **Default**: Navigation menu con dropdown per Prodotti e Documentazione, e link diretto per Prezzi.
 */
export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Prodotti</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-4 p-6 w-[600px] grid-cols-2">
              <div className="row-span-3">
                <NavigationMenuLink
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Prodotti
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Esplora la nostra gamma di prodotti e servizi per il tuo business.
                  </p>
                </NavigationMenuLink>
              </div>
              <a href="/" className="text-sm font-medium">Analytics</a>
              <a href="/" className="text-sm font-medium">CRM</a>
              <a href="/" className="text-sm font-medium">Marketing</a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Documentazione</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-4 p-6 w-[400px]">
              <a href="/" className="text-sm font-medium">Getting Started</a>
              <a href="/" className="text-sm font-medium">API Reference</a>
              <a href="/" className="text-sm font-medium">Guide</a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/"
          >
            Prezzi
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  ),
};

/**
 * **SimpleLinks**: Navigation menu con solo link diretti, senza dropdown.
 */
export const SimpleLinks: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/"
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/"
          >
            Chi Siamo
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/"
          >
            Servizi
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/"
          >
            Contatti
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};