"use client"

import { FileText, MessageSquare, MapPin, GraduationCap, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Application",
    description: "Fill out our online franchise application form with your details and preferred location.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Business Consultation",
    description: "Our team will schedule a consultation to discuss your goals and answer all your questions.",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Location Approval",
    description: "We help you find and approve the perfect location based on market analysis and foot traffic.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Training & Setup",
    description: "Complete our comprehensive training program while we help set up your outlet.",
  },
  {
    icon: Sparkles,
    step: "05",
    title: "Grand Opening",
    description: "Launch your Street Bites outlet with our marketing support and ongoing assistance.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            The Process
          </span>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Your journey to becoming a Street Bites franchise partner in 5 simple steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="absolute left-0 right-0 top-[60px] hidden h-0.5 bg-border lg:block" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Card */}
                <div 
                  className={cn(
                    "group rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-300",
                    "hover:shadow-xl hover:-translate-y-2 hover:border-primary/30"
                  )}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover:bg-primary">
                    <step.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Step {step.step}
                  </div>

                  <h3 
                    className="mb-2 text-center text-lg font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-center text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
