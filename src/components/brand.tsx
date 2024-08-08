import { StyleSheet, Text, View } from 'react-native'

import { theme } from '@/theme'

interface BrandProps {
  size?: 'sm' | 'base'
}

export function Brand({ size = 'base' }: BrandProps) {
  return (
    <View style={[styles.brand, size === 'sm' && styles.brandSm]}>
      <Text style={[styles.brandText, size === 'sm' && styles.brandTextSm]}>
        Shopping Coins
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  brand: {
    backgroundColor: theme.colors.neutral[900],
    borderRadius: theme.borderRadius.lg,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 24,
    paddingVertical: 8,
  },

  brandSm: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  brandText: {
    textAlign: 'center',
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.xl,
  },

  brandTextSm: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.sm,
  },
})
