import Header from '@/components/Header'
import Link from 'next/link'

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-black)] text-white py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl lg:text-2xl text-[var(--color-azure-light)]">Comprehensive tools for hospitality success</p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4">Property Management</h3>
                <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Streamline your operations with our integrated property management system.
                </p>
              </div>
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4">Revenue Management</h3>
                <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Optimize pricing and maximize revenue with intelligent automation.
                </p>
              </div>
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4">Guest Experience</h3>
                <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Deliver exceptional experiences that keep guests coming back.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Explore Our Solutions</h2>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[var(--color-azure)] px-8 py-4 rounded hover:bg-[var(--color-gray-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              Schedule a Demo
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
