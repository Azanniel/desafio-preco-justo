import * as SecureStore from 'expo-secure-store'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getProfile } from '@/http/get-profile'
import { signInWithPassword, User } from '@/http/sign-in-with-password'
import { updateUserBalance } from '@/http/update-user-balance'

interface SessionContextType {
  user: User | null
  isLoading: boolean
  updateBalance: (balance: number) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const SESSION_SECURE_KEY = 'SESSION_USER_ID'

const SessionContext = createContext<SessionContextType>(
  {} as SessionContextType,
)

function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function signIn(email: string, password: string) {
    try {
      setIsLoading(true)

      const result = await signInWithPassword({ email, password })

      await SecureStore.setItemAsync(SESSION_SECURE_KEY, result.user.id)

      setUser(result.user)
    } catch (error) {
      setUser(null)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  async function signOut() {
    setIsLoading(true)

    await SecureStore.deleteItemAsync(SESSION_SECURE_KEY)

    setUser(null)
    setIsLoading(false)
  }

  async function updateBalance(balance: number) {
    if (!user) {
      return
    }

    await updateUserBalance(user.id, balance)

    setUser({ ...user, balance })
  }

  useEffect(() => {
    setIsLoading(true)

    SecureStore.getItemAsync(SESSION_SECURE_KEY)
      .then(async (userId) => {
        if (userId) {
          const result = await getProfile(userId)
          setUser(result.user)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <SessionContext.Provider
      value={{ user, isLoading, signIn, signOut, updateBalance }}
    >
      {children}
    </SessionContext.Provider>
  )
}

function useSession() {
  const context = useContext(SessionContext)

  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider.')
  }

  return context
}

export { SessionContext, SessionProvider, useSession }
