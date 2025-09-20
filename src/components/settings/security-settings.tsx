import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Update your password to keep your account secure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Update Password</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-medium">Authenticator App</div>
              <div className="text-xs text-muted-foreground">
                Use an authenticator app to generate verification codes
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Not Enabled</Badge>
              <Button variant="outline" size="sm">
                <Icons.smartphone className="w-4 h-4 mr-2" />
                Setup
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-medium">SMS Verification</div>
              <div className="text-xs text-muted-foreground">Receive verification codes via SMS</div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Enabled</Badge>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Login Activity</CardTitle>
          <CardDescription>Monitor recent login attempts and active sessions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <Icons.monitor className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Chrome on Windows</div>
                  <div className="text-xs text-muted-foreground">192.168.1.100 • New York, NY</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Current</Badge>
                <Button variant="ghost" size="sm">
                  <Icons.moreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <Icons.smartphone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Safari on iPhone</div>
                  <div className="text-xs text-muted-foreground">10.0.0.1 • San Francisco, CA</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">2 hours ago</span>
                <Button variant="outline" size="sm">
                  Revoke
                </Button>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full bg-transparent">
            <Icons.shield className="w-4 h-4 mr-2" />
            Revoke All Sessions
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
