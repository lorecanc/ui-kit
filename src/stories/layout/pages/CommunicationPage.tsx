import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';
import { ScrollArea, ScrollBar } from '../../../components/ui/scroll-area';
import { Alert, AlertTitle, AlertDescription } from '../../../components/ui/alert';
import { CheckCircle2, AlertTriangle, Search, Paperclip, Smile, Send } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { PageSection } from '../../../components/layout/PageContent';
export function CommunicationPage() {
  return (
    <>
      <PageSection span="full" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Messages & Communication</h1>
          <p className="text-sm text-muted-foreground mt-1">Stay connected with your team and review alerts.</p>
        </div>
      </PageSection>
      <PageSection span="full" className="grid gap-3">
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>All systems operational</AlertTitle>
          <AlertDescription>Your messages are syncing normally.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Connection issue detected</AlertTitle>
          <AlertDescription>Some messages may not have been delivered. Please check your connection.</AlertDescription>
        </Alert>
      </PageSection>

      <PageSection span={1}>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Conversations</CardTitle>
              <Badge>3 new</Badge>
            </div>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px]">
              <div className="divide-y">
                {[
                  { name: "Alice Johnson", initials: "AJ", lastMsg: "Can you review the latest design?", time: "2m ago", unread: true },
                  { name: "Bob Smith", initials: "BS", lastMsg: "Meeting rescheduled to 3 PM", time: "15m ago", unread: true },
                  { name: "Carol White", initials: "CW", lastMsg: "Thanks for the update!", time: "1h ago", unread: false },
                  { name: "David Brown", initials: "DB", lastMsg: "Let's discuss the Q4 targets", time: "3h ago", unread: true },
                  { name: "Eve Davis", initials: "ED", lastMsg: "The report is ready for review", time: "Yesterday", unread: false },
                  { name: "Frank Miller", initials: "FM", lastMsg: "Great work on the presentation", time: "2d ago", unread: false },
                ].map((conv, i) => (
                  <div key={i} className={cn("flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors", conv.unread && "bg-muted/30")}>
                    <Avatar className="h-10 w-10 shrink-0">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">{conv.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={cn("text-sm truncate", conv.unread && "font-semibold")}>{conv.name}</p>
                        <span className="text-xs text-muted-foreground shrink-0">{conv.time}</span>
                      </div>
                      <p className={cn("text-xs text-muted-foreground truncate mt-0.5", conv.unread && "text-foreground")}>{conv.lastMsg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar />
            </ScrollArea>
          </CardContent>
        </Card>

      </PageSection>

      <PageSection span={2}>
        <Card>
          <CardHeader className="border-b pb-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">AJ</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">Alice Johnson</CardTitle>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary text-[10px]">AJ</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <p className="text-sm">Hey! Can you review the latest design mockups?</p>
                    <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-none p-3 max-w-[80%]">
                    <p className="text-sm">Sure, I'll take a look right away. Is there anything specific you want me to focus on?</p>
                    <p className="text-xs text-primary-foreground/70 mt-1">10:32 AM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary text-[10px]">AJ</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <p className="text-sm">Mainly the responsive layout and the new color palette. Let me know your thoughts!</p>
                    <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
                  </div>
                </div>
              </div>
              <ScrollBar />
            </ScrollArea>
          </CardContent>
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="shrink-0"><Paperclip className="h-4 w-4 text-muted-foreground" /></Button>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button variant="ghost" size="icon" className="shrink-0"><Smile className="h-4 w-4 text-muted-foreground" /></Button>
              <Button size="icon" className="shrink-0"><Send className="h-4 w-4" /></Button>
            </div>
          </div>
        </Card>
      </PageSection>

      <PageSection span="full">
      <Card>
        <CardHeader>
          <CardTitle>Toast Notifications</CardTitle>
          <CardDescription>Trigger Sonner toast notifications for user feedback.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">Success Toast</Button>
            <Button variant="outline">Error Toast</Button>
            <Button variant="outline">Info Toast</Button>
            <Button variant="outline">Loading Toast</Button>
          </div>
        </CardContent>
      </Card>
      </PageSection>
    </>
  );
}
