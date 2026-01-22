import Header from '@/components/Header'
import Link from 'next/link'

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-gold)] text-[var(--color-black)] py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Customers</h1>
            <p className="text-xl lg:text-2xl">Trusted by leading hospitality brands worldwide</p>
          </div>
        </section>

        {/* Customer Logos */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl text-center mb-12">Featured Customers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="w-32 h-20 bg-[var(--color-gray-light)] rounded flex items-center justify-center"
                >
                  Logo {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl text-center mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white p-8 shadow-lg rounded">
                  <h3 className="text-2xl font-bold mb-4">Case Study {i}</h3>
                  <p className="text-[var(--color-black-light)] mb-4 font-[var(--font-secondary)]">
                    Learn how our customers are transforming their business with Visiting Media.
                  </p>
                  <Link href="#" className="text-[var(--color-azure)] font-semibold hover:text-[var(--color-azure-light)]">
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
