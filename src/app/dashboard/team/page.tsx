import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/components/icons"
import { TeamMembersTable } from "@/components/team/team-members-table"
import { TeamInvitations } from "@/components/team/team-invitations"
import { TeamRoles } from "@/components/team/team-roles"
import { TeamStats } from "@/components/team/team-stats"

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team</h1>
          <p className="text-muted-foreground">Manage your team members and permissions</p>
        </div>
        <Button>
          <Icons.userPlus className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </div>

      <TeamStats />

      <Tabs defaultValue="members" className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="invitations">Invitations</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input placeholder="Search team members..." className="max-w-sm" />
            <Button variant="outline">
              <Icons.filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          <TeamMembersTable />
        </TabsContent>

        <TabsContent value="invitations" className="space-y-4">
          <TeamInvitations />
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <TeamRoles />
        </TabsContent>
      </Tabs>
    </div>
  )
}
