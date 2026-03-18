"use client"

import Image from "next/image"
import { TrendingUp, Users, MapPin, Award } from "lucide-react"

const stats = [
  { icon: TrendingUp, value: "300%", label: "YoY Growth" },
  { icon: Users, value: "10K+", label: "Daily Customers" },
  { icon: MapPin, value: "15+", label: "Cities" },
  { icon: Award, value: "5", label: "Awards Won" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/restaurant.jpg"
                alt="Street Bites restaurant"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-card p-6 shadow-xl border border-border hidden sm:block">
              <p className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>Since 2018</p>
              <p className="text-sm text-muted-foreground">Serving happiness</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 
              className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              From a Small Stall to a National Brand
            </h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Street Bites started as a humble street food stall in Mumbai, serving delicious burgers and fries to local food lovers. What began as a passion project quickly grew into a beloved brand.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Today, we have transformed into a scalable franchise model with 50+ outlets across multiple cities in India. Our mission is to empower entrepreneurs to start their own successful food business with our proven systems and unwavering support.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="rounded-xl bg-muted p-4 text-center transition-all duration-300 hover:bg-secondary/20 hover:scale-105"
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
