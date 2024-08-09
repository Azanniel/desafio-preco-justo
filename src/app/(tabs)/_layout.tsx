import * as Notifications from 'expo-notifications'
import { Redirect, Tabs } from 'expo-router'
import { useEffect } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BagIcon } from '@/components/icons/bag-icon'
import { HomeIcon } from '@/components/icons/home-icon'
import { UserIcon } from '@/components/icons/user-icon'
import { LoadingWithBrand } from '@/components/loading-with-brand'
import { useSession } from '@/contexts/session-context'
import { theme } from '@/theme'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export default function TabsLayout() {
  const { user, isLoading } = useSession()
  const insets = useSafeAreaInsets()
  const tabBarHeight = insets.bottom + 72

  async function registerNotificationsAsync() {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
      })
    }

    const { status } = await Notifications.getPermissionsAsync()

    if (status !== 'granted') {
      await Notifications.requestPermissionsAsync()
    }
  }

  useEffect(() => {
    if (!user) {
      return
    }

    registerNotificationsAsync()
  }, [user])

  if (isLoading) {
    return <LoadingWithBrand />
  }

  if (!user) {
    return <Redirect href="/sign-in" />
  }

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
