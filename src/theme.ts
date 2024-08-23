'use client'
import { Inter, Space_Grotesk } from 'next/font/google'
import { createTheme, ThemeOptions } from '@mui/material/styles'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotestk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

declare module '@mui/material/styles' {
  interface TypographyVariants {
    trination: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    trination?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    trination: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D3C2C",
    },
    secondary: {
      main: "#00FF89",
      light: "#20CF7E"
    },
    text: {
      primary: "#000000",
      secondary: "#00231C",
      disabled: "#00231c99",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    trination: {
      fontFamily: spaceGrotestk.style.fontFamily,
      fontWeight: '700',
    }
  },
} as ThemeOptions)

export default theme
