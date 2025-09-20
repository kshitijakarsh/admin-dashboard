import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@company.com",
    role: "Admin",
    status: "active",
    lastActive: "2 hours ago",
    avatar: "/sarah-avatar.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@company.com",
    role: "Manager",
    status: "active",
    lastActive: "1 day ago",
    avatar: "/diverse-user-avatars.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily@company.com",
    role: "Member",
    status: "active",
    lastActive: "3 hours ago",
    avatar: "/diverse-user-avatars.png",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@company.com",
    role: "Member",
    status: "inactive",
    lastActive: "1 week ago",
    avatar: "/diverse-user-avatars.png",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa@company.com",
    role: "Manager",
    status: "active",
    lastActive: "5 minutes ago",
    avatar: "/diverse-user-avatars.png",
  },
]

export function TeamMembersTable() {
  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Admin</Badge>
      case "Manager":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Manager</Badge>
      case "Member":
        return <Badge variant="secondary">Member</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Manage your team members and their roles</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">{member.email}</div>
                  <div className="text-xs text-muted-foreground">Last active: {member.lastActive}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getRoleBadge(member.role)}
                {getStatusBadge(member.status)}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Icons.moreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Icons.edit className="w-4 h-4 mr-2" />
                      Edit Role
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Icons.mail className="w-4 h-4 mr-2" />
                      Send Message
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Icons.userMinus className="w-4 h-4 mr-2" />
                      Remove Member
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
