import { client } from '@/lib/sanity.client'
import { postBySlugQuery } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import { Metadata } from 'next'

async function getPost(slug: string) {
  return await client.fetch(postBySlugQuery, { slug })
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post?.seo?.metaTitle || post?.title || 'Blog Post',
    description: post?.seo?.metaDescription || post?.excerpt || '',
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    return <div className="container mx-auto px-4 py-16">Post not found</div>
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {post.mainImage && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

        {post.author && (
          <div className="flex items-center gap-4 mb-8 text-gray-600">
            <span>By {post.author.name}</span>
            {post.publishedAt && (
              <span>• {new Date(post.publishedAt).toLocaleDateString()}</span>
            )}
          </div>
        )}

        {post.body && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} />
          </div>
        )}
      </article>
    </main>
  )
}
