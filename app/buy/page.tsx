import type { Metadata } from 'next'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import CTAButton from '@/components/ui/CTAButton'
import LeadForm from '@/components/ui/LeadForm'

export const metadata: Metadata = {
  title: 'Buy a Home in Eugene & Springfield | J.NAU REAL ESTATE',
  description:
    'Expert guidance for buying a home in Eugene, Springfield, and Lane County. From first-time buyers to move-up families, we make the process smooth and successful.',
}

export default function BuyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buying a Home in Eugene & Springfield
            </h1>
            <p className="text-xl text-gray-200">
              Your trusted guide through the Lane County real estate market.
              From first-time buyers to move-up families, we make the process
              smooth and successful.
            </p>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8">
            The Home Buying Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Discovery & Pre-Approval
                </h3>
                <p className="text-gray-700">
                  We start by understanding your needs, timeline, and budget.
                  Getting pre-approved helps you know exactly what you can
                  afford and makes you a stronger buyer in competitive markets.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Home Search & Tours
                </h3>
                <p className="text-gray-700">
                  We'll set up a custom search based on your criteria and
                  schedule tours of properties that match. Our local expertise
                  helps you understand neighborhoods, schools, and market
                  conditions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Making an Offer
                </h3>
                <p className="text-gray-700">
                  In competitive markets like Eugene and Springfield, crafting
                  the right offer is crucial. We analyze comparable sales,
                  market conditions, and help you structure an offer that
                  stands out while protecting your interests.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Inspection & Due Diligence
                </h3>
                <p className="text-gray-700">
                  Once your offer is accepted, we coordinate inspections and
                  help you understand any issues found. We negotiate repairs or
                  credits when needed.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Appraisal & Financing
                </h3>
                <p className="text-gray-700">
                  We work with your lender to ensure the appraisal process goes
                  smoothly. If issues arise, we help negotiate solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Closing
                </h3>
                <p className="text-gray-700">
                  We coordinate with all parties to ensure a smooth closing.
                  You'll get the keys to your new home and we'll be there to
                  celebrate with you!
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8">
            First-Time Buyers
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Buying your first home is exciting but can feel overwhelming. We
            specialize in helping first-time buyers navigate the process with
            confidence.
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
                Understanding your budget and financing options
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
                First-time buyer programs and down payment assistance
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
                Neighborhood education and market insights
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
                Step-by-step guidance through every stage
              </span>
            </li>
          </ul>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-primary mb-8">
            Move-Up & Relocation Buyers
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you're upgrading to a larger home or relocating to Lane
            County, we help you make informed decisions.
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
                Timing your sale and purchase for maximum benefit
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
                Neighborhood comparisons and lifestyle fit
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
                School districts and commute analysis
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
                Navigating competitive multiple-offer situations
              </span>
            </li>
          </ul>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Request a Buyer Strategy Session
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Let's discuss your home buying goals and create a personalized
            strategy. Fill out the form below and we'll schedule a consultation.
          </p>
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
            <LeadForm variant="contact" sourcePage="buy" />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

