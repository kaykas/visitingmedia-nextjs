import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RequestDemoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#F9F9F9] py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <h1 className="text-[24px] lg:text-[28px] font-bold mb-3 max-w-[680px] text-[var(--color-black)] leading-[1.3]">
              Receive a personal platform demonstration and get a custom quote for your properties.
            </h1>
            <p className="text-[15px] lg:text-[16px] max-w-[680px] font-[var(--font-secondary)] text-[#666666] leading-[1.6]">
              Our expert sales team will create a bespoke content plan to optimize your virtual selling opportunity.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-[520px] mx-auto px-6">
            <h2 className="text-[28px] lg:text-[32px] font-black mb-3 uppercase tracking-[0.02em] leading-[1.2]">REQUEST DEMO</h2>
            <p className="text-[13px] mb-8 font-[var(--font-secondary)] text-[var(--color-black)]">
              Please enter your contact details:*
            </p>
            <form className="p-0">
              <div className="space-y-5 mb-5">
                <div>
                  <label htmlFor="firstName" className="block mb-1.5 font-bold text-[13px]">
                    First name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full px-3 py-2.5 border border-[#CCCCCC] rounded-[3px] focus:outline-none focus:border-[#4c7c8a] text-[14px] placeholder:text-[#707070]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1.5 font-bold text-[13px]">
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full px-3 py-2.5 border border-[#CCCCCC] rounded-[3px] focus:outline-none focus:border-[#4c7c8a] text-[14px] placeholder:text-[#707070]"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block mb-1.5 font-bold text-[13px]">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full px-3 py-2.5 border border-[#CCCCCC] rounded-[3px] focus:outline-none focus:border-[#4c7c8a] text-[14px] placeholder:text-[#707070]"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-1.5 font-bold text-[13px]">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2.5 border border-[#CCCCCC] rounded-[3px] focus:outline-none focus:border-[#4c7c8a] text-[14px] placeholder:text-[#707070]"
                />
              </div>

              <div className="mb-7">
                <label htmlFor="company" className="block mb-1.5 font-bold text-[13px]">
                  Company*
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  required
                  className="w-full px-3 py-2.5 border border-[#CCCCCC] rounded-[3px] focus:outline-none focus:border-[#4c7c8a] text-[14px] placeholder:text-[#707070]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#4c7c8a] text-white px-8 py-3 rounded-full hover:bg-[#7096a1] transition-colors font-semibold uppercase text-[11px] tracking-[0.08em] inline-block"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
