/* eslint-disable camelcase */
import {
  Sora_400Regular,
  Sora_600SemiBold,
  useFonts,
} from '@expo-google-fonts/sora'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SessionProvider } from '@/contexts/session-context'
import { ToastProvider } from '@/contexts/toast-context'
import { theme } from '@/theme'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="light" />

      <SessionProvider>
        <ToastProvider>
          <Slot />
        </ToastProvider>
      </SessionProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.purple[500],
  },
})
