import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#14232e] text-white">
      <div className="max-w-[1260px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Why Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Why Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/why-us" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Sales Enablement Platform
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Immersive Sales Enablement
                </Link>
              </li>
              <li>
                <Link href="/integration" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Integration Catalog
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Customer-Reported ROI
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Support & Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solution By Need */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Solution By Need</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  SalesHub
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  TrueTour
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  3D, 360° and CGI Production
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Hospitality Sales Enablement
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solution By Role */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Solution By Role</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Management Companies
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Ownership Groups
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/why-us" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/request-demo" className="text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Support</h3>
            <p className="text-[var(--color-gray-light)] mb-4 font-[var(--font-secondary)]">
              Need help? Our support team is here for you.
            </p>
            <Link
              href="/request-demo"
              className="inline-block text-[var(--color-azure-light)] hover:text-white transition-colors font-semibold font-[var(--font-secondary)]"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-12 pt-8 border-t border-[var(--color-black-light)]">
          <a
            href="https://facebook.com/visitingmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gray-light)] hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/visitingmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gray-light)] hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/visitingmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gray-light)] hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/visitingmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gray-light)] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/visitingmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gray-light)] hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Legal Links and Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--color-black-light)] text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/terms" className="text-sm text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="text-sm text-[var(--color-gray-light)] hover:text-white transition-colors font-[var(--font-secondary)]">
              Accessibility Statement
            </Link>
          </div>
          <p className="text-sm text-[var(--color-gray-light)] font-[var(--font-secondary)]">
            © 2026 Visiting Media. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
