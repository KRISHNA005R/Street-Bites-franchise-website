"use client"

import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const cities = [
  { name: "Mumbai", outlets: 15, position: { top: "55%", left: "25%" } },
  { name: "Pune", outlets: 8, position: { top: "58%", left: "28%" } },
  { name: "Delhi", outlets: 12, position: { top: "32%", left: "38%" } },
  { name: "Bangalore", outlets: 10, position: { top: "72%", left: "35%" } },
  { name: "Ahmedabad", outlets: 5, position: { top: "48%", left: "25%" } },
  { name: "Hyderabad", outlets: 6, position: { top: "60%", left: "38%" } },
  { name: "Chennai", outlets: 4, position: { top: "75%", left: "40%" } },
]

export function ExpansionMapSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Presence
          </span>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Expanding Across India
          </h2>
          <p className="text-muted-foreground">
            We are rapidly growing our footprint with franchise partners in major cities.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Map Visualization */}
          <div className="relative aspect-square max-w-lg mx-auto w-full">
            {/* India Outline - Simplified representation */}
            <div className="absolute inset-0 rounded-3xl bg-muted border border-border overflow-hidden">
              {/* Stylized map background */}
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                <path
                  d="M30,20 Q45,15 60,25 T80,35 Q85,50 80,65 T65,85 Q50,90 35,85 T20,65 Q15,50 20,35 T30,20"
                  fill="currentColor"
                  className="text-primary"
                />
              </svg>
              
              {/* City Markers */}
              {cities.map((city, index) => (
                <div
                  key={city.name}
                  className="absolute group cursor-pointer"
                  style={{ top: city.position.top, left: city.position.left }}
                >
                  {/* Pulse Animation */}
                  <div className="absolute -inset-2 rounded-full bg-primary/20 animate-ping" />
                  
                  {/* Marker */}
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-125">
                    <MapPin className="h-4 w-4" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="rounded-lg bg-foreground px-3 py-2 text-center shadow-xl">
                      <p className="text-sm font-bold text-card whitespace-nowrap">{city.name}</p>
                      <p className="text-xs text-card/70">{city.outlets} outlets</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rotate-45 bg-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cities List */}
          <div>
            <h3 
              className="mb-6 text-2xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Active Cities
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {cities.map((city, index) => (
                <div
                  key={city.name}
                  className={cn(
                    "flex items-center justify-between rounded-xl bg-card p-4 border border-border transition-all duration-300",
                    "hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{city.name}</span>
                  </div>
                  <div className="text-right">
                    <span 
                      className="text-xl font-bold text-primary"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {city.outlets}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">outlets</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-8 rounded-xl bg-secondary/20 p-6 border border-secondary/30">
              <p className="text-sm font-medium text-foreground mb-2">Coming Soon</p>
              <p className="text-muted-foreground text-sm">
                Kolkata, Jaipur, Lucknow, Chandigarh, and more cities launching in 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
