import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'About Joshua Nau | Eugene & Springfield Real Estate Expert',
  description:
    'Learn about Joshua Nau, your trusted real estate expert in Eugene, Springfield, and Lane County, Oregon. Licensed with eXp Realty.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Joshua Nau</h1>
            <p className="text-xl text-gray-200">
              Your trusted real estate expert in Eugene, Springfield, and Lane
              County, Oregon.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/BA573E1A-200B-415F-89E4-49BA597E90A8.jpeg"
                alt="Joshua Nau - Real Estate Expert"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Local Expertise, Proven Results
              </h2>
              <p className="text-gray-700 mb-4">
                With over 15 years of combined experience in the Eugene and
                Springfield real estate markets, I bring deep local knowledge,
                proven negotiation skills, and a commitment to exceptional
                service to every transaction.
              </p>
              <p className="text-gray-700 mb-4">
                As a licensed real estate professional with eXp Realty, I've
                helped hundreds of families buy and sell homes throughout Lane
                County. My approach is built on three core principles:
                understanding your unique needs, providing honest market
                insights, and delivering results that exceed expectations.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're a first-time buyer navigating the competitive
                market, a seller looking to maximize your home's value, or a
                family relocating to the area, I'm here to guide you through
                every step of the process with clarity and confidence.
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Why Choose Me?
                </h3>
                <ul className="space-y-3">
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
                      Deep knowledge of Eugene and Springfield neighborhoods,
                      schools, and market trends
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
                      Proven track record of successful transactions and
                      satisfied clients
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
                      Responsive communication and personalized service
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
                      Strategic marketing and negotiation expertise
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-secondary">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            My Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Eugene</h3>
              <p className="text-gray-700">
                Serving all Eugene neighborhoods including Friendly Area, South
                Eugene, Amazon, Cal Young, Bethel, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Springfield</h3>
              <p className="text-gray-700">
                Expert knowledge of Springfield communities including Thurston,
                Hayden Bridge, Glenwood, and Downtown Springfield.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                Lane County
              </h3>
              <p className="text-gray-700">
                Comprehensive coverage of Lane County including surrounding
                areas and rural properties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                Relocation Services
              </h3>
              <p className="text-gray-700">
                Specialized assistance for families relocating to the Eugene and
                Springfield area.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're buying, selling, or just exploring your options,
              I'm here to help. Reach out to schedule a free consultation and
              let's discuss your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5418522328"
                className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call (541) 852-2328
              </a>
              <a
                href="mailto:Jnaureg@gmail.com"
                className="inline-block px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

