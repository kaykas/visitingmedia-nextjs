import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function IntegrationsPage() {
  const partners = [
    { name: 'Teneo', category: 'Event Bookings' },
    { name: 'WeddingWire', category: 'Event Bookings' },
    { name: 'Cvent', category: 'Event Bookings' },
    { name: 'Synxis Sabre', category: 'Room Bookings' }
  ]

  const categories = [
    'Event Bookings',
    'Group Bookings',
    'Room Bookings',
    'Room Upsells',
    'Site Tours'
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-azure)] text-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 uppercase">Integration Partners</h1>
            <p className="text-xl lg:text-2xl max-w-4xl font-[var(--font-secondary)]">
              Distribute smarter by showcasing virtual tours where they have the most impact—across your brand websites, proposals, booking channels, and third-party platforms.
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <p className="text-xl lg:text-2xl text-center max-w-4xl mx-auto font-[var(--font-secondary)]">
              Prospects can explore your venue remotely, gaining confidence and clarity from the start—whether they're reviewing event spaces, evaluating room blocks, or considering upsell options.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12 font-bold">
              Integration Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <span
                  key={category}
                  className="bg-white px-6 py-3 rounded shadow hover:shadow-lg transition-shadow font-semibold"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-16 font-bold">
              Featured Integration Partners
            </h2>
            <div className="grid md:grid-cols-4 gap-12">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="bg-white p-8 shadow-lg rounded flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-24 h-24 bg-[var(--color-azure-lighter)] rounded-full mb-4 flex items-center justify-center">
                    <span className="text-[var(--color-azure)] font-bold text-sm text-center px-2">
                      {partner.name}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-gray-placeholder)] font-[var(--font-secondary)] text-center">
                    {partner.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Need a Custom Integration?
            </h2>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[var(--color-azure)] px-12 py-5 rounded hover:bg-[var(--color-gray-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
