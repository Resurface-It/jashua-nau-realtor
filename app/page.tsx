import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import CTAButton from '@/components/ui/CTAButton'
import StatCard from '@/components/ui/StatCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import NeighborhoodCard from '@/components/ui/NeighborhoodCard'
import MarketSnapshot from '@/components/ui/MarketSnapshot'
import HomeSearchBar from '@/components/ui/HomeSearchBar'
import LeadForm from '@/components/ui/LeadForm'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'J.NAU REAL ESTATE | Eugene & Springfield Real Estate Expert',
  description:
    'Expert real estate services in Eugene, Springfield, and Lane County, Oregon. Buy or sell with confidence. Local expertise, proven results.',
  openGraph: {
    title: 'J.NAU REAL ESTATE | Eugene & Springfield Real Estate Expert',
    description:
      'Expert real estate services in Eugene, Springfield, and Lane County, Oregon.',
    type: 'website',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'J.NAU REAL ESTATE',
  image: 'https://jashua-nau.com/images/logo.png',
  url: 'https://jashua-nau.com',
  telephone: '541-852-2328',
  email: 'Jnaureg@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Eugene',
    addressRegion: 'OR',
    postalCode: '97401',
    addressCountry: 'US',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Eugene',
    },
    {
      '@type': 'City',
      name: 'Springfield',
    },
    {
      '@type': 'State',
      name: 'Oregon',
    },
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'eXp Realty',
  },
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-gray-800 text-white py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
              alt="Eugene and Springfield real estate"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Eugene & Springfield Real Estate, Done Right.
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  Local expertise, proven negotiation skills, and personalized
                  guidance from first showing to closing. Your trusted partner
                  in Lane County real estate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton href="/contact" variant="primary" size="lg">
                    Schedule a Free Consultation
                  </CTAButton>
                  <CTAButton href="/home-valuation" variant="secondary" size="lg">
                    Get Your Home's Value
                  </CTAButton>
                </div>
              </div>
              <div className="relative w-full h-[500px] lg:h-[650px] max-w-md mx-auto lg:max-w-xl rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG_0815.PNG"
                  alt="Joshua Nau - Real Estate Expert"
                  fill
                  className="object-contain rounded-lg"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <HomeSearchBar />
        </section>

        {/* Quick Stats */}
        <Section className="bg-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="200+"
              label="Families Helped in Lane County"
              icon={
                <svg
                  className="w-12 h-12 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
            />
            <StatCard
              value="5.0"
              label="Average Client Rating"
              icon={
                <svg
                  className="w-12 h-12 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              }
            />
            <StatCard
              value="15+"
              label="Years of Combined Experience"
              icon={
                <svg
                  className="w-12 h-12 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            <StatCard
              value="$50M+"
              label="Total Sales Volume"
              icon={
                <svg
                  className="w-12 h-12 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          </div>
        </Section>

        {/* Featured Areas */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Explore Our Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NeighborhoodCard
              name="Eugene Real Estate"
              city="Eugene"
              description="Discover homes in Eugene's diverse neighborhoods, from historic downtown to family-friendly suburbs."
              href="/eugene-real-estate"
            />
            <NeighborhoodCard
              name="Springfield Real Estate"
              city="Springfield"
              description="Find your perfect home in Springfield, offering great value and a strong sense of community."
              href="/springfield-real-estate"
            />
            <NeighborhoodCard
              name="Friendly Area"
              city="Eugene"
              description="One of Eugene's most beloved neighborhoods, close to UO with tree-lined streets and friendly community."
              href="/eugene/friendly-area"
            />
            <NeighborhoodCard
              name="Thurston"
              city="Springfield"
              description="Popular Springfield neighborhood with excellent schools, family-friendly atmosphere, and strong community."
              href="/springfield/thurston"
            />
          </div>
        </Section>

        {/* For Buyers / For Sellers */}
        <Section className="bg-secondary">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">
                For Buyers
              </h2>
              <p className="text-gray-700 mb-6">
                Navigate the Eugene and Springfield markets with confidence.
                From first-time buyers to move-up families, we guide you
                through every step of the home buying process.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-2 flex-shrink-0"
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
                  <span>Expert market analysis and pricing guidance</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-2 flex-shrink-0"
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
                  <span>Access to off-market and coming soon listings</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-2 flex-shrink-0"
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
                  <span>Strong negotiation skills in competitive markets</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-2 flex-shrink-0"
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
                  <span>Personalized guidance from search to closing</span>
                </li>
              </ul>
              <CTAButton href="/buy" variant="primary">
                Learn More About Buying
              </CTAButton>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">
                For Sellers
              </h2>
              <p className="text-gray-700 mb-6">
                Maximize your home's value with strategic pricing, professional
                marketing, and expert negotiation. Get top dollar for your
                Eugene or Springfield property.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-2 flex-shrink-0"
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
                  <span>Data-driven pricing strategy</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-2 flex-shrink-0"
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
                  <span>Professional photography and staging guidance</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-2 flex-shrink-0"
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
                  <span>Multi-channel marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-2 flex-shrink-0"
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
                  <span>Expert negotiation for best terms</span>
                </li>
              </ul>
              <CTAButton href="/sell" variant="primary">
                Learn More About Selling
              </CTAButton>
            </div>
          </div>
        </Section>

        {/* Market Snapshot */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Current Market Snapshot
          </h2>
          <MarketSnapshot
            data={[
              {
                city: 'Eugene',
                medianPrice: '$425,000',
                daysOnMarket: '28 days',
                inventory: '2.1 months',
                priceChange: '+5.2% YoY',
              },
              {
                city: 'Springfield',
                medianPrice: '$375,000',
                daysOnMarket: '32 days',
                inventory: '2.5 months',
                priceChange: '+4.8% YoY',
              },
            ]}
          />
        </Section>

        {/* Why Work With Us */}
        <Section className="bg-secondary">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Hyper-Local Expertise
              </h3>
              <p className="text-gray-600">
                Deep knowledge of Eugene, Springfield, and Lane County markets,
                neighborhoods, and trends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Strategic Marketing & Negotiation
              </h3>
              <p className="text-gray-600">
                Proven strategies to get you the best price and terms, whether
                buying or selling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Clear Communication
              </h3>
              <p className="text-gray-600">
                You'll always know what's happening. Responsive, transparent, and
                always available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Personalized Guidance
              </h3>
              <p className="text-gray-600">
                From first showing to closing, we're with you every step of the
                way.
              </p>
            </div>
          </div>
        </Section>

        {/* Testimonials Preview */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <TestimonialCard
              quote="Joshua made our first home purchase seamless. His knowledge of Eugene neighborhoods helped us find the perfect home in the Friendly Area. We couldn't be happier!"
              name="Sarah & Mike Johnson"
              location="Eugene, OR"
              type="buyer"
            />
            <TestimonialCard
              quote="Sold our Springfield home in just 3 weeks! Joshua's pricing strategy was spot-on and his negotiation skills got us above asking price. Highly recommend!"
              name="David Martinez"
              location="Springfield, OR"
              type="seller"
            />
            <TestimonialCard
              quote="As a relocation buyer, I needed someone who really knew the area. Joshua showed us neighborhoods we never would have considered and found us the perfect home. Exceptional service!"
              name="Jennifer Chen"
              location="Eugene, OR"
              type="buyer"
            />
          </div>
          <div className="text-center">
            <CTAButton href="/testimonials" variant="secondary">
              View All Testimonials
            </CTAButton>
          </div>
        </Section>

        {/* Lead Capture */}
        <Section className="bg-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Ready to Tour Homes or Talk Strategy?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Let's discuss your real estate goals. Fill out the form below and
              we'll get back to you within 24 hours.
            </p>
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
              <LeadForm variant="contact" sourcePage="homepage" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

