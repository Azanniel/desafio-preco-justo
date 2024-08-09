import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { Brand } from '@/components/brand'
import { WalletIcon } from '@/components/icons/wallet-icon'
import { Button, ButtonTitle } from '@/components/ui/button'
import { Input, InputRoot } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useSession } from '@/contexts/session-context'
import { theme } from '@/theme'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isLoading, signIn } = useSession()

  async function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Login', 'Preencha todos os campos.')
    }

    try {
      await signIn(email, password)
      return router.replace('/')
    } catch (error) {
      Alert.alert('Login', 'Email ou senha inválidos.')
    }
  }

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
              onChangeText={setEmail}
            />
          </InputRoot>

          <InputRoot>
            <Feather name="lock" size={24} color={theme.colors.purple[500]} />
            <Input
              placeholder="Senha"
              autoComplete="password"
              autoCapitalize="none"
              keyboardType="visible-password"
              onChangeText={setPassword}
            />
          </InputRoot>

          <Button disabled={isLoading} onPress={handleSignIn}>
            <ButtonTitle>Entrar</ButtonTitle>
            {isLoading && (
              <ActivityIndicator
                size="small"
                color={theme.colors.neutral[100]}
              />
            )}
          </Button>

          <View style={styles.footer}>
            <Text style={styles.link}>Registrar-se</Text>
            <Separator orientation="vertical" />
            <Text style={styles.link}>Resetar senha</Text>
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
