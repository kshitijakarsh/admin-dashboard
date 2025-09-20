"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Hot", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Warm", value: 45, color: "hsl(var(--chart-2))" },
  { name: "Cold", value: 20, color: "hsl(var(--chart-3))" },
]

const chartConfig = {
  hot: {
    label: "Hot Leads",
    color: "hsl(var(--chart-1))",
  },
  warm: {
    label: "Warm Leads",
    color: "hsl(var(--chart-2))",
  },
  cold: {
    label: "Cold Leads",
    color: "hsl(var(--chart-3))",
  },
}

export function LeadsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads Distribution</CardTitle>
        <CardDescription>Current lead status breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="flex justify-center space-x-4 mt-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-muted-foreground">
                {item.name} ({item.value}%)
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
