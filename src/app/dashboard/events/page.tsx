"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { EventCreationWizard } from "@/components/events/event-creation-wizard"
import { EventCard } from "@/components/events/event-card"

const events = [
  {
    id: 1,
    title: "Himalayan Adventure Trek",
    description: "7-day trek through the beautiful Himalayas",
    date: "2024-03-15",
    duration: "7 days",
    price: 1299,
    status: "active",
    bookings: 23,
    maxCapacity: 30,
    image: "/himalayan-trek.jpg",
  },
  {
    id: 2,
    title: "Desert Safari Experience",
    description: "3-day desert camping and safari adventure",
    date: "2024-04-20",
    duration: "3 days",
    price: 599,
    status: "active",
    bookings: 15,
    maxCapacity: 20,
    image: "/desert-safari.jpg",
  },
  {
    id: 3,
    title: "Mountain Expedition",
    description: "5-day mountain climbing expedition",
    date: "2024-05-10",
    duration: "5 days",
    price: 899,
    status: "draft",
    bookings: 0,
    maxCapacity: 15,
    image: "/mountain-expedition.jpg",
  },
]

export default function EventsPage() {
  const [showWizard, setShowWizard] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">My Events</h1>
          <p className="text-muted-foreground">Create and manage your adventure events</p>
        </div>
        <Button onClick={() => setShowWizard(true)}>
          <Icons.plus className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <EventCreationWizard open={showWizard} onOpenChange={setShowWizard} />
    </div>
  )
}
