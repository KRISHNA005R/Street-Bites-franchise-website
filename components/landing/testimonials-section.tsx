"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Vikram Patel",
    role: "Franchise Partner, Mumbai",
    image: "/images/testimonial-1.jpg",
    quote: "Opening a Street Bites franchise was the best business decision I made. The support from the team has been exceptional, and my outlet became profitable within 16 months.",
    rating: 5,
    outlet: "Mumbai Central",
    since: "2021",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Franchise Partner, Pune",
    image: "/images/testimonial-2.jpg",
    quote: "The training program prepared me for everything. As a first-time entrepreneur, I was nervous, but Street Bites made the journey smooth and rewarding.",
    rating: 5,
    outlet: "Pune Koregaon Park",
    since: "2022",
  },
  {
    id: 3,
    name: "Anand Krishnan",
    role: "Franchise Partner, Bangalore",
    image: "/images/testimonial-3.jpg",
    quote: "What impressed me most was the brand recognition. Customers already knew Street Bites, so I didn't have to build trust from scratch. The ROI exceeded my expectations.",
    rating: 5,
    outlet: "Bangalore Indiranagar",
    since: "2023",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="success-stories" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Success Stories
          </span>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Franchise Partners
          </h2>
          <p className="text-muted-foreground">
            Hear from entrepreneurs who transformed their lives with Street Bites.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="mx-auto max-w-4xl">
                    <div className="grid gap-8 lg:grid-cols-5 items-center">
                      {/* Image */}
                      <div className="lg:col-span-2">
                        <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-2xl">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-3">
                        <Quote className="mb-4 h-10 w-10 text-primary/30" />
                        
                        {/* Rating */}
                        <div className="mb-4 flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                          ))}
                        </div>

                        <blockquote 
                          className="mb-6 text-xl lg:text-2xl text-foreground leading-relaxed"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {`"${testimonial.quote}"`}
                        </blockquote>

                        <div className="flex items-center gap-4">
                          <div>
                            <p className="font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                          <div className="h-8 w-px bg-border" />
                          <div>
                            <p className="text-sm text-muted-foreground">Partner since {testimonial.since}</p>
                            <p className="text-sm font-medium text-primary">{testimonial.outlet}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
