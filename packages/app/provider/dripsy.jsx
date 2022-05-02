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
  lineHeight: '1.3',
  fontFamily: 'heading',
  marginTop: 0,
  marginBottom: 0,
}
const textStyles = {
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '1.5',
  marginTop: 0,
  marginBottom: 0,
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
      ...textStyles,
      fontSize: 10.24,
      lineHeight: 10.25 * 1.5,
    },
    small: {
      ...textStyles,
      fontSize: 12.8,
      lineHeight: 12.8 * 1.5,
    },
    p: {
      ...textStyles,
      fontSize: 16,
      lineHeight: 16 * 1.5,
    },
    a: {
      ...textStyles,
      fontSize: 16,
      lineHeight: 16 * 1.5,
    },
    h1: {
      ...headingStyles,
      fontSize: 48.83,
      lineHeight: 48.83 * 1.3,
    },
    h2: {
      ...headingStyles,
      fontSize: 39,
      lineHeight: 39 * 1.3,
    },
    h3: {
      ...headingStyles,
      fontSize: 31.25,
      lineHeight: 31.25 * 1.3,
    },
    h4: {
      ...headingStyles,
      fontSize: 25,
      lineHeight: 25 * 1.3,
    },
    h5: {
      ...headingStyles,
      fontSize: 20,
      lineHeight: 20 * 1.3,
    },
  },
  colors: {
    $green: 'hsla(172, 100%, 14%, 1)',
    $greenDark: 'hsla(172, 100%, 10%, 1)',
    $greenLight: 'hsla(175, 13%, 32%, 1)',
    $greenLighter: 'hsla(175, 10%, 52%, 1)',
    $grey25: 'hsla(180, 3%, 25%, 1)',
    $grey45: 'hsla(180, 3%, 45%, 1)',
    $grey80: 'hsla(165, 4%, 80%, 1)',
    $grey90: 'hsla(165, 4%, 90%, 1)',
    $pink: 'hsla(348, 100%, 83%, 1)',
    $salmon: 'hsla(4, 95%, 63%, 1)',
    $yellow: 'hsla(38, 95%, 57%, 1)',
    $white: 'hsla(156, 24%, 96%, 1)',
    $black: 'hsla(0, 0%, 0%, 1)',
  },
  shadows: {
    md: {
      shadowColor: 'hsla(172, 100%, 14%, 1)',
      shadowOffset: {
        width: 0,
        height: 32,
      },
      shadowOpacity: 0.17,
      shadowRadius: 148,
      elevation: 5,
    },
    modal: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 33,
      elevation: 5,
    },
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
