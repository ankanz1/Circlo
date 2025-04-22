"use client"

import { Calendar, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function UserRentals() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">My Rentals</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {rentals.map((rental) => (
          <Card key={rental.id}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={rental.image || "/placeholder.svg"}
                    alt={rental.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{rental.title}</h3>
                    <Badge
                      variant={
                        rental.status === "Active" ? "default" : rental.status === "Completed" ? "outline" : "secondary"
                      }
                      className={
                        rental.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : rental.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : ""
                      }
                    >
                      {rental.status}
                    </Badge>
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-3 w-3" />
                    {rental.location}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    {rental.dates}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium text-teal-600">${rental.totalPrice}</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-gray-600">
                      <MessageCircle className="h-4 w-4" /> Contact Owner
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const rentals = [
  {
    id: "r1",
    title: "Electric Drill Set",
    status: "Active",
    location: "Downtown",
    dates: "May 15 - May 18, 2023",
    totalPrice: 54,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "r2",
    title: "Projector & Screen",
    status: "Pending",
    location: "Westside",
    dates: "May 20 - May 21, 2023",
    totalPrice: 80,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "r3",
    title: "Traditional Pottery Wheel",
    status: "Completed",
    location: "Eastside",
    dates: "May 1 - May 3, 2023",
    totalPrice: 60,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "r4",
    title: "Stand Mixer",
    status: "Completed",
    location: "Northside",
    dates: "April 25 - April 28, 2023",
    totalPrice: 66,
    image: "/placeholder.svg?height=100&width=100",
  },
]
