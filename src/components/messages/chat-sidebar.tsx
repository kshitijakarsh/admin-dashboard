import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    lastMessage: "Thanks for the update on the event planning...",
    timestamp: "2m ago",
    unread: 2,
    avatar: "/sarah-avatar.png",
    online: true,
  },
  {
    id: 2,
    name: "Marketing Team",
    lastMessage: "Michael: The new campaign is ready for review",
    timestamp: "15m ago",
    unread: 0,
    avatar: "/diverse-user-avatars.png",
    online: false,
    isGroup: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    lastMessage: "Can we schedule a meeting for tomorrow?",
    timestamp: "1h ago",
    unread: 1,
    avatar: "/diverse-user-avatars.png",
    online: true,
  },
  {
    id: 4,
    name: "David Kim",
    lastMessage: "The client presentation went well!",
    timestamp: "2h ago",
    unread: 0,
    avatar: "/diverse-user-avatars.png",
    online: false,
  },
  {
    id: 5,
    name: "Project Alpha",
    lastMessage: "Lisa: Updated the project timeline",
    timestamp: "3h ago",
    unread: 3,
    avatar: "/diverse-user-avatars.png",
    online: false,
    isGroup: true,
  },
]

export function ChatSidebar() {
  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle>Conversations</CardTitle>
        <CardDescription>Recent chats and messages</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-4 border-b">
          <Input placeholder="Search conversations..." />
        </div>
        <div className="space-y-1">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center space-x-3 p-3 hover:bg-muted/50 cursor-pointer border-b last:border-b-0"
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                  <AvatarFallback>
                    {conversation.isGroup ? (
                      <Icons.users className="w-4 h-4" />
                    ) : (
                      conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    )}
                  </AvatarFallback>
                </Avatar>
                {conversation.online && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium truncate">{conversation.name}</h4>
                  <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread > 0 && (
                <Badge className="bg-primary text-primary-foreground">{conversation.unread}</Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
