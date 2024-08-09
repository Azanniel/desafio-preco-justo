import { router } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import { AvailableCashInWallet } from '@/components/available-cash-in-wallet'
import { Brand } from '@/components/brand'
import { BellIcon } from '@/components/icons/bell-icon'
import { ProductCard } from '@/components/product-card'
import { PromotionalCard } from '@/components/promotional-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, ButtonTitle } from '@/components/ui/button'
import { useSession } from '@/contexts/session-context'
import { useFetch } from '@/hooks/useFetch'
import { getFeaturedProducts, Product } from '@/http/get-featured-products'
import { theme } from '@/theme'

export default function Home() {
  const { user } = useSession()
  const { data: products } = useFetch<Product[]>(['featured'], async () => {
    const { products } = await getFeaturedProducts()
    return products
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Pressable onPress={() => router.push('/profile')}>
            <Avatar>
              <AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
              {user?.avatarUrl && (
                <AvatarImage source={{ uri: user.avatarUrl }} />
              )}
            </Avatar>
          </Pressable>

          <Brand size="sm" />
        </View>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Olá,</Text>
          <Text style={styles.username}>{user?.name.split(' ')[0]}</Text>
          <BellIcon style={{ marginLeft: 'auto' }} />
        </View>
      </View>

      <View style={styles.boarding}>
        <AvailableCashInWallet />

        <ScrollView
          contentContainerStyle={styles.contentBoarding}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollFeatured}
            >
              <PromotionalCard />
              <PromotionalCard />
              <PromotionalCard />
            </ScrollView>
          </View>

          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollFeatured}
            >
              {products?.map((product) => {
                return <ProductCard key={product.id} item={product} />
              })}
            </ScrollView>
          </View>

          <View style={{ alignItems: 'center', marginBottom: 72 }}>
            <Button onPress={() => router.push('/shop')}>
              <ButtonTitle>Ver todos os produtos</ButtonTitle>
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.purple[500],
  },

  header: {
    paddingTop: 16,
    paddingHorizontal: 32,
    paddingBottom: 64,
    gap: 16,
  },

  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },

  welcome: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.base,
  },

  username: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.base,
  },

  boarding: {
    position: 'relative',
    flex: 1,
    backgroundColor: theme.colors.neutral[100],

    borderTopStartRadius: theme.borderRadius.lg,
    borderTopEndRadius: theme.borderRadius.lg,
  },

  contentBoarding: {
    gap: 16,
    paddingVertical: 72,
  },

  scrollFeatured: {
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'stretch',
  },
})
