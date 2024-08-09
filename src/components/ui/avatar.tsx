import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native'

import { theme } from '@/theme'

const AVATAR_DEFAULT_SIZE = 44
const AVATAR_DEFAULT_RADIUS = theme.borderRadius.base

interface AvatarProps {
  size?: number
  children?: React.ReactNode
}

function Avatar({ size, ...props }: AvatarProps) {
  return (
    <View
      style={[
        styles.avatar,
        !!size && {
          width: size,
          height: size,
          borderRadius: size / (AVATAR_DEFAULT_RADIUS / 4),
        },
      ]}
    >
      <View
        style={[
          styles.outline,
          !!size && {
            borderRadius: size / (AVATAR_DEFAULT_RADIUS / 4),
            borderWidth: size / (AVATAR_DEFAULT_SIZE / 2),
          },
        ]}
      />
      {props.children}
    </View>
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
    width: AVATAR_DEFAULT_SIZE,
    height: AVATAR_DEFAULT_SIZE,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.colors.neutral[300],
    borderRadius: AVATAR_DEFAULT_RADIUS,

    overflow: 'hidden',
  },

  outline: {
    width: '100%',
    height: '100%',

    backgroundColor: 'transparent',
    borderColor: '#F8F8F866',
    borderWidth: 1,
    borderRadius: AVATAR_DEFAULT_RADIUS,

    position: 'absolute',
    zIndex: 10,
  },

  fallback: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.black,
    fontSize: theme.fontSize.base,
    textTransform: 'uppercase',
  },

  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
})
