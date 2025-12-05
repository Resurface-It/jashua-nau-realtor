import type { Metadata } from 'next'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import TestimonialCard from '@/components/ui/TestimonialCard'

export const metadata: Metadata = {
  title: 'Client Testimonials | J.NAU REAL ESTATE | Eugene & Springfield',
  description:
    'Read what our clients say about working with J.NAU REAL ESTATE. Real testimonials from buyers and sellers in Eugene and Springfield.',
}

const testimonials = [
  {
    quote:
      "Joshua made our first home purchase seamless. His knowledge of Eugene neighborhoods helped us find the perfect home in the Friendly Area. We couldn't be happier!",
    name: 'Sarah & Mike Johnson',
    location: 'Eugene, OR',
    type: 'buyer' as const,
  },
  {
    quote:
      "Sold our Springfield home in just 3 weeks! Joshua's pricing strategy was spot-on and his negotiation skills got us above asking price. Highly recommend!",
    name: 'David Martinez',
    location: 'Springfield, OR',
    type: 'seller' as const,
  },
  {
    quote:
      'As a relocation buyer, I needed someone who really knew the area. Joshua showed us neighborhoods we never would have considered and found us the perfect home. Exceptional service!',
    name: 'Jennifer Chen',
    location: 'Eugene, OR',
    type: 'buyer' as const,
  },
  {
    quote:
      'Joshua helped us navigate a multiple-offer situation and we got the house! His communication was excellent throughout the entire process.',
    name: 'Robert & Lisa Thompson',
    location: 'Eugene, OR',
    type: 'buyer' as const,
  },
  {
    quote:
      'Professional, knowledgeable, and always available. Joshua made selling our home stress-free and we got top dollar. Couldn\'t ask for more!',
    name: 'Amanda Williams',
    location: 'Springfield, OR',
    type: 'seller' as const,
  },
  {
    quote:
      'Joshua\'s expertise in the Eugene market is unmatched. He found us a home that checked all our boxes and negotiated a great deal. Five stars!',
    name: 'Michael & Emily Davis',
    location: 'Eugene, OR',
    type: 'buyer' as const,
  },
  {
    quote:
      'We were first-time buyers and Joshua walked us through every step. His patience and expertise made all the difference. Highly recommend!',
    name: 'James & Maria Rodriguez',
    location: 'Springfield, OR',
    type: 'buyer' as const,
  },
  {
    quote:
      'Joshua\'s staging advice helped us sell our home quickly. His marketing strategy was excellent and we had multiple offers within the first week.',
    name: 'Patricia Anderson',
    location: 'Eugene, OR',
    type: 'seller' as const,
  },
  {
    quote:
      'Relocating from out of state was stressful, but Joshua made it easy. He understood exactly what we were looking for and found it. Amazing experience!',
    name: 'Thomas & Karen Lee',
    location: 'Eugene, OR',
    type: 'buyer' as const,
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section className="bg-gradient-to-r from-primary to-gray-800 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Past Clients Say
            </h1>
            <p className="text-xl text-gray-200">
              Don't just take our word for it. Here's what our clients have to
              say about working with J.NAU REAL ESTATE.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                type={testimonial.type}
              />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

