"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const customerData = [
  { month: "Jan", new: 120, returning: 80, churn: 15 },
  { month: "Feb", new: 98, returning: 95, churn: 12 },
  { month: "Mar", new: 150, returning: 110, churn: 18 },
  { month: "Apr", new: 180, returning: 125, churn: 20 },
  { month: "May", new: 220, returning: 140, churn: 22 },
  { month: "Jun", new: 250, returning: 160, churn: 25 },
]

const segmentData = [
  { segment: "Enterprise", customers: 45, revenue: 25000 },
  { segment: "SMB", customers: 120, revenue: 15000 },
  { segment: "Startup", customers: 85, revenue: 8000 },
  { segment: "Individual", customers: 200, revenue: 5000 },
]

const chartConfig = {
  new: {
    label: "New Customers",
    color: "hsl(var(--chart-1))",
  },
  returning: {
    label: "Returning",
    color: "hsl(var(--chart-2))",
  },
  churn: {
    label: "Churn",
    color: "hsl(var(--chart-3))",
  },
}

export function CustomerAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Customer Acquisition</CardTitle>
          <CardDescription>New vs returning customers</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={customerData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="new" stackId="1" stroke="var(--color-new)" fill="var(--color-new)" />
                <Area
                  type="monotone"
                  dataKey="returning"
                  stackId="1"
                  stroke="var(--color-returning)"
                  fill="var(--color-returning)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer Segments</CardTitle>
          <CardDescription>Revenue by customer segment</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={segmentData}>
                <XAxis dataKey="segment" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="revenue" fill="var(--color-new)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
