import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { AvailableCashInWallet } from '@/components/available-cash-in-wallet'
import { Brand } from '@/components/brand'
import { BellIcon } from '@/components/icons/bell-icon'
import { ProductCard } from '@/components/product-card'
import { PromotionalCard } from '@/components/promotional-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, ButtonTitle } from '@/components/ui/button'
import { theme } from '@/theme'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Avatar>
            <AvatarFallback>LA</AvatarFallback>
            <AvatarImage source={{ uri: 'https://github.com/azanniel.png' }} />
          </Avatar>

          <Brand size="sm" />
        </View>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Olá,</Text>
          <Text style={styles.username}>Leandro</Text>
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
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </ScrollView>
          </View>

          <View style={{ alignItems: 'center', marginBottom: 72 }}>
            <Button>
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
    alignItems: 'center',
  },
})
