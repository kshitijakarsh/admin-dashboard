"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

interface LeadsTableProps {
  leads: Lead[]
  onSelectLead: (lead: Lead) => void
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

export function LeadsTable({ leads, onSelectLead }: LeadsTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id} className="cursor-pointer hover:bg-muted/50" onClick={() => onSelectLead(lead)}>
                <TableCell>
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">{lead.email}</p>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(lead.status)}</TableCell>
                <TableCell className="text-sm">{lead.event}</TableCell>
                <TableCell className="text-sm">{lead.source}</TableCell>
                <TableCell className="text-sm">{new Date(lead.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Icons.moreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
