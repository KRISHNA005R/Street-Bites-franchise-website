"use client"

import { useState, useMemo } from "react"
import { Calculator, TrendingUp, IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProfitCalculatorSection() {
  const [investment, setInvestment] = useState(1500000) // 15 Lakhs
  const [monthlyRevenue, setMonthlyRevenue] = useState(500000) // 5 Lakhs
  const [operatingCost, setOperatingCost] = useState(300000) // 3 Lakhs

  const calculations = useMemo(() => {
    const royalty = monthlyRevenue * 0.05 // 5% royalty
    const monthlyProfit = monthlyRevenue - operatingCost - royalty
    const annualProfit = monthlyProfit * 12
    const roiMonths = monthlyProfit > 0 ? Math.ceil(investment / monthlyProfit) : 0
    const profitMargin = monthlyRevenue > 0 ? ((monthlyProfit / monthlyRevenue) * 100).toFixed(1) : 0

    return { monthlyProfit, annualProfit, roiMonths, profitMargin, royalty }
  }, [investment, monthlyRevenue, operatingCost])

  const formatCurrency = (value: number) => {
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`
    }
    return `₹${value.toLocaleString('en-IN')}`
  }

  return (
    <section className="py-20 lg:py-32 bg-foreground text-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Calculator Form */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              Interactive Tool
            </span>
            <h2 
              className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Profit Calculator
            </h2>
            <p className="mb-8 text-card/70">
              Estimate your potential returns by adjusting the values below.
            </p>

            <div className="space-y-8">
              {/* Initial Investment */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-card">Initial Investment</label>
                  <span className="text-lg font-bold text-secondary" style={{ fontFamily: 'var(--font-display)' }}>
                    {formatCurrency(investment)}
                  </span>
                </div>
                <input
                  type="range"
                  min={800000}
                  max={3500000}
                  step={100000}
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-card/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="mt-1 flex justify-between text-xs text-card/50">
                  <span>₹8L</span>
                  <span>₹35L</span>
                </div>
              </div>

              {/* Monthly Revenue */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-card">Monthly Revenue</label>
                  <span className="text-lg font-bold text-secondary" style={{ fontFamily: 'var(--font-display)' }}>
                    {formatCurrency(monthlyRevenue)}
                  </span>
                </div>
                <input
                  type="range"
                  min={200000}
                  max={1500000}
                  step={50000}
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-card/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="mt-1 flex justify-between text-xs text-card/50">
                  <span>₹2L</span>
                  <span>₹15L</span>
                </div>
              </div>

              {/* Operating Cost */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-card">Operating Cost</label>
                  <span className="text-lg font-bold text-secondary" style={{ fontFamily: 'var(--font-display)' }}>
                    {formatCurrency(operatingCost)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={1000000}
                  step={25000}
                  value={operatingCost}
                  onChange={(e) => setOperatingCost(Number(e.target.value))}
                  className="w-full h-2 bg-card/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="mt-1 flex justify-between text-xs text-card/50">
                  <span>₹1L</span>
                  <span>₹10L</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="rounded-2xl bg-card/5 backdrop-blur-sm border border-card/10 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Calculator className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Your Estimated Returns
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-card/10 p-5">
                  <p className="mb-1 text-sm text-card/70">Monthly Profit</p>
                  <p 
                    className={cn(
                      "text-3xl font-bold",
                      calculations.monthlyProfit >= 0 ? "text-secondary" : "text-primary"
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {formatCurrency(calculations.monthlyProfit)}
                  </p>
                </div>
                <div className="rounded-xl bg-card/10 p-5">
                  <p className="mb-1 text-sm text-card/70">Annual Profit</p>
                  <p 
                    className={cn(
                      "text-3xl font-bold",
                      calculations.annualProfit >= 0 ? "text-secondary" : "text-primary"
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {formatCurrency(calculations.annualProfit)}
                  </p>
                </div>
                <div className="rounded-xl bg-card/10 p-5">
                  <p className="mb-1 text-sm text-card/70">ROI Timeline</p>
                  <p 
                    className="text-3xl font-bold text-card"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {calculations.roiMonths} <span className="text-lg">months</span>
                  </p>
                </div>
                <div className="rounded-xl bg-card/10 p-5">
                  <p className="mb-1 text-sm text-card/70">Profit Margin</p>
                  <p 
                    className="text-3xl font-bold text-card"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {calculations.profitMargin}%
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-card/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-card/70">Monthly Royalty (5%)</span>
                  <span className="font-medium text-card">{formatCurrency(calculations.royalty)}</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-card/50">
                * These are estimates based on average performance. Actual results may vary based on location, operations, and market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
