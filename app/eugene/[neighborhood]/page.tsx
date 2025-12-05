import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import CTAButton from '@/components/ui/CTAButton'
import LeadForm from '@/components/ui/LeadForm'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import {
  eugeneNeighborhoods,
  getNeighborhoodBySlug,
  getNearbyNeighborhoods,
} from '@/lib/neighborhoods'

export async function generateStaticParams() {
  return eugeneNeighborhoods.map((neighborhood) => ({
    neighborhood: neighborhood.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { neighborhood: string }
}): Promise<Metadata> {
  const neighborhood = getNeighborhoodBySlug(params.neighborhood, 'Eugene')

  if (!neighborhood) {
    return {
      title: 'Neighborhood Not Found',
    }
  }

  return {
    title: `${neighborhood.name} Homes for Sale in Eugene, Oregon | J.NAU REAL ESTATE`,
    description: `${neighborhood.description} Explore ${neighborhood.name} real estate, schools, and lifestyle in Eugene, OR.`,
  }
}

export default function NeighborhoodPage({
  params,
}: {
  params: { neighborhood: string }
}) {
  const neighborhood = getNeighborhoodBySlug(params.neighborhood, 'Eugene')

  if (!neighborhood) {
    notFound()
  }

  const nearbyNeighborhoods = getNearbyNeighborhoods(
    params.neighborhood,
    'Eugene'
  )

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://jashua-nau.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Eugene Real Estate',
        item: 'https://jashua-nau.com/eugene-real-estate',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: neighborhood.name,
        item: `https://jashua-nau.com/eugene/${neighborhood.slug}`,
      },
    ],
  }

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <nav className="text-sm text-gray-300 mb-4">
              <Link href="/" className="hover:text-white">
                Home
              </Link>{' '}
              /{' '}
              <Link href="/eugene-real-estate" className="hover:text-white">
                Eugene Real Estate
              </Link>{' '}
              / {neighborhood.name}
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {neighborhood.name} Homes for Sale in Eugene, Oregon
            </h1>
            <p className="text-xl text-gray-200">{neighborhood.description}</p>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Why Buyers Love {neighborhood.name}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {neighborhood.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
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
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Home Styles & Price Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Typical Home Types
              </h3>
              <ul className="space-y-2">
                {neighborhood.homeTypes.map((type, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Price Range
              </h3>
              <p className="text-2xl font-bold text-accent mb-2">
                {neighborhood.priceRange}
              </p>
              <p className="text-gray-600">
                Prices vary based on home size, condition, and specific location
                within {neighborhood.name}.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Lifestyle & Amenities
          </h2>
          <ul className="space-y-3">
            {neighborhood.lifestyle.map((item, index) => (
              <li key={index} className="flex items-start">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Schools & Commute
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Nearby Schools
              </h3>
              <ul className="space-y-2">
                {neighborhood.schools.map((school, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {school}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Commute</h3>
              <p className="text-gray-700">{neighborhood.commute}</p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Want to See Homes in {neighborhood.name}?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll help you find the perfect home
              in {neighborhood.name}.
            </p>
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
              <LeadForm variant="contact" sourcePage={`eugene/${neighborhood.slug}`} />
            </div>
          </div>
        </Section>

        <Section className="bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Explore More Areas
            </h2>
            <div className="mb-6">
              <Link
                href="/eugene-real-estate"
                className="text-accent font-semibold hover:underline"
              >
                ← Back to Eugene Real Estate
              </Link>
            </div>
            {nearbyNeighborhoods.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Nearby Neighborhoods
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {nearbyNeighborhoods.map((nearby) => (
                    <Link
                      key={nearby.slug}
                      href={`/eugene/${nearby.slug}`}
                      className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h4 className="font-bold text-primary mb-2">
                        {nearby.name}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {nearby.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

