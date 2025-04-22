import { ArrowRight, ArrowRightCircle, Leaf, RefreshCw, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HighlightCard from "@/components/highlight-card"
import { CO2Counter } from "@/components/co2-counter"
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-gray-100 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-teal-400 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-teal-300 blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Rent what you need.
              <br />
              <span className="text-teal-600">Share what you don't.</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Join the circular economy. Save money, reduce waste, and connect with your community through our
              peer-to-peer rental marketplace.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/explore">
                  Browse Items <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/list-item">List Your Item</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">How Circlo Works</h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FadeIn delay={100} direction="up">
              <Card className="border-none shadow-lg transition-all duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Connect</h3>
                  <p className="text-gray-600">
                    Browse thousands of items available in your community, from tools to tech to traditional artifacts.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <Card className="border-none shadow-lg transition-all duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <RefreshCw className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Share</h3>
                  <p className="text-gray-600">
                    Rent what you need or list your own items to share with others and earn extra income.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <Card className="border-none shadow-lg transition-all duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Sustain</h3>
                  <p className="text-gray-600">
                    Reduce waste, save resources, and build a more sustainable future together.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Highlight Sections */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={100} direction="left">
              <HighlightCard
                title="Rent & Earn"
                description="Make money from items you already own or save by renting instead of buying."
                icon="wallet"
                color="bg-teal-600"
                link="/explore"
                linkText="Start Now"
              />
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <HighlightCard
                title="Cultural Vault"
                description="Discover and preserve heritage items with stories that connect generations."
                icon="landmark"
                color="bg-indigo-600"
                link="/cultural-vault"
                linkText="Explore Vault"
              />
            </FadeIn>

            <FadeIn delay={300} direction="right">
              <HighlightCard
                title="Environmental Impact"
                description="Every rental reduces waste and helps build a more sustainable future."
                icon="leaf"
                color="bg-green-600"
                link="/about"
                linkText="Learn More"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CO2 Counter */}
      <section className="bg-gradient-to-br from-teal-900 to-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Collective Impact</h2>
          <div className="mx-auto max-w-3xl">
            <CO2Counter />
            <p className="mt-8 text-lg">
              By choosing to rent instead of buy, our community has saved thousands of kilograms of CO₂ emissions and
              prevented unnecessary manufacturing.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-6 border-white text-white hover:bg-white hover:text-teal-900"
            >
              <Link href="/about#impact">
                See Our Full Impact <ArrowRightCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Featured Items</h2>
              <Link href="/explore" className="flex items-center text-teal-600 hover:text-teal-700">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredItems.map((item, index) => (
              <FadeIn key={item.id} delay={100 * index} direction="up">
                <Link href={`/items/${item.id}`}>
                  <Card className="overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-gray-500">{item.location}</span>
                        <span className="font-medium text-teal-600">${item.price}/day</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const featuredItems = [
  {
    id: "1",
    title: "Professional DSLR Camera",
    price: 35,
    location: "Downtown",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    title: "Mountain Bike",
    price: 25,
    location: "Westside",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    title: "Vintage Typewriter",
    price: 15,
    location: "Northside",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    title: "Traditional Pottery Wheel",
    price: 20,
    location: "Eastside",
    image: "/placeholder.svg?height=300&width=300",
  },
]
