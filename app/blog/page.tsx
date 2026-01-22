import { client } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/sanity.queries'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

async function getPosts() {
  try {
    return await client.fetch(postsQuery)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()
  const categories = ['All Articles', 'Events', 'Marketing', 'News', 'Revenue', 'Sales', 'Tips & Trends', 'Webinar']

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-black)] text-white py-24 lg:py-32">
          <div className="max-w-[1260px] mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-bold uppercase">Blog</h1>
          </div>
        </section>

        {/* Category Filters */}
        <section className="bg-[var(--color-gray-light)] py-8">
          <div className="max-w-[1260px] mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <span
                  key={category}
                  className="bg-white px-6 py-3 rounded shadow hover:shadow-lg transition-shadow font-semibold text-sm cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[var(--color-black-light)] text-lg font-[var(--font-secondary)]">
                  No blog posts yet. Add content through Sanity Studio at /studio
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {post.mainImage && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={urlFor(post.mainImage).width(400).height(300).url()}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-2 text-[var(--color-azure)]">{post.title}</h2>
                      {post.excerpt && (
                        <p className="text-[var(--color-black-light)] mb-4 font-[var(--font-secondary)]">{post.excerpt}</p>
                      )}
                      {post.author && (
                        <p className="text-sm text-[var(--color-gray-placeholder)] font-[var(--font-secondary)]">By {post.author.name}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-azure)] text-white py-16 lg:py-24">
          <div className="max-w-[1260px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Request a Demo & Get Started Today
            </h2>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[var(--color-azure)] px-12 py-5 rounded hover:bg-[var(--color-gray-light)] transition-colors font-semibold uppercase text-sm tracking-wider"
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
