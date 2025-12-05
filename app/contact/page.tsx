import type { Metadata } from 'next'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import LeadForm from '@/components/ui/LeadForm'

export const metadata: Metadata = {
  title: 'Contact Us | J.NAU REAL ESTATE | Eugene & Springfield',
  description:
    'Get in touch with J.NAU REAL ESTATE. Contact us for buying, selling, or questions about Eugene and Springfield real estate.',
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const prefilledData = {
    type: typeof searchParams.type === 'string' ? searchParams.type : '',
    city: typeof searchParams.city === 'string' ? searchParams.city : '',
    price: typeof searchParams.price === 'string' ? searchParams.price : '',
    beds: typeof searchParams.beds === 'string' ? searchParams.beds : '',
    baths: typeof searchParams.baths === 'string' ? searchParams.baths : '',
  }

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk Real Estate
            </h1>
            <p className="text-xl text-gray-200">
              Whether you're buying, selling, or just exploring your options,
              we're here to help. Get in touch and let's discuss your real
              estate goals.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:5418522328"
                    className="text-gray-700 hover:text-accent transition-colors text-lg"
                  >
                    (541) 852-2328
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:Jnaureg@gmail.com"
                    className="text-gray-700 hover:text-accent transition-colors text-lg"
                  >
                    Jnaureg@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Office Address
                  </h3>
                  <p className="text-gray-700 text-lg">
                    123 Main Street
                    <br />
                    Eugene, OR 97401
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Office Hours
                  </h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Follow Us
                  </h3>
                  <a
                    href="https://instagram.com/joshua_nau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-accent transition-colors"
                  >
                    Instagram: @joshua_nau
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
                <LeadForm
                  variant="contact"
                  sourcePage="contact"
                  prefilledData={prefilledData}
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

