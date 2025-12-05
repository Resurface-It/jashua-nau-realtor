import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import CityHero from '@/components/ui/CityHero'
import MarketSnapshot from '@/components/ui/MarketSnapshot'
import NeighborhoodCard from '@/components/ui/NeighborhoodCard'
import FAQAccordion from '@/components/ui/FAQAccordion'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import CTAButton from '@/components/ui/CTAButton'
import { springfieldNeighborhoods } from '@/lib/neighborhoods'

export const metadata: Metadata = {
  title: 'Springfield, OR Homes for Sale & Neighborhood Guide | J.NAU REAL ESTATE',
  description:
    'Expert guide to buying and selling homes in Springfield, Oregon. Explore neighborhoods, market stats, schools, and find your perfect Springfield home.',
}

const faqItems = [
  {
    question: 'What are the best neighborhoods in Springfield for families?',
    answer:
      'Springfield offers several excellent family-friendly neighborhoods including Thurston (excellent schools, strong community), Hayden Bridge (affordable, convenient), and Gateway Area (newer developments, growing). Each offers great value and family amenities.',
  },
  {
    question: 'How is the Springfield real estate market performing?',
    answer:
      'The Springfield market is strong with steady growth. The median home price is around $375,000, making it more affordable than Eugene. Homes typically sell within 32 days, and the market offers great value for buyers.',
  },
  {
    question: 'What are Springfield schools like?',
    answer:
      'Springfield is served by the Springfield School District, which includes many highly-rated schools. Thurston High School is particularly well-regarded. The district is known for strong academic programs and community involvement.',
  },
  {
    question: 'Is Springfield a good place to live?',
    answer:
      'Springfield offers excellent value, a strong sense of community, and convenient access to both Springfield and Eugene amenities. The city is experiencing growth and revitalization, making it an attractive option for homebuyers.',
  },
  {
    question: 'How does Springfield compare to Eugene?',
    answer:
      'Springfield typically offers more affordable housing than Eugene while still providing excellent schools, community amenities, and easy access to Eugene. Many buyers choose Springfield for the value and family-friendly atmosphere.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function SpringfieldPage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <Header />
      <main className="pt-16 lg:pt-20">
        <CityHero
          city="Springfield"
          headline="Springfield, OR Homes for Sale & Neighborhood Guide"
          subheadline="Discover Springfield's affordable housing, excellent schools, and strong community. Your guide to finding the perfect home in Springfield."
        />

        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              About Springfield
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Springfield is a thriving community that offers excellent value for
              homebuyers. Known for its affordable housing, strong schools, and
              family-friendly atmosphere, Springfield is an attractive option for
              first-time buyers, growing families, and anyone seeking great value
              in Lane County.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The city is experiencing growth and revitalization, with new
              developments, an improving downtown, and expanding amenities.
              Springfield's convenient location provides easy access to both
              Springfield and Eugene services, making it ideal for those who work
              in either city.
            </p>
            <p className="text-lg text-gray-700">
              Springfield's real estate market offers more affordable options than
              Eugene while still providing excellent schools, community amenities,
              and quality of life. The market is strong with steady appreciation,
              making it a great choice for buyers seeking value.
            </p>
          </div>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Market Snapshot
          </h2>
          <MarketSnapshot
            data={[
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

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Top Neighborhoods in Springfield
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {springfieldNeighborhoods.map((neighborhood) => (
              <NeighborhoodCard
                key={neighborhood.slug}
                name={neighborhood.name}
                city="Springfield"
                description={neighborhood.description}
                href={`/springfield/${neighborhood.slug}`}
              />
            ))}
          </div>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Is Springfield Right for You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Pros</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1"
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
                    More affordable than Eugene
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1"
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
                    Excellent schools and strong community
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1"
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
                    Growing and revitalizing downtown
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1"
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
                    Easy access to Eugene amenities
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Smaller city than Eugene (fewer amenities)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Some areas still developing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8">
            Buying a Home in Springfield
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                1. Search & Discovery
              </h3>
              <p className="text-gray-700">
                We'll help you explore Springfield's neighborhoods and find the
                perfect fit for your lifestyle and budget. Springfield offers
                great value across all price ranges.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                2. Home Tours
              </h3>
              <p className="text-gray-700">
                We schedule tours and help you understand each property's value,
                neighborhood context, and potential.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                3. Making Offers
              </h3>
              <p className="text-gray-700">
                We analyze the market and help you craft competitive offers that
                get you the home you want at the right price.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                4. Inspection & Closing
              </h3>
              <p className="text-gray-700">
                We coordinate inspections and guide you through closing,
                ensuring a smooth process from contract to keys.
              </p>
            </div>
          </div>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Selling a Home in Springfield
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Pricing Strategy
              </h3>
              <p className="text-gray-700">
                We conduct a detailed market analysis to price your home
                competitively and attract buyers while maximizing your return.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Marketing & Presentation
              </h3>
              <p className="text-gray-700">
                We provide staging guidance and market your home across multiple
                channels to reach the right buyers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Negotiation & Closing
              </h3>
              <p className="text-gray-700">
                We negotiate the best terms and coordinate all closing details for
                a smooth transaction.
              </p>
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

        <Section className="bg-secondary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to Explore Springfield Real Estate?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss your Springfield real estate goals and find the
              perfect neighborhood for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                See Listings in Springfield
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Request a Springfield Home Tour
              </CTAButton>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

