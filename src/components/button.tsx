import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { theme } from '@/theme'

interface ButtonRootProps extends TouchableOpacityProps {}

function ButtonRoot({ style, ...props }: ButtonRootProps) {
  return (
    <TouchableOpacity
      style={[styles.root, style]}
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
    backgroundColor: theme.colors.purple[500],
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.lg,
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.lg,
  },
})
