import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

/**
 * ## Overview
 * Table – Componente primario per listare e comparare dataset massivi di collezioni.
 * 
 * Basato su table tag nativi di HTML con container auto-scrolling per il trabocco orizzontale.
 * Strutturato in sottocomponenti, facilita la creazione robusta di griglie di dati.
 * 
 * ## Esempi di codice pronti da copiare:
 * ```tsx
 * <Table>
 *   <TableCaption>I tuoi progetti correnti.</TableCaption>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Status</TableHead>
 *       <TableHead className="w-[100px]">Data</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell className="font-medium">Completato</TableCell>
 *       <TableCell>12 Ottobre</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
  args: {
    className: 'w-[600px] border rounded-md',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Pagato",
    totalAmount: "€250.00",
    paymentMethod: "Carta di Credito",
  },
  {
    invoice: "INV002",
    paymentStatus: "In Attesa",
    totalAmount: "€150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Non Pagato",
    totalAmount: "€350.00",
    paymentMethod: "Bonifico",
  },
]

/**
 * **Default (Demo Completa)**: Un layout che unisce caption, colonna a contrasto Header (titoli),
 * righe multiple iterabili ed un footer finale coi totali.
 */
export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>Lista delle tue performance recenti.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Codice</TableHead>
          <TableHead>Stato</TableHead>
          <TableHead>Metodo di Pagamento</TableHead>
          <TableHead className="text-right">Ammontare</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Totale</TableCell>
          <TableCell className="text-right font-bold w-fit whitespace-nowrap">€750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
