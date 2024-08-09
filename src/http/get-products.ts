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

interface GetProductsParams {
  page: number
  pageSize?: number
}

export interface GetProductsResponse {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: Product[]
}

export async function getProducts({
  page,
  pageSize = 4,
}: GetProductsParams): Promise<GetProductsResponse> {
  const result = await api
    .get('products', {
      searchParams: {
        _page: page,
        _per_page: pageSize,
      },
    })
    .json<GetProductsResponse>()

  return result
}
