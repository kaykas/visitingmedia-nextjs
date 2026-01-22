import Header from '@/components/Header'
import Link from 'next/link'

export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-azure)] text-white py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Visiting Media</h1>
            <p className="text-xl lg:text-2xl">Built for hospitality, designed for growth</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Industry Expertise</h2>
                <p className="text-lg text-[var(--color-black-light)] mb-4 font-[var(--font-secondary)]">
                  We understand the hospitality industry inside and out. Our solutions are built specifically for hotels, restaurants, and event venues.
                </p>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  With decades of combined experience, we know what works and what doesn't.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Proven Results</h2>
                <p className="text-lg text-[var(--color-black-light)] mb-4 font-[var(--font-secondary)]">
                  Our customers see measurable improvements in efficiency, guest satisfaction, and revenue.
                </p>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Join hundreds of hospitality businesses that trust Visiting Media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-gray-light)] py-16">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <Link
              href="/request-demo"
              className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              Request a Demo
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
