import Feather from '@expo/vector-icons/Feather'
import { Link } from 'expo-router'
import { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { ProductCard } from '@/components/product-card'
import { useSession } from '@/contexts/session-context'
import { getProducts, Product } from '@/http/get-products'
import { registerProductSales } from '@/http/register-product-sales'
import { theme } from '@/theme'

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isFetching, setIsFetching] = useState(false)

  const [productOnPurchase, setProductOnPurchase] = useState<string | null>(
    null,
  )

  const { user, updateBalance } = useSession()

  async function fetchProducts() {
    if (isFetching || !hasNextPage) {
      return
    }

    setIsFetching(true)

    try {
      const { data, next, last } = await getProducts({ page })

      setProducts((prevState) => [...prevState, ...data])
      setPage(next || last)
      setHasNextPage(Boolean(next))
    } catch (error) {
      console.error('Failed to fetch: ', error)
    } finally {
      setIsFetching(false)
    }
  }

  async function handlePurchase(product: Product, userId: string) {
    try {
      await registerProductSales({
        userId,
        productName: product.name,
        productId: product.id,
        price: product.price,
        boughtAt: new Date(),
      })

      await updateBalance(user!.balance - product.price)
    } catch {
      return Alert.alert('Comprar', 'Ocorreu um erro ao realizar a compra')
    } finally {
      setProductOnPurchase(null)
    }
  }

  function handleConfirmPurchase(productId: string) {
    const product = products?.find((product) => product.id === productId)

    if (!product || !user) {
      return
    }

    if (user.balance < product.price) {
      return Alert.alert('Comprar', 'Saldo insuficiente para realizar a compra')
    }

    setProductOnPurchase(productId)

    Alert.alert('Comprar', `Deseja comprar o ${product.name}?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => setProductOnPurchase(null),
      },
      {
        text: 'Comprar',
        onPress: () => {
          handlePurchase(product, user.id)
        },
      },
    ])
  }

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

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.listColumn}
          numColumns={2}
          onEndReached={fetchProducts}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <ProductCard
              containerCardStyle={styles.product}
              item={item}
              isOnPurchase={productOnPurchase === item.id}
              onPress={() => handleConfirmPurchase(item.id)}
            />
          )}
          ListFooterComponent={() =>
            isFetching && <ActivityIndicator color={theme.colors.purple[500]} />
          }
        />
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
