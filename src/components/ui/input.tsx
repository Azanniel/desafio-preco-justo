import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from 'react-native'

import { theme } from '@/theme'

interface InputRootProps extends ViewProps {}

function InputRoot({ style, ...props }: InputRootProps) {
  return <View style={[styles.root, style]} {...props} />
}

interface InputProps extends TextInputProps {}

function Input({ style, ...props }: InputProps) {
  return <TextInput style={[styles.input, style]} {...props} />
}

export { InputRoot, Input }

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,

    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: 24,

    shadowColor: '#0000001A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  input: {
    flex: 1,
    paddingVertical: 18,
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[900],
    fontSize: theme.fontSize.lg,
  },
})
