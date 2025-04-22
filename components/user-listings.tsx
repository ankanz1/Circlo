"use client"

import { Edit, MoreHorizontal, Trash } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function UserListings() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Listings</h2>
        <Button asChild className="bg-teal-600 hover:bg-teal-700">
          <Link href="/list-item">Add New Listing</Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Rentals</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listings.map((listing) => (
              <TableRow key={listing.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-md">
                      <img
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{listing.title}</div>
                      <div className="text-xs text-gray-500">{listing.category}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      listing.status === "Active" ? "default" : listing.status === "Rented" ? "secondary" : "outline"
                    }
                    className={
                      listing.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : listing.status === "Rented"
                          ? "bg-blue-100 text-blue-800"
                          : ""
                    }
                  >
                    {listing.status}
                  </Badge>
                </TableCell>
                <TableCell>₹{listing.price * 83}/day</TableCell>
                <TableCell>{listing.views}</TableCell>
                <TableCell>{listing.rentals}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Edit Listing
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" /> Delete Listing
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const listings = [
  {
    id: "1",
    title: "Professional DSLR Camera",
    category: "Electronics",
    status: "Active",
    price: 35,
    views: 124,
    rentals: 8,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    title: "Mountain Bike",
    category: "Outdoor",
    status: "Rented",
    price: 25,
    views: 87,
    rentals: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    title: "Vintage Typewriter",
    category: "Other",
    status: "Active",
    price: 15,
    views: 42,
    rentals: 2,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    title: "Camping Tent (4-Person)",
    category: "Outdoor",
    status: "Inactive",
    price: 30,
    views: 56,
    rentals: 3,
    image: "/placeholder.svg?height=100&width=100",
  },
]
