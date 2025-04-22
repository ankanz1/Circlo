"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Item {
  id: string
  title: string
  price: number
  distance: number
  location: string
  image: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface MapViewProps {
  items: Item[]
}

export default function MapView({ items }: MapViewProps) {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-lg bg-gray-100">
      {/* This would be replaced with an actual map component like Google Maps or Mapbox */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-500">Interactive map would be displayed here</p>
      </div>

      {/* Map pins */}
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute cursor-pointer"
          style={{
            left: `${(item.coordinates.lng + 74.05) * 100}px`,
            top: `${(40.75 - item.coordinates.lat) * 100}px`,
          }}
          onClick={() => setSelectedItem(item)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white shadow-md transition-transform hover:scale-110">
            <MapPin className="h-5 w-5" />
          </div>
        </div>
      ))}

      {/* Selected item popup */}
      {selectedItem && (
        <Card className="absolute bottom-4 left-4 w-72 shadow-lg">
          <div className="aspect-video overflow-hidden">
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="h-full w-full object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">{selectedItem.title}</h3>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="mr-1 h-3 w-3" />
                {selectedItem.distance} miles
              </div>
              <span className="font-medium text-teal-600">${selectedItem.price}/day</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
