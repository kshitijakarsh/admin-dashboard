"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

interface BookingsTableProps {
  bookings: Booking[]
  onSelectBooking: (booking: Booking) => void
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

const getPaymentBadge = (status: string) => {
  switch (status) {
    case "paid":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Paid</Badge>
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pending</Badge>
    case "refunded":
      return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Refunded</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export function BookingsTable({ bookings, onSelectBooking }: BookingsTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow
                key={booking.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => onSelectBooking(booking)}
              >
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{booking.customerName}</p>
                    <p className="text-sm text-muted-foreground">{booking.email}</p>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{booking.event}</TableCell>
                <TableCell>{getStatusBadge(booking.status)}</TableCell>
                <TableCell>{getPaymentBadge(booking.paymentStatus)}</TableCell>
                <TableCell className="font-medium">${booking.amount}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Icons.moreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
