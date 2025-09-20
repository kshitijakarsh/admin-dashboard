import {
  Loader2,
  Check,
  Github,
  LayoutDashboard,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  Plus,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Star,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Sun,
  Moon,
  Monitor,
  MessageSquare,
  Send,
  Paperclip,
  Smile,
  ImageIcon,
  Mic,
  AtSign,
  UserCheck,
  UserPlus,
  UserMinus,
  Video,
  ChevronLeft,
  ChevronRight,
  Clock,
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Upload,
  Copy,
  Shield,
  Smartphone,
} from "lucide-react"

export const Icons = {
  spinner: Loader2,
  check: Check,
  gitHub: Github,
  google: ({ ...props }) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  ),
  logo: ({ ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dashboard: LayoutDashboard,
  users: Users,
  calendar: Calendar,
  analytics: BarChart3,
  settings: Settings,
  bell: Bell,
  search: Search,
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  plus: Plus,
  filter: Filter,
  download: Download,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  star: Star,
  eye: Eye,
  edit: Edit,
  trash: Trash2,
  moreHorizontal: MoreHorizontal,
  sun: Sun,
  moon: Moon,
  monitor: Monitor,
  messageSquare: MessageSquare,
  send: Send,
  paperclip: Paperclip,
  smile: Smile,
  image: ImageIcon,
  mic: Mic,
  atSign: AtSign,
  userCheck: UserCheck,
  userPlus: UserPlus,
  userMinus: UserMinus,
  video: Video,
  clock: Clock,
  trendingUp: TrendingUp,
  trendingDown: TrendingDown,
  dollarSign: DollarSign,
  creditCard: CreditCard,
  upload: Upload,
  copy: Copy,
  shield: Shield,
  smartphone: Smartphone,
  x: X,
}
