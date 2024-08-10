import { render } from '@testing-library/react-native'
import React from 'react'

import { theme } from '@/theme'

import { Brand } from './brand'

describe('Component: Brand', () => {
  it('should render with default size', () => {
    const { getByText } = render(<Brand />)
    const brandText = getByText('Shopping Coins')

    expect(brandText).toBeTruthy()
    expect(brandText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          textAlign: 'center',
          fontFamily: theme.fontFamily.semibold,
          color: theme.colors.neutral[100],
          fontSize: theme.fontSize.xl,
        }),
      ]),
    )
  })

  it('should render with small size', () => {
    const { getByText } = render(<Brand size="sm" />)
    const brandText = getByText('Shopping Coins')

    expect(brandText).toBeTruthy()

    expect(brandText.props.style[1]).toEqual(
      expect.objectContaining({
        fontFamily: theme.fontFamily.semibold,
        color: theme.colors.neutral[100],
        fontSize: theme.fontSize.sm,
      }),
    )
  })
})
