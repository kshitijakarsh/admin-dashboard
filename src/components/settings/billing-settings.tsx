import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export function BillingSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>Manage your subscription and billing details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold">Professional Plan</h3>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Current</Badge>
              </div>
              <p className="text-sm text-muted-foreground">$49/month • Billed monthly</p>
              <p className="text-xs text-muted-foreground">Next billing date: February 15, 2024</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Manage your payment methods and billing information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Icons.creditCard className="w-8 h-8 text-muted-foreground" />
              <div>
                <div className="font-medium">•••• •••• •••• 4242</div>
                <div className="text-sm text-muted-foreground">Expires 12/2025</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Default</Badge>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </div>
          <Button variant="outline" className="w-full bg-transparent">
            <Icons.plus className="w-4 h-4 mr-2" />
            Add Payment Method
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View and download your past invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Jan 15, 2024", amount: "$49.00", status: "Paid", invoice: "INV-001" },
              { date: "Dec 15, 2023", amount: "$49.00", status: "Paid", invoice: "INV-002" },
              { date: "Nov 15, 2023", amount: "$49.00", status: "Paid", invoice: "INV-003" },
            ].map((invoice, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{invoice.invoice}</div>
                  <div className="text-sm text-muted-foreground">{invoice.date}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{invoice.amount}</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    {invoice.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Icons.download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
