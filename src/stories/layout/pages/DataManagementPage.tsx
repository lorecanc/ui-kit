import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Skeleton } from '../../../components/ui/skeleton';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../../../components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../../components/ui/pagination';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../components/ui/select';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from '../../../components/ui/combobox';
import { Search, Download, Filter, MoreHorizontalIcon, Eye, Pencil, Trash2 } from 'lucide-react';
export function DataManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Data Management</h1>
          <p className="text-sm text-muted-foreground mt-1">View, filter, and modify your records.</p>
        </div>
      </div>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search records..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]"><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Combobox>
              <ComboboxInput placeholder="Category..." />
              <ComboboxContent>
                <ComboboxEmpty>No category found.</ComboboxEmpty>
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
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: "REC-001", name: "Project Alpha", category: "Technology", revenue: "$12,450", status: "Active", date: "2024-01-15" },
                { id: "REC-002", name: "Campaign Beta", category: "Marketing", revenue: "$8,320", status: "Pending", date: "2024-02-20" },
                { id: "REC-003", name: "Audit Gamma", category: "Finance", revenue: "$24,100", status: "Completed", date: "2024-03-10" },
                { id: "REC-004", name: "Launch Delta", category: "Marketing", revenue: "$5,780", status: "Active", date: "2024-04-05" },
                { id: "REC-005", name: "Review Epsilon", category: "Technology", revenue: "$18,900", status: "Active", date: "2024-05-12" },
                { id: "REC-006", name: "Analysis Zeta", category: "Finance", revenue: "$31,200", status: "Completed", date: "2024-06-01" },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="pl-6 font-mono text-xs">{row.id}</TableCell>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.revenue}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Active" ? "default" : row.status === "Pending" ? "secondary" : "outline"}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.date}</TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontalIcon className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Eye className="mr-2 h-4 w-4" /> View Details</DropdownMenuItem>
                        <DropdownMenuItem><Pencil className="mr-2 h-4 w-4" /> Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t px-6 py-4">
          <p className="text-sm text-muted-foreground">Showing 1-6 of 48 records</p>
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Loading State</CardTitle>
          <CardDescription>Skeleton placeholders while data is being fetched.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-[180px]" />
            <Skeleton className="h-10 w-[180px]" />
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 items-center">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}