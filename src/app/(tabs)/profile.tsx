import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

import { Button, ButtonTitle } from '@/components/button'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <Button onPress={() => router.push('/sign-in')}>
        <ButtonTitle>Sair</ButtonTitle>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
})
