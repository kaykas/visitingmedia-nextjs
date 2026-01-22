import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabbedSolutions from '@/components/TabbedSolutions'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left Side */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight uppercase text-[var(--color-black)]">
                  We make selling spaces and experiences simple for hospitality
                </h1>
                <h2 className="text-xl lg:text-2xl mb-8 text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Delivering technology that leverages immersion to drive competitive advantage
                </h2>
                <Link
                  href="/request-demo"
                  className="inline-block bg-[var(--color-button-bg)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure)] transition-colors font-semibold uppercase text-sm tracking-wider"
                >
                  Start Your Journey Here
                </Link>
              </div>

              {/* Device Mockup - Right Side */}
              <div className="order-first lg:order-last">
                <Image
                  src="/images/mockups/four-device-mockup.png"
                  alt="Platform shown across multiple devices"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-2xl lg:text-3xl text-center mb-12 font-normal">
              Trusted by hundreds of brands and thousands of companies worldwide
            </h2>

            {/* Brand Logos Grid */}
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-16 max-w-[1100px] mx-auto">
              <Image src="/images/brands/Logos-Product-Images-1.png" alt="Hilton" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-2.png" alt="Marriott" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-3.png" alt="Hyatt" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-4.png" alt="IHG" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-5.png" alt="Accor" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-6.png" alt="MGM Resorts" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-7.png" alt="Omni Hotels" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-8.png" alt="Loews Hotels" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-9.png" alt="Four Seasons" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images-10.png" alt="Kimpton" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/brands/Logos-Product-Images.png" alt="Westin" width={120} height={60} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </div>

            {/* Awards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-4">
                  Named <strong>One of the Top Hotel Tech Apps of 2025</strong>
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center" style={{ minHeight: '200px' }}>
                  <Image src="/images/awards/htr-awards-2025.png" alt="HTR Awards" width={200} height={220} className="w-auto h-auto max-h-[180px] object-contain" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-4">
                  <strong>Recommended by Hoteliers</strong>
                </h3>
                <p className="text-sm mb-4">Certificate of Excellence</p>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center" style={{ minHeight: '200px' }}>
                  <Image src="/images/awards/certificate-excellence.png" alt="Certificate of Excellence" width={200} height={200} className="w-auto h-auto max-h-[180px] object-contain" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-4">
                  HotelTechReport <strong>Certified Support Excellence</strong>
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center" style={{ minHeight: '200px' }}>
                  <Image src="/images/awards/certified-support.png" alt="Customer Support" width={200} height={200} className="w-auto h-auto max-h-[180px] object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonial */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="border-l-4 border-[var(--color-gold)] pl-8">
              <blockquote className="text-xl lg:text-2xl mb-6 italic text-[var(--color-black-light)] font-[var(--font-secondary)]">
                "It's is not only easy to access and use but it allows you to show content that is tailored to the conversation you're having with your clients. It definitely helps us book business faster, especially in this market where everything is last minute."
              </blockquote>
              <div className="text-lg font-semibold">
                Jonathan Leonardis
                <span className="block text-sm text-[var(--color-gray-placeholder)] font-normal font-[var(--font-secondary)]">
                  Global Director of Sales
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Metrics Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-4 font-bold">
              Real Customer-Reported ROI
            </h2>
            <p className="text-xl text-center mb-12 font-[var(--font-secondary)]">
              Hotels see a true uplift in revenue with our solutions
            </p>
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-[var(--color-azure)] mb-4">17x</div>
                <p className="text-lg font-[var(--font-secondary)]">
                  Commonly Reported ROI Within First Quarter of Active Use
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-[var(--color-azure)] mb-4">25-39%</div>
                <p className="text-lg font-[var(--font-secondary)]">
                  Average Uplift in Closing Ratio on Group Stays
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-[var(--color-azure)] mb-4">$150k-$1M</div>
                <p className="text-lg font-[var(--font-secondary)]">
                  Regularly Reported Deal Size with Active Use
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/why-us"
                className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
              >
                VIEW MORE RESULTS
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Overview Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-5xl text-center mb-6 font-bold">
              World's #1 Hospitality Sales Enablement Platform
            </h2>
            <p className="text-xl text-center mb-20 max-w-4xl mx-auto font-[var(--font-secondary)]">
              We are the leading software company delivering sales enablement solutions to the hospitality industry
            </p>

            {/* Subsection 1: Engaging Virtual & In-Person Sales */}
            <div className="mb-24">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Engaging Virtual & In-Person Sales
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)] leading-relaxed mb-6">
                  SalesHub™ transforms sales presentations into dynamic, interactive Experiences that captivate audiences both in-person and online. Share PDFs, websites, virtual tours, diagrams — any tool your team needs to sell — with one single link at the click of a button, and customize those resources in real time, any time.
                </p>
                <Link
                  href="/solutions"
                  className="inline-block bg-[var(--color-azure)] text-white px-8 py-3 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
                >
                  LEARN ABOUT OUR PLATFORM
                </Link>
              </div>
            </div>

            {/* Subsection 2: Virtual Media Production */}
            <div className="mb-24">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Virtual Media Production
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)] leading-relaxed mb-6">
                  From 360° photos to 3D models, drone video to CGI, Visiting Media captures and produces immersive media around the globe. Our service provides visuals of the highest quality loaded into our one-of-a-kind platform. With a variety of virtual tour options available, rest assured your hotels have access to the latest media, project-managed by our team from start to finish.
                </p>
                <Link
                  href="/solutions"
                  className="inline-block bg-[var(--color-azure)] text-white px-8 py-3 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
                >
                  VIEW OUR MEDIA OFFERINGS
                </Link>
              </div>
            </div>

            {/* Subsection 3: Upgraded Channel Distribution */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Upgraded Channel Distribution
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)] leading-relaxed mb-6">
                  Distribute immersive media through websites, brand.com, OTAs, booking engines, ebrochures, proposal tools and more, leveraging an immersive sales and marketing strategy. Our Level 1 Certified Customer Support team works with property and above-property stakeholders to maximize effectiveness on key channels.
                </p>
                <Link
                  href="/integration"
                  className="inline-block bg-[var(--color-azure)] text-white px-8 py-3 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
                >
                  LEARN MORE
                </Link>
              </div>
              <div className="order-first md:order-last">
                <Image
                  src="/images/mockups/ipad-tripadvisor.png"
                  alt="iPad showing virtual tour on TripAdvisor"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Subsection 4: Immersive Selling Strategy */}
            <div>
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Immersive Selling Strategy
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)] leading-relaxed mb-6">
                  An immersive asset (i.e. 3D models or 360° photos) without a strategy is almost useless. Work beyond placing and sharing immersive assets separately and understand which assets perform better when, where and why. Gain a holistic approach, combing the best assets to achieve competitive advantage on virtual sales.
                </p>
                <Link
                  href="/request-demo"
                  className="inline-block bg-[var(--color-azure)] text-white px-8 py-3 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
                >
                  BOOK A CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Solutions - Tabbed Interface */}
        <section className="bg-white py-16 lg:py-24">
          <TabbedSolutions />
        </section>

        {/* Customer Success Metrics */}
        <section className="bg-[var(--color-azure)] text-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12 font-bold">
              Save Time, Increase Satisfaction
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-4">100%</div>
                <p className="text-lg lg:text-xl font-[var(--font-secondary)]">
                  Strongly recommend Visiting Media
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-4">115-400+</div>
                <p className="text-lg lg:text-xl font-[var(--font-secondary)]">
                  Save 115-400+ hours per salesperson annually
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-4">30-50%</div>
                <p className="text-lg lg:text-xl font-[var(--font-secondary)]">
                  Average decrease in sales cycle length
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12 font-bold">
              Customer Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Hilton Garden Inn Case Study */}
              <Link href="/customers" className="group block">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/case-studies/hilton-garden-inn.png"
                      alt="Hilton Garden Inn West Lafayette"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-azure)] transition-colors">
                      Hilton Garden Inn West Lafayette
                    </h3>
                    <p className="text-[var(--color-black-light)] font-[var(--font-secondary)] mb-4">
                      "The virtual tour has been instrumental in driving group bookings and showcasing our event spaces."
                    </p>
                    <span className="text-[var(--color-azure)] font-semibold">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Hotel on Rivington Case Study */}
              <Link href="/customers" className="group block">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/case-studies/hotel-rivington.png"
                      alt="Hotel on Rivington"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-azure)] transition-colors">
                      Hotel on Rivington
                    </h3>
                    <p className="text-[var(--color-black-light)] font-[var(--font-secondary)] mb-4">
                      "SalesHub transformed how we present our property to event planners and boosted our conversion rates."
                    </p>
                    <span className="text-[var(--color-azure)] font-semibold">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Hyatt Place Case Study */}
              <Link href="/customers" className="group block">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/case-studies/hyatt-times-square.png"
                      alt="Hyatt Place NYC Times Square"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-azure)] transition-colors">
                      Hyatt Place NYC Times Square
                    </h3>
                    <p className="text-[var(--color-black-light)] font-[var(--font-secondary)] mb-4">
                      "Immersive content helped us stand out in a competitive market and close deals faster."
                    </p>
                    <span className="text-[var(--color-azure)] font-semibold">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12 font-bold">
              Enhance Digital Channels
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/images/partners/teneo.svg"
                  alt="Teneo"
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/images/partners/weddingwire.svg"
                  alt="WeddingWire"
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/images/partners/cvent.svg"
                  alt="Cvent"
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/images/partners/synxis-sabre.svg"
                  alt="Synxis Sabre"
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/integration"
                className="inline-block bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
              >
                View Our Integration Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-[var(--color-black)]">
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
