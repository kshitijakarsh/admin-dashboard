"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarType, EventType } from "@/components/calendar/calendar-filters";

interface NewEventDialogProps {
  onAddEvent: (event: any) => void;
  eventTypes: EventType[];
  calendars: CalendarType[];
}

export function NewEventDialog({ onAddEvent, eventTypes, calendars }: NewEventDialogProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState(eventTypes[0].id);
  const [calendar, setCalendar] = useState(calendars[0].id);
  const [attendees, setAttendees] = useState(1);
  const [location, setLocation] = useState("");

  const handleAddEvent = () => {
    if (!title || !date || !time || !location) return;

    onAddEvent({
      id: Date.now(),
      title,
      date,
      time,
      type,
      calendar,
      attendees,
      location,
    });

    // Reset form
    setTitle("");
    setDate("");
    setTime("");
    setType(eventTypes[0].id);
    setCalendar(calendars[0].id);
    setAttendees(1);
    setLocation("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span className="mr-2">+</span> New Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Event</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Event title"
            />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="type">Event Type</Label>
            <Select value={type} onValueChange={(val) => setType(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1">
            <Label htmlFor="calendar">Calendar</Label>
            <Select value={calendar} onValueChange={(val) => setCalendar(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select calendar" />
              </SelectTrigger>
              <SelectContent>
                {calendars.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1">
            <Label htmlFor="attendees">Attendees</Label>
            <Input
              id="attendees"
              type="number"
              min={1}
              value={attendees}
              onChange={(e) => setAttendees(Number(e.target.value))}
            />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Event location"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            onClick={() => {
              handleAddEvent();
            }}
          >
            Add Event
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
