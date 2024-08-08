import Svg, { Path, SvgProps } from 'react-native-svg'

export function WalletIcon(props: SvgProps) {
  return (
    <Svg
      width={96}
      height={95}
      viewBox="0 0 96 95"
      fill="none"
      strokeWidth={2}
      stroke="#fff"
      {...props}
    >
      <Path
        d="M80 47.5V31.667H24a8.043 8.043 0 01-5.657-2.32A7.875 7.875 0 0116 23.75c0-4.354 3.6-7.917 8-7.917h48v15.834"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 23.75v47.5c0 4.354 3.6 7.917 8 7.917h56V63.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M72 47.5a8.043 8.043 0 00-5.657 2.319A7.876 7.876 0 0064 55.417c0 4.354 3.6 7.916 8 7.916h16V47.5H72z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
