import { api } from './api-client'

export async function updateUserBalance(userId: string, balance: number) {
  await api.patch(`users/${userId}`, {
    json: {
      balance,
    },
  })
}
