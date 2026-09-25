import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../../../components/ui/card';
import { PageSection } from '../../../components/layout/PageContent';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Separator } from '../../../components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '../../../components/ui/toggle-group';
import { Switch } from '../../../components/ui/switch';
import { Sun, Moon, Monitor, MapPin, Globe, Shield, Lock, Camera } from 'lucide-react';
export function SettingsProfilePage() {
  return (
    <>
      {/* Page Header */}
      <PageSection span={1}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings & Profile</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account settings and preferences.</p>
      </PageSection>

      <PageSection span={1}>
        <Card>
          <CardContent className="flex items-center gap-6">
            <Avatar className="h-20 w-20 border-2 border-border">
              <AvatarImage src="" />
              <AvatarFallback className="text-lg bg-primary/10 text-primary">LC</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline" size="sm"><Camera className="mr-2 h-4 w-4" /> Change Avatar</Button>
              <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </CardContent>
        </Card>
      </PageSection>

      <PageSection span="full">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details and public profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Lorenzo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Cancellara" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-settings">Email</Label>
                <Input id="email-settings" type="email" defaultValue="lorenzo@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." defaultValue="Senior Developer" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location"><MapPin className="mr-2 h-4 w-4 inline" />Location</Label>
                  <Input id="location" defaultValue="Milan, Italy" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website"><Globe className="mr-2 h-4 w-4 inline" />Website</Label>
                  <Input id="website" defaultValue="https://example.com" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Theme Mode</Label>
                <ToggleGroup type="single" defaultValue="system" className="justify-start">
                  <ToggleGroupItem value="light" aria-label="Light"><Sun className="h-4 w-4 mr-1" /> Light</ToggleGroupItem>
                  <ToggleGroupItem value="dark" aria-label="Dark"><Moon className="h-4 w-4 mr-1" /> Dark</ToggleGroupItem>
                  <ToggleGroupItem value="system" aria-label="System"><Monitor className="h-4 w-4 mr-1" /> System</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Reduce spacing for denser content</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Show Sidebar Icons Only</Label>
                    <p className="text-sm text-muted-foreground">Collapse sidebar to icon view by default</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Animations</Label>
                    <p className="text-sm text-muted-foreground">Enable transition animations</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your password and authentication methods.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Update Password</Button>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label className="font-medium">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label className="font-medium">Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Auto-logout after 30 minutes</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what notifications you receive.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Email Notifications", desc: "Receive updates via email", defaultChecked: true },
                { label: "Push Notifications", desc: "Browser and mobile push alerts", defaultChecked: true },
                { label: "Weekly Digest", desc: "Summary of activity every Monday", defaultChecked: false },
                { label: "Security Alerts", desc: "Critical security notifications", defaultChecked: true },
                { label: "Marketing Updates", desc: "Product news and promotions", defaultChecked: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">{item.label}</Label>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={item.defaultChecked} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </PageSection>
    </>
  );
}
