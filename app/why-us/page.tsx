import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccordionTimeline from '@/components/AccordionTimeline'
import Link from 'next/link'
import Image from 'next/image'

export default function WhyUsPage() {
  const journeySteps = [
    {
      title: '1. Kickoff Call & App Delivery',
      content: 'Project planning and immediate platform access. We ensure your team is set up for success from day one with comprehensive onboarding and clear timelines.'
    },
    {
      title: '2. Managed Services',
      content: 'Content production across continents. Our professional photography and media production team handles everything from virtual tours to high-quality asset creation at scale.'
    },
    {
      title: '3. Distribution Onto Websites & Proposals',
      content: 'Asset deployment across platforms. Seamlessly integrate your immersive content into your existing sales channels, booking platforms, and marketing materials.'
    },
    {
      title: '4. Use Your Platform When Selling',
      content: 'Team training and customization. Comprehensive training ensures your sales team knows how to leverage the platform effectively for maximum impact and conversion.'
    },
    {
      title: '5. Ongoing Training & Support',
      content: 'Continuous learning and innovation updates. Regular check-ins, platform enhancements, and dedicated customer success management to ensure long-term ROI.'
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative bg-[var(--color-black)] text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/luxury-lobby.png"
              alt="Luxury hotel lobby"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative z-10 max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 uppercase">Why Us?</h1>
            <h2 className="text-2xl lg:text-3xl text-[var(--color-azure-lighter)] font-[var(--font-secondary)]">
              The Results Speak for Themselves
            </h2>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <p className="text-xl lg:text-2xl text-center mb-16 max-w-4xl mx-auto font-[var(--font-secondary)]">
              We are the world's expert on hospitality sales enablement, built on years of research, product innovation, and a track record of delivering high ROI.
            </p>
          </div>
        </section>

        {/* Core Service Areas */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">
                  Immersive Sales Enablement
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Discover benefits sales enablement brings to properties at scale.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">
                  Calculate Your ROI
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Use ROI calculators to estimate revenue SalesHub can bring to your business.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">
                  Best-in-Class Support
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Every customer receives enterprise-level success management and sales training for maximum adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Journey */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-16 font-bold">
              Our Customer Journey
            </h2>
            <AccordionTimeline steps={journeySteps} />
          </div>
        </section>

        {/* Integration Partners */}
        <section className="bg-[var(--color-gray-light)] py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12 font-bold">
              Enhance Digital Channels
            </h2>
            <p className="text-center text-xl mb-12 font-[var(--font-secondary)]">
              Integration Catalog includes: Teneo, WeddingWire, Cvent, Synxis
            </p>
            <div className="text-center">
              <Link
                href="/integrations"
                className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
              >
                View All Integrations
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Request Demo & Get Started Today
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
