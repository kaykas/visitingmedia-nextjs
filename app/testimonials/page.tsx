import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TestimonialsPage() {
  // Featured testimonials with background images
  const featuredTestimonials = [
    {
      quote: "TrueTour helps our company achieve its objectives by really streamlining the sales process. It allows us to put all of our attachments and links in one easy place for our clients to access.",
      name: "Nicolette Impastado",
      title: "Senior Sales Executive",
      image: "/images/testimonials/luxury-lake-oconee.png"
    },
    {
      quote: "We sent the TrueTour to a client that was unresponsive and received a call back that same day. We closed a deal worth over $150,000.",
      name: "Olaf Leikvoll",
      title: "Senior Catering Sales Executive",
      image: "/images/testimonials/mid-tier-philadelphia.png"
    },
    {
      quote: "TrueTour is nearly expected by clients now. Our conversion rate improved and our closing time accelerated significantly.",
      name: "Colette Kukla",
      title: "DOSM, Chicago Marriott O'Hare",
      image: "/images/testimonials/luxury-frisco.png"
    },
    {
      quote: "Virtual site visits closed business when clients couldn't visit in person. It's become an essential tool for remote sales.",
      name: "Area Director of Sales",
      title: "Courtyard by Marriott and Residence Inn Plainfield",
      image: "/images/testimonials/luxury-miami.png"
    },
    {
      quote: "TrueTour is a lifesaver for remote destinations, enabling virtual site visits that convert prospects into bookings.",
      name: "Karim El-Rami",
      title: "Regional Director of Sales and Marketing, Luxury Brands, Accor Hotels",
      image: "/images/testimonials/full-service-colorado.png"
    },
    {
      quote: "Competing against 15 cities and 100 hotels, TrueTour has become part of our daily sales process and gives us a competitive edge.",
      name: "Scott Boyer",
      title: "Director of Sales and Marketing, Denver Marriott Tech Center",
      image: "/images/testimonials/luxury-houston.png"
    }
  ]

  // Additional testimonials for grid display
  const additionalTestimonials = [
    {
      quote: "SalesHub lets you bundle content, save time, and show only what matters. The voice recording option is fantastic.",
      name: "Dan Shaughnessy",
      title: "Director of Sales and Marketing, Marriott Marquis San Diego Marina"
    },
    {
      quote: "TrueTour houses all our PDFs, capacity guides, and 360° photos. We share them in sales proposals effectively.",
      name: "Sam Klein",
      title: "Director of Marketing Strategy, Meetings & Events, MGM Resorts"
    },
    {
      quote: "TrueTour is tailored to conversations with clients. It helps us book faster, especially with last-minute business.",
      name: "Jonathan Leonardis",
      title: "Global Director of Sales, SH Hotels & Resorts"
    },
    {
      quote: "We booked over $100k in revenue in 2023 using TrueTour for proposals and document storage.",
      name: "Area Director of Sales & Marketing",
      title: "Hilton Garden Inn and Home2 Suites"
    },
    {
      quote: "This product stands out above the rest and advances proposals to modern standards.",
      name: "Jonathan Muscillo",
      title: "Group Sales Manager, Heldrich Hotel"
    },
    {
      quote: "TrueTour helps previous clients see innovation and changes perception of value.",
      name: "Erin Osaki",
      title: "Corporate Sales Manager, Riverhouse on the Deschutes"
    },
    {
      quote: "Short-term bookings require speed. TrueTour simplifies planning for 50-200 person events.",
      name: "Armando Emanuelli",
      title: "Director of Sales and Marketing, Hotel Rumbao"
    },
    {
      quote: "Expanding to 15 hotels this year. Version X shows promise for improved outcomes.",
      name: "Dan Surette",
      title: "Chief Sales Officer, Omni Hotels & Resorts"
    },
    {
      quote: "All assets now centralized. Previously scattered across 50 locations; instant access during calls.",
      name: "Marketing Strategy Manager",
      title: "Major Hotel Brand"
    },
    {
      quote: "Working with Visiting Media is enjoyable. The product is genuinely excellent.",
      name: "Brad Mettler",
      title: "Director of Sales and Marketing"
    },
    {
      quote: "The platform is surprisingly easy to use with unique implementation possibilities.",
      name: "Rishi De",
      title: "Senior Sales Executive"
    },
    {
      quote: "The Visiting Media team is unmatched—flexible, responsive, and a true partner.",
      name: "Reina Herschdorfer",
      title: "Director of Marketing, National Meetings & Events"
    }
  ]

  const blogPosts = [
    {
      title: "Visiting Media at ILHA INSPIRE",
      description: "Showcasing immersive sales technology at the premier luxury hospitality event",
      image: "/images/press/ilha-inspire.png",
      link: "/blog"
    },
    {
      title: "Visiting Media Ranks #1 on Hotel Tech Report's 2026 List",
      description: "Top-rated hotel sales enablement platform for customer satisfaction",
      image: "/images/press/htr-award.png",
      link: "/blog"
    },
    {
      title: "Visiting Media Recognized Among North America's Fastest-Growing Companies",
      description: "Deloitte Technology Fast 500 honoree for innovation and growth",
      image: "/images/press/deloitte-fast-500.png",
      link: "/blog"
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
              src="/images/hero/hotel-polaris.png"
              alt="Hotel Polaris"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative z-10 max-w-[1260px] mx-auto px-6 text-center">
            <p className="text-lg lg:text-xl mb-4 text-[var(--color-azure-lighter)] uppercase tracking-wider font-semibold">Testimonials</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Words From Our Clients</h1>
            <p className="text-xl lg:text-2xl font-[var(--font-secondary)] max-w-4xl mx-auto">
              Hear directly from our customers why they love TrueTour, SalesHub and the Visiting Media service provided at scale.
            </p>
          </div>
        </section>

        {/* Featured Testimonials with Background Images */}
        <section className="py-16 lg:py-24 bg-[var(--color-gray-light)]">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden shadow-xl group hover:shadow-2xl transition-shadow h-[400px]">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <p className="text-white text-lg mb-6 italic font-[var(--font-secondary)] leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-white/30 pt-4">
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-sm text-white/90 font-[var(--font-secondary)] mt-1">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-4 font-bold">
              Integrated Selling Technology Engineered for the 21st Century Consumer
            </h2>
            <p className="text-center text-xl text-[var(--color-black-light)] mb-16 max-w-3xl mx-auto font-[var(--font-secondary)]">
              Modern hospitality sales requires modern tools. Our platform combines immersive content with enterprise support.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-azure)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">
                  Immersive Sales Enablement
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Blend websites, PDFs, videos, 360° images, and 3D models into unified sales experiences that engage and convert.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-azure)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">
                  Managed Services
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Digital asset creation and management across five continents. Professional photography, 360° tours, and 3D production at scale.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-azure)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">
                  Best-in-Class Support
                </h3>
                <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                  Dedicated success management, certification training, and ongoing platform enhancements ensure maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Testimonials Grid */}
        <section className="py-16 lg:py-24 bg-[var(--color-gray-light)]">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12 font-bold">
              More Customer Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalTestimonials.map((testimonial, i) => (
                <div key={i} className="bg-white p-8 shadow-lg rounded border-l-4 border-[var(--color-gold)] hover:shadow-xl transition-shadow">
                  <p className="text-[var(--color-black-light)] mb-6 italic font-[var(--font-secondary)]">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-[var(--color-gray-placeholder)] font-[var(--font-secondary)]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-12 font-bold">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <Link key={i} href={post.link} className="group block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-[var(--color-azure)] group-hover:text-[var(--color-azure-light)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[var(--color-black-light)] font-[var(--font-secondary)]">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Ready to Join These Success Stories?
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
