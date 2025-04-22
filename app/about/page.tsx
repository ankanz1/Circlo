import { ArrowRight, Globe, Heart, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CO2Counter } from "@/components/co2-counter"
import { FadeIn } from "@/components/fade-in"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            About <span className="text-teal-600">Circlo</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            We're building a future where sharing resources creates stronger communities and a healthier planet.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Circlo began with a simple observation: most of us own things we rarely use, while simultaneously
                needing things we don't own. We saw garages filled with tools used once a year, kitchen appliances
                gathering dust, and cultural artifacts hidden away instead of being shared and appreciated.
              </p>
              <p>
                Founded in 2023 by a team of sustainability enthusiasts and community builders, we set out to create a
                platform that makes sharing resources easy, safe, and beneficial for everyone involved.
              </p>
              <p>
                Our mission extends beyond just renting items—we're creating a circular economy that reduces waste,
                builds community connections, and preserves cultural heritage through shared experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Circlo? */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why "Circlo"?</h2>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-gray-600">
              Our name combines "circle" and "cycle"—representing both the circular economy we're building and the
              community circles we're strengthening. The "o" symbolizes completeness, sustainability, and the continuous
              cycle of sharing that benefits everyone.
            </p>
            <div className="flex justify-center">
              <div className="relative h-48 w-48 rounded-full border-4 border-teal-600 p-4 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-32 w-32">
                    <Image src="/images/circlo-logo.png" alt="Circlo Logo" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FadeIn delay={100} direction="up">
              <Card className="border-none shadow-lg transition-all duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Sustainability</h3>
                  <p className="text-gray-600">
                    We believe that sharing resources is one of the most effective ways to reduce our environmental
                    footprint and build a more sustainable future.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <Card className="border-none shadow-lg transition-all duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Community</h3>
                  <p className="text-gray-600">
                    Circlo is built on the belief that sharing creates connections. We're bringing neighbors together
                    and strengthening local communities.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <Card className="border-none shadow-lg transition-all duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Cultural Preservation</h3>
                  <p className="text-gray-600">
                    We're committed to preserving cultural heritage by creating a platform where traditional items can
                    be shared, experienced, and appreciated.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={100 * index} direction="up">
                <div className="text-center group">
                  <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full transition-all duration-500 group-hover:scale-105 shadow-md">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-teal-600">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="mb-8 text-3xl font-bold">Our Collective Impact</h2>
          </FadeIn>
          <div className="mx-auto max-w-3xl">
            <FadeIn delay={100}>
              <CO2Counter />
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <FadeIn delay={200} direction="up">
                <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-teal-600">15,000+</h3>
                  <p className="text-gray-600">Items Shared</p>
                </div>
              </FadeIn>
              <FadeIn delay={300} direction="up">
                <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-teal-600">8,500+</h3>
                  <p className="text-gray-600">Community Members</p>
                </div>
              </FadeIn>
              <FadeIn delay={400} direction="up">
                <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-teal-600">$250,000+</h3>
                  <p className="text-gray-600">Community Earnings</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal-900 to-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Join the Circlo Community</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">Start sharing, earning, and making a positive impact today.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-teal-900 hover:bg-gray-100">
              <Link href="/explore">
                Browse Items <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-900"
            >
              <Link href="/list-item">List Your Item</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Maya Chen",
    role: "Co-Founder & COO",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jamal Williams",
    role: "Head of Technology",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sofia Patel",
    role: "Community Director",
    image: "/placeholder.svg?height=200&width=200",
  },
]
