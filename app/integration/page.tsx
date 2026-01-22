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
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 uppercase text-[var(--color-black)]">Integration Catalog</h1>
            <p className="text-xl lg:text-2xl max-w-4xl font-[var(--font-secondary)] text-[var(--color-black-light)]">
              Distribute Smarter. Showcase your virtual tours where they have the most impact—across your brand websites, proposals, booking channels, and third-party platforms.
            </p>
          </div>
        </section>

        {/* Value Drivers */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-8 font-bold">
              Value Drivers
            </h2>
            <p className="text-xl text-center mb-12 max-w-4xl mx-auto font-[var(--font-secondary)]">
              Each channel supports different goals. Use the filters below to explore how distribution helps with driving event bookings, group sales, room revenue, upsells, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['All', ...categories].map((category) => (
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
            <div className="grid md:grid-cols-4 gap-12 items-center justify-items-center">
              {partners.map((partner, i) => (
                <div key={i} className="text-2xl font-bold text-[var(--color-black-light)]">
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <Link
              href="/request-demo"
              className="inline-block bg-[var(--color-azure)] text-white px-12 py-5 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              Book A Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
