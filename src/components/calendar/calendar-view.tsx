"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Event } from "./upcoming-events";

interface CalendarViewProps {
  view: "day" | "week" | "month";
  selectedEventTypes?: string[];
  selectedCalendars?: string[];
  events: Event[];
}

export function CalendarView({
  view,
  selectedEventTypes = [],
  selectedCalendars = [],
  events,
}: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const eventTypeColor = (type: string) => {
    switch (type) {
      case "conference":
        return "bg-blue-500";
      case "meeting":
        return "bg-green-500";
      case "presentation":
        return "bg-purple-500";
      case "workshop":
        return "bg-orange-500";
      case "webinar":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getEventsForDay = (day: number, month = currentDate.getMonth() + 1) => {
    const dateStr = `${currentDate.getFullYear()}-${month
      .toString()
      .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

    return events.filter(
      (event) =>
        event.date === dateStr &&
        (selectedEventTypes.length === 0 ||
          selectedEventTypes.includes(event.type)) &&
        (selectedCalendars.length === 0 ||
          !event.calendar ||
          selectedCalendars.includes(event.calendar))
    );
  };

  const navigate = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (view === "month")
        newDate.setMonth(prev.getMonth() + (direction === "prev" ? -1 : 1));
      else if (view === "week")
        newDate.setDate(prev.getDate() + (direction === "prev" ? -7 : 7));
      else newDate.setDate(prev.getDate() + (direction === "prev" ? -1 : 1));
      return newDate;
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            {view === "month" &&
              currentDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            {view === "week" &&
              `Week of ${currentDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}`}
            {view === "day" &&
              currentDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("prev")}
            >
              <Icons.chevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentDate(new Date())}
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("next")}
            >
              <Icons.chevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {view === "month" && (
          <>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="p-2 text-center text-sm font-medium text-muted-foreground"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {emptyDays.map((day) => (
                <div key={`empty-${day}`} className="p-2 h-24" />
              ))}

              {days.map((day) => {
                const dayEvents = getEventsForDay(day);
                const isToday =
                  day === new Date().getDate() &&
                  currentDate.getMonth() === new Date().getMonth() &&
                  currentDate.getFullYear() === new Date().getFullYear();

                return (
                  <div
                    key={day}
                    className={`p-2 h-24 border rounded-lg hover:bg-muted/50 cursor-pointer ${
                      isToday ? "bg-primary/10 border-primary" : "border-border"
                    }`}
                  >
                    <div
                      className={`text-sm font-medium mb-1 ${
                        isToday ? "text-primary" : ""
                      }`}
                    >
                      {day}
                    </div>

                    <div className="flex flex-wrap gap-1 mt-auto">
                      {dayEvents.map((event) => (
                        <span
                          key={event.id}
                          className={`w-2 h-2 rounded-full ${eventTypeColor(
                            event.type
                          )}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {view === "week" && (
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, idx) => {
              const date = new Date(currentDate);
              date.setDate(currentDate.getDate() - currentDate.getDay() + idx);
              const dayEvents = getEventsForDay(
                date.getDate(),
                date.getMonth() + 1
              );
              return (
                <div key={idx} className="p-2 border rounded-lg h-32">
                  <div className="text-sm font-medium mb-1">
                    {date.toLocaleDateString("en-US", {
                      weekday: "short",
                      day: "numeric",
                    })}
                  </div>
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className="text-xs p-1 rounded truncate bg-muted/30"
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {view === "day" && (
          <div className="space-y-2">
            <div className="font-medium">{currentDate.toDateString()}</div>
            {getEventsForDay(currentDate.getDate(), currentDate.getMonth() + 1)
              .length > 0 ? (
              getEventsForDay(
                currentDate.getDate(),
                currentDate.getMonth() + 1
              ).map((event) => (
                <div key={event.id} className="p-2 border rounded bg-muted/30">
                  <div className="font-medium">{event.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {event.time}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-sm text-muted-foreground">No events</div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
