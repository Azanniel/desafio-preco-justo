import { Slot } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { theme } from '@/theme'

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.purple[500],
  },
})
