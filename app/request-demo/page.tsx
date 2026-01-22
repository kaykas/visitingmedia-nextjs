import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RequestDemoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-white py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 max-w-4xl mx-auto text-[var(--color-black)]">
              Receive a personal platform demonstration and get a custom quote for your properties.
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto font-[var(--font-secondary)] text-[var(--color-black-light)]">
              Our expert sales team will create a bespoke content plan to optimize your virtual selling opportunity.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Request Demo</h2>
            <p className="text-lg mb-8 text-center font-[var(--font-secondary)]">
              Please enter your contact details:*
            </p>
            <form className="bg-white p-8 lg:p-12 shadow-lg rounded">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-semibold">
                    First name*
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
                    Last name*
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
                <label htmlFor="phone" className="block mb-2 font-semibold">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="company" className="block mb-2 font-semibold">
                  Company*
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-gray-darken)] rounded focus:outline-none focus:border-[var(--color-azure)]"
                />
              </div>

              <p className="text-sm mb-6 font-[var(--font-secondary)]">
                Our sales team will connect with you soon to set up a platform demonstration.
              </p>

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
