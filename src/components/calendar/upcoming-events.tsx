"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  attendees: number;
  location: string;
  calendar?: string;
}

interface UpcomingEventsProps {
  events?: Event[];
  selectedEventTypes?: string[];
  selectedCalendars?: string[];
  onAddEvent?: () => void;
}

export function UpcomingEvents({
  events = [],
  selectedEventTypes = [],
  selectedCalendars = [],
  onAddEvent,
}: UpcomingEventsProps) {
  // Debug: log incoming props
  console.log("Events received:", events);
  console.log("Selected Event Types:", selectedEventTypes);
  console.log("Selected Calendars:", selectedCalendars);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "conference":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "meeting":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "presentation":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "workshop":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "webinar":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  // Filter events based on selected types and calendars
  const filteredEvents = events.filter(
    (event) =>
      (selectedEventTypes.length === 0 ||
        selectedEventTypes.includes(event.type)) &&
      (selectedCalendars.length === 0 ||
        !event.calendar ||
        selectedCalendars.includes(event.calendar))
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Next scheduled events</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 p-2">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start justify-between space-x-2 rounded-md p-2 hover:bg-muted/50"
            >
              <div className="flex flex-col flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium truncate">
                    {event.title}
                  </h4>
                  <Badge
                    className={getEventTypeColor(event.type)}
                    variant="secondary"
                  >
                    {event.type}
                  </Badge>
                </div>

                <div className="flex flex-col text-xs text-muted-foreground space-y-0.5">
                  <div className="flex items-center gap-1">
                    <Icons.clock className="w-3 h-3" />
                    <span>
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icons.mapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icons.users className="w-3 h-3" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </div>

              <div
                className={`w-3 h-3 mt-2 rounded-full ${
                  getEventTypeColor(event.type).split(" ")[0]
                }`}
              />
            </div>
          ))
        ) : (
          <div className="text-sm text-muted-foreground text-center py-2">
            No events for selected filters
          </div>
        )}

        {onAddEvent && (
          <Button
            variant="outline"
            className="w-full bg-transparent mt-1"
            onClick={onAddEvent}
          >
            <Icons.plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
