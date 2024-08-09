import { api } from './api-client'

interface RegisterProductSalesRequest {
  productName: string
  productId: string
  userId: string
  price: number
  boughtAt: Date
}

export async function registerProductSales(body: RegisterProductSalesRequest) {
  await api.post('purchases', {
    json: {
      ...body,
      quantity: 1,
    },
  })
}
