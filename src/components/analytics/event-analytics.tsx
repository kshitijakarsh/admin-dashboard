"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts"

const eventData = [
  { month: "Jan", events: 12, attendees: 450 },
  { month: "Feb", events: 8, attendees: 320 },
  { month: "Mar", events: 15, attendees: 680 },
  { month: "Apr", events: 18, attendees: 720 },
  { month: "May", events: 22, attendees: 890 },
  { month: "Jun", events: 25, attendees: 1050 },
]

const eventTypeData = [
  { name: "Conferences", value: 35, color: "#8884d8" },
  { name: "Workshops", value: 25, color: "#82ca9d" },
  { name: "Webinars", value: 20, color: "#ffc658" },
  { name: "Networking", value: 20, color: "#ff7300" },
]

const chartConfig = {
  events: {
    label: "Events",
    color: "hsl(var(--chart-1))",
  },
  attendees: {
    label: "Attendees",
    color: "hsl(var(--chart-2))",
  },
}

export function EventAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Event Performance</CardTitle>
          <CardDescription>Events hosted and total attendees</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={eventData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="events" stroke="var(--color-events)" strokeWidth={2} />
                <Line type="monotone" dataKey="attendees" stroke="var(--color-attendees)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Event Types</CardTitle>
          <CardDescription>Distribution by event category</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={eventTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {eventTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
