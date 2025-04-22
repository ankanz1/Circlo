"use client"

import { useEffect, useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ImpactMetrics() {
  const [data, setData] = useState<any[]>([])
  const [metric, setMetric] = useState<"co2" | "waste" | "resources">("co2")

  useEffect(() => {
    // Simulate API call to get impact data
    if (metric === "co2") {
      setData([
        { name: "Jan", value: 120 },
        { name: "Feb", value: 145 },
        { name: "Mar", value: 160 },
        { name: "Apr", value: 185 },
        { name: "May", value: 210 },
        { name: "Jun", value: 250 },
        { name: "Jul", value: 240 },
        { name: "Aug", value: 280 },
        { name: "Sep", value: 260 },
        { name: "Oct", value: 290 },
        { name: "Nov", value: 310 },
        { name: "Dec", value: 340 },
      ])
    } else if (metric === "waste") {
      setData([
        { name: "Jan", value: 80 },
        { name: "Feb", value: 95 },
        { name: "Mar", value: 110 },
        { name: "Apr", value: 125 },
        { name: "May", value: 150 },
        { name: "Jun", value: 180 },
        { name: "Jul", value: 170 },
        { name: "Aug", value: 200 },
        { name: "Sep", value: 190 },
        { name: "Oct", value: 220 },
        { name: "Nov", value: 240 },
        { name: "Dec", value: 270 },
      ])
    } else {
      setData([
        { name: "Jan", value: 50 },
        { name: "Feb", value: 65 },
        { name: "Mar", value: 75 },
        { name: "Apr", value: 90 },
        { name: "May", value: 110 },
        { name: "Jun", value: 130 },
        { name: "Jul", value: 120 },
        { name: "Aug", value: 150 },
        { name: "Sep", value: 140 },
        { name: "Oct", value: 160 },
        { name: "Nov", value: 180 },
        { name: "Dec", value: 200 },
      ])
    }
  }, [metric])

  const getUnit = () => {
    switch (metric) {
      case "co2":
        return "kg"
      case "waste":
        return "kg"
      case "resources":
        return "units"
    }
  }

  const getColor = () => {
    switch (metric) {
      case "co2":
        return "#008080"
      case "waste":
        return "#6b7280"
      case "resources":
        return "#4f46e5"
    }
  }

  return (
    <div>
      <Tabs
        defaultValue="co2"
        onValueChange={(value) => setMetric(value as "co2" | "waste" | "resources")}
        className="mb-4"
      >
        <TabsList>
          <TabsTrigger value="co2">CO₂ Saved</TabsTrigger>
          <TabsTrigger value="waste">Waste Reduced</TabsTrigger>
          <TabsTrigger value="resources">Resources Preserved</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "8px" }}
              formatter={(value) => [
                `${value} ${getUnit()}`,
                metric === "co2" ? "CO₂ Saved" : metric === "waste" ? "Waste Reduced" : "Resources Preserved",
              ]}
            />
            <Area type="monotone" dataKey="value" stroke={getColor()} fill={getColor()} fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
