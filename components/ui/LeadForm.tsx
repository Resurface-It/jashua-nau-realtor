'use client'

import { useState, FormEvent, useEffect } from 'react'
import CTAButton from './CTAButton'

interface LeadFormProps {
  variant?: 'contact' | 'valuation'
  sourcePage?: string
  prefilledData?: {
    type?: string
    city?: string
    price?: string
    beds?: string
    baths?: string
  }
}

export default function LeadForm({
  variant = 'contact',
  sourcePage,
  prefilledData,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: prefilledData?.type || '',
    city: prefilledData?.city || '',
    propertyAddress: '',
    propertyType: '',
    timing: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  useEffect(() => {
    if (prefilledData) {
      const searchCriteria = []
      if (prefilledData.price) searchCriteria.push(`Price: ${prefilledData.price}`)
      if (prefilledData.beds) searchCriteria.push(`Bedrooms: ${prefilledData.beds}+`)
      if (prefilledData.baths) searchCriteria.push(`Bathrooms: ${prefilledData.baths}+`)
      
      setFormData((prev) => ({
        ...prev,
        type: prefilledData.type || prev.type,
        city: prefilledData.city || prev.city,
        message: searchCriteria.length > 0 
          ? `Search criteria: ${searchCriteria.join(', ')}`
          : prev.message,
      }))
    }
  }, [prefilledData])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const endpoint = variant === 'valuation' ? '/api/valuation' : '/api/lead'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourcePage: sourcePage || window.location.pathname,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitStatus({
        type: 'success',
        message:
          variant === 'valuation'
            ? 'Thank you! We\'ll contact you soon with your home valuation.'
            : 'Thank you! We\'ll be in touch soon.',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: '',
        city: '',
        propertyAddress: '',
        propertyType: '',
        timing: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or call us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300"
            placeholder="(541) 555-1234"
          />
        </div>

        {variant === 'contact' && (
          <div className="space-y-2">
            <label
              htmlFor="type"
              className="block text-sm font-semibold text-gray-900 mb-1.5"
            >
              I am...
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg bg-white text-gray-900 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m2%205%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_0.75rem_center] bg-no-repeat"
            >
              <option value="">Select an option...</option>
              <option value="buying">Buying a Home</option>
              <option value="selling">Selling a Home</option>
              <option value="both">Both Buying & Selling</option>
            </select>
          </div>
        )}

        {variant === 'contact' && (
          <div className="space-y-2">
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-900 mb-1.5"
            >
              City/Area of Interest
            </label>
            <select
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg bg-white text-gray-900 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m2%205%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_0.75rem_center] bg-no-repeat"
            >
              <option value="">Select a city...</option>
              <option value="eugene">Eugene</option>
              <option value="springfield">Springfield</option>
              <option value="other">Other Area</option>
            </select>
          </div>
        )}

        {variant === 'valuation' && (
          <>
            <div className="space-y-2">
              <label
                htmlFor="propertyAddress"
                className="block text-sm font-semibold text-gray-900 mb-1.5"
              >
                Property Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="propertyAddress"
                required
                value={formData.propertyAddress}
                onChange={(e) =>
                  setFormData({ ...formData, propertyAddress: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300"
                placeholder="123 Main St, Eugene, OR"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="propertyType"
                className="block text-sm font-semibold text-gray-900 mb-1.5"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                value={formData.propertyType}
                onChange={(e) =>
                  setFormData({ ...formData, propertyType: e.target.value })
                }
                className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg bg-white text-gray-900 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m2%205%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_0.75rem_center] bg-no-repeat"
              >
                <option value="">Select property type...</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhome">Townhome</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-900 mb-1.5"
              >
                City
              </label>
              <select
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg bg-white text-gray-900 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m2%205%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_0.75rem_center] bg-no-repeat"
              >
                <option value="">Select a city...</option>
                <option value="eugene">Eugene</option>
                <option value="springfield">Springfield</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="timing"
                className="block text-sm font-semibold text-gray-900 mb-1.5"
              >
                Timeline
              </label>
              <select
                id="timing"
                value={formData.timing}
                onChange={(e) =>
                  setFormData({ ...formData, timing: e.target.value })
                }
                className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg bg-white text-gray-900 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m2%205%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_0.75rem_center] bg-no-repeat"
              >
                <option value="">Select timeline...</option>
                <option value="just-curious">Just curious</option>
                <option value="6-months">6+ months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="0-3-months">0-3 months</option>
              </select>
            </div>
          </>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-900 mb-1.5"
        >
          {variant === 'valuation' ? 'Additional Details' : 'Message'}
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none hover:border-gray-300 resize-none"
          placeholder={
            variant === 'valuation'
              ? 'Tell us about your property, any recent updates, or specific questions you have...'
              : 'How can we help you? Please share any details about your real estate needs...'
          }
        />
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg border-2 ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border-green-200'
              : 'bg-red-50 text-red-800 border-red-200'
          }`}
        >
          <div className="flex items-start">
            {submitStatus.type === 'success' ? (
              <svg
                className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            <p className="font-medium">{submitStatus.message}</p>
          </div>
        </div>
      )}

      <div className="pt-2">
        <CTAButton
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className={`w-full md:w-auto min-w-[200px] ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          size="lg"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </span>
          ) : variant === 'valuation' ? (
            'Get My Home Value'
          ) : (
            'Send Message'
          )}
        </CTAButton>
      </div>
    </form>
  )
}

