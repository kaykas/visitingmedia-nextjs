import { client } from '@/lib/sanity.client'
import { integrationsQuery } from '@/lib/sanity.queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

async function getIntegrations() {
  try {
    return await client.fetch(integrationsQuery)
  } catch (error) {
    console.error('Error fetching integrations:', error)
    return []
  }
}

export default async function IntegrationsPage() {
  const integrations = await getIntegrations()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Integrations</h1>

        {integrations.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No integrations yet. Add content through Sanity Studio at /studio
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {integrations.map((integration: any) => (
              <Link
                key={integration._id}
                href={`/integrations/${integration.slug.current}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col items-center"
              >
                {integration.logo && (
                  <div className="relative h-24 w-24 mb-4">
                    <Image
                      src={urlFor(integration.logo).width(200).height(200).url()}
                      alt={integration.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h2 className="text-xl font-bold text-center">{integration.title}</h2>
                {integration.category && (
                  <p className="text-sm text-gray-500 mt-2 capitalize">{integration.category}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
