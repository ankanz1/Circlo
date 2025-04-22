"use client"

import { useEffect, useState } from "react"
import { Menu, Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-10 mr-2 transition-transform duration-500 group-hover:scale-110">
              <Image src="/images/circlo-logo.png" alt="Circlo Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-bold text-teal-600 transition-colors duration-300 group-hover:text-teal-700">
              Circlo
            </span>
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="/explore"
              className="text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-teal-600"
            >
              Explore
            </Link>
            <Link
              href="/cultural-vault"
              className="text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-teal-600"
            >
              Cultural Vault
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-teal-600"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search items..."
              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <Button asChild variant="outline" size="sm" className="transition-all duration-300 hover:bg-teal-50">
            <Link href="/list-item">List Your Item</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-transform duration-300 hover:scale-110"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard?tab=listings">My Listings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard?tab=rentals">My Rentals</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="transition-transform duration-300 hover:scale-110">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center mb-8 mt-4">
                <div className="relative h-8 w-8 mr-2">
                  <Image src="/images/circlo-logo.png" alt="Circlo Logo" fill className="object-contain" />
                </div>
                <span className="text-lg font-bold text-teal-600">Circlo</span>
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-teal-600"
                >
                  Home
                </Link>
                <Link
                  href="/explore"
                  className="text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-teal-600"
                >
                  Explore
                </Link>
                <Link
                  href="/cultural-vault"
                  className="text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-teal-600"
                >
                  Cultural Vault
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-teal-600"
                >
                  About
                </Link>
                <Link
                  href="/dashboard"
                  className="text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-teal-600"
                >
                  Dashboard
                </Link>
                <Link
                  href="/list-item"
                  className="text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-teal-600"
                >
                  List Your Item
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
