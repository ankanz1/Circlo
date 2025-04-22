"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EarningsChart() {
  const [data, setData] = useState<any[]>([])
  const [period, setPeriod] = useState<"weekly" | "monthly" | "yearly">("monthly")

  useEffect(() => {
    // Simulate API call to get earnings data
    if (period === "weekly") {
      setData([
        { name: "Mon", earnings: 25 },
        { name: "Tue", earnings: 40 },
        { name: "Wed", earnings: 30 },
        { name: "Thu", earnings: 45 },
        { name: "Fri", earnings: 55 },
        { name: "Sat", earnings: 65 },
        { name: "Sun", earnings: 35 },
      ])
    } else if (period === "monthly") {
      setData([
        { name: "Jan", earnings: 120 },
        { name: "Feb", earnings: 145 },
        { name: "Mar", earnings: 160 },
        { name: "Apr", earnings: 185 },
        { name: "May", earnings: 210 },
        { name: "Jun", earnings: 250 },
        { name: "Jul", earnings: 240 },
        { name: "Aug", earnings: 280 },
        { name: "Sep", earnings: 260 },
        { name: "Oct", earnings: 290 },
        { name: "Nov", earnings: 310 },
        { name: "Dec", earnings: 340 },
      ])
    } else {
      setData([
        { name: "2019", earnings: 1200 },
        { name: "2020", earnings: 1800 },
        { name: "2021", earnings: 2400 },
        { name: "2022", earnings: 3200 },
        { name: "2023", earnings: 4100 },
      ])
    }
  }, [period])

  return (
    <div>
      <Tabs
        defaultValue="monthly"
        onValueChange={(value) => setPeriod(value as "weekly" | "monthly" | "yearly")}
        className="mb-4"
      >
        <TabsList>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
              formatter={(value) => [`₹${value * 83}`, "Earnings"]}
            />
            <Bar dataKey="earnings" fill="#008080" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
