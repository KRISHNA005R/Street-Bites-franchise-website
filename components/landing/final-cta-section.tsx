"use client"

import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 
            className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Start Your Own Food Business?
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Take the first step towards financial independence. Join our growing family of successful franchise partners today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-card text-foreground hover:bg-card/90 transition-all duration-300 hover:scale-105 group"
            >
              Apply for Franchise
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Download Brochure
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+91 98765 43210</span>
            </a>
            <a 
              href="mailto:franchise@streetbites.in" 
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>franchise@streetbites.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
