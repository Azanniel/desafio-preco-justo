import { Image, StyleSheet, Text, View } from 'react-native'

import islandImg from '@/assets/island.png'
import { theme } from '@/theme'

export function PromotionalCard() {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={islandImg} alt="Acapulco" />

      <View style={styles.info}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pacote</Text>
          <Text style={styles.strong}>ACAPULCO</Text>
        </View>

        <Text style={styles.title}>Guerrero - México</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.prefix}>R$</Text>
          <Text style={styles.price}>50.000</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingVertical: 8,
    paddingHorizontal: 24,

    backgroundColor: theme.colors.purple[500],
    borderRadius: theme.borderRadius.base,
  },

  image: {
    width: 100,
    resizeMode: 'contain',
    aspectRatio: 1,
  },

  info: {
    gap: 8,
  },

  titleContainer: {
    flexDirection: 'row',
    gap: 2,
  },

  title: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.xs,
  },

  strong: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.xs,
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
  },

  prefix: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.xs,
  },

  price: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[100],
    fontSize: theme.fontSize.xxl,
  },
})
