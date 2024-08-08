import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BagIcon } from '@/components/icons/bag-icon'
import { HomeIcon } from '@/components/icons/home-icon'
import { UserIcon } from '@/components/icons/user-icon'
import { theme } from '@/theme'

export default function TabsLayout() {
  const insets = useSafeAreaInsets()
  const tabBarHeight = insets.bottom + 72

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.purple[500],
        tabBarInactiveTintColor: theme.colors.neutral[300],
        tabBarStyle: [styles.tabBar, { height: tabBarHeight }],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon fill={color} width={size} height={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="shop"
        options={{
          tabBarIcon: ({ color, size }) => (
            <BagIcon fill={color} width={size} height={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon fill={color} width={size} height={size} />
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: theme.colors.white,

    borderTopWidth: 1,
    borderStartWidth: 1,
    borderEndWidth: 1,

    borderTopColor: theme.colors.neutral[50],
    borderStartColor: theme.colors.neutral[50],
    borderEndColor: theme.colors.neutral[50],

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})
