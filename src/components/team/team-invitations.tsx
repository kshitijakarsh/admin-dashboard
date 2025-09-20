import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const invitations = [
  {
    id: 1,
    email: "john.doe@company.com",
    role: "Member",
    status: "pending",
    sentDate: "2024-01-10",
    expiresDate: "2024-01-17",
  },
  {
    id: 2,
    email: "jane.smith@company.com",
    role: "Manager",
    status: "pending",
    sentDate: "2024-01-12",
    expiresDate: "2024-01-19",
  },
  {
    id: 3,
    email: "alex.wilson@company.com",
    role: "Member",
    status: "expired",
    sentDate: "2024-01-05",
    expiresDate: "2024-01-12",
  },
]

export function TeamInvitations() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pending</Badge>
      case "expired":
        return <Badge variant="destructive">Expired</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Invitations</CardTitle>
        <CardDescription>Manage team invitations and resend if needed</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {invitations.map((invitation) => (
            <div key={invitation.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="font-medium">{invitation.email}</div>
                <div className="text-sm text-muted-foreground">
                  Role: {invitation.role} • Sent: {new Date(invitation.sentDate).toLocaleDateString()}
                </div>
                <div className="text-xs text-muted-foreground">
                  Expires: {new Date(invitation.expiresDate).toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusBadge(invitation.status)}
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm">
                    <Icons.mail className="w-4 h-4 mr-2" />
                    Resend
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icons.trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {invitations.length === 0 && (
          <div className="text-center py-8">
            <Icons.userPlus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No pending invitations</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
