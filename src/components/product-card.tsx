import AntDesign from '@expo/vector-icons/AntDesign'
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'

import { theme } from '@/theme'

import { Button } from './ui/button'

interface ProductCardProps {
  containerCardStyle?: StyleProp<ViewStyle>
}

export function ProductCard(props: ProductCardProps) {
  return (
    <View style={[styles.card, props.containerCardStyle]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://loremflickr.com/200/200/laptop' }}
          alt=""
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>Notebook L24</Text>
        <Text style={styles.quantity}>40 unidades</Text>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.prefix}>R$</Text>
            <Text style={styles.price}>4.000</Text>
          </View>

          <Button variant="icon">
            <AntDesign
              name="shoppingcart"
              size={16}
              color={theme.colors.white}
            />
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    maxWidth: 160,

    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.base,

    shadowColor: '#00000016',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 6,
  },

  imageContainer: {
    borderTopStartRadius: theme.borderRadius.base,
    borderTopEndRadius: theme.borderRadius.base,
    backgroundColor: theme.colors.neutral[300],

    overflow: 'hidden',

    width: '100%',
    height: 100,
  },

  image: {
    width: '100%',
    height: 100,
  },

  info: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[800],
    fontSize: theme.fontSize.base,
  },

  quantity: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral[400],
    fontSize: theme.fontSize.xs,
  },

  footer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceContainer: {
    alignItems: 'flex-start',
  },

  prefix: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.purple[400],
    fontSize: theme.fontSize.xs,
  },

  price: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.purple[500],
    fontSize: theme.fontSize.base,
  },
})
