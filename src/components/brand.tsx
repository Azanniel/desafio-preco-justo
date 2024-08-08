import { StyleSheet, Text, View } from 'react-native'

import { theme } from '@/theme'

export function Brand() {
  return (
    <View style={styles.brand}>
      <Text style={styles.brandText}>Shopping Coins</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  brand: {
    backgroundColor: theme.colors.neutral[900],
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },

  brandText: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.xl,
  },
})
