import { Filter, MapPin, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MapView from "@/components/map-view"
import AIRecommendations from "@/components/ai-recommendations"

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Explore Items</h1>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search for items..." className="pl-10" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="tools">Tools</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="outdoor">Outdoor</SelectItem>
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="cultural">Cultural</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="5">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Distance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 mile</SelectItem>
              <SelectItem value="5">5 miles</SelectItem>
              <SelectItem value="10">10 miles</SelectItem>
              <SelectItem value="25">25 miles</SelectItem>
              <SelectItem value="50">50+ miles</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* View Toggle */}
      <Tabs defaultValue="grid" className="mb-8">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>
          <Tabs defaultValue="everyday">
            <TabsList>
              <TabsTrigger value="everyday">Everyday Items</TabsTrigger>
              <TabsTrigger value="cultural">Cultural Vault</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <TabsContent value="grid" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
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
                    <h3 className="font-semibold">{item.title}</h3>
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
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <MapView items={items} />
        </TabsContent>
      </Tabs>

      {/* AI Recommendations */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Recommended Near You</h2>
        <AIRecommendations />
      </section>
    </div>
  )
}

const items = [
  {
    id: "1",
    title: "Professional DSLR Camera",
    price: 35,
    distance: 1.2,
    location: "Downtown",
    image: "/placeholder.svg?height=300&width=300",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "2",
    title: "Mountain Bike",
    price: 25,
    distance: 2.5,
    location: "Westside",
    image: "/placeholder.svg?height=300&width=300",
    coordinates: { lat: 40.7228, lng: -74.016 },
  },
  {
    id: "3",
    title: "Vintage Typewriter",
    price: 15,
    distance: 3.7,
    location: "Northside",
    image: "/placeholder.svg?height=300&width=300",
    coordinates: { lat: 40.7328, lng: -74.026 },
  },
  {
    id: "4",
    title: "Traditional Pottery Wheel",
    price: 20,
    distance: 4.1,
    location: "Eastside",
    image: "/placeholder.svg?height=300&width=300",
    coordinates: { lat: 40.7428, lng: -74.036 },
  },
  {
    id: "5",
    title: "Camping Tent (4-Person)",
    price: 30,
    distance: 1.8,
    location: "Southside",
    image: "/placeholder.svg?height=300&width=300",
    coordinates: { lat: 40.7028, lng: -74.046 },
  },
  {
    id: "6",
    title: "Electric Drill Set",
    price: 18,
    distance: 2.3,
    location: "Downtown",
    image: "/placeholder.svg?height=300&width=300",
    coordinates: { lat: 40.7148, lng: -74.016 },
  },
  {
    id: "7",
    title: "Projector & Screen",
    price: 40,
    distance: 3.2,
    location: "Westside",
    image: "/placeholder.svg?height=300&width=300",
    coordinates: { lat: 40.7248, lng: -74.026 },
  },
  {
    id: "8",
    title: "Stand Mixer",
    price: 22,
    distance: 2.7,
    location: "Northside",
    image: "/placeholder.svg?height=300&width=300",
    coordinates: { lat: 40.7348, lng: -74.036 },
  },
]
