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
import { eugeneNeighborhoods } from '@/lib/neighborhoods'

export const metadata: Metadata = {
  title: 'Eugene, OR Homes for Sale & Neighborhood Guide | J.NAU REAL ESTATE',
  description:
    'Expert guide to buying and selling homes in Eugene, Oregon. Explore neighborhoods, market stats, schools, and find your perfect Eugene home.',
}

const faqItems = [
  {
    question: 'What are the best neighborhoods in Eugene for families?',
    answer:
      'Eugene offers several excellent family-friendly neighborhoods including Friendly Area (close to UO, great schools), South Eugene (established, top schools), Amazon (beautiful, tree-lined), and Cal Young (north Eugene, family-oriented). Each has its own character and advantages.',
  },
  {
    question: 'How is the Eugene real estate market performing?',
    answer:
      'The Eugene market remains strong with steady price appreciation. The median home price is around $425,000, with homes typically selling within 28 days. Inventory is relatively tight, creating competitive conditions for buyers in desirable neighborhoods.',
  },
  {
    question: 'What are Eugene schools like?',
    answer:
      'Eugene is served by the 4J School District, which includes many highly-rated schools. The area is also home to the University of Oregon. School quality varies by neighborhood, and we can help you understand the options in areas you\'re considering.',
  },
  {
    question: 'Is Eugene a good place to live?',
    answer:
      'Eugene consistently ranks as one of the best places to live in Oregon. It offers excellent quality of life, beautiful natural surroundings, strong arts and culture scene, great outdoor recreation, and a relatively affordable cost of living compared to other West Coast cities.',
  },
  {
    question: 'What is the cost of living in Eugene?',
    answer:
      'Eugene offers a relatively affordable cost of living compared to many West Coast cities. Housing costs are moderate, and the city has a lower cost of living than Portland or Seattle while still offering excellent amenities and quality of life.',
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

export default function EugenePage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <Header />
      <main className="pt-16 lg:pt-20">
        <CityHero
          city="Eugene"
          headline="Eugene, OR Homes for Sale & Neighborhood Guide"
          subheadline="Discover Eugene's diverse neighborhoods, excellent schools, and vibrant community. Your guide to finding the perfect home in Eugene."
        />

        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              About Eugene
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Eugene is a vibrant city known for its natural beauty, strong
              sense of community, and excellent quality of life. Home to the
              University of Oregon, Eugene offers a unique blend of college-town
              energy, outdoor recreation, arts and culture, and family-friendly
              neighborhoods.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The city is perfect for a wide range of buyers: first-time
              homebuyers find affordable options in areas like Bethel and West
              Eugene, families love the excellent schools in South Eugene and
              Friendly Area, and move-up buyers appreciate the upscale
              neighborhoods like Laurel Hill and Amazon.
            </p>
            <p className="text-lg text-gray-700">
              Eugene's real estate market remains strong, with steady price
              appreciation and healthy demand. The city offers diverse housing
              options from historic craftsman homes to modern new construction,
              all within a relatively affordable price range compared to other
              West Coast cities.
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
                city: 'Eugene',
                medianPrice: '$425,000',
                daysOnMarket: '28 days',
                inventory: '2.1 months',
                priceChange: '+5.2% YoY',
              },
            ]}
          />
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Top Neighborhoods in Eugene
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eugeneNeighborhoods.slice(0, 9).map((neighborhood) => (
              <NeighborhoodCard
                key={neighborhood.slug}
                name={neighborhood.name}
                city="Eugene"
                description={neighborhood.description}
                href={`/eugene/${neighborhood.slug}`}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/eugene/friendly-area"
              className="text-accent font-semibold hover:underline"
            >
              View All Eugene Neighborhoods →
            </Link>
          </div>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Is Eugene Right for You?
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
                    Excellent quality of life and natural beauty
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
                    Strong schools and University of Oregon
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
                    Relatively affordable compared to other West Coast cities
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
                    Great outdoor recreation and arts scene
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
                    Competitive market in desirable neighborhoods
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
                    Rainy winters (though summers are beautiful)
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
                    Limited public transportation compared to larger cities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8">
            Buying a Home in Eugene
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                1. Search & Discovery
              </h3>
              <p className="text-gray-700">
                We'll help you identify neighborhoods that match your lifestyle,
                budget, and priorities. Eugene offers diverse options from
                affordable starter homes to luxury properties.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                2. Home Tours
              </h3>
              <p className="text-gray-700">
                We schedule and accompany you on tours, helping you understand
                each property's potential, neighborhood context, and value.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                3. Making Offers
              </h3>
              <p className="text-gray-700">
                In Eugene's competitive market, crafting the right offer is
                crucial. We analyze comparable sales and help you structure
                competitive offers that protect your interests.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                4. Inspection & Due Diligence
              </h3>
              <p className="text-gray-700">
                We coordinate thorough inspections and help you understand any
                issues, negotiating repairs or credits when needed.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                5. Closing
              </h3>
              <p className="text-gray-700">
                We coordinate all closing details, ensuring a smooth process from
                contract to keys.
              </p>
            </div>
          </div>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Selling a Home in Eugene
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Pricing Strategy
              </h3>
              <p className="text-gray-700">
                We conduct a detailed market analysis to determine the optimal
                listing price. Pricing right from the start is crucial in
                Eugene's market.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Preparation & Staging
              </h3>
              <p className="text-gray-700">
                We provide guidance on repairs, updates, and staging to make
                your home show its best and attract top offers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Marketing Strategy
              </h3>
              <p className="text-gray-700">
                Your home is marketed across multiple channels including MLS,
                Zillow, Realtor.com, social media, and our network of local
                buyers and agents.
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
              Ready to Explore Eugene Real Estate?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss your Eugene real estate goals and find the perfect
              neighborhood for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                See Listings in Eugene
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Request a Eugene Home Tour
              </CTAButton>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

