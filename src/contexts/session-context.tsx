import * as SecureStore from 'expo-secure-store'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { signInWithPassword, User } from '@/http/sign-in-with-password'

interface SessionContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const SESSION_SECURE_KEY = 'SESSION_USER'

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

      await SecureStore.setItemAsync(
        SESSION_SECURE_KEY,
        JSON.stringify(result.user),
      )

      setUser(result.user)
    } catch (error) {
      setUser(null)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  async function signOut() {
    await SecureStore.deleteItemAsync(SESSION_SECURE_KEY)
    setUser(null)
  }

  useEffect(() => {
    setIsLoading(true)

    SecureStore.getItemAsync(SESSION_SECURE_KEY)
      .then((result) => {
        if (result) {
          setUser(JSON.parse(result))
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <SessionContext.Provider value={{ user, isLoading, signIn, signOut }}>
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
