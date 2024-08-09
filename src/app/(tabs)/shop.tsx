import Feather from '@expo/vector-icons/Feather'
import { Link } from 'expo-router'
import {
  Dimensions,
  // FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

// import { ProductCard } from '@/components/product-card'
import { theme } from '@/theme'

export default function Shop() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <Pressable style={styles.back}>
            <View style={styles.arrow}>
              <Feather
                name="arrow-left"
                size={24}
                color={theme.colors.purple[500]}
              />
            </View>

            <Text style={styles.backText}>Voltar</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.shop}>
        <Text style={styles.title}>Shop</Text>

        {/* <FlatList
          data={Array.from({ length: 9 })}
          keyExtractor={() => Math.random().toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.listColumn}
          numColumns={2}
          renderItem={() => <ProductCard containerCardStyle={styles.product} />}
        /> */}
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
    paddingHorizontal: 32,
    paddingVertical: 24,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  back: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,
  },

  arrow: {
    backgroundColor: theme.colors.white,
    padding: 4,
    borderRadius: theme.borderRadius.sm,
  },

  backText: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.white,
    fontSize: theme.fontSize.base,
  },

  shop: {
    flex: 1,
    backgroundColor: theme.colors.neutral[100],

    borderTopStartRadius: theme.borderRadius.lg,
    borderTopEndRadius: theme.borderRadius.lg,

    paddingHorizontal: 32,
    paddingVertical: 24,

    gap: 16,
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.black,
    fontSize: theme.fontSize.xl,
  },

  list: {
    gap: 16,
    paddingBottom: 72,
  },

  listColumn: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 16,
  },

  product: {
    width: Dimensions.get('screen').width / 2 - 32 - 8,
    maxWidth: Dimensions.get('screen').width / 2 - 32 - 8,
  },
})
