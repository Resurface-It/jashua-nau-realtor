'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import CTAButton from './CTAButton'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            {logoError ? (
              <>
                <span className="text-2xl lg:text-3xl font-bold text-primary">
                  J.NAU
                </span>
                <span className="text-sm lg:text-base text-gray-600 ml-2">
                  REAL ESTATE
                </span>
              </>
            ) : (
              <div className="relative h-12 w-32 lg:h-14 lg:w-40 mr-2">
                <Image
                  src="/images/BA573E1A-200B-415F-89E4-49BA597E90A8.jpeg"
                  alt="J.NAU REAL ESTATE"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 128px, 160px"
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/buy"
              className="text-gray-700 hover:text-accent transition-colors"
            >
              Buy
            </Link>
            <Link
              href="/sell"
              className="text-gray-700 hover:text-accent transition-colors"
            >
              Sell
            </Link>
            <Link
              href="/eugene-real-estate"
              className="text-gray-700 hover:text-accent transition-colors"
            >
              Communities
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-accent transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <CTAButton variant="primary" size="sm">
                Book a Free Consult
              </CTAButton>
            </Link>
            <button
              className="lg:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

