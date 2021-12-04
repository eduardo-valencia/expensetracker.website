import { createTheme } from '@material-ui/core'
import {
  appContainerPaddingBreakpoints,
  containerPaddingByBreakpoint,
} from './constants/container'
import { display6 } from './styles/typography'
import { getMarginY, getPaddingX } from './utils/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Ellipses {
    primary: string
    secondary: string
    tertiary: string
    quaternary: string
  }

  interface Form {
    text: string
  }

  interface TypeText {
    tertiary: string
  }

  interface Palette {
    ellipses: Ellipses
    form: Form
  }

  interface PaletteOptions extends Pick<Palette, 'ellipses' | 'form'> {}
}

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    buttonSm: TypographyStyleOptions
  }

  interface TypographyOptions extends Pick<Typography, 'buttonSm'> {}
}

const headingFontWeight = 700

const backgroundColor: string = '#fcfcfc'

const primaryColor = '#B02A58'
const tertiaryTextColor = '#70738e'

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.3125rem',
    },
    buttonSm: {
      fontSize: '0.875rem',
      lineHeight: '1.0625rem',
      fontWeight: 500,
    },
    h6: {
      fontWeight: headingFontWeight,
      fontSize: '1rem',
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: '#FFE6DF',
      dark: primaryColor,
    },
    text: {
      secondary: '#72747f',
      tertiary: tertiaryTextColor,
    },
    background: {
      default: backgroundColor,
      paper: backgroundColor,
    },
    ellipses: {
      primary: '#2BD67B',
      secondary: '#101C3D',
      tertiary: '#416FF4',
      quaternary: '#F7E36D',
    },
    divider: '#E1E4EB',
    form: {
      text: tertiaryTextColor,
    },
    grey: {
      900: '#65676E',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        '&, &:hover': {
          boxShadow: 'none',
        },
      },
      containedPrimary: {
        padding: '0.75rem 1.875rem',
      },
      sizeLarge: {
        padding: '1.375rem 4.5625rem',
      },
    },
    MuiDialog: {
      paper: {
        padding: '1.875rem 1.5625rem',
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
})

const {
  breakpoints: { up },
  typography,
  palette: { primary, divider },
} = theme

theme.breakpoints.values.md = 768
theme.breakpoints.values.lg = 1110
theme.breakpoints.values.xl = 1600

const sm = up('sm')
const md = up('md')
const lg = up('lg')
const xl = up('xl')

const { h1, h2, h3, buttonSm } = typography

theme.typography = {
  ...typography,
  body1: {
    fontSize: '1rem',
    lineHeight: 2,
    [md]: {
      fontSize: '1.25rem',
    },
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: '1.75rem',
  },
  h1: {
    ...h1,
    letterSpacing: '-0.125rem',
    fontWeight: headingFontWeight,
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
    [md]: {
      fontSize: '4rem',
      lineHeight: '4.375rem',
    },
    [lg]: {
      fontSize: '4rem',
    },
  },
  h2: {
    ...h2,
    letterSpacing: '-0.0625rem',
    fontSize: '1.5rem',
    fontWeight: headingFontWeight,
    [md]: {
      fontSize: '3rem',
      lineHeight: '3.75rem',
    },
  },
  h3: {
    ...h3,
    lineHeight: '1.4375rem',
    fontSize: '1.125rem',
    fontWeight: headingFontWeight,
    [md]: {
      fontSize: '1.25rem',
      lineHeight: '1.625rem',
      letterSpacing: '-0.0413rem',
    },
  },
  h4: {
    fontSize: '1.25rem',
    lineHeight: '1.625rem',
    letterSpacing: '-0.0413rem',
    fontWeight: headingFontWeight,
  },
  h5: {
    lineHeight: '1.125rem',
    fontSize: '1.125rem',
    fontWeight: 700,
  },
  h6: {
    ...display6,
  },
}

theme.overrides!.MuiCssBaseline = {
  '@global': {
    html: {
      fontFamily: theme.typography.fontFamily,
    },
    body: {
      '& ul': {
        paddingLeft: 0,
        ...getMarginY(0),
      },
      '& li': {
        listStyle: 'none',
      },
    },
  },
}

const mdContainerMaxWidth: string = `calc(39.3125rem + ${appContainerPaddingBreakpoints.xl} * 2)`

theme.overrides!.MuiContainer = {
  root: {
    ...getPaddingX(containerPaddingByBreakpoint.xs),
    [sm]: {
      ...getPaddingX(containerPaddingByBreakpoint.sm),
    },
    [md]: {
      ...getPaddingX(containerPaddingByBreakpoint.md),
    },
    [lg]: {
      ...getPaddingX(containerPaddingByBreakpoint.lg),
    },
    [xl]: {
      ...getPaddingX(containerPaddingByBreakpoint.xl),
    },
  },
  maxWidthMd: {
    maxWidth: mdContainerMaxWidth,
    [md]: {
      ...getPaddingX(appContainerPaddingBreakpoints.md),
      maxWidth: mdContainerMaxWidth,
    },
    [lg]: {
      ...getPaddingX(appContainerPaddingBreakpoints.lg),
    },
    [xl]: {
      ...getPaddingX(appContainerPaddingBreakpoints.xl),
    },
  },
}

theme.overrides!.MuiButton!.containedSecondary = {
  backgroundColor: 'white',
  color: primary.main,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
}

theme.overrides!.MuiOutlinedInput = {
  root: {
    ...buttonSm,
    color: tertiaryTextColor,
    '&, & .MuiOutlinedInput-notchedOutline': {
      borderColor: divider,
    },
  },
}

theme.overrides!.MuiSelect = {
  root: {
    padding: '0.625rem 1rem',
  },
}

theme.shadows[1] = '4px 6px 10px 0px #0000000D'

export default theme
