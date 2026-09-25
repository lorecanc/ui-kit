import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../../components/ui/card';
import { PageSection } from '../../../components/layout/PageContent';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Checkbox } from '../../../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Switch } from '../../../components/ui/switch';
import { Separator } from '../../../components/ui/separator';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../../../components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../../../components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../../components/ui/alert-dialog';
import { Alert, AlertTitle, AlertDescription } from '../../../components/ui/alert';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../components/ui/tooltip';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../components/ui/select';
import { Plus, Eye, Pencil, Trash2, Info } from 'lucide-react';
export function FormManagementPage() {
  return (
    <>
      {/* Page Header */}
      <PageSection span={1}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Form Management</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage, validate, and process your data records effectively.</p>
      </PageSection>
      <PageSection span={1} className="flex items-end lg:justify-end">
      <Dialog>
        <DialogTrigger asChild>
          <Button><Plus className="mr-2 h-4 w-4" /> Add New Record</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>New Record</DialogTitle>
            <DialogDescription>Fill in the details below to create a new record.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 234 567 890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Priority Level</Label>
              <RadioGroup defaultValue="medium" className="flex gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="low" id="low" />
                  <Label htmlFor="low" className="font-normal">Low</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="font-normal">Medium</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high" className="font-normal">High</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Additional details..." />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="notifications" />
                <Label htmlFor="notifications" className="font-normal">Send notifications</Label>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="active" className="font-normal">Active</Label>
                <Switch id="active" defaultChecked />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Save Record</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </PageSection>

      <PageSection span="full">
      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Form Validation</AlertTitle>
        <AlertDescription>All fields marked with * are required. Please ensure data accuracy before submission.</AlertDescription>
      </Alert>
      </PageSection>

      <PageSection span="full" className="min-w-0">
      <Card>
        <CardHeader>
          <CardTitle>Existing Records</CardTitle>
          <CardDescription>Manage and edit your records below.</CardDescription>
        </CardHeader>
        <CardContent className="min-w-0">
          <div role="region" aria-label="Existing records table" tabIndex={0} className="min-w-0 overflow-x-auto [&_[data-slot=table-container]]:overflow-visible">
          <Table className="min-w-[640px]">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Alice Johnson", email: "alice@example.com", category: "Technology", priority: "High", status: "Active" },
                { name: "Bob Smith", email: "bob@example.com", category: "Marketing", priority: "Medium", status: "Active" },
                { name: "Carol White", email: "carol@example.com", category: "Finance", priority: "Low", status: "Inactive" },
                { name: "David Brown", email: "david@example.com", category: "Design", priority: "High", status: "Active" },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <Badge variant={row.priority === "High" ? "destructive" : row.priority === "Medium" ? "default" : "secondary"}>
                      {row.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Active" ? "default" : "outline"}>{row.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                        </TooltipTrigger>
                        <TooltipContent>View</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
                        </TooltipTrigger>
                        <TooltipContent>Edit</TooltipContent>
                      </Tooltip>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Record</AlertDialogTitle>
                            <AlertDialogDescription>Are you sure you want to delete this record? This action cannot be undone.</AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-destructive text-destructive-foreground">Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
      </PageSection>
    </>
  );
}
