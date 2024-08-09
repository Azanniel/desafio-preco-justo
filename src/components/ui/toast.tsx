import { MotiView } from 'moti'
import { Dimensions, StyleSheet, Text } from 'react-native'

import { theme } from '@/theme'

interface ToastProps {
  title: string
  message: string
}

const { width, height } = Dimensions.get('window')

export function Toast({ title, message }: ToastProps) {
  return (
    <MotiView
      from={{ translateY: height / 2, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: 200, opacity: 0 }}
      transition={{ type: 'spring' }}
      style={styles.toast}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </MotiView>
  )
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 100,
    left: width * 0.05,
    right: width * 0.05,
    zIndex: 1000,

    padding: 24,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },

  title: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral[800],
    fontSize: theme.fontSize.base,
  },

  message: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral[400],
    fontSize: theme.fontSize.xs,
  },
})
