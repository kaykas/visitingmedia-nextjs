import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RequestDemoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-gold)] text-[var(--color-black)] py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Request a Demo</h1>
            <p className="text-xl lg:text-2xl">See how Visiting Media can transform your business</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <form className="bg-white p-8 lg:p-12 shadow-lg rounded">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-semibold">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 font-semibold">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block mb-2 font-semibold">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-azure)] text-white px-8 py-4 rounded hover:bg-[var(--color-azure-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
