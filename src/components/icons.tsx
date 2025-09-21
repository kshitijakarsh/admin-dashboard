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
  TicketPercent, // Coupon
  Workflow, // Operations
  IdCard, // Membership
  Users2, // Agents (alternative user icon)
  Link2, // OneLink
  Package, // Pickup Points
} from "lucide-react";

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

  // New icons
  coupon: TicketPercent,
  operations: Workflow,
  membership: IdCard,
  agents: Users2,
  oneLink: Link2,
  pickupPoints: Package,

  instagram: ({ ...props }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5zM17.5 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
    </svg>
  ),
  whatsapp: ({ ...props }) => (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16 .4a15.6 15.6 0 0 0-13.7 23.7L.4 31.6l7.8-2.1A15.6 15.6 0 1 0 16 .4zm0 28.3a12.7 12.7 0 0 1-6.4-1.8l-.5-.3l-4.6 1.3l1.3-4.5l-.3-.5a12.7 12.7 0 1 1 10.5 5.8zm7.1-9.5c-.4-.2-2.4-1.2-2.8-1.3s-.6-.2-.9.2s-1 1.3-1.2 1.5s-.4.3-.8.1s-1.5-.6-2.9-1.9c-1.1-1-1.9-2.2-2.1-2.6s0-.6.2-.8s.4-.4.6-.6c.2-.2.3-.4.4-.6c.1-.2 0-.5 0-.7s-.9-2.2-1.2-3s-.6-.7-.9-.7h-.7c-.2 0-.7.1-1.1.5c-.4.4-1.5 1.5-1.5 3.6s1.6 4.2 1.8 4.5s3.1 4.7 7.6 6.4c1.1.5 2 .8 2.7 1c1.1.3 2.1.3 2.9.2c.9-.1 2.4-1 2.7-2s.3-1.8.2-2s-.4-.3-.9-.5z" />
    </svg>
  ),
};
