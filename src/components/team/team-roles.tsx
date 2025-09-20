import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Icons } from "@/components/icons"

const roles = [
  {
    id: 1,
    name: "Admin",
    description: "Full access to all features and settings",
    memberCount: 3,
    permissions: {
      manageTeam: true,
      manageSettings: true,
      manageEvents: true,
      manageLeads: true,
      manageBookings: true,
      viewAnalytics: true,
    },
  },
  {
    id: 2,
    name: "Manager",
    description: "Can manage events, leads, and view analytics",
    memberCount: 5,
    permissions: {
      manageTeam: false,
      manageSettings: false,
      manageEvents: true,
      manageLeads: true,
      manageBookings: true,
      viewAnalytics: true,
    },
  },
  {
    id: 3,
    name: "Member",
    description: "Basic access to view and create content",
    memberCount: 16,
    permissions: {
      manageTeam: false,
      manageSettings: false,
      manageEvents: false,
      manageLeads: true,
      manageBookings: false,
      viewAnalytics: false,
    },
  },
]

export function TeamRoles() {
  return (
    <div className="space-y-4">
      {roles.map((role) => (
        <Card key={role.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <span>{role.name}</span>
                  <Badge variant="secondary">{role.memberCount} members</Badge>
                </CardTitle>
                <CardDescription>{role.description}</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Icons.edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Permissions</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Manage Team</div>
                    <div className="text-xs text-muted-foreground">Add, remove, and edit team members</div>
                  </div>
                  <Switch checked={role.permissions.manageTeam} disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Manage Settings</div>
                    <div className="text-xs text-muted-foreground">Access and modify system settings</div>
                  </div>
                  <Switch checked={role.permissions.manageSettings} disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Manage Events</div>
                    <div className="text-xs text-muted-foreground">Create, edit, and delete events</div>
                  </div>
                  <Switch checked={role.permissions.manageEvents} disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Manage Leads</div>
                    <div className="text-xs text-muted-foreground">Access and manage lead information</div>
                  </div>
                  <Switch checked={role.permissions.manageLeads} disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Manage Bookings</div>
                    <div className="text-xs text-muted-foreground">Handle booking requests and payments</div>
                  </div>
                  <Switch checked={role.permissions.manageBookings} disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">View Analytics</div>
                    <div className="text-xs text-muted-foreground">Access reports and analytics data</div>
                  </div>
                  <Switch checked={role.permissions.viewAnalytics} disabled />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button variant="outline" className="w-full bg-transparent">
        <Icons.plus className="w-4 h-4 mr-2" />
        Create Custom Role
      </Button>
    </div>
  )
}
