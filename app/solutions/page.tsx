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
                  TAKING IMMERSIVE SALES TO THE NEXT LEVEL
                </h1>
                <p className="text-xl lg:text-2xl text-[var(--color-azure-light)] font-[var(--font-secondary)] mb-4">
                  SalesHub™ is an immersive selling platform that empowers hospitality sales teams to close bookings faster and more efficiently by supporting immersive selling strategies and streamlining processes.
                </p>
                <p className="text-xl lg:text-2xl text-[var(--color-azure-light)] font-[var(--font-secondary)]">
                  The platform blends traditional content with immersive assets like 360º photos, 3D models, and CGI, providing advanced tools that enhance productivity and customer engagement.
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
              Features and Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Experience</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Help buyers make quicker decisions with tailored proposals that combine digital assets into a single, shareable link using the Experience feature.
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
                  Elevate your channel distribution strategy by integrating immersive content right at the top of the funnel, powered by API technology and distribution features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Fit User Groups */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-16 font-bold">
              Best Fit For
            </h2>
            <div className="space-y-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Sales Teams</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Sales teams can easily access and share various immersive and traditional assets to showcase each property's unique features. This helps them spend less time managing content and more time selling and connecting with potential customers. By removing the hassle of managing sales assets, teams often see a 17x ROI within their first quarter of using the tool.
                </p>
              </div>
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Front Desk & Concierge</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Teams can quickly and easily enhance their upselling process through quick shares through email, text or QR codes. Personalize what's sent to appeal to the specific interests of the guest to engage with local attractions. SalesHub is an easy way to drive ancillary revenue for every space available, from spa, to F&B, to pool cabanas and more.
                </p>
              </div>
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">Above-Property Teams</h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Above-property teams have control over sales assets and gain quick access to collateral the sales teams are using at the property level, which is centralized in one single hub. They also have access to engagement and usage data that enables them to adapt and refine their sales strategies for their entire portfolio using insights from Analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Comparison */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Which product is right for you?
            </h2>
            <Link
              href="/request-demo"
              className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              LEARN MORE
            </Link>
          </div>
        </section>

        {/* Customer Testimonial */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="border-l-4 border-[var(--color-gold)] pl-8">
              <blockquote className="text-xl lg:text-2xl mb-6 italic text-[var(--color-black-light)] font-[var(--font-secondary)]">
                "Now what's great about SalesHub is we can package it. I can bundle that [content], save you time and just show you the stuff you want to see. And now obviously they have the new voice recording option too which is great. I could just do it all virtually and leave a verbal description if I need to what you need to look at or what we're talking about. I think that's fantastic. I think for hotels that don't have it, it's a miss."
              </blockquote>
              <div className="text-lg font-semibold">
                Dan Shaughnessy
                <span className="block text-sm text-[var(--color-gray-placeholder)] font-normal font-[var(--font-secondary)]">
                  Director of Sales and Marketing – Marriot Marquis San Diego Marina
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Case Study: Convention Hotels See Substantial ROI with Visiting Media Solutions
            </h2>
            <Link
              href="/customers"
              className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
            >
              READ MORE
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Request a Demo & Get Started Today
            </h2>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[var(--color-azure)] px-12 py-5 rounded hover:bg-[var(--color-gray-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
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
