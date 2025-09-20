import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export type EventType = { id: string; label: string; color: string };
export type CalendarType = { id: string; label: string; color: string };

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

interface CalendarFiltersProps {
  selectedEventTypes: string[];
  setSelectedEventTypes: (val: string[]) => void;
  selectedCalendars: string[];
  setSelectedCalendars: (val: string[]) => void;
}

export function CalendarFilters({
  selectedEventTypes,
  setSelectedEventTypes,
  selectedCalendars,
  setSelectedCalendars,
}: CalendarFiltersProps) {
  const toggleEventType = (id: string) => {
    if (selectedEventTypes.includes(id)) {
      setSelectedEventTypes(selectedEventTypes.filter((e) => e !== id));
    } else {
      setSelectedEventTypes([...selectedEventTypes, id]);
    }
  };

  const toggleCalendar = (id: string) => {
    if (selectedCalendars.includes(id)) {
      setSelectedCalendars(selectedCalendars.filter((c) => c !== id));
    } else {
      setSelectedCalendars([...selectedCalendars, id]);
    }
  };

  return (
    <Card className="mt-2">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
        <CardDescription>Customize your calendar view</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Event Types</h4>
          <div className="space-y-2">
            {eventTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={selectedEventTypes.includes(type.id)}
                  onCheckedChange={() => toggleEventType(type.id)}
                />
                <div className={`w-3 h-3 rounded-full ${type.color}`} />
                <Label htmlFor={type.id} className="text-sm">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium mb-2">Calendars</h4>
          <div className="space-y-2">
            {calendars.map((calendar) => (
              <div key={calendar.id} className="flex items-center space-x-2">
                <Checkbox
                  id={calendar.id}
                  checked={selectedCalendars.includes(calendar.id)}
                  onCheckedChange={() => toggleCalendar(calendar.id)}
                />
                <div className={`w-3 h-3 rounded-full ${calendar.color}`} />
                <Label htmlFor={calendar.id} className="text-sm">
                  {calendar.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
