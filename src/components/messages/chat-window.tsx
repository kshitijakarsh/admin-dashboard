import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Hi! I wanted to follow up on the event planning discussion we had yesterday.",
    timestamp: "10:30 AM",
    avatar: "/sarah-avatar.png",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Of course! I've prepared the initial timeline and budget estimates. Let me share them with you.",
    timestamp: "10:32 AM",
    avatar: "/diverse-user-avatars.png",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    content: "That would be great! Also, do you think we can accommodate 200+ attendees?",
    timestamp: "10:35 AM",
    avatar: "/sarah-avatar.png",
    isOwn: false,
  },
  {
    id: 4,
    sender: "You",
    content:
      "The venue we discussed can handle up to 300 people comfortably. I'll include the capacity details in the proposal.",
    timestamp: "10:37 AM",
    avatar: "/diverse-user-avatars.png",
    isOwn: true,
  },
  {
    id: 5,
    sender: "Sarah Johnson",
    content: "Perfect! Thanks for being so responsive. Looking forward to seeing the proposal.",
    timestamp: "10:40 AM",
    avatar: "/sarah-avatar.png",
    isOwn: false,
  },
]

export function ChatWindow() {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/sarah-avatar.png" alt="Sarah Johnson" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">Sarah Johnson</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Icons.phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Icons.video className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Icons.moreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                <AvatarFallback>
                  {message.sender
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className={`flex-1 ${message.isOwn ? "text-right" : ""}`}>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                </div>
                <div
                  className={`inline-block p-3 rounded-lg max-w-xs lg:max-w-md ${
                    message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
