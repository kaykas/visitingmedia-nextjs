import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Visiting Media
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our modern, fast, and scalable website
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Link
              href="/blog"
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Blog</h2>
              <p className="text-gray-600">Read our latest articles and insights</p>
            </Link>

            <Link
              href="/customers"
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Customers</h2>
              <p className="text-gray-600">See who trusts us</p>
            </Link>

            <Link
              href="/integrations"
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Integrations</h2>
              <p className="text-gray-600">Explore our integrations</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
