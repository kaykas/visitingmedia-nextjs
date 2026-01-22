import Link from 'next/link'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[var(--color-black)] text-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                WE MAKE SELLING SPACES AND EXPERIENCES SIMPLE FOR HOSPITALITY
              </h1>
              <h2 className="text-xl lg:text-2xl mb-8 text-[var(--color-azure-light)] font-[var(--font-secondary)]">
                Transform your hospitality business with modern solutions
              </h2>
              <Link
                href="/request-demo"
                className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Logos Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12 font-normal">
              Trusted by Leading Hospitality Brands
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
              {/* Placeholder for customer logos */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div
                  key={i}
                  className="w-32 h-20 bg-[var(--color-gray-light)] rounded flex items-center justify-center text-[var(--color-gray-placeholder)] text-xs"
                >
                  Logo {i}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/customers"
                className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
              >
                See All Customers
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl mb-6">Why Hospitality Chooses Us</h2>
                <p className="text-lg text-[var(--color-black-light)] mb-6 font-[var(--font-secondary)]">
                  We understand the unique challenges of hospitality businesses. Our platform streamlines
                  operations, enhances guest experiences, and drives revenue growth.
                </p>
                <Link
                  href="/why-us"
                  className="inline-block text-[var(--color-azure)] font-semibold hover:text-[var(--color-azure-light)] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded shadow-lg">
                <div className="space-y-6">
                  <div className="border-l-4 border-[var(--color-gold)] pl-4">
                    <h3 className="text-xl font-semibold mb-2">Simple Integration</h3>
                    <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                      Seamlessly integrate with your existing systems
                    </p>
                  </div>
                  <div className="border-l-4 border-[var(--color-gold)] pl-4">
                    <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                    <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                      Make data-driven decisions with instant insights
                    </p>
                  </div>
                  <div className="border-l-4 border-[var(--color-gold)] pl-4">
                    <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                      Expert assistance whenever you need it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-[var(--color-gold)] p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl mb-4">Request a Demo</h3>
                <p className="text-[var(--color-black-light)] mb-6 font-[var(--font-secondary)]">
                  See how Visiting Media can transform your hospitality business
                </p>
                <Link
                  href="/request-demo"
                  className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
                >
                  Get Started
                </Link>
              </div>
              <div className="border border-[var(--color-gold)] p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl mb-4">Join Our Community</h3>
                <p className="text-[var(--color-black-light)] mb-6 font-[var(--font-secondary)]">
                  Connect with other hospitality professionals and share insights
                </p>
                <Link
                  href="/community"
                  className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12">Latest Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-[var(--color-azure-lighter)]"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Blog Post Title {i}</h3>
                    <p className="text-[var(--color-black-light)] mb-4 font-[var(--font-secondary)]">
                      A brief excerpt from the blog post goes here to give readers a preview...
                    </p>
                    <Link
                      href={`/blog/post-${i}`}
                      className="text-[var(--color-azure)] font-semibold hover:text-[var(--color-azure-light)] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
