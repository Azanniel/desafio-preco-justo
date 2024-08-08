import Entypo from '@expo/vector-icons/Entypo'
import React, { PropsWithChildren } from 'react'
import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  View,
} from 'react-native'

import { theme } from '@/theme'

interface MenuActionProps extends PropsWithChildren {}

function MenuAction({ children }: MenuActionProps) {
  return (
    <TouchableOpacity style={styles.action} activeOpacity={0.8}>
      {children}

      <Entypo
        style={{ marginLeft: 'auto' }}
        name="chevron-thin-right"
        size={16}
        color={theme.colors.neutral[700]}
      />
    </TouchableOpacity>
  )
}

interface MenuActionIconProps extends PropsWithChildren {}

function MenuActionIcon({ children }: MenuActionIconProps) {
  return <View>{children}</View>
}

interface MenuActionTitleProps extends TextProps {}

function MenuActionTitle({ style, ...props }: MenuActionTitleProps) {
  return <Text style={[styles.actionTitle, style]} {...props} />
}

export { MenuAction, MenuActionIcon, MenuActionTitle }

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,

    backgroundColor: theme.colors.white,
    paddingVertical: 26,
    paddingHorizontal: 24,

    borderRadius: theme.borderRadius.lg,

    shadowColor: '#0000001A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  actionTitle: {
    fontFamily: theme.fontFamily.semibold,
    color: theme.colors.neutral[900],
    fontSize: theme.fontSize.lg,
  },
})
