"use client"

import Image from "next/image"
import { Quote } from "lucide-react"

export function FounderSection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              Meet the Founder
            </span>
            <h2 
              className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              A Vision Born from Passion
            </h2>
            
            <div className="relative mb-8">
              <Quote className="absolute -left-2 -top-2 h-8 w-8 text-secondary/30" />
              <blockquote className="pl-8 text-xl italic text-card/90 leading-relaxed">
                Street Bites started as a passion project in a small Mumbai food stall. Today, it empowers entrepreneurs across India to start their own successful food business. Our goal is simple — make great food accessible and help dreamers become business owners.
              </blockquote>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <div>
                <p className="font-bold text-card" style={{ fontFamily: 'var(--font-display)' }}>Rajesh Sharma</p>
                <p className="text-sm text-card/70">Founder & CEO, Street Bites</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl">
              <Image
                src="/images/founder.jpg"
                alt="Rajesh Sharma - Founder of Street Bites"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-secondary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
