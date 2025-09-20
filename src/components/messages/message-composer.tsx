import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

export function MessageComposer() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <Textarea placeholder="Type your message..." className="min-h-[60px] resize-none" rows={2} />
          </div>
          <div className="flex flex-col space-y-2">
            <Button variant="ghost" size="sm">
              <Icons.paperclip className="w-4 h-4" />
            </Button>
            <Button size="sm">
              <Icons.send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Icons.smile className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Icons.image className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Icons.mic className="w-4 h-4" />
            </Button>
          </div>
          <span className="text-xs text-muted-foreground">Press Enter to send, Shift+Enter for new line</span>
        </div>
      </CardContent>
    </Card>
  )
}
