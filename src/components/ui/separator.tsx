import { ColorValue, StyleSheet, View } from 'react-native'

import { theme } from '@/theme'

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  color?: ColorValue
  size?: number
}

export function Separator({
  orientation = 'horizontal',
  color = theme.colors.neutral[300],
  size = StyleSheet.hairlineWidth,
}: SeparatorProps) {
  return (
    <View
      style={{
        height: orientation === 'horizontal' ? size : '100%',
        width: orientation === 'horizontal' ? '100%' : size,
        backgroundColor: color,
      }}
    />
  )
}
