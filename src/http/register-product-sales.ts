import * as Notifications from 'expo-notifications'

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

  Notifications.scheduleNotificationAsync({
    content: {
      priority: Notifications.AndroidNotificationPriority.MAX,
      title: 'O seu produto está a caminho! 🥳',
      body: `🎁 O seu produto ${body.productName} foi confirmado!`,
    },
    trigger: { seconds: 5 },
  })
}
