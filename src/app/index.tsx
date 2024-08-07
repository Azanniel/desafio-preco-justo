import { Redirect } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

import { theme } from '@/theme'

export default function Page() {
  const boolean = true

  if (boolean) {
    return <Redirect href="/sign-in" />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Turn it into tabs</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
  },
})
