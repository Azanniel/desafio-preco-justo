import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { theme } from '@/theme'

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Expo Router</Text>
      <Text style={styles.subtitle}>Hello world!</Text>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
  },

  subtitle: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral[100],
  },
})
