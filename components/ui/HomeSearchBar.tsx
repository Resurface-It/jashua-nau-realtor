'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CTAButton from './CTAButton'

export default function HomeSearchBar() {
  const [searchType, setSearchType] = useState<'buy' | 'sell'>('buy')
  const [priceRange, setPriceRange] = useState('')
  const [beds, setBeds] = useState('')
  const [baths, setBaths] = useState('')
  const [city, setCity] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, route to contact with prefilled params
    const params = new URLSearchParams({
      type: searchType,
      ...(priceRange && { price: priceRange }),
      ...(beds && { beds }),
      ...(baths && { baths }),
      ...(city && { city }),
    })
    router.push(`/contact?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2 mb-4">
          <button
            type="button"
            onClick={() => setSearchType('buy')}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
              searchType === 'buy'
                ? 'bg-accent text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setSearchType('sell')}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
              searchType === 'sell'
                ? 'bg-accent text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Sell
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <select
              id="price"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">Any Price</option>
              <option value="0-200000">Under $200k</option>
              <option value="200000-350000">$200k - $350k</option>
              <option value="350000-500000">$350k - $500k</option>
              <option value="500000-750000">$500k - $750k</option>
              <option value="750000+">$750k+</option>
            </select>
          </div>

          <div>
            <label htmlFor="beds" className="block text-sm font-medium text-gray-700 mb-1">
              Bedrooms
            </label>
            <select
              id="beds"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div>
            <label htmlFor="baths" className="block text-sm font-medium text-gray-700 mb-1">
              Bathrooms
            </label>
            <select
              id="baths"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">Any City</option>
              <option value="eugene">Eugene</option>
              <option value="springfield">Springfield</option>
            </select>
          </div>
        </div>

        <div className="pt-2">
          <CTAButton type="submit" variant="primary" className="w-full md:w-auto">
            Search Homes
          </CTAButton>
        </div>
      </form>
    </div>
  )
}

