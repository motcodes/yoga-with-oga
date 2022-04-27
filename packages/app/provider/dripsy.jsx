import { DripsyProvider, makeTheme } from 'dripsy'
import { Platform } from 'react-native'

const fontName = 'General Sans'

const webFont = (font) =>
  Platform.select({
    web: `${font}, -apple-system, BlinkMacSystemFont, Helvetica, Inter-serif, sans-serif`,
    default: font,
  })

const headingStyles = {
  fontStyle: 'normal',
  fontWeight: 'default',
  lineHeight: '130%',
  fontFamily: 'heading',
}
const textStyles = {
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '150%',
}

// https://www.dripsy.xyz/usage/theming/create
const theme = makeTheme({
  customFonts: {
    [fontName]: {
      // I recommend setting every weight here
      bold: webFont('GeneralSans-Bold'),
      default: webFont('GeneralSans-Medium'),
      normal: webFont('GeneralSans-Regular'),
      300: webFont('GeneralSans-Light'),
      400: webFont('GeneralSans-Regular'),
      500: webFont('GeneralSans-Medium'),
      600: webFont('GeneralSans-Semibold'),
      700: webFont('GeneralSans-Bold'),
    },
  },
  fonts: {
    root: fontName, // <- this string must match the key you set in custom fonts above!
    heading: fontName,
  },
  text: {
    body: {
      fontSize: 16,
      fontWeight: 500,
    },
    extraSmall: {
      fontSize: 10.24,
      ...textStyles,
    },
    small: {
      fontSize: 12.8,
      ...textStyles,
    },
    p: {
      fontSize: 16,
      ...textStyles,
    },
    h1: {
      fontSize: 48.83,
      ...headingStyles,
    },
    h2: {
      fontSize: 39,
      ...headingStyles,
    },
    h3: {
      fontSize: 31.25,
      ...headingStyles,
    },
    h4: {
      fontSize: 25,
      ...headingStyles,
    },
    h4: {
      fontSize: 20,
      ...headingStyles,
    },
  },
  colors: {
    green: 'hsla(172, 100%, 14%, 1)',
    greenDark: 'hsla(172, 100%, 10%, 1)',
    greenLight: 'hsla(175, 13%, 32%, 1)',
    greenLighter: 'hsla(175, 10%, 52%, 1)',
    grey25: 'hsla(180, 3%, 25%, 1)',
    grey45: 'hsla(180, 3%, 45%, 1)',
    grey80: 'hsla(165, 4%, 80%, 1)',
    grey90: 'hsla(165, 4%, 90%, 1)',
    pink: 'hsla(348, 100%, 83%, 1)',
    salmon: 'hsla(4, 95%, 63%, 1)',
    yellow: 'hsla(38, 95%, 57%, 1)',
    white: 'hsla(156, 24%, 96%, 1)',
    black: 'hsla(0, 0%, 0%, 1)',
  },
})

export function Dripsy({ children }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
