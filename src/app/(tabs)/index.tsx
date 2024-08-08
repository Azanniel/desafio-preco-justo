import { StyleSheet, Text, View } from 'react-native'

import { theme } from '@/theme'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
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
  },
})
