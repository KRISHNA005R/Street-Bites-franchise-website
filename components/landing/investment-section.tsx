"use client"

import { IndianRupee, Clock, TrendingUp, FileCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const investments = [
  {
    icon: IndianRupee,
    title: "Investment Range",
    value: "₹8L - ₹35L",
    description: "Depending on franchise format",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FileCheck,
    title: "Franchise Fee",
    value: "₹3L - ₹5L",
    description: "One-time franchise fee",
    color: "bg-secondary/30 text-secondary-foreground",
  },
  {
    icon: Clock,
    title: "Setup Time",
    value: "45-60 Days",
    description: "From approval to launch",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Expected ROI",
    value: "18-24 Months",
    description: "Typical payback period",
    color: "bg-secondary/30 text-secondary-foreground",
  },
]

export function InvestmentSection() {
  return (
    <section id="investment" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Investment Details
          </span>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Franchise Investment
          </h2>
          <p className="text-muted-foreground">
            Transparent pricing with no hidden costs. Know exactly what you are investing in.
          </p>
        </div>

        {/* Investment Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {investments.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "group rounded-2xl bg-card p-8 shadow-sm border border-border transition-all duration-300 text-center",
                "hover:shadow-xl hover:-translate-y-2 hover:border-primary/30"
              )}
            >
              <div className={cn(
                "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110",
                item.color
              )}>
                <item.icon className="h-8 w-8" />
              </div>
              
              <p className="mb-1 text-sm text-muted-foreground">{item.title}</p>
              <p 
                className="mb-2 text-3xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-2xl bg-muted p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 
                className="mb-4 text-2xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {"What's Included in Your Investment"}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Complete store setup & interiors",
                  "Kitchen equipment & fixtures",
                  "Initial inventory & supplies",
                  "Staff training program",
                  "Marketing launch support",
                  "POS system & software",
                  "Brand signage & collateral",
                  "Ongoing operational support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Royalty Fee</p>
                <p 
                  className="text-5xl font-bold text-primary"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  5%
                </p>
                <p className="text-sm text-muted-foreground">of monthly revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
