"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface RecommendedItem {
  id: string
  title: string
  price: number
  distance: number
  image: string
  reason: string
}

export default function AIRecommendations() {
  const [recommendations, setRecommendations] = useState<RecommendedItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to get recommendations
    setTimeout(() => {
      setRecommendations([
        {
          id: "r1",
          title: "Electric Drill Set",
          price: 18,
          distance: 2.3,
          image: "/placeholder.svg?height=200&width=200",
          reason: "Based on your recent searches for home improvement tools",
        },
        {
          id: "r2",
          title: "Camping Tent (4-Person)",
          price: 30,
          distance: 1.8,
          image: "/placeholder.svg?height=200&width=200",
          reason: "Popular in your area this season",
        },
        {
          id: "r3",
          title: "Traditional Pottery Wheel",
          price: 20,
          distance: 4.1,
          image: "/placeholder.svg?height=200&width=200",
          reason: "You might enjoy this cultural item",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-square animate-pulse bg-gray-200" />
            <CardContent className="p-4">
              <div className="mb-2 h-5 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recommendations.map((item) => (
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
                <p className="mt-1 text-sm text-gray-500">{item.reason}</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-3 w-3" />
                    {item.distance} miles
                  </div>
                  <span className="font-medium text-teal-600">${item.price}/day</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-4 text-right">
        <Link href="/explore" className="flex items-center justify-end text-teal-600 hover:text-teal-700">
          View more recommendations <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
