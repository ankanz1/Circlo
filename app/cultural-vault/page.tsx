import { Globe, Info, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CulturalVaultPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Cultural Vault</h1>
        <p className="text-gray-600">Discover and preserve heritage items with stories that connect generations.</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-3">
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="americas">Americas</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="textiles">Textiles</SelectItem>
            <SelectItem value="cookware">Cookware</SelectItem>
            <SelectItem value="instruments">Instruments</SelectItem>
            <SelectItem value="art">Art & Crafts</SelectItem>
            <SelectItem value="tools">Traditional Tools</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Cultural Items Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {culturalItems.map((item) => (
          <Link key={item.id} href={`/items/${item.id}`}>
            <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{item.title}</h3>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Info className="h-4 w-4" />
                          <span className="sr-only">Item Info</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{item.story}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Globe className="mr-1 h-3 w-3" />
                  <span>{item.origin}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-3 w-3" />
                    {item.distance} miles
                  </div>
                  <span className="font-medium text-teal-600">₹{item.price * 83}/day</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

const culturalItems = [
  {
    id: "c1",
    title: "Traditional Handloom",
    origin: "India",
    price: 25,
    distance: 3.2,
    image: "/placeholder.svg?height=300&width=300",
    story:
      "This handloom has been passed down through three generations of a family from Gujarat, India. It's used to create traditional textiles with patterns unique to the region.",
  },
  {
    id: "c2",
    title: "Clay Tagine",
    origin: "Morocco",
    price: 15,
    distance: 2.1,
    image: "/placeholder.svg?height=300&width=300",
    story:
      "An authentic Moroccan tagine used for slow-cooking stews and savory dishes. The conical shape helps return condensation to the pot.",
  },
  {
    id: "c3",
    title: "Koto Instrument",
    origin: "Japan",
    price: 40,
    distance: 5.7,
    image: "/placeholder.svg?height=300&width=300",
    story:
      "A traditional Japanese stringed musical instrument with 13 strings. It has been played in Japan since the 8th century and is still used in classical Japanese music.",
  },
  {
    id: "c4",
    title: "Carved Wooden Mask",
    origin: "Ghana",
    price: 20,
    distance: 4.3,
    image: "/placeholder.svg?height=300&width=300",
    story:
      "This ceremonial mask represents ancestral spirits and is used in traditional ceremonies. Each symbol carved into the mask has specific cultural significance.",
  },
  {
    id: "c5",
    title: "Copper Samovar",
    origin: "Russia",
    price: 30,
    distance: 6.8,
    image: "/placeholder.svg?height=300&width=300",
    story:
      "A traditional Russian water boiler used to make tea. This ornate copper samovar dates back to the early 20th century and features traditional decorative elements.",
  },
  {
    id: "c6",
    title: "Mayan Metate",
    origin: "Mexico",
    price: 18,
    distance: 3.9,
    image: "/placeholder.svg?height=300&width=300",
    story:
      "A stone tool used by Mesoamerican cultures for grinding maize and other grains. This traditional design has been used for thousands of years.",
  },
  {
    id: "c7",
    title: "Celtic Harp",
    origin: "Ireland",
    price: 45,
    distance: 7.2,
    image: "/placeholder.svg?height=300&width=300",
    story:
      "A traditional Irish harp with 36 strings. The harp has been a symbol of Ireland for centuries and is featured on Irish coins and the presidential seal.",
  },
  {
    id: "c8",
    title: "Batik Printing Set",
    origin: "Indonesia",
    price: 22,
    distance: 5.1,
    image: "/placeholder.svg?height=300&width=300",
    story:
      "Complete set for creating traditional Indonesian batik fabric art. Includes copper stamps (tjaps), wax, and dyes for creating intricate patterns.",
  },
]
