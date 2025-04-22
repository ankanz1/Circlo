import { Facebook, Github, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <Image src="/images/circlo-logo.png" alt="Circlo Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-teal-600">Circlo</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">Rent what you need. Share what you don't.</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-teal-600" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-teal-600" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-teal-600" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-teal-600" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/explore" className="text-gray-600 transition-colors hover:text-teal-600">
                  Browse Items
                </Link>
              </li>
              <li>
                <Link href="/cultural-vault" className="text-gray-600 transition-colors hover:text-teal-600">
                  Cultural Vault
                </Link>
              </li>
              <li>
                <Link href="/list-item" className="text-gray-600 transition-colors hover:text-teal-600">
                  List Your Item
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 transition-colors hover:text-teal-600">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 transition-colors hover:text-teal-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-gray-600 transition-colors hover:text-teal-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 transition-colors hover:text-teal-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 transition-colors hover:text-teal-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 transition-colors hover:text-teal-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 transition-colors hover:text-teal-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 transition-colors hover:text-teal-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Circlo. All rights reserved.</p>
          <p className="mt-2">Rent what you need. Share what you don't.</p>
        </div>
      </div>
    </footer>
  )
}
