import Link from 'next/link'
import Image from 'next/image'

interface NeighborhoodCardProps {
  name: string
  city: 'Eugene' | 'Springfield'
  description: string
  href: string
  imageUrl?: string
}

export default function NeighborhoodCard({
  name,
  city,
  description,
  href,
  imageUrl = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
}: NeighborhoodCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${name} neighborhood in ${city}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">{city}</p>
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">
            {description}
          </p>
          <span className="text-accent font-semibold text-sm group-hover:underline">
            View Neighborhood Guide →
          </span>
        </div>
      </div>
    </Link>
  )
}

