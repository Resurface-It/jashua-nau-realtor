import type { Metadata } from 'next'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import LeadForm from '@/components/ui/LeadForm'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Free Home Valuation | Eugene & Springfield | J.NAU REAL ESTATE',
  description:
    'Get a free, accurate home valuation for your Eugene or Springfield property. Expert market analysis and personalized selling strategy.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How accurate is a free home valuation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our free home valuations are based on comprehensive market analysis including recent comparable sales, current market conditions, and property-specific factors. While online estimates can vary, our detailed CMA provides a much more accurate assessment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information do I need for a home valuation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We need your property address, property type, and basic details about your home. The more information you provide, the more accurate our valuation will be.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a home valuation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We typically provide a detailed home valuation within 24-48 hours of your request. For urgent situations, we can often provide a preliminary estimate the same day.',
      },
    },
  ],
}

const faqItems = [
  {
    question: 'How accurate is a free home valuation?',
    answer:
      'Our free home valuations are based on comprehensive market analysis including recent comparable sales, current market conditions, and property-specific factors. While online estimates can vary widely, our detailed CMA (Comparative Market Analysis) provides a much more accurate assessment tailored to your specific property and neighborhood.',
  },
  {
    question: 'What information do I need for a home valuation?',
    answer:
      'We need your property address, property type (house, condo, townhome, land), city, and any additional details you can provide about your home such as square footage, number of bedrooms/bathrooms, and recent updates. The more information you provide, the more accurate our valuation will be.',
  },
  {
    question: 'How long does it take to get a home valuation?',
    answer:
      'We typically provide a detailed home valuation within 24-48 hours of your request. For urgent situations, we can often provide a preliminary estimate the same day. We\'ll contact you to schedule a time to review the results and answer any questions.',
  },
  {
    question: 'Is there any obligation if I request a home valuation?',
    answer:
      'No, there is absolutely no obligation. Our home valuation service is completely free and comes with no strings attached. We\'re happy to provide this service to help you understand your home\'s value, whether you\'re planning to sell now, in the future, or just curious.',
  },
  {
    question: 'What makes your valuation different from online estimates?',
    answer:
      'Online estimates use automated algorithms and may not account for your home\'s unique features, recent updates, or local market nuances. Our valuations are conducted by a local expert who understands the Eugene and Springfield markets, analyzes recent comparable sales, considers current market trends, and factors in your property\'s specific characteristics.',
  },
]

export default function HomeValuationPage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What's Your Eugene or Springfield Home Worth Now?
            </h1>
            <p className="text-xl text-gray-200">
              Get a free, accurate home valuation based on local market expertise
              and recent comparable sales. Unlike generic online estimates, our
              detailed analysis considers your property's unique features and
              current market conditions.
            </p>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Custom CMA
              </h3>
              <p className="text-gray-700">
                A comprehensive Comparative Market Analysis based on recent
                sales of similar properties in your neighborhood.
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
              <h3 className="text-xl font-bold text-primary mb-3">
                Neighborhood Comps
              </h3>
              <p className="text-gray-700">
                Detailed analysis of comparable properties that have recently
                sold in your area, helping you understand market trends.
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Strategy Suggestions
              </h3>
              <p className="text-gray-700">
                Personalized recommendations for maximizing your home's value,
                whether you're selling now or planning for the future.
              </p>
            </div>
          </div>
        </Section>

        <Section className="bg-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Request Your Free Home Valuation
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll provide you with a detailed
              home valuation within 24-48 hours. No obligation, just expert
              insights into your home's value.
            </p>
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
              <LeadForm variant="valuation" sourcePage="home-valuation" />
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

