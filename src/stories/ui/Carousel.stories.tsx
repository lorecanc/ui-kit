import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

/**
 * ## Overview
 * Carousel – Componente per scorrere orizzontalmente o verticalmente contenuti.
 * 
 * Il `Carousel` consente di navigare tra elementi multipli con frecce di navigazione
 * e supporto per orientamento orizzontale o verticale.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Carousel className="w-full max-w-xs">
 *   <CarouselContent>
 *     <CarouselItem>
 *       <Card>
 *         <CardContent>Contenuto 1</CardContent>
 *       </Card>
 *     </CarouselItem>
 *     <CarouselItem>
 *       <Card>
 *         <CardContent>Contenuto 2</CardContent>
 *       </Card>
 *     </CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious />
 *   <CarouselNext />
 * </Carousel>
 * ```
 */
const meta: Meta<typeof Carousel> = {
  title: 'UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      description: 'Orientamento del carousel',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

/**
 * **Default**: Carousel orizzontale con 5 elementi.
 * Utilizzato per gallerie, slider o contenuti scorrevoli.
 */
export const Default: Story = {
  render: (args) => (
    <Carousel {...args} className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/**
 * **Vertical**: Carousel con scorrimento verticale.
 * Utilizzato per gallerie verticali o contenuti impilati.
 */
export const Vertical: Story = {
  render: (args) => (
    <Carousel {...args} orientation="vertical" className="w-full max-w-sm h-[300px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/**
 * **MultipleItems**: Carousel con più elementi visibili.
 * Utilizza className basis per mostrare 3 elementi alla volta.
 */
export const MultipleItems: Story = {
  render: (args) => (
    <Carousel {...args} className="w-full max-w-lg">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-2xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};