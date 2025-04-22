import { ArrowUpRight, IndianRupee, Leaf, Package, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserStats } from "@/components/user-stats"
import { EarningsChart } from "@/components/earnings-chart"
import { ImpactMetrics } from "@/components/impact-metrics"
import { UserListings } from "@/components/user-listings"
import { UserRentals } from "@/components/user-rentals"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Manage your listings, rentals, and see your impact.</p>
        </div>
        <Button asChild className="bg-teal-600 hover:bg-teal-700">
          <Link href="/list-item">
            List New Item <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
            <Package className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Items Rented</CardTitle>
            <ShoppingBag className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <IndianRupee className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹28,500</div>
            <p className="text-xs text-gray-500">+₹7,150 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
            <Leaf className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28kg</div>
            <p className="text-xs text-gray-500">+5kg from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <Tabs defaultValue="listings" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="listings">My Listings</TabsTrigger>
          <TabsTrigger value="rentals">My Rentals</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <UserListings />
        </TabsContent>

        <TabsContent value="rentals">
          <UserRentals />
        </TabsContent>

        <TabsContent value="earnings">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <EarningsChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Earning Items</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {topEarningItems.map((item) => (
                    <li key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 overflow-hidden rounded-md">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="ml-3 text-sm font-medium">{item.title}</span>
                      </div>
                      <span className="font-medium text-teal-600">₹{item.earnings * 83}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="impact">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ImpactMetrics />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>User Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <UserStats />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const topEarningItems = [
  {
    id: "1",
    title: "Professional DSLR Camera",
    earnings: 120,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    title: "Mountain Bike",
    earnings: 85,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    title: "Projector & Screen",
    earnings: 65,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    title: "Camping Tent",
    earnings: 45,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "5",
    title: "Stand Mixer",
    earnings: 27,
    image: "/placeholder.svg?height=100&width=100",
  },
]
