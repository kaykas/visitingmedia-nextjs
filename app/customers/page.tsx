import { client } from '@/lib/sanity.client'
import { customersQuery } from '@/lib/sanity.queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

async function getCustomers() {
  try {
    return await client.fetch(customersQuery)
  } catch (error) {
    console.error('Error fetching customers:', error)
    return []
  }
}

export default async function CustomersPage() {
  const customers = await getCustomers()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Our Customers</h1>

        {customers.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No customers yet. Add content through Sanity Studio at /studio
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {customers.map((customer: any) => (
              <Link
                key={customer._id}
                href={`/customers/${customer.slug.current}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col items-center"
              >
                {customer.logo && (
                  <div className="relative h-24 w-24 mb-4">
                    <Image
                      src={urlFor(customer.logo).width(200).height(200).url()}
                      alt={customer.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h2 className="text-xl font-bold text-center">{customer.title}</h2>
                {customer.industry && (
                  <p className="text-sm text-gray-500 mt-2">{customer.industry}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
