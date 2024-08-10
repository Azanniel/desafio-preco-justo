import { render } from '@testing-library/react-native'

import { theme } from '@/theme'

import { LoadingWithBrand } from './loading-with-brand'

describe('Component: Loading with brand', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(<LoadingWithBrand />)
    const sut = queryByTestId('loading-with-brand')

    expect(sut).toBeTruthy()
  })

  it('should be render indicator correctly with white color', () => {
    const { queryByTestId } = render(<LoadingWithBrand />)
    const sut = queryByTestId('activity-indicator')

    expect(sut.props.size).toBe('large')
    expect(sut.props.color).toBe(theme.colors.white)
  })
})
