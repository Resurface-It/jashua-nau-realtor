import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Real Estate Resources & Guides | Eugene & Springfield | J.NAU REAL ESTATE',
  description:
    'Expert guides and resources for buying and selling real estate in Eugene, Springfield, and Lane County, Oregon.',
}

const resources = [
  {
    slug: 'moving-to-eugene',
    title: 'Moving to Eugene: What You Need to Know',
    excerpt:
      'A comprehensive guide to relocating to Eugene, Oregon. Learn about neighborhoods, schools, cost of living, and what makes Eugene a great place to call home.',
    category: 'Relocation',
  },
  {
    slug: 'best-neighborhoods-first-time-buyers',
    title: 'Best Neighborhoods in Eugene for First-Time Buyers',
    excerpt:
      'Discover the top neighborhoods in Eugene that offer great value, excellent schools, and a welcoming community for first-time homebuyers.',
    category: 'Buying',
  },
  {
    slug: 'is-springfield-right-for-you',
    title: 'Is Springfield, OR Right for You?',
    excerpt:
      'Explore what makes Springfield a great place to live, from affordable housing to strong schools and a growing community.',
    category: 'Relocation',
  },
  {
    slug: 'win-multiple-offer-situation',
    title: 'How to Win a Multiple-Offer Situation in Lane County',
    excerpt:
      'Strategies and tips for standing out in competitive markets when multiple buyers are competing for the same property.',
    category: 'Buying',
  },
  {
    slug: 'pricing-your-home-to-sell',
    title: 'Pricing Your Home to Sell: A Seller\'s Guide',
    excerpt:
      'Learn how to price your home competitively to attract buyers while maximizing your return in the Eugene and Springfield markets.',
    category: 'Selling',
  },
  {
    slug: 'eugene-springfield-market-trends',
    title: 'Eugene & Springfield Market Trends 2024',
    excerpt:
      'Current market analysis and trends for the Eugene and Springfield real estate markets, including pricing, inventory, and what to expect.',
    category: 'Market Analysis',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Local Real Estate Guides & Tips
            </h1>
            <p className="text-xl text-gray-200">
              Expert insights and resources to help you navigate the Eugene and
              Springfield real estate markets with confidence.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-3">
                    {resource.category}
                  </span>
                  <h2 className="text-xl font-bold text-primary mb-3">
                    {resource.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{resource.excerpt}</p>
                  <span className="text-accent font-semibold text-sm hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

