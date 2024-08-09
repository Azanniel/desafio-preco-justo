import Feather from '@expo/vector-icons/Feather'
import { Link } from 'expo-router'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'

import { useSession } from '@/contexts/session-context'
import { theme } from '@/theme'

import { WalletIcon } from './icons/wallet-icon'
import { Separator } from './ui/separator'

const dimensions = Dimensions.get('window')

export function AvailableCashInWallet() {
  const { user } = useSession()

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <WalletIcon
          stroke={theme.colors.purple[500]}
          strokeWidth={8}
          width={24}
          height={24}
        />

        <Text style={styles.title}>
          R$ {user?.balance.toLocaleString('pt-BR')}
        </Text>
      </View>

      <View style={{ marginLeft: 'auto', marginRight: 16 }}>
        <Separator orientation="vertical" size={2} color="#3131311A" />
      </View>

      <Link href="/shop" asChild>
        <Pressable style={styles.item}>
          <Feather
            name="shopping-bag"
            size={24}
            color={theme.colors.purple[500]}
          />

          <Text style={styles.title}>Shop</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: dimensions.width / 1.2,
    height: 64,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,

    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.base,
    alignSelf: 'center',

    zIndex: 10,
    transform: [{ translateY: -32 }],

    shadowColor: '#0000001A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 6,
  },

  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[900],
    fontSize: theme.fontSize.base,
  },
})
