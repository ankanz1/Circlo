"use client"

import { useEffect, useState } from "react"

export function CO2Counter() {
  const [co2Saved, setCo2Saved] = useState(12450)
  const [rentals, setRentals] = useState(15782)
  const [isAnimating, setIsAnimating] = useState(false)

  // Simulate increasing counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCo2Saved((prev) => prev + Math.floor(Math.random() * 3))
      setRentals((prev) => prev + 1)
      setIsAnimating(true)

      // Reset animation state after animation completes
      const timeout = setTimeout(() => {
        setIsAnimating(false)
      }, 1000)

      return () => clearTimeout(timeout)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col items-center rounded-lg bg-teal-800 p-6 text-white shadow-lg transition-all duration-500 hover:shadow-xl">
        <h3 className="mb-2 text-lg font-medium">CO₂ Emissions Saved</h3>
        <div
          className={`text-4xl font-bold transition-all duration-500 ${isAnimating ? "scale-110 text-teal-200" : ""}`}
        >
          {co2Saved.toLocaleString()}
          <span className="ml-1 text-2xl">kg</span>
        </div>
        <p className="mt-2 text-sm text-teal-200">Equivalent to planting {Math.floor(co2Saved / 25)} trees</p>
      </div>
      <div className="flex flex-col items-center rounded-lg bg-gray-800 p-6 text-white shadow-lg transition-all duration-500 hover:shadow-xl">
        <h3 className="mb-2 text-lg font-medium">Total Rentals</h3>
        <div
          className={`text-4xl font-bold transition-all duration-500 ${isAnimating ? "scale-110 text-teal-200" : ""}`}
        >
          {rentals.toLocaleString()}
        </div>
        <p className="mt-2 text-sm text-gray-300">Items shared instead of purchased new</p>
      </div>
    </div>
  )
}
