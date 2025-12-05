import type { Metadata } from 'next'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import FAQAccordion from '@/components/ui/FAQAccordion'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Eugene & Springfield Real Estate | J.NAU REAL ESTATE',
  description:
      'Common questions about buying and selling real estate in Eugene, Springfield, and Lane County, Oregon.',
}

const faqItems = [
  {
    question: 'How do I get started buying a home in Eugene or Springfield?',
    answer:
      'The first step is to get pre-approved for a mortgage. This helps you understand your budget and makes you a stronger buyer. Then we'll discuss your needs, timeline, and preferences to create a personalized home search strategy.',
  },
  {
    question: 'What neighborhoods are best for families in Eugene?',
    answer:
      'Eugene offers several family-friendly neighborhoods including Friendly Area, South Eugene, Amazon, and Cal Young. Each has its own character, schools, and amenities. We can help you find the best fit based on your priorities.',
  },
  {
    question: 'How long does it take to sell a home in Eugene or Springfield?',
    answer:
      'The time to sell varies based on market conditions, pricing, and property condition. In the current market, well-priced homes typically sell within 30-60 days. We'll provide a realistic timeline based on your specific property.',
  },
  {
    question: 'What are closing costs and who pays them?',
    answer:
      'Closing costs include fees for loan processing, title insurance, escrow, and other services. In Oregon, closing costs are typically 2-5% of the home price. Buyers and sellers each have their own closing costs, and these can sometimes be negotiated as part of the offer.',
  },
  {
    question: 'Should I buy or sell first?',
    answer:
      'This depends on your situation. If you need the equity from your current home for a down payment, selling first might make sense. If you have flexibility, buying first can give you more time. We can help you create a strategy that works for your situation.',
  },
  {
    question: 'What is a CMA and why do I need one?',
    answer:
      'A Comparative Market Analysis (CMA) compares your home to similar properties that have recently sold. It helps determine the right listing price to attract buyers while maximizing your return. We provide detailed CMAs for all our sellers.',
  },
  {
    question: 'How competitive is the Eugene and Springfield market?',
    answer:
      'Both markets can be competitive, especially for well-priced homes in desirable neighborhoods. Multiple offers are common. We help buyers craft strong offers and help sellers position their homes to attract the best buyers.',
  },
  {
    question: 'Do I need a home inspection?',
    answer:
      'Yes, a home inspection is highly recommended for buyers. It identifies potential issues before you commit to the purchase. For sellers, a pre-listing inspection can help you address issues before listing and avoid surprises during the sale.',
  },
  {
    question: 'What makes a strong offer in a competitive market?',
    answer:
      'A strong offer includes a competitive price, strong pre-approval, reasonable contingencies, flexible closing timeline, and sometimes a personal letter. We help you structure an offer that stands out while protecting your interests.',
  },
  {
    question: 'How do I know if my home is priced correctly?',
    answer:
      'We conduct a comprehensive market analysis considering recent sales, current listings, market trends, and your home\'s unique features. Pricing too high can lead to extended time on market, while pricing too low leaves money on the table.',
  },
  {
    question: 'What should I look for when viewing homes?',
    answer:
      'Look at the overall condition, layout, natural light, neighborhood, and proximity to schools, work, and amenities. We'll help you identify potential issues and understand what can be changed versus what can\'t.',
  },
  {
    question: 'Can you help with financing?',
    answer:
      'While we don\'t provide financing directly, we work with excellent local lenders and can refer you to trusted mortgage professionals who can help you get pre-approved and find the best loan options.',
  },
  {
    question: 'What is earnest money?',
    answer:
      'Earnest money is a deposit made with your offer to show you\'re serious about buying. It\'s typically 1-2% of the purchase price and is held in escrow. It becomes part of your down payment if the sale goes through, or is returned if the deal falls through due to contingencies.',
  },
  {
    question: 'How do I prepare my home for sale?',
    answer:
      'Key steps include decluttering, deep cleaning, making necessary repairs, improving curb appeal, and potentially staging. We provide a detailed preparation checklist and can recommend trusted professionals for repairs and staging.',
  },
  {
    question: 'What happens after I accept an offer?',
    answer:
      'After accepting an offer, the buyer typically has a period for inspections and due diligence. We coordinate inspections, negotiate any repairs or credits, ensure financing is on track, and work toward closing. We keep you informed every step of the way.',
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

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200">
              Common questions about buying and selling real estate in Eugene,
              Springfield, and Lane County.
            </p>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Buying in Lane County
              </h2>
              <FAQAccordion items={faqItems.slice(0, 5)} />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Selling in Lane County
              </h2>
              <FAQAccordion items={faqItems.slice(5, 10)} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Financing & Offers
              </h2>
              <FAQAccordion items={faqItems.slice(10)} />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

