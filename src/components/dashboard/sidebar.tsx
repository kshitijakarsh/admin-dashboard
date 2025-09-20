"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from "@/components/icons"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Icons.dashboard,
  },
  {
    name: "My Events",
    href: "/dashboard/events",
    icon: Icons.calendar,
  },
  {
    name: "Leads",
    href: "/dashboard/leads",
    icon: Icons.users,
  },
  {
    name: "Bookings",
    href: "/dashboard/bookings",
    icon: Icons.star,
  },
  {
    name: "Calendar",
    href: "/dashboard/calendar",
    icon: Icons.calendar,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: Icons.messageSquare,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Icons.bell,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: Icons.analytics,
  },
  {
    name: "Team",
    href: "/dashboard/team",
    icon: Icons.users,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 bg-card border-r border-border overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icons.logo className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="ml-2 text-xl font-semibold">SaaS Dashboard</span>
          </div>
        </div>

        <div className="mt-8 flex-grow flex flex-col">
          <ScrollArea className="flex-1 px-3">
            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn("w-full justify-start", isActive && "bg-secondary text-secondary-foreground")}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </nav>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
