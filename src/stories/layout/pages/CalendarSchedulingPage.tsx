import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { ScrollArea, ScrollBar } from '../../../components/ui/scroll-area';
import { Calendar as CalendarComponent } from '../../../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/ui/popover';
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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../components/ui/select';
import { Plus, CalendarIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';
export function CalendarSchedulingPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Calendar & Scheduling</h1>
          <p className="text-sm text-muted-foreground mt-1">Organize your events, meetings, and deadlines.</p>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button><Plus className="mr-2 h-4 w-4" /> New Event</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Event</DialogTitle>
            <DialogDescription>Add a new event to your calendar.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="event-title">Event Title</Label>
              <Input id="event-title" placeholder="Team meeting" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? date.toLocaleDateString() : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-time">Time</Label>
                <Input id="event-time" type="time" defaultValue="09:00" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-type">Type</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="meeting">Meeting</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="reminder">Reminder</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-desc">Description</Label>
              <Textarea id="event-desc" placeholder="Event details..." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <DialogClose asChild><Button>Create Event</Button></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                event: [new Date(2024, 0, 15), new Date(2024, 0, 22), new Date(2024, 0, 28)],
              }}
              modifiersClassNames={{
                event: "font-bold text-primary",
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your next scheduled events.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[350px] pr-4">
              <div className="space-y-4">
                {[
                  { title: "Team Standup", time: "09:00 AM", type: "meeting", color: "bg-blue-500" },
                  { title: "Design Review", time: "11:30 AM", type: "meeting", color: "bg-purple-500" },
                  { title: "Q4 Report Due", time: "05:00 PM", type: "deadline", color: "bg-red-500" },
                  { title: "Client Call", time: "02:00 PM", type: "meeting", color: "bg-green-500" },
                  { title: "Sprint Planning", time: "10:00 AM", type: "meeting", color: "bg-orange-500" },
                  { title: "Dentist Appointment", time: "04:30 PM", type: "personal", color: "bg-pink-500" },
                ].map((event, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className={cn("w-1 h-10 rounded-full shrink-0", event.color)} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] shrink-0">{event.type}</Badge>
                  </div>
                ))}
              </div>
              <ScrollBar />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}