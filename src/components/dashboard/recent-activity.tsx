import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "booked a trek",
    target: "Himalayan Adventure",
    time: "2 minutes ago",
    avatar: "/sarah-avatar.png",
    type: "booking",
  },
  {
    id: 2,
    user: "Mike Chen",
    action: "submitted a lead",
    target: "Mountain Expedition",
    time: "5 minutes ago",
    avatar: "/mike-avatar.jpg",
    type: "lead",
  },
  {
    id: 3,
    user: "Emma Davis",
    action: "cancelled booking",
    target: "Desert Safari",
    time: "10 minutes ago",
    avatar: "/emma-avatar.jpg",
    type: "cancellation",
  },
  {
    id: 4,
    user: "Alex Rodriguez",
    action: "used coupon",
    target: "SUMMER20",
    time: "15 minutes ago",
    avatar: "/alex-avatar.png",
    type: "coupon",
  },
  {
    id: 5,
    user: "Lisa Wang",
    action: "joined membership",
    target: "Premium Plan",
    time: "20 minutes ago",
    avatar: "/lisa-avatar.jpg",
    type: "membership",
  },
]

const getActivityBadge = (type: string) => {
  switch (type) {
    case "booking":
      return <Badge variant="default">Booking</Badge>
    case "lead":
      return <Badge variant="secondary">Lead</Badge>
    case "cancellation":
      return <Badge variant="destructive">Cancelled</Badge>
    case "coupon":
      return <Badge variant="outline">Coupon</Badge>
    case "membership":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Membership</Badge>
    default:
      return <Badge variant="outline">Activity</Badge>
  }
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest customer interactions and system events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user}</span> {activity.action}{" "}
                  <span className="font-semibold">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              {getActivityBadge(activity.type)}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
