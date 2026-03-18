"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Franchise Model", href: "#franchise-model" },
  { label: "Investment", href: "#investment" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Contact", href: "#contact" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/streetbites", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/streetbites", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/streetbites", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/streetbites", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/streetbites", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">SB</span>
              </div>
              <span className="text-xl font-bold text-card" style={{ fontFamily: 'var(--font-display)' }}>
                Street Bites
              </span>
            </Link>
            <p className="mb-6 text-sm text-card/70 leading-relaxed">
              {"India's fastest growing street food franchise. Join us and start your own profitable food business with our proven model."}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card/10 text-card/70 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="mb-4 text-sm font-bold uppercase tracking-wider text-card"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 
              className="mb-4 text-sm font-bold uppercase tracking-wider text-card"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="mb-4 text-sm font-bold uppercase tracking-wider text-card"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-card/70">
                  123 Food Street, Andheri West,<br />
                  Mumbai, Maharashtra 400058
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-card/70 transition-colors hover:text-secondary"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:franchise@streetbites.in"
                  className="flex items-center gap-3 text-sm text-card/70 transition-colors hover:text-secondary"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                  franchise@streetbites.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 py-6">
  <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
    <p className="text-sm text-card/50">
      © {new Date().getFullYear()} Street Bites. All rights reserved.
    </p>

    <div className="flex flex-col items-center gap-2 sm:items-end">
      <p className="text-sm text-card/50">
        Made with passion in India
      </p>
      <p className="text-xs text-card/40">
        Landing page concept created for iFranchise internship evaluation
      </p>
    </div>
  </div>
</div>
      </div>
    </footer>
  )
}
