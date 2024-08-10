import { ActivityIndicator, View } from 'react-native'

import { theme } from '@/theme'

import { Brand } from './brand'
import { WalletIcon } from './icons/wallet-icon'

export function LoadingWithBrand() {
  return (
    <View
      testID="loading-with-brand"
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <WalletIcon width={120} height={120} />
      <Brand />

      <ActivityIndicator
        testID="activity-indicator"
        size="large"
        color={theme.colors.white}
      />
    </View>
  )
}
