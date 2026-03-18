"use client"

import { CheckCircle, TrendingUp, Award, Headphones, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: CheckCircle,
    title: "Proven Business Model",
    description: "Our franchise model has been tested and refined across 50+ locations, ensuring your success from day one.",
  },
  {
    icon: Award,
    title: "Strong Brand Recognition",
    description: "Leverage our established brand presence and loyal customer base to jumpstart your business.",
  },
  {
    icon: Headphones,
    title: "Training & Operational Support",
    description: "Comprehensive training programs and 24/7 operational support to help you run your outlet smoothly.",
  },
  {
    icon: DollarSign,
    title: "High Profit Potential",
    description: "Our optimized operations and popular menu ensure healthy profit margins for franchise partners.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Why Street Bites
          </span>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why Choose Our Franchise
          </h2>
          <p className="text-muted-foreground">
            Partner with a brand that prioritizes your success with proven systems and dedicated support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group rounded-2xl bg-card p-8 shadow-sm border border-border transition-all duration-300",
                "hover:shadow-xl hover:-translate-y-2 hover:border-primary/30"
              )}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 
                className="mb-3 text-xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
