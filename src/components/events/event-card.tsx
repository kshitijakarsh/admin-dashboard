import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Calendar, Download, MoreHorizontal } from "lucide-react";

interface EventDate {
  date: string;
  bookings: number;
}

interface Event {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  bookings: number;
  status?: string;
  image?: string;
  upcomingDates?: EventDate[];
}

interface EventCardProps {
  event: Event;
}

function getOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

function formatWithOrdinal(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const weekday = d.toLocaleString("en-GB", { weekday: "short" });
  const month = d.toLocaleString("en-GB", { month: "short" });
  return `${weekday}, ${day}${getOrdinal(day)} ${month}`;
}

export function EventCard({ event }: EventCardProps) {
  const mainDate = formatWithOrdinal(event.date);

  return (
    <Card className="bg-card border rounded-xl shadow-sm p-5 hover:shadow-md transition-all">
      <div className="flex gap-5">
        <div className="w-[160px] h-[160px] rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={event.image || "/api/placeholder/200/200"}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h2 className="text-base font-semibold text-foreground leading-tight">
                2nd Jyotrilinga: {event.title}
                {event.subtitle && (
                  <span className="font-normal text-sm text-muted-foreground">
                    {" "}
                    ({event.subtitle})
                  </span>
                )}
              </h2>
            </div>

            <div className="flex items-center gap-2 ml-3">
              <Download className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
              <Badge className="bg-red-500 text-white px-1.5 py-0.5 text-[10px] font-medium rounded-md">
                Live
              </Badge>
              <Switch
                defaultChecked
                className="data-[state=checked]:bg-primary scale-90"
              />
              <MoreHorizontal className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                <span className="font-medium text-foreground">{mainDate}</span>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium rounded-md"
              >
                On Sale
              </Badge>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <span className="text-lg font-bold text-foreground">
                {event.bookings}
              </span>
              <span className="ml-1">booked</span>
            </div>
          </div>

          {event.upcomingDates && event.upcomingDates.length > 0 && (
            <div className="flex gap-3 mb-4">
              {event.upcomingDates.map((d) => (
                <div
                  key={d.date}
                  className="flex-1 max-w-[120px] border rounded-md px-3 py-2 text-center bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="text-xs font-medium text-foreground mb-0.5">
                    {formatWithOrdinal(d.date)}
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {d.bookings}
                    </span>{" "}
                    booked
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-1.5 text-sm rounded-md flex items-center gap-1.5 shadow-sm">
              <Calendar className="w-3.5 h-3.5" />
              All Dates
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
