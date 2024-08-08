export const theme = {
  fontFamily: {
    regular: 'Sora_400Regular',
    semibold: 'Sora_600SemiBold',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 24,
    xxl: 28,
  },
  borderRadius: {
    sm: 8,
    base: 16,
    lg: 24,
    full: 9999,
  },
  colors: {
    white: '#fff',
    black: '#000',

    purple: {
      400: '#954EDC',
      500: '#7B22D3',
    },

    teal: {
      400: '#18E1BD',
    },

    neutral: {
      900: '#313131',
      800: '#2F2D2C',
      700: '#495057',
      600: '#868e96',
      500: '#adb5bd',
      400: '#9B9B9B',
      300: '#b9b9b9',
      200: '#8d8d8d',
      100: '#f9f9f9',
      50: '#f1f1f1',
    },
  },
} as const
