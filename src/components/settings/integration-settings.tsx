import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Icons } from "@/components/icons"

const integrations = [
  {
    id: 1,
    name: "Slack",
    description: "Get notifications and updates in your Slack workspace",
    icon: Icons.messageSquare,
    connected: true,
    status: "Active",
  },
  {
    id: 2,
    name: "Google Calendar",
    description: "Sync events with your Google Calendar",
    icon: Icons.calendar,
    connected: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Stripe",
    description: "Process payments and manage billing",
    icon: Icons.creditCard,
    connected: false,
    status: "Not Connected",
  },
  {
    id: 4,
    name: "Mailchimp",
    description: "Sync leads and manage email campaigns",
    icon: Icons.mail,
    connected: false,
    status: "Not Connected",
  },
  {
    id: 5,
    name: "Zoom",
    description: "Create and manage video meetings",
    icon: Icons.video,
    connected: true,
    status: "Active",
  },
]

export function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Available Integrations</CardTitle>
          <CardDescription>Connect your favorite tools and services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {integrations.map((integration) => {
              const IconComponent = integration.icon
              return (
                <div key={integration.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-muted rounded-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">{integration.name}</div>
                      <div className="text-sm text-muted-foreground">{integration.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {integration.connected ? (
                      <>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          {integration.status}
                        </Badge>
                        <Switch defaultChecked />
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </>
                    ) : (
                      <>
                        <Badge variant="secondary">{integration.status}</Badge>
                        <Button size="sm">Connect</Button>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Access</CardTitle>
          <CardDescription>Manage API keys and webhooks for custom integrations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium">API Key</div>
              <div className="text-sm text-muted-foreground font-mono">sk_live_••••••••••••••••••••••••••••••••</div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Icons.copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium">Webhook URL</div>
              <div className="text-sm text-muted-foreground">Configure webhooks for real-time updates</div>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
