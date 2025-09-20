"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { LeadsTable } from "@/components/leads/leads-table"
import { LeadFilters } from "@/components/leads/lead-filters"
import { LeadDetailPanel } from "@/components/leads/lead-detail-panel"

const leads = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 234 567 8900",
    status: "hot",
    source: "Website",
    event: "Himalayan Adventure Trek",
    createdAt: "2024-01-15",
    lastContact: "2024-01-20",
    notes: "Very interested, asked about group discounts",
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@example.com",
    phone: "+1 234 567 8901",
    status: "warm",
    source: "Social Media",
    event: "Desert Safari Experience",
    createdAt: "2024-01-14",
    lastContact: "2024-01-18",
    notes: "Needs to check dates with family",
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma@example.com",
    phone: "+1 234 567 8902",
    status: "cold",
    source: "Referral",
    event: "Mountain Expedition",
    createdAt: "2024-01-12",
    lastContact: "2024-01-15",
    notes: "Price sensitive, looking for alternatives",
  },
]

export default function LeadsPage() {
  const [selectedLead, setSelectedLead] = useState<(typeof leads)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Leads</h1>
          <p className="text-muted-foreground">Manage and track your potential customers</p>
        </div>
        <Button>
          <Icons.plus className="w-4 h-4 mr-2" />
          Add Lead
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Icons.search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <LeadFilters statusFilter={statusFilter} onStatusChange={setStatusFilter} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LeadsTable leads={filteredLeads} onSelectLead={setSelectedLead} />
        </div>
        <div className="lg:col-span-1">
          <LeadDetailPanel lead={selectedLead} />
        </div>
      </div>
    </div>
  )
}
