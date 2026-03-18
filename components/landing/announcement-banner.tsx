"use client"

import { Flame } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="w-full bg-primary py-2.5 text-primary-foreground">
      <div className="container mx-auto flex items-center justify-center gap-2 px-4 text-center">
        <Flame className="h-4 w-4 animate-pulse" />
        <p className="text-sm font-medium">
          {"India's Fastest Growing Street Food Franchise – 50+ Outlets and Expanding"}
        </p>
        <Flame className="h-4 w-4 animate-pulse" />
      </div>
    </div>
  )
}
