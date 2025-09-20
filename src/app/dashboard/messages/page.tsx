import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ChatSidebar } from "@/components/messages/chat-sidebar"
import { ChatWindow } from "@/components/messages/chat-window"
import { MessageComposer } from "@/components/messages/message-composer"

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">Communicate with your team and clients</p>
        </div>
        <Button>
          <Icons.plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <ChatSidebar />
        </div>
        <div className="lg:col-span-3">
          <div className="flex flex-col h-[600px]">
            <ChatWindow />
            <MessageComposer />
          </div>
        </div>
      </div>
    </div>
  )
}
