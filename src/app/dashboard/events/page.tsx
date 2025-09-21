"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { EventCreationWizard } from "@/components/events/event-creation-wizard";
import { EventCard } from "@/components/events/event-card";

// Event mock data with proper EventDate[] structure
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
    upcomingDates: [
      { date: "2024-03-22", status: "active", bookings: 10 },
      { date: "2024-03-29", status: "active", bookings: 12 },
      { date: "2024-04-05", status: "active", bookings: 7 },
      { date: "2024-04-12", status: "active", bookings: 5 },
    ],
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
    upcomingDates: [
      { date: "2024-04-27", status: "active", bookings: 8 },
      { date: "2024-05-04", status: "active", bookings: 6 },
      { date: "2024-05-11", status: "active", bookings: 4 },
      { date: "2024-05-18", status: "active", bookings: 10 },
    ],
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
    upcomingDates: [
      { date: "2024-05-17", status: "active", bookings: 0 },
      { date: "2024-05-24", status: "active", bookings: 2 },
      { date: "2024-05-31", status: "active", bookings: 3 },
      { date: "2024-06-07", status: "active", bookings: 1 },
    ],
  },
];

export default function EventsPage() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="space-y-6 px-4 md:px-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">My Events</h1>
          <p className="text-muted-foreground">
            Create and manage your adventure events
          </p>
        </div>
        <Button onClick={() => setShowWizard(true)}>
          <Icons.plus className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Events list */}
      <div className="flex flex-col items-start gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="w-full md:max-w-2xl lg:max-w-3xl shadow-sm rounded-2xl border bg-card hover:shadow-md transition-shadow"
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>

      <EventCreationWizard open={showWizard} onOpenChange={setShowWizard} />
    </div>
  );
}
