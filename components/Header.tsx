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
    if (activeDropdown === menu) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(menu)
    }
  }

  const closeAllMenus = () => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }

  return (
    <header className="site-header bg-[var(--color-white-lighter)] sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1260px] mx-auto px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeAllMenus}>
            <img
              src="/images/logo.svg"
              alt="Visiting Media"
              className="h-12 lg:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Why Us Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown('whyus')}
                className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors py-2"
              >
                Why Us?
              </button>
              {activeDropdown === 'whyus' && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white shadow-xl rounded-b-lg py-2 w-64 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href="/why-us" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    Immersive Sales Enablement
                  </Link>
                  <Link href="/why-us#support" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    Support & Training
                  </Link>
                  <Link href="/integration" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    Integration Catalog
                  </Link>
                  <Link href="/why-us#roi" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    ROI Results
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown('solutions')}
                className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors py-2"
              >
                Solutions
              </button>
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white shadow-xl rounded-b-lg py-2 w-72 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-6 py-2 text-xs uppercase text-[var(--color-gray-placeholder)] font-semibold">By Product</div>
                  <Link href="/solutions" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    SalesHub
                  </Link>
                  <Link href="/solutions#truetour" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    TrueTour
                  </Link>
                  <Link href="/solutions#production" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    3D, 360° and CGI Production
                  </Link>
                  <Link href="/solutions" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    Hospitality Sales Enablement
                  </Link>
                  <div className="px-6 py-2 text-xs uppercase text-[var(--color-gray-placeholder)] font-semibold mt-2 border-t border-[var(--color-gray-darken)]">By Role</div>
                  <Link href="/solutions#hotels" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    Hotels
                  </Link>
                  <Link href="/solutions#brands" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    Brands
                  </Link>
                  <Link href="/solutions#management" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    Management Companies
                  </Link>
                  <Link href="/solutions#ownership" className="block px-6 py-3 text-[var(--color-black)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-azure)] transition-colors">
                    Ownership Groups
                  </Link>
                </div>
              )}
            </div>

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

            <a
              href="https://login.visitingmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors"
            >
              Login
            </a>

            <Link
              href="/request-demo"
              className="text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold font-[var(--font-secondary)] transition-colors"
            >
              Contact
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
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
          <nav className="flex flex-col py-4 space-y-2 bg-[var(--color-gray-light)]">
            {/* Why Us Mobile */}
            <div className="border-b border-[var(--color-gray-darken)]">
              <button
                onClick={() => toggleDropdown('whyus-mobile')}
                className="w-full px-6 py-3 text-left text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold flex justify-between items-center"
              >
                Why Us?
                <span className={`transform transition-transform ${activeDropdown === 'whyus-mobile' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeDropdown === 'whyus-mobile' && (
                <div className="bg-white">
                  <Link href="/why-us" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    Immersive Sales Enablement
                  </Link>
                  <Link href="/why-us#support" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    Support & Training
                  </Link>
                  <Link href="/integration" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    Integration Catalog
                  </Link>
                  <Link href="/why-us#roi" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    ROI Results
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Mobile */}
            <div className="border-b border-[var(--color-gray-darken)]">
              <button
                onClick={() => toggleDropdown('solutions-mobile')}
                className="w-full px-6 py-3 text-left text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold flex justify-between items-center"
              >
                Solutions
                <span className={`transform transition-transform ${activeDropdown === 'solutions-mobile' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeDropdown === 'solutions-mobile' && (
                <div className="bg-white">
                  <div className="px-8 py-2 text-xs uppercase text-[var(--color-gray-placeholder)] font-semibold">By Product</div>
                  <Link href="/solutions" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    SalesHub
                  </Link>
                  <Link href="/solutions#truetour" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    TrueTour
                  </Link>
                  <Link href="/solutions#production" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    3D, 360° and CGI Production
                  </Link>
                  <Link href="/solutions" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    Hospitality Sales Enablement
                  </Link>
                  <div className="px-8 py-2 text-xs uppercase text-[var(--color-gray-placeholder)] font-semibold mt-2 border-t border-[var(--color-gray-darken)]">By Role</div>
                  <Link href="/solutions#hotels" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    Hotels
                  </Link>
                  <Link href="/solutions#brands" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    Brands
                  </Link>
                  <Link href="/solutions#management" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    Management Companies
                  </Link>
                  <Link href="/solutions#ownership" className="block px-8 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)]" onClick={closeAllMenus}>
                    Ownership Groups
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/customers"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={closeAllMenus}
            >
              Customers
            </Link>

            <Link
              href="/testimonials"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={closeAllMenus}
            >
              Testimonials
            </Link>

            <Link
              href="/community"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={closeAllMenus}
            >
              Community
            </Link>

            <Link
              href="/blog"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <a
              href="https://login.visitingmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={closeAllMenus}
            >
              Login
            </a>

            <Link
              href="/request-demo"
              className="px-6 py-3 text-[var(--color-black)] hover:text-[var(--color-azure)] font-semibold border-b border-[var(--color-gray-darken)]"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link
              href="/request-demo"
              className="mx-6 mt-4 bg-[var(--color-azure)] text-white px-6 py-3 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider text-center"
              onClick={closeAllMenus}
            >
              Request Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
