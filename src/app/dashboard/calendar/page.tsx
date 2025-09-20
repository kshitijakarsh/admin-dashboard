"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/icons";
import { CalendarView } from "@/components/calendar/calendar-view";
import { UpcomingEvents, Event } from "@/components/calendar/upcoming-events";
import {
  CalendarFilters,
  EventType,
  CalendarType,
} from "@/components/calendar/calendar-filters";
import { NewEventDialog } from "@/components/calendar/new-event-dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function CalendarPage() {
  const [view, setView] = useState<"day" | "week" | "month">("month");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([
    "conference",
    "meeting",
    "presentation",
    "workshop",
    "webinar",
  ]);
  const [selectedCalendars, setSelectedCalendars] = useState<string[]>([
    "personal",
    "work",
    "team",
  ]);

  // Main events state
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Product Launch Event",
      date: "2024-01-15",
      time: "10:00 AM",
      type: "conference",
      attendees: 150,
      calendar: "work",
      location: "Office HQ",
    },
    {
      id: 2,
      title: "Team Meeting",
      date: "2024-01-16",
      time: "2:00 PM",
      type: "meeting",
      attendees: 8,
      calendar: "team",
      location: "Zoom",
    },
    {
      id: 3,
      title: "Client Presentation",
      date: "2024-01-18",
      time: "11:00 AM",
      type: "presentation",
      attendees: 25,
      calendar: "personal",
      location: "Client Office",
    },
    {
      id: 4,
      title: "Workshop: React Best Practices",
      date: "2024-01-20",
      time: "9:00 AM",
      type: "workshop",
      attendees: 45,
      calendar: "work",
      location: "Conference Room",
    },
  ]);

  const eventTypes: EventType[] = [
    { id: "conference", label: "Conferences", color: "bg-blue-500" },
    { id: "meeting", label: "Meetings", color: "bg-green-500" },
    { id: "presentation", label: "Presentations", color: "bg-purple-500" },
    { id: "workshop", label: "Workshops", color: "bg-orange-500" },
    { id: "webinar", label: "Webinars", color: "bg-red-500" },
  ];

  const calendars: CalendarType[] = [
    { id: "personal", label: "Personal", color: "bg-blue-500" },
    { id: "work", label: "Work", color: "bg-green-500" },
    { id: "team", label: "Team", color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Manage your events and schedule
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Select
            value={view}
            onValueChange={(val) => setView(val as "day" | "week" | "month")}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>

          <NewEventDialog
            eventTypes={eventTypes}
            calendars={calendars}
            onAddEvent={(newEvent) => setEvents((prev) => [...prev, newEvent])}
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3 space-y-4">
          <CalendarView
            view={view}
            selectedEventTypes={selectedEventTypes}
            selectedCalendars={selectedCalendars}
            events={events}
          />
        </div>

        <div className="space-y-6">
          <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full">
                <Icons.filter className="w-4 h-4 mr-2" />
                {filtersOpen ? "Hide Filters" : "Show Filters"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CalendarFilters
                selectedEventTypes={selectedEventTypes}
                setSelectedEventTypes={setSelectedEventTypes}
                selectedCalendars={selectedCalendars}
                setSelectedCalendars={setSelectedCalendars}
              />
            </CollapsibleContent>
          </Collapsible>

          <UpcomingEvents
            events={events}
            selectedEventTypes={selectedEventTypes}
            selectedCalendars={selectedCalendars}
          />
        </div>
      </div>
    </div>
  );
}
