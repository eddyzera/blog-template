import React from 'react'
import {
  ChakraProvider,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/react'
import themeCustom from '../styles/theme'

// eslint-disable-next-line react/prop-types
export default function ThemeProvider ({ children }) {
  return (
        <ChakraProvider theme={themeCustom}>
            <ColorModeProvider
            options={{
              useSystemColorMode: true
            }}
            >
                <CSSReset />
                {children}
            </ColorModeProvider>
        </ChakraProvider>
  )
}
