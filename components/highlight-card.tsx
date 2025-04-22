import { ArrowRight, Landmark, Leaf, Wallet } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface HighlightCardProps {
  title: string
  description: string
  icon: "wallet" | "landmark" | "leaf"
  color: string
  link: string
  linkText: string
}

export default function HighlightCard({ title, description, icon, color, link, linkText }: HighlightCardProps) {
  const IconComponent = {
    wallet: Wallet,
    landmark: Landmark,
    leaf: Leaf,
  }[icon]

  return (
    <Card className="overflow-hidden border-none shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
      <div className={`h-2 w-full ${color}`} />
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-transform duration-500 hover:scale-110">
          <IconComponent className={`h-6 w-6 ${color.replace("bg-", "text-")}`} />
        </div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Link
          href={link}
          className={`flex items-center text-sm font-medium ${color.replace("bg-", "text-")} hover:underline group`}
        >
          {linkText} <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
