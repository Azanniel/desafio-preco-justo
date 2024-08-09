import { api } from './api-client'

export interface Product {
  id: string
  name: string
  description: string
  quantity: number
  price: number
  preview: string
  featured: boolean
}

interface GetFeaturedProductsResponse {
  products: Product[]
}

export async function getFeaturedProducts(): Promise<GetFeaturedProductsResponse> {
  const result = await api
    .get('products', {
      searchParams: {
        featured: true,
      },
    })
    .json<Product[]>()

  return { products: result }
}
