import Header from '@/components/Header'

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-azure-lighter)] py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Customer Testimonials</h1>
            <p className="text-xl lg:text-2xl">Hear what our customers have to say</p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white p-8 shadow-lg rounded border-l-4 border-[var(--color-gold)]">
                  <p className="text-[var(--color-black-light)] mb-6 italic font-[var(--font-secondary)]">
                    "Visiting Media has transformed how we manage our property. The results have been incredible."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--color-azure)] rounded-full mr-4"></div>
                    <div>
                      <p className="font-bold">Customer Name</p>
                      <p className="text-sm text-[var(--color-gray-placeholder)]">Hotel Manager</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
