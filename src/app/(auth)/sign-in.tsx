import { Feather } from '@expo/vector-icons'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { WalletIcon } from '@/components/wallet-icon'
import { theme } from '@/theme'

export default function SignIn() {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View style={styles.logoContainer}>
        <WalletIcon width={96} height={95} />

        <View style={styles.brand}>
          <Text style={styles.brandText}>Shopping Coins</Text>
        </View>
      </View>

      <View role="form" style={styles.form}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputRoot}>
          <Feather name="user" size={24} color={theme.colors.purple[500]} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            autoComplete="email"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputRoot}>
          <Feather name="lock" size={24} color={theme.colors.purple[500]} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoComplete="password"
            keyboardType="visible-password"
          />
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoContainer: {
    alignItems: 'center',
    gap: 16,
    marginVertical: 48,
  },

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

  form: {
    flex: 1,
    alignItems: 'center',
    gap: 24,
    backgroundColor: theme.colors.neutral[100],
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
    padding: 32,
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[900],
    fontSize: theme.fontSize.xl,
  },

  inputRoot: {
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

  button: {
    backgroundColor: theme.colors.purple[500],
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: theme.borderRadius.lg,
  },

  buttonText: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.lg,
  },
})
