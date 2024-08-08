import { Feather } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { Brand } from '@/components/brand'
import { Button, ButtonTitle } from '@/components/button'
import { Input, InputRoot } from '@/components/input'
import { Separator } from '@/components/separator'
import { WalletIcon } from '@/components/wallet-icon'
import { theme } from '@/theme'

export default function SignIn() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.logoContainer}>
          <WalletIcon width={96} height={95} />
          <Brand />
        </View>

        <View role="form" style={styles.form}>
          <Text style={styles.title}>Login</Text>

          <InputRoot>
            <Feather name="user" size={24} color={theme.colors.purple[500]} />
            <Input
              placeholder="E-mail"
              autoComplete="email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </InputRoot>

          <InputRoot>
            <Feather name="lock" size={24} color={theme.colors.purple[500]} />
            <Input
              placeholder="Senha"
              autoComplete="password"
              autoCapitalize="none"
              keyboardType="visible-password"
            />
          </InputRoot>

          <Button onPress={() => router.push('/')}>
            <ButtonTitle>Entrar</ButtonTitle>
          </Button>

          <View style={styles.footer}>
            <Link style={styles.link} href="#">
              Registrar-se
            </Link>

            <Separator orientation="vertical" />

            <Link style={styles.link} href="#">
              Resetar senha
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginVertical: 48,
  },

  form: {
    alignItems: 'center',
    gap: 24,
    backgroundColor: theme.colors.neutral[100],
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
    padding: 32,
    paddingBottom: 64,
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[900],
    fontSize: theme.fontSize.xl,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  link: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral[300],
    fontSize: theme.fontSize.xs,
  },
})
