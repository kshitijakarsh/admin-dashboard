import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Transaction {
  id: string
  bookingId: string
  amount: number
  type: string
  status: string
  method: string
  date: string
}

interface TransactionsTableProps {
  transactions: Transaction[]
}

const getTypeBadge = (type: string) => {
  switch (type) {
    case "payment":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Payment</Badge>
    case "refund":
      return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Refund</Badge>
    default:
      return <Badge variant="outline">{type}</Badge>
  }
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Booking ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.bookingId}</TableCell>
                <TableCell>{getTypeBadge(transaction.type)}</TableCell>
                <TableCell
                  className={`font-medium ${transaction.amount < 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}
                >
                  ${Math.abs(transaction.amount)}
                </TableCell>
                <TableCell className="capitalize">{transaction.method.replace("_", " ")}</TableCell>
                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
