import Image from 'next/image'

interface CityHeroProps {
  city: string
  headline: string
  subheadline?: string
}

export default function CityHero({
  city,
  headline,
  subheadline,
}: CityHeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-primary to-gray-800 text-white py-20 md:py-28">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1449824913935-70a273486ade?w=1920"
          alt={`${city} skyline`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            {subheadline}
          </p>
        )}
      </div>
    </div>
  )
}

