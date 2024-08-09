import { api } from './api-client'

export interface User {
  id: string
  name: string
  email: string
  password: string
  avatarUrl: string | null
  balance: number
}

interface GetProfileResponse {
  user: User
}

export async function getProfile(userId: string): Promise<GetProfileResponse> {
  const result = await api.get(`users/${userId}`).json<User>()
  return { user: result }
}
