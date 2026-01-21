import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  author->{name, image},
  categories[]->{title, slug},
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  body,
  author->{name, image, bio},
  categories[]->{title, slug},
  seo
}`

export const customersQuery = groq`*[_type == "customer" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  slug,
  logo,
  industry,
  featured
}`

export const customerBySlugQuery = groq`*[_type == "customer" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  logo,
  description,
  industry,
  website,
  seo
}`

export const integrationsQuery = groq`*[_type == "integration" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  slug,
  logo,
  category,
  featured
}`

export const integrationBySlugQuery = groq`*[_type == "integration" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  logo,
  description,
  category,
  seo
}`
