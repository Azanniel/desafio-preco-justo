import { ActivityIndicator, View } from 'react-native'

import { theme } from '@/theme'

import { Brand } from './brand'
import { WalletIcon } from './icons/wallet-icon'

export function LoadingWithBrand() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <WalletIcon width={120} height={120} />
      <Brand />
      <ActivityIndicator size="large" color={theme.colors.white} />
    </View>
  )
}
