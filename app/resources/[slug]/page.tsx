import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

const articles: Record<
  string,
  {
    title: string
    description: string
    content: string
    datePublished: string
    dateModified: string
  }
> = {
  'moving-to-eugene': {
    title: 'Moving to Eugene: What You Need to Know',
    description:
      'A comprehensive guide to relocating to Eugene, Oregon. Learn about neighborhoods, schools, cost of living, and what makes Eugene a great place to call home.',
    datePublished: '2024-01-15',
    dateModified: '2024-01-15',
    content: `
      <h2>Welcome to Eugene, Oregon</h2>
      <p>Eugene is a vibrant city known for its natural beauty, strong sense of community, and excellent quality of life. Whether you're relocating for work, family, or lifestyle, this guide will help you understand what makes Eugene special.</p>
      
      <h2>Neighborhoods</h2>
      <p>Eugene offers diverse neighborhoods to suit different lifestyles. From the historic Friendly Area near the University of Oregon to the family-friendly South Eugene, there's something for everyone.</p>
      
      <h2>Schools</h2>
      <p>The Eugene 4J School District serves most of Eugene with excellent public schools. The area is also home to the University of Oregon, providing educational opportunities for all ages.</p>
      
      <h2>Cost of Living</h2>
      <p>Eugene offers a relatively affordable cost of living compared to many West Coast cities, with housing costs that are accessible to a wide range of buyers.</p>
    `,
  },
  'best-neighborhoods-first-time-buyers': {
    title: 'Best Neighborhoods in Eugene for First-Time Buyers',
    description:
      'Discover the top neighborhoods in Eugene that offer great value, excellent schools, and a welcoming community for first-time homebuyers.',
    datePublished: '2024-02-01',
    dateModified: '2024-02-01',
    content: `
      <h2>Top Neighborhoods for First-Time Buyers</h2>
      <p>Eugene offers several neighborhoods that are particularly well-suited for first-time homebuyers, combining affordability with great amenities.</p>
      
      <h2>Friendly Area</h2>
      <p>The Friendly Area offers proximity to the University of Oregon, excellent schools, and a strong community feel. Home prices are accessible for first-time buyers.</p>
      
      <h2>Bethel</h2>
      <p>Bethel is one of Eugene's most affordable areas, with great schools and a family-friendly atmosphere perfect for first-time buyers.</p>
      
      <h2>West Eugene</h2>
      <p>West Eugene offers some of the most affordable housing in the city, with convenient access to shopping and employment centers.</p>
    `,
  },
  'is-springfield-right-for-you': {
    title: 'Is Springfield, OR Right for You?',
    description:
      'Explore what makes Springfield a great place to live, from affordable housing to strong schools and a growing community.',
    datePublished: '2024-02-15',
    dateModified: '2024-02-15',
    content: `
      <h2>Why Choose Springfield?</h2>
      <p>Springfield offers an excellent combination of affordability, community, and convenience, making it an attractive option for many homebuyers.</p>
      
      <h2>Affordable Housing</h2>
      <p>Springfield typically offers more affordable housing options than Eugene, making it ideal for first-time buyers and families looking for value.</p>
      
      <h2>Strong Schools</h2>
      <p>The Springfield School District is known for its strong academic programs and community involvement.</p>
      
      <h2>Growing Community</h2>
      <p>Springfield is experiencing growth and revitalization, with new developments and an improving downtown area.</p>
    `,
  },
  'win-multiple-offer-situation': {
    title: 'How to Win a Multiple-Offer Situation in Lane County',
    description:
      'Strategies and tips for standing out in competitive markets when multiple buyers are competing for the same property.',
    datePublished: '2024-03-01',
    dateModified: '2024-03-01',
    content: `
      <h2>Understanding Multiple-Offer Situations</h2>
      <p>In competitive markets like Eugene and Springfield, it's common for desirable properties to receive multiple offers. Here's how to make your offer stand out.</p>
      
      <h2>Get Pre-Approved</h2>
      <p>A strong pre-approval letter shows sellers you're serious and financially qualified. This is essential in competitive situations.</p>
      
      <h2>Strong Offer Terms</h2>
      <p>Beyond price, consider other terms that make your offer attractive: flexible closing dates, minimal contingencies, and a strong earnest money deposit.</p>
      
      <h2>Personal Letter</h2>
      <p>A personal letter to the seller can sometimes make the difference, especially in emotional situations.</p>
    `,
  },
  'pricing-your-home-to-sell': {
    title: 'Pricing Your Home to Sell: A Seller\'s Guide',
    description:
      'Learn how to price your home competitively to attract buyers while maximizing your return in the Eugene and Springfield markets.',
    datePublished: '2024-03-15',
    dateModified: '2024-03-15',
    content: `
      <h2>The Importance of Pricing Right</h2>
      <p>Pricing your home correctly from the start is crucial. Overpricing can lead to extended time on market, while underpricing leaves money on the table.</p>
      
      <h2>Market Analysis</h2>
      <p>A comprehensive Comparative Market Analysis (CMA) considers recent sales of similar properties, current market conditions, and your home's unique features.</p>
      
      <h2>Pricing Strategies</h2>
      <p>Different strategies work in different markets. We'll help you determine whether to price at market value, slightly above, or strategically below to generate interest.</p>
    `,
  },
  'eugene-springfield-market-trends': {
    title: 'Eugene & Springfield Market Trends 2024',
    description:
      'Current market analysis and trends for the Eugene and Springfield real estate markets, including pricing, inventory, and what to expect.',
    datePublished: '2024-04-01',
    dateModified: '2024-04-01',
    content: `
      <h2>Current Market Overview</h2>
      <p>The Eugene and Springfield markets continue to show strength, with steady price appreciation and healthy buyer demand.</p>
      
      <h2>Eugene Market</h2>
      <p>Eugene's median home price has seen steady growth, with strong demand in desirable neighborhoods. Inventory remains relatively tight, creating competitive conditions for buyers.</p>
      
      <h2>Springfield Market</h2>
      <p>Springfield offers more affordable options while still experiencing price appreciation. The market is attractive to first-time buyers and those seeking value.</p>
      
      <h2>What to Expect</h2>
      <p>Looking ahead, we expect continued steady growth with seasonal variations. Both markets remain attractive for buyers and sellers.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = articles[params.slug]
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | J.NAU REAL ESTATE`,
    description: article.description,
  }
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]

  if (!article) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: 'Joshua Nau',
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    publisher: {
      '@type': 'Organization',
      name: 'J.NAU REAL ESTATE',
    },
  }

  return (
    <>
      <SchemaMarkup schema={articleSchema} />
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>
          </div>
        </Section>

        <Section>
          <article className="max-w-4xl mx-auto prose prose-lg">
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="text-gray-700"
            />
          </article>
        </Section>
      </main>
      <Footer />
    </>
  )
}

