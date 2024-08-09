import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { router } from 'expo-router'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

import {
  MenuAction,
  MenuActionIcon,
  MenuActionTitle,
} from '@/components/menu-action'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, ButtonTitle } from '@/components/ui/button'
import { useSession } from '@/contexts/session-context'
import { theme } from '@/theme'

export default function Profile() {
  const { user, signOut } = useSession()

  async function handleSignOut() {
    await signOut()
    router.push('/sign-in')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ minHeight: Dimensions.get('window').height }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.header}>
          <Avatar size={96}>
            <AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
            {user?.avatarUrl && (
              <AvatarImage source={{ uri: user.avatarUrl }} />
            )}
          </Avatar>

          <Text style={styles.username}>{user?.name}</Text>

          <Button style={styles.updateProfile}>
            <ButtonTitle>Editar Perfil</ButtonTitle>
          </Button>
        </View>

        <View style={styles.content}>
          <View style={styles.actions}>
            <MenuAction>
              <MenuActionIcon>
                <FontAwesome
                  name="user-circle-o"
                  size={28}
                  color={theme.colors.purple[500]}
                />
              </MenuActionIcon>

              <MenuActionTitle>Detalhes do Perfil</MenuActionTitle>
            </MenuAction>

            <MenuAction>
              <MenuActionIcon>
                <FontAwesome6
                  name="building-columns"
                  size={24}
                  color={theme.colors.purple[500]}
                />
              </MenuActionIcon>

              <MenuActionTitle>Detalhes da Conta</MenuActionTitle>
            </MenuAction>

            <MenuAction>
              <MenuActionIcon>
                <FontAwesome6
                  name="file-pen"
                  size={24}
                  color={theme.colors.purple[500]}
                />
              </MenuActionIcon>

              <MenuActionTitle>Histórico</MenuActionTitle>
            </MenuAction>
          </View>

          <Button onPress={handleSignOut}>
            <ButtonTitle>Sair</ButtonTitle>
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.purple[500],
  },

  header: {
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },

  username: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.base,
  },

  updateProfile: {
    backgroundColor: theme.colors.neutral[900],
  },

  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.neutral[100],

    borderTopStartRadius: theme.borderRadius.lg,
    borderTopEndRadius: theme.borderRadius.lg,

    paddingHorizontal: 32,
    paddingTop: 24,
    paddingBottom: 112,
  },

  actions: {
    width: '100%',
    gap: 24,
    marginBottom: 56,
  },
})
