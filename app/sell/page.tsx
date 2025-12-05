import type { Metadata } from 'next'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Sell Your Home in Eugene & Springfield | J.NAU REAL ESTATE',
  description:
    'Maximize your home\'s value with expert pricing, professional marketing, and strong negotiation. Get top dollar for your Eugene or Springfield property.',
}

export default function SellPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Selling Your Home in Eugene & Springfield
            </h1>
            <p className="text-xl text-gray-200">
              Maximize your home's value with strategic pricing, professional
              marketing, and expert negotiation. Get top dollar for your
              property.
            </p>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8">
            The Home Selling Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Pricing Strategy
                </h3>
                <p className="text-gray-700">
                  We conduct a comprehensive market analysis (CMA) to determine
                  the optimal listing price. Pricing right from the start is
                  crucial for attracting buyers and maximizing your return.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Home Preparation & Staging
                </h3>
                <p className="text-gray-700">
                  We provide guidance on repairs, updates, and staging to make
                  your home show its best. Professional staging can significantly
                  impact buyer interest and offers.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Professional Photography
                </h3>
                <p className="text-gray-700">
                  High-quality photos are essential in today's market. We
                  coordinate professional photography, virtual tours, and drone
                  footage to showcase your home online.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Marketing Campaign
                </h3>
                <p className="text-gray-700">
                  Your home is marketed across multiple channels: MLS, Zillow,
                  Realtor.com, social media, email campaigns, and our network of
                  local buyers and agents.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Showings & Open Houses
                </h3>
                <p className="text-gray-700">
                  We coordinate showings, host open houses, and gather feedback
                  to help you understand buyer interest and adjust strategy if
                  needed.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Offers & Negotiation
                </h3>
                <p className="text-gray-700">
                  We analyze every offer, negotiate the best terms, and guide you
                  through counter-offers. Our goal is to get you the highest
                  price with the best conditions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                7
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Closing
                </h3>
                <p className="text-gray-700">
                  We coordinate inspections, appraisals, and all closing
                  details. You'll know exactly what to expect and when you'll
                  receive your proceeds.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Pricing Strategy & Net Proceeds
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Understanding your net proceeds is crucial. We provide a detailed
            breakdown of:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Comparable sales analysis (CMA) for accurate pricing
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Estimated closing costs and fees
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Net proceeds calculator for different sale prices
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Market timing recommendations
              </span>
            </li>
          </ul>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8">
            Staging & Presentation
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            How your home is presented can make a significant difference in how
            quickly it sells and for how much. We help with:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Pre-listing inspection and repair recommendations
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Professional staging consultation
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Curb appeal improvements
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Decluttering and depersonalization guidance
              </span>
            </li>
          </ul>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Our Marketing Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                Professional Photography
              </h3>
              <p className="text-gray-700">
                High-resolution photos, virtual tours, and drone footage to
                showcase your home's best features online.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                Social Media Campaigns
              </h3>
              <p className="text-gray-700">
                Targeted social media advertising to reach local buyers and
                out-of-area relocations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                Email Blasts
              </h3>
              <p className="text-gray-700">
                Direct email campaigns to our network of pre-qualified buyers and
                local agents.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Request Your Home Value & Selling Plan
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get a free, no-obligation home valuation and personalized selling
              strategy. We'll show you what your home is worth and how to
              maximize its value.
            </p>
            <CTAButton href="/home-valuation" variant="primary" size="lg">
              Get My Home Value
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

