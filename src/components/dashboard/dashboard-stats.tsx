import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const stats = [
  {
    title: "Total Treks",
    value: "2,350",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: Icons.calendar,
  },
  {
    title: "Active Bookings",
    value: "1,234",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: Icons.star,
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Icons.analytics,
  },
  {
    title: "New Leads",
    value: "573",
    change: "-2.4%",
    changeType: "negative" as const,
    icon: Icons.users,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={`text-xs ${
                stat.changeType === "positive" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              }`}
            >
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
