import Header from '@/components/Header'
import Link from 'next/link'

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-black)] text-white py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl lg:text-2xl text-[var(--color-azure-light)]">Connect with hospitality professionals worldwide</p>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-azure)] rounded-full mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">Forums</h3>
                <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Share insights and learn from industry experts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-azure)] rounded-full mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">Events</h3>
                <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Attend webinars and networking events
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-azure)] rounded-full mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">Resources</h3>
                <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Access exclusive guides and best practices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Become a Member</h2>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[var(--color-azure)] px-8 py-4 rounded hover:bg-[var(--color-gray-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              Join Now
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
