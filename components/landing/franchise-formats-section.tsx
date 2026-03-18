"use client"

import Image from "next/image"
import { ArrowRight, Truck, Store, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const formats = [
  {
    icon: Truck,
    title: "Food Truck Franchise",
    description: "Start your journey with our mobile food truck format. Perfect for events, high-traffic areas, and maximum flexibility.",
    image: "/images/food-truck.jpg",
    investment: "₹8-12 Lakhs",
    sqft: "Mobile",
  },
  {
    icon: Store,
    title: "Small Takeaway Outlet",
    description: "Compact outlet format ideal for mall food courts, busy streets, and areas with high foot traffic. Quick service focused.",
    image: "/images/takeaway-outlet.jpg",
    investment: "₹15-20 Lakhs",
    sqft: "150-300 sq ft",
  },
  {
    icon: Building2,
    title: "Full Restaurant Franchise",
    description: "Premium dine-in experience with full seating capacity. Perfect for standalone locations and premium areas.",
    image: "/images/restaurant.jpg",
    investment: "₹25-35 Lakhs",
    sqft: "500-1000 sq ft",
  },
]

export function FranchiseFormatsSection() {
  return (
    <section id="franchise-model" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Franchise Formats
          </span>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Choose Your Format
          </h2>
          <p className="text-muted-foreground">
            We offer multiple franchise formats to suit your budget, location, and business goals.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {formats.map((format, index) => (
            <div
              key={format.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500",
                "hover:shadow-2xl hover:-translate-y-2"
              )}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={format.image}
                  alt={format.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Investment Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
                  {format.investment}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <format.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{format.sqft}</span>
                </div>
                
                <h3 
                  className="mb-3 text-xl font-bold text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {format.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  {format.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn px-0 text-primary hover:text-primary hover:bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
