import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Progress } from "@/components/ui/progress"

interface Event {
  id: number
  title: string
  description: string
  date: string
  duration: string
  price: number
  status: string
  bookings: number
  maxCapacity: number
  image: string
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const bookingPercentage = (event.bookings / event.maxCapacity) * 100

  return (
    <Card>
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={event.image || "/placeholder.svg?height=200&width=400&query=adventure event"}
          alt={event.title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2" variant={event.status === "active" ? "default" : "secondary"}>
          {event.status}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center">
            <Icons.calendar className="w-4 h-4 mr-1" />
            {new Date(event.date).toLocaleDateString()}
          </span>
          <span className="font-semibold">${event.price}</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Bookings</span>
            <span>
              {event.bookings}/{event.maxCapacity}
            </span>
          </div>
          <Progress value={bookingPercentage} className="h-2" />
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <Icons.edit className="w-4 h-4 mr-1" />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <Icons.eye className="w-4 h-4 mr-1" />
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
