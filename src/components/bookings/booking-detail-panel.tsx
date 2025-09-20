import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

interface Booking {
  id: string
  customerName: string
  email: string
  event: string
  date: string
  status: string
  amount: number
  paymentStatus: string
  createdAt: string
}

interface BookingDetailPanelProps {
  booking: Booking | null
}

export function BookingDetailPanel({ booking }: BookingDetailPanelProps) {
  if (!booking) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <Icons.star className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Select a booking to view details</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Confirmed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pending</Badge>
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{booking.id}</CardTitle>
          {getStatusBadge(booking.status)}
        </div>
        <CardDescription>Booking Details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Customer Information</h4>
          <div className="space-y-1">
            <p className="text-sm font-medium">{booking.customerName}</p>
            <div className="flex items-center space-x-2">
              <Icons.mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{booking.email}</span>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Event:</span>
            <span className="font-medium">{booking.event}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Event Date:</span>
            <span>{new Date(booking.date).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Amount:</span>
            <span className="font-medium">${booking.amount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Payment Status:</span>
            <span className="capitalize">{booking.paymentStatus}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Booked On:</span>
            <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Button className="w-full">
            <Icons.mail className="w-4 h-4 mr-2" />
            Contact Customer
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <Icons.edit className="w-4 h-4 mr-2" />
            Edit Booking
          </Button>
          {booking.status !== "cancelled" && (
            <Button variant="destructive" className="w-full">
              <Icons.trash className="w-4 h-4 mr-2" />
              Cancel Booking
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
