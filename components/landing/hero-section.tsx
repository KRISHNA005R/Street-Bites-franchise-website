"use client"

import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-food.jpg"
          alt="Street Bites restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col justify-center px-4 py-20 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-card">Now accepting applications</span>
          </div>

          {/* Heading */}
          <h1 
            className="mb-6 text-4xl font-bold leading-tight text-card sm:text-5xl lg:text-6xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Start Your Own{" "}
            <span className="text-secondary">Street Bites</span>{" "}
            Franchise
          </h1>

          {/* Subheading */}
          <p className="mb-8 max-w-lg text-lg text-card/80 leading-relaxed">
            Join one of the fastest-growing street food brands and build your own profitable food business with our proven model.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
            >
              Explore Franchise Opportunities
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-card/30 bg-card/10 text-card backdrop-blur-sm hover:bg-card/20 hover:text-card transition-all duration-300"
            >
              <Play className="mr-2 h-4 w-4" />
              Book Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "50+", label: "Outlets" },
              { value: "15+", label: "Cities" },
              { value: "500+", label: "Happy Partners" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-secondary" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </p>
                <p className="text-sm text-card/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-card/60">Scroll to explore</span>
          <div className="h-12 w-6 rounded-full border-2 border-card/30 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-card/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
