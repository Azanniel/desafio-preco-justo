import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { theme } from '@/theme'

interface ButtonRootProps extends TouchableOpacityProps {
  variant?: 'base' | 'icon'
}

function ButtonRoot({ style, variant = 'base', ...props }: ButtonRootProps) {
  return (
    <TouchableOpacity
      style={[styles.root, variant === 'icon' && styles.icon, style]}
      activeOpacity={0.8}
      {...props}
    />
  )
}

interface ButtonTitleProps extends TextProps {}

function ButtonTitle({ style, ...props }: ButtonTitleProps) {
  return <Text style={[styles.title, style]} {...props} />
}

export { ButtonRoot as Button, ButtonTitle }

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: theme.colors.purple[500],
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.lg,
  },

  icon: {
    paddingHorizontal: 8,
    paddingVertical: 8,

    borderRadius: 10,
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.lg,
  },
})
