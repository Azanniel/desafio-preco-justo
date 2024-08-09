import { api } from './api-client'

export interface User {
  id: string
  name: string
  email: string
  password: string
  avatarUrl: string | null
  balance: number
}

interface SignInWithPasswordRequest {
  email: string
  password: string
}

interface SignInWithPasswordResponse {
  user: User
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest): Promise<SignInWithPasswordResponse> {
  const result = await api
    .get('users', {
      searchParams: {
        email,
      },
    })
    .json<User[]>()

  if (result.length === 0) {
    throw new Error('Invalid credentials.')
  }

  const user = result[0]

  if (user.email !== email) {
    throw new Error('Invalid credentials.')
  }

  if (user.password !== password) {
    throw new Error('Invalid credentials.')
  }

  return { user }
}
