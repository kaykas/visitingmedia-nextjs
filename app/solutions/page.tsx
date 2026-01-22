import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-black)] text-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 uppercase">
                  Taking Immersive Sales to the Next Level
                </h1>
                <p className="text-xl lg:text-2xl text-[var(--color-azure-light)] font-[var(--font-secondary)]">
                  SalesHub is an immersive selling platform that empowers hospitality sales teams to close bookings faster and more efficiently by supporting immersive selling strategies and streamlining processes.
                </p>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/images/mockups/four-device-mockup.png"
                  alt="SalesHub platform on multiple devices"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Trust Section */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-2xl lg:text-3xl text-center mb-12 font-bold text-[var(--color-black-light)]">
              Trusted throughout the hospitality industry worldwide
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-[1100px] mx-auto">
              <Image
                src="/images/brands/Logos-Product-Images-1.png"
                alt="Hilton"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-2.png"
                alt="Marriott"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-3.png"
                alt="Hyatt"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-4.png"
                alt="IHG"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-5.png"
                alt="Accor"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-6.png"
                alt="MGM"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-7.png"
                alt="Omni"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-8.png"
                alt="Loews"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-9.png"
                alt="Four Seasons"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/brands/Logos-Product-Images-10.png"
                alt="Kimpton"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-16 font-bold">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Experience</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Help buyers make quicker decisions with tailored proposals that combine digital assets into a single, shareable link.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Analytics</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Adapt and refine your sales strategy by monitoring engagement and asset usage through the powerful Analytics feature.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Distribution & Integration</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Elevate your channel distribution strategy by integrating immersive content right at the top of the funnel, powered by API technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Fit User Groups */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-16 font-bold">
              Who Benefits Most
            </h2>
            <div className="space-y-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Sales Teams</h3>
                <p className="text-lg text-[var(--color-black-light)] mb-4 font-[var(--font-secondary)]">
                  Teams can access and share immersive and traditional assets to showcase property features.
                </p>
                <p className="text-lg font-semibold text-[var(--color-azure)]">
                  Delivering a 17x ROI within their first quarter of using the tool.
                </p>
              </div>
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Front Desk & Concierge</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  These teams can enhance upselling through quick shares via email, text, or QR codes, driving ancillary revenue from spa, F&B, and other amenities.
                </p>
              </div>
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Above-Property Teams</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Central control over sales assets with access to engagement data and portfolio-level insights for strategy refinement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonial */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="border-l-4 border-[var(--color-gold)] pl-8">
              <blockquote className="text-xl lg:text-2xl mb-6 italic text-[var(--color-black-light)] font-[var(--font-secondary)]">
                "SalesHub lets you bundle content, save time, and show only what matters. The voice recording option is fantastic."
              </blockquote>
              <div className="text-lg font-semibold">
                Dan Shaughnessy
                <span className="block text-sm text-[var(--color-gray-placeholder)] font-normal font-[var(--font-secondary)]">
                  Director of Sales and Marketing, Marriott Marquis San Diego Marina
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Ready to Transform Your Sales Process?
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
