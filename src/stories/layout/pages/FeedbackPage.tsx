import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Separator } from '../../../components/ui/separator';
import { Skeleton } from '../../../components/ui/skeleton';
import { Progress } from '../../../components/ui/progress';
import { Kbd } from '../../../components/ui/kbd';
import { Spinner } from '../../../components/ui/spinner';
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from '../../../components/ui/empty';
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
import { Database, Search, Lock, XCircle, Plus, Trash2, LogOut } from 'lucide-react';
import { PageLayout } from '../PageLayout';

export function FeedbackPage() {
  return (
    <PageLayout title="Feedback & States" description="Empty states, loading indicators, and user feedback patterns.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>No Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Empty className="min-h-[200px]">
              <EmptyHeader>
                <EmptyMedia variant="icon"><Database className="h-6 w-6 text-muted-foreground" /></EmptyMedia>
                <EmptyTitle>No data available</EmptyTitle>
                <EmptyDescription>Get started by creating your first record.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button size="sm"><Plus className="mr-2 h-4 w-4" /> Create Record</Button>
              </EmptyContent>
            </Empty>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>No Search Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Empty className="min-h-[200px]">
              <EmptyHeader>
                <EmptyMedia variant="icon"><Search className="h-6 w-6 text-muted-foreground" /></EmptyMedia>
                <EmptyTitle>No results found</EmptyTitle>
                <EmptyDescription>Try adjusting your search or filter to find what you're looking for.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button variant="outline" size="sm">Clear Filters</Button>
              </EmptyContent>
            </Empty>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>No Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <Empty className="min-h-[200px]">
              <EmptyHeader>
                <EmptyMedia variant="icon"><Lock className="h-6 w-6 text-muted-foreground" /></EmptyMedia>
                <EmptyTitle>Access Denied</EmptyTitle>
                <EmptyDescription>You don't have permission to view this content. Contact your administrator.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Error State</CardTitle>
          </CardHeader>
          <CardContent>
            <Empty className="min-h-[200px]">
              <EmptyHeader>
                <EmptyMedia variant="icon"><XCircle className="h-6 w-6 text-destructive" /></EmptyMedia>
                <EmptyTitle>Something went wrong</EmptyTitle>
                <EmptyDescription>We couldn't load your data. Please try again later.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button size="sm" variant="outline">Try Again</Button>
              </EmptyContent>
            </Empty>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Loading States</CardTitle>
          <CardDescription>Spinner and skeleton loading patterns.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <Label className="mb-3 block">Spinners</Label>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2"><Spinner /> <span className="text-sm text-muted-foreground">Default</span></div>
              <div className="flex items-center gap-2"><Spinner className="text-primary" /> <span className="text-sm text-muted-foreground">Primary</span></div>
              <div className="flex items-center gap-2"><Spinner className="text-destructive" /> <span className="text-sm text-muted-foreground">Destructive</span></div>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-3 block">Skeleton Cards</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-32 w-full rounded-none" />
                  <CardContent className="p-4 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-3 block">Progress Indicators</Label>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Upload Progress</span>
                  <span className="text-muted-foreground">72%</span>
                </div>
                <Progress value={72} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Storage Used</span>
                  <span className="text-muted-foreground">45%</span>
                </div>
                <Progress value={45} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing</span>
                  <span className="text-muted-foreground">100%</span>
                </div>
                <Progress value={100} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Confirmation Dialogs</CardTitle>
          <CardDescription>Alert dialogs for critical actions.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete Item</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone. This will permanently delete the item from your account.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground">Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline"><LogOut className="mr-2 h-4 w-4" /> Sign Out</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Sign out?</AlertDialogTitle>
                <AlertDialogDescription>Are you sure you want to sign out of your account?</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Stay Signed In</AlertDialogCancel>
                <AlertDialogAction>Sign Out</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Keyboard Shortcuts</CardTitle>
          <CardDescription>Common keyboard shortcuts for power users.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { action: "Open Command Palette", keys: ["⌘", "K"] },
              { action: "Save Changes", keys: ["⌘", "S"] },
              { action: "New Item", keys: ["⌘", "N"] },
              { action: "Search", keys: ["⌘", "F"] },
              { action: "Undo", keys: ["⌘", "Z"] },
              { action: "Redo", keys: ["⇧", "⌘", "Z"] },
              { action: "Toggle Sidebar", keys: ["⌘", "B"] },
              { action: "Go to Settings", keys: ["⌘", ","] },
            ].map((shortcut, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <span className="text-sm">{shortcut.action}</span>
                <div className="flex gap-1">
                  {shortcut.keys.map((key, j) => (
                    <Kbd key={j}>{key}</Kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
}