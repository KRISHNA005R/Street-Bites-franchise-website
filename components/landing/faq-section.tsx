"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is the total franchise investment?",
    answer: "The total investment ranges from ₹8 Lakhs to ₹35 Lakhs depending on the franchise format you choose. This includes the franchise fee, store setup, equipment, initial inventory, and working capital. We offer flexible formats to suit different budgets.",
  },
  {
    question: "Do you provide training?",
    answer: "Yes, we provide comprehensive training covering operations, food preparation, customer service, inventory management, and marketing. The training program lasts 2-3 weeks and includes both classroom and hands-on experience at our training center.",
  },
  {
    question: "How long does the setup take?",
    answer: "From approval to grand opening, the typical setup time is 45-60 days. This includes location finalization, store design and construction, equipment installation, staff hiring, and training.",
  },
  {
    question: "What support will I receive?",
    answer: "We provide ongoing support including marketing assistance, operational guidance, quality checks, supply chain management, and dedicated relationship managers. You will have access to our 24/7 support helpline for any queries.",
  },
  {
    question: "What is the franchise agreement term?",
    answer: "The initial franchise agreement is for 5 years, renewable based on performance and mutual agreement. The renewal fee is significantly lower than the initial franchise fee.",
  },
  {
    question: "Can I own multiple outlets?",
    answer: "Yes, we encourage multi-unit ownership. High-performing franchise partners get priority for new territories. Many of our partners operate 2-3 outlets successfully.",
  },
  {
    question: "What are the eligibility criteria?",
    answer: "We look for entrepreneurs with a passion for the food business, ability to invest the required capital, commitment to follow our systems, and dedication to customer service. Prior F&B experience is helpful but not mandatory.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Section Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              FAQs
            </span>
            <h2 
              className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mb-6 text-muted-foreground">
              Find answers to common questions about our franchise opportunity.
            </p>
            <div className="flex items-center gap-3 text-muted-foreground">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">
                {"Can't find your answer? "}
                <a href="#contact" className="text-primary hover:underline">Contact us</a>
              </span>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-xl border border-border bg-card overflow-hidden transition-all duration-300",
                    openIndex === index ? "shadow-lg border-primary/30" : "hover:border-primary/20"
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span 
                      className="font-semibold text-foreground pr-4"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300",
                        openIndex === index && "rotate-180 text-primary"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openIndex === index ? "max-h-96" : "max-h-0"
                    )}
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
