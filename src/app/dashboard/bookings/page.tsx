"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/components/icons"
import { BookingsTable } from "@/components/bookings/bookings-table"
import { TransactionsTable } from "@/components/bookings/transactions-table"
import { BookingDetailPanel } from "@/components/bookings/booking-detail-panel"

const bookings = [
  {
    id: "BK001",
    customerName: "Sarah Johnson",
    email: "sarah@example.com",
    event: "Himalayan Adventure Trek",
    date: "2024-03-15",
    status: "confirmed",
    amount: 1299,
    paymentStatus: "paid",
    createdAt: "2024-01-20",
  },
  {
    id: "BK002",
    customerName: "Mike Chen",
    email: "mike@example.com",
    event: "Desert Safari Experience",
    date: "2024-04-20",
    status: "pending",
    amount: 599,
    paymentStatus: "pending",
    createdAt: "2024-01-18",
  },
  {
    id: "BK003",
    customerName: "Emma Davis",
    email: "emma@example.com",
    event: "Mountain Expedition",
    date: "2024-05-10",
    status: "cancelled",
    amount: 899,
    paymentStatus: "refunded",
    createdAt: "2024-01-15",
  },
]

const transactions = [
  {
    id: "TXN001",
    bookingId: "BK001",
    amount: 1299,
    type: "payment",
    status: "completed",
    method: "credit_card",
    date: "2024-01-20",
  },
  {
    id: "TXN002",
    bookingId: "BK003",
    amount: -899,
    type: "refund",
    status: "completed",
    method: "credit_card",
    date: "2024-01-16",
  },
]

export default function BookingsPage() {
  const [selectedBooking, setSelectedBooking] = useState<(typeof bookings)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Bookings</h1>
          <p className="text-muted-foreground">Manage customer bookings and transactions</p>
        </div>
        <Button>
          <Icons.plus className="w-4 h-4 mr-2" />
          New Booking
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Icons.search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search bookings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="bookings" className="space-y-4">
            <TabsList>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>
            <TabsContent value="bookings">
              <BookingsTable bookings={filteredBookings} onSelectBooking={setSelectedBooking} />
            </TabsContent>
            <TabsContent value="transactions">
              <TransactionsTable transactions={transactions} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="lg:col-span-1">
          <BookingDetailPanel booking={selectedBooking} />
        </div>
      </div>
    </div>
  )
}
