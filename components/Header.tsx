'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <header className="site-header bg-[var(--color-white-lighter)] sticky top-0 z-50">
      <div className="max-w-[1260px] mx-auto px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-[var(--color-azure)]">Visiting Media</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/why-us"
              className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors"
            >
              Why Us
            </Link>

            <Link
              href="/solutions"
              className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors"
            >
              Solutions
            </Link>

            <Link
              href="/customers"
              className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors"
            >
              Customers
            </Link>

            <Link
              href="/testimonials"
              className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors"
            >
              Testimonials
            </Link>

            <Link
              href="/community"
              className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors"
            >
              Community
            </Link>

            <Link
              href="/blog"
              className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/request-demo"
              className="bg-[var(--color-azure)] text-white px-6 py-3 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold font-[var(--font-secondary)] uppercase text-sm tracking-wider"
            >
              Request Demo
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-5 h-0.5 bg-[var(--color-black)] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-[var(--color-black)] my-1 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-[var(--color-black)] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="flex flex-col py-4 space-y-4 bg-[var(--color-gray-light)]">
            <Link
              href="/why-us"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </Link>

            <Link
              href="/solutions"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>

            <Link
              href="/customers"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Customers
            </Link>

            <Link
              href="/testimonials"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>

            <Link
              href="/community"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>

            <Link
              href="/blog"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/request-demo"
              className="mx-6 bg-[var(--color-azure)] text-white px-6 py-3 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
