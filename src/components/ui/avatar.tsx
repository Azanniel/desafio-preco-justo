import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native'

import { theme } from '@/theme'

interface AvatarProps {
  size?: number
  children?: React.ReactNode
}

function Avatar({ size, ...props }: AvatarProps) {
  return (
    <View
      style={[styles.avatar, !!size && { width: size, height: size }]}
      {...props}
    />
  )
}

interface AvatarFallbackProps extends TextProps {}

function AvatarFallback(props: AvatarFallbackProps) {
  return <Text style={styles.fallback} {...props} />
}

interface AvatarImageProps extends ImageProps {}

function AvatarImage(props: AvatarImageProps) {
  return <Image style={styles.image} alt="" {...props} />
}

export { Avatar, AvatarFallback, AvatarImage }

const styles = StyleSheet.create({
  avatar: {
    position: 'relative',
    width: 44,
    height: 44,

    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,

    backgroundColor: theme.colors.neutral[300],
    borderRadius: theme.borderRadius.base,
    borderWidth: 1,
    borderColor: '#f9f9f966',

    overflow: 'hidden',
  },

  fallback: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.black,
    fontSize: theme.fontSize.base,
  },

  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
})
