import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CustomersPage() {
  const caseStudies = [
    {
      name: "Hilton Garden Inn West Lafayette",
      title: "Transforming Group Sales: How TrueTour™ Speeds Up Sales and Boosts Conversions at Hilton Garden Inn..."
    },
    {
      name: "Hotel on Rivington",
      title: "How Hotel on Rivington Streamlined Global Bookings and Boosted Sales Efficiency With SalesHub The Hotel..."
    },
    {
      name: "Hyatt Place New York City / Times Square",
      title: "How TrueTour™ Elevates Hyatt Place Times Square's Guest Experience, Standing Out in a Global Destination..."
    },
    {
      name: "Waldorf Astoria",
      title: "How Waldorf Astoria Chicago Masters Complex, Multi-Stakeholder Event Bookings With SalesHub The Waldorf Astoria..."
    },
    {
      name: "Pacific Palms Resort",
      title: "How SalesHub Supports Independent Resort Sales at Pacific Palms Resort Nestled in the rolling hills..."
    },
    {
      name: "The Bellevue",
      title: "Reimagining Historic Luxury: The Bellevue's Sales Transformation Story The Bellevue Hotel is more than a..."
    },
    {
      name: "DoubleTree Cedar Rapids",
      title: "From TrueTour to SalesHub: How DoubleTree Cedar Rapids Stands Out and Increases Closing Rates Nestled..."
    },
    {
      name: "Hotel Polaris",
      title: "Hotel Polaris U.S. Air Force Academy Leverages CGI to Launch as Colorado Springs' Premier Full-Service..."
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-bold uppercase text-[var(--color-black)]">Customers</h1>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl text-center mb-16 font-bold">Featured Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, i) => (
                <div key={i} className="bg-white p-8 shadow-lg rounded hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-4 text-[var(--color-azure)]">{study.name}</h3>
                  <p className="text-[var(--color-black-light)] mb-6 font-[var(--font-secondary)]">
                    {study.title}
                  </p>
                  <Link
                    href="#"
                    className="text-[var(--color-azure)] font-semibold hover:text-[var(--color-azure-light)] transition-colors"
                  >
                    Read Case Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Filters */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <p className="text-xl text-center mb-8 font-[var(--font-secondary)]">
              Filter by Industry:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['All Industries', 'Event Venues', 'Golf Courses', 'Hospitality Management', 'Hotels & Resorts'].map((industry) => (
                <span
                  key={industry}
                  className="bg-white px-6 py-3 rounded shadow hover:shadow-lg transition-shadow font-semibold"
                >
                  {industry}
                </span>
              ))}
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
