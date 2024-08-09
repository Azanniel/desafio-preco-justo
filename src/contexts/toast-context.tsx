import { AnimatePresence } from 'moti'
import { createContext, ReactNode, useContext, useState } from 'react'

import { Toast } from '@/components/ui/toast'

interface ToastContextType {
  toast: (title: string, message: string, duration?: number) => void
}

const ToastContext = createContext<ToastContextType>({} as ToastContextType)

function ToastProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({ title: '', message: '' })

  function toast(title: string, message: string, duration = 3000) {
    setData({ title, message })
    setVisible(true)

    setTimeout(() => {
      setVisible(false)
    }, duration)
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      <AnimatePresence exitBeforeEnter>
        {visible && <Toast title={data.title} message={data.message} />}
      </AnimatePresence>
    </ToastContext.Provider>
  )
}

function useToast() {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider.')
  }

  return context
}

export { ToastContext, ToastProvider, useToast }
