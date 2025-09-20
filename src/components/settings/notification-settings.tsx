import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Choose what email notifications you'd like to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="new-events">New Events</Label>
              <div className="text-xs text-muted-foreground">Get notified when new events are created</div>
            </div>
            <Switch id="new-events" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="new-leads">New Leads</Label>
              <div className="text-xs text-muted-foreground">Get notified when new leads are added</div>
            </div>
            <Switch id="new-leads" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="bookings">Booking Updates</Label>
              <div className="text-xs text-muted-foreground">Get notified about booking confirmations and changes</div>
            </div>
            <Switch id="bookings" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="team-updates">Team Updates</Label>
              <div className="text-xs text-muted-foreground">Get notified when team members join or leave</div>
            </div>
            <Switch id="team-updates" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Manage browser and mobile push notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="browser-notifications">Browser Notifications</Label>
              <div className="text-xs text-muted-foreground">Show notifications in your browser</div>
            </div>
            <Switch id="browser-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="mobile-notifications">Mobile Notifications</Label>
              <div className="text-xs text-muted-foreground">Send notifications to your mobile device</div>
            </div>
            <Switch id="mobile-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Frequency</CardTitle>
          <CardDescription>Control how often you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-frequency">Email Frequency</Label>
            <Select defaultValue="immediate">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate</SelectItem>
                <SelectItem value="hourly">Hourly Digest</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
                <SelectItem value="weekly">Weekly Digest</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quiet-hours">Quiet Hours</Label>
            <Select defaultValue="22-08">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No quiet hours</SelectItem>
                <SelectItem value="22-08">10 PM - 8 AM</SelectItem>
                <SelectItem value="23-07">11 PM - 7 AM</SelectItem>
                <SelectItem value="00-06">12 AM - 6 AM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
