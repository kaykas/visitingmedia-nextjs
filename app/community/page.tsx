import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-bold uppercase text-[var(--color-black)]">Community</h1>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Request a Demo & Get Started Today
            </h2>
            <Link
              href="/request-demo"
              className="inline-block bg-[var(--color-azure)] text-white px-12 py-5 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              Request Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
