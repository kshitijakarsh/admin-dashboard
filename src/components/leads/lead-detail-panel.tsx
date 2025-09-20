import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  status: string
  source: string
  event: string
  createdAt: string
  lastContact: string
  notes: string
}

interface LeadDetailPanelProps {
  lead: Lead | null
}

export function LeadDetailPanel({ lead }: LeadDetailPanelProps) {
  if (!lead) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <Icons.users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Select a lead to view details</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "hot":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Hot</Badge>
      case "warm":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Warm</Badge>
      case "cold":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Cold</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{lead.name}</CardTitle>
          {getStatusBadge(lead.status)}
        </div>
        <CardDescription>Lead Details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Icons.mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{lead.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icons.phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{lead.phone}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Event Interest:</span>
            <span className="font-medium">{lead.event}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Source:</span>
            <span>{lead.source}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Created:</span>
            <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last Contact:</span>
            <span>{new Date(lead.lastContact).toLocaleDateString()}</span>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium mb-2">Notes</h4>
          <p className="text-sm text-muted-foreground">{lead.notes}</p>
        </div>

        <div className="space-y-2">
          <Button className="w-full">
            <Icons.mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <Icons.phone className="w-4 h-4 mr-2" />
            Call Lead
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
