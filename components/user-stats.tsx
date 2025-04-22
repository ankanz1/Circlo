"use client"

import { Award, Star, ThumbsUp, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function UserStats() {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-teal-600" />
            <span className="font-medium">Trust Score</span>
          </div>
          <span className="font-semibold">92%</span>
        </div>
        <Progress value={92} className="h-2" />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-500" />
            <span className="font-medium">Rating</span>
          </div>
          <span className="font-semibold">4.8/5</span>
        </div>
        <Progress value={96} className="h-2" />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ThumbsUp className="h-5 w-5 text-blue-500" />
            <span className="font-medium">Response Rate</span>
          </div>
          <span className="font-semibold">98%</span>
        </div>
        <Progress value={98} className="h-2" />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" />
            <span className="font-medium">Community Impact</span>
          </div>
          <span className="font-semibold">High</span>
        </div>
        <Progress value={85} className="h-2" />
      </div>

      <div className="mt-4 rounded-md bg-teal-50 p-3 text-sm text-teal-800">
        <p className="font-medium">Trust Badge: Verified Member</p>
        <p className="mt-1 text-xs">ID verified, 25+ successful rentals</p>
      </div>
    </div>
  )
}
