"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface LeadFiltersProps {
  statusFilter: string
  onStatusChange: (status: string) => void
}

export function LeadFilters({ statusFilter, onStatusChange }: LeadFiltersProps) {
  return (
    <div className="flex items-center space-x-2">
      <Select value={statusFilter} onValueChange={onStatusChange}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="hot">Hot</SelectItem>
          <SelectItem value="warm">Warm</SelectItem>
          <SelectItem value="cold">Cold</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="icon">
        <Icons.filter className="w-4 h-4" />
      </Button>
    </div>
  )
}
