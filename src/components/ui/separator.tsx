import { ColorValue, StyleSheet, View } from 'react-native'

import { theme } from '@/theme'

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  color?: ColorValue
}

export function Separator({
  orientation = 'horizontal',
  color,
}: SeparatorProps) {
  return (
    <View
      style={[
        { backgroundColor: color || theme.colors.neutral[300] },
        orientation === 'horizontal' && styles.horizontal,
        orientation === 'vertical' && styles.vertical,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  horizontal: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
  },

  vertical: {
    height: '100%',
    width: StyleSheet.hairlineWidth,
  },
})
