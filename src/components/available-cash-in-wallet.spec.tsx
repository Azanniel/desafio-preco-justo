import { fireEvent, render } from '@testing-library/react-native'
import { Link as ExpoLink } from 'expo-router'

import { useSession } from '@/contexts/session-context'

import { AvailableCashInWallet } from './available-cash-in-wallet'

jest.mock('@/contexts/session-context', () => ({
  useSession: jest.fn(),
}))

jest.mock('expo-router', () => ({
  Link: jest.fn(({ children }) => {
    return <>{children}</>
  }),
}))

describe('Component: AvailableCashInWallet', () => {
  const mockUseSession = useSession as jest.Mock
  const Link = ExpoLink

  beforeEach(() => {
    mockUseSession.mockReturnValue({
      user: {
        balance: 1500,
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should display the user balance correctly', () => {
    const { getByText } = render(<AvailableCashInWallet />)
    const balanceText = getByText('R$ 1.500')

    expect(balanceText).toBeTruthy()
  })

  it('should navigate to the shop page when the shop button is pressed', () => {
    const { getByText } = render(<AvailableCashInWallet />)
    const shopButton = getByText('Shop')

    fireEvent.press(shopButton)

    expect(Link).toHaveBeenCalledWith(
      expect.objectContaining({
        href: '/shop',
      }),
      expect.anything(),
    )
  })
})
