import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-black)] text-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 uppercase">Join Our Community</h1>
            <p className="text-xl lg:text-2xl text-[var(--color-azure-light)] font-[var(--font-secondary)]">
              Connect with hospitality professionals worldwide
            </p>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[var(--color-azure)] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">→</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Forums</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Share insights and learn from industry experts in hospitality sales enablement
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[var(--color-azure)] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">★</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Events</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Attend webinars and networking events to stay ahead of industry trends
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[var(--color-azure)] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">📚</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Resources</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Access exclusive guides, best practices, and success strategies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-16 font-bold">
              Why Join?
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-[var(--color-azure)]">Industry Insights</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Stay informed with the latest trends and innovations in hospitality sales technology
                </p>
              </div>
              <div className="bg-white p-8 rounded shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-[var(--color-azure)]">Networking</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Connect with peers, share experiences, and build valuable professional relationships
                </p>
              </div>
              <div className="bg-white p-8 rounded shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-[var(--color-azure)]">Exclusive Content</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Get early access to new features, case studies, and success stories
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* External Link Notice */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <p className="text-xl mb-8 text-[var(--color-black-light)] font-[var(--font-secondary)]">
              Our community platform is hosted at community.visitingmedia.com
            </p>
            <a
              href="https://community.visitingmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-azure)] text-white px-12 py-5 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              Visit Community Site
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Not a Customer Yet?
            </h2>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[var(--color-azure)] px-12 py-5 rounded hover:bg-[var(--color-gray-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              Request a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
