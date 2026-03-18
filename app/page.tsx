import { AnnouncementBanner } from "@/components/landing/announcement-banner"
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { FounderSection } from "@/components/landing/founder-section"
import { WhyChooseSection } from "@/components/landing/why-choose-section"
import { FranchiseFormatsSection } from "@/components/landing/franchise-formats-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { InvestmentSection } from "@/components/landing/investment-section"
import { ProfitCalculatorSection } from "@/components/landing/profit-calculator-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { ExpansionMapSection } from "@/components/landing/expansion-map-section"
import { FAQSection } from "@/components/landing/faq-section"
import { FinalCTASection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <WhyChooseSection />
      <FranchiseFormatsSection />
      <HowItWorksSection />
      <InvestmentSection />
      <ProfitCalculatorSection />
      <TestimonialsSection />
      <ExpansionMapSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
